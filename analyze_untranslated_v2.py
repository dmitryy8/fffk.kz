#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Улучшенный скрипт для поиска непереведенных русских текстов в HTML файлах
"""

import re
from pathlib import Path
from bs4 import BeautifulSoup

def has_translate_attrs(tag):
    """Проверяет наличие атрибутов перевода"""
    if not tag:
        return False
    
    translate_attrs = ['data-translate', 'data-translate-ru', 'data-translate-kz', 'data-translate-en']
    return any(tag.get(attr) for attr in translate_attrs)

def has_russian_text(text):
    """Проверяет наличие русского текста"""
    if not text:
        return False
    return bool(re.search(r'[а-яёА-ЯЁ]{2,}', text.strip()))

def should_ignore_tag(tag):
    """Проверяет, нужно ли игнорировать тег"""
    ignore_tags = ['script', 'style', 'noscript', 'head', 'title', 'meta', 'link']
    return tag.name in ignore_tags

def find_untranslated_in_file(file_path):
    """Находит непереведенные тексты в HTML файле"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Ошибка чтения {file_path}: {e}")
        return []
    
    soup = BeautifulSoup(content, 'html.parser')
    untranslated = []
    seen_texts = set()  # Для избежания дубликатов
    
    # Ищем все текстовые узлы
    for element in soup.find_all(string=True):
        parent = element.parent
        
        # Игнорируем служебные теги
        if should_ignore_tag(parent):
            continue
        
        text = element.strip()
        
        # Пропускаем пустые строки и строки без русского текста
        if not text or not has_russian_text(text):
            continue
        
        # Пропускаем короткие технические строки (например, console.log)
        if len(text) < 3:
            continue
        
        # Проверяем наличие атрибутов перевода у родительского элемента или выше
        current = parent
        has_translation = False
        depth = 0
        
        while current and depth < 5:  # Проверяем до 5 уровней вверх
            if has_translate_attrs(current):
                has_translation = True
                break
            current = current.parent
            depth += 1
        
        if has_translation:
            continue
        
        # Избегаем дубликатов
        text_key = text[:100]  # Берем первые 100 символов для ключа
        if text_key in seen_texts:
            continue
        seen_texts.add(text_key)
        
        # Получаем номер строки (приблизительно)
        line_num = content[:content.find(text)].count('\n') + 1 if text in content else 0
        
        untranslated.append({
            'line': line_num,
            'text': text,
            'tag': parent.name,
            'parent': parent.name
        })
    
    return untranslated

def analyze_all_files():
    """Анализирует все HTML файлы"""
    
    html_files = [
        'about.html', 'competitions.html', 'docs.html', 'docs1.html', 'docs2.html',
        'docs3.html', 'docs4.html', 'docs5.html', 'docs6.html', 'docs7.html',
        'federations.html', 'index.html', 'leadership.html', 'map.html', 'media.html',
        'news.html', 'news1.html', 'news2.html', 'news3.html', 'news4.html',
        'news5.html', 'news6.html', 'news7.html', 'news8.html', 'news9.html',
        'news10.html', 'partners.html', 'partners2.html'
    ]
    
    total_untranslated = 0
    results = {}
    
    print("=" * 100)
    print(" " * 20 + "АНАЛИЗ НЕПЕРЕВЕДЕННЫХ ТЕКСТОВ НА САЙТЕ")
    print("=" * 100)
    print()
    
    for html_file in html_files:
        file_path = Path(html_file)
        
        if not file_path.exists():
            print(f"❌ Файл не найден: {html_file}")
            continue
        
        untranslated = find_untranslated_in_file(file_path)
        
        # Фильтруем очевидные технические элементы
        filtered = []
        for item in untranslated:
            text = item['text']
            # Пропускаем:
            # - Очень короткие тексты (меньше 4 символов)
            # - Тексты только с одним русским словом
            # - Технические строки (console.log и т.д.)
            if len(text) < 4:
                continue
            if 'console.log' in text or 'function' in text.lower():
                continue
            filtered.append(item)
        
        results[html_file] = filtered
        total_untranslated += len(filtered)
        
        if len(filtered) > 0:
            print(f"\n{'─' * 100}")
            print(f"📄 ФАЙЛ: {html_file}")
            print(f"{'─' * 100}")
            print(f"❌ Найдено непереведенных элементов: {len(filtered)}")
            print()
            
            for i, item in enumerate(filtered, 1):
                # Обрезаем длинный текст для читаемости
                display_text = item['text'][:150] + '...' if len(item['text']) > 150 else item['text']
                print(f"{i}. Строка {item['line']} (тег: <{item['tag']}>):")
                print(f"   «{display_text}»")
                print()
                
                # Показываем максимум 20 примеров на файл
                if i >= 20 and len(filtered) > 20:
                    print(f"   ... и еще {len(filtered) - 20} элементов")
                    break
        else:
            print(f"\n✅ {html_file}: Все тексты переведены!")
    
    # Итоговая статистика
    print("\n" + "=" * 100)
    print(" " * 35 + "ИТОГОВАЯ СТАТИСТИКА")
    print("=" * 100)
    print(f"Всего проанализировано файлов: {len(html_files)}")
    print(f"Файлов с непереведенными текстами: {sum(1 for v in results.values() if v)}")
    print(f"\n🔴 ОБЩЕЕ КОЛИЧЕСТВО НЕПЕРЕВЕДЕННЫХ ЭЛЕМЕНТОВ: {total_untranslated}")
    print("=" * 100)
    
    # Топ-10 файлов с наибольшим количеством непереведенных текстов
    if total_untranslated > 0:
        print("\n📊 ТОП-10 ФАЙЛОВ С НАИБОЛЬШИМ КОЛИЧЕСТВОМ НЕПЕРЕВЕДЕННЫХ ТЕКСТОВ:")
        print("─" * 100)
        sorted_results = sorted(results.items(), key=lambda x: len(x[1]), reverse=True)[:10]
        for i, (filename, items) in enumerate(sorted_results, 1):
            if items:
                print(f"{i:2d}. {filename:25s} → {len(items):4d} элементов")
        print("=" * 100)
    
    return results, total_untranslated

if __name__ == '__main__':
    try:
        results, total = analyze_all_files()
        print(f"\n✅ Анализ завершен!")
        print(f"📊 Всего найдено непереведенных элементов: {total}")
    except Exception as e:
        print(f"\n❌ Ошибка при анализе: {e}")
        import traceback
        traceback.print_exc()
