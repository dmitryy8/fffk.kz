#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для поиска непереведенных русских текстов в HTML файлах
"""

import re
import os
from pathlib import Path
from html.parser import HTMLParser

class HTMLTextExtractor(HTMLParser):
    """Парсер для извлечения текста из HTML"""
    
    def __init__(self):
        super().__init__()
        self.current_tag = None
        self.current_attrs = {}
        self.text_stack = []
        self.results = []
        self.line_num = 1
        self.in_script = False
        self.in_style = False
        
    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        self.current_attrs = dict(attrs)
        
        # Игнорируем script и style теги
        if tag in ['script', 'style']:
            if tag == 'script':
                self.in_script = True
            else:
                self.in_style = True
    
    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_script = False
        elif tag == 'style':
            self.in_style = False
            
    def handle_data(self, data):
        # Игнорируем содержимое script и style
        if self.in_script or self.in_style:
            return
            
        # Убираем лишние пробелы
        text = data.strip()
        if not text:
            return
        
        # Проверяем наличие кириллицы
        if not re.search(r'[а-яёА-ЯЁ]', text):
            return
            
        # Проверяем, есть ли атрибуты перевода
        has_translation = any(
            attr in self.current_attrs 
            for attr in ['data-translate', 'data-translate-ru', 'data-translate-kz', 'data-translate-en']
        )
        
        if not has_translation:
            self.results.append({
                'text': text,
                'tag': self.current_tag,
                'line': self.getpos()[0]
            })

def find_russian_text_in_html(file_path):
    """Находит русский текст без переводов в HTML файле"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
    except Exception as e:
        print(f"Ошибка чтения файла {file_path}: {e}")
        return []
    
    untranslated = []
    
    # Паттерн для поиска русского текста
    russian_pattern = r'[а-яёА-ЯЁ]+'
    
    # Паттерн для проверки наличия атрибутов перевода в родительском элементе
    translate_attr_pattern = r'data-translate(?:-ru|-kz|-en)?=["\']'
    
    for line_num, line in enumerate(lines, 1):
        # Пропускаем комментарии, script и style
        if any(x in line for x in ['<!--', '<script', '</script', '<style', '</style', '//']):
            continue
            
        # Ищем русский текст
        russian_matches = re.finditer(russian_pattern, line)
        
        for match in russian_matches:
            russian_text = match.group()
            
            # Проверяем, не находится ли текст в атрибуте
            if 'src=' in line or 'href=' in line or 'alt=' in line:
                # Проверяем позицию текста относительно атрибутов
                text_pos = match.start()
                # Ищем ближайший знак = перед текстом
                before_text = line[:text_pos]
                if '="' in before_text[-20:] or "='" in before_text[-20:]:
                    continue
            
            # Проверяем, есть ли атрибут перевода на этой строке или выше
            # Ищем в текущей строке
            if re.search(translate_attr_pattern, line):
                continue
            
            # Ищем открывающий тег в предыдущих строках (максимум 5 строк назад)
            found_translation = False
            for i in range(max(0, line_num - 5), line_num):
                if i < len(lines) and re.search(translate_attr_pattern, lines[i]):
                    found_translation = True
                    break
            
            if found_translation:
                continue
            
            # Извлекаем более полный контекст
            text_start = max(0, match.start() - 50)
            text_end = min(len(line), match.end() + 50)
            context = line[text_start:text_end].strip()
            
            # Если это просто короткий текст вроде заголовка, берем весь текст между тегами
            tag_content_match = re.search(r'>([^<]*' + re.escape(russian_text) + r'[^<]*)<', line)
            if tag_content_match:
                context = tag_content_match.group(1).strip()
            
            untranslated.append({
                'line': line_num,
                'text': context,
                'russian_word': russian_text
            })
    
    # Убираем дубликаты по тексту
    seen = set()
    unique_untranslated = []
    for item in untranslated:
        if item['text'] not in seen:
            seen.add(item['text'])
            unique_untranslated.append(item)
    
    return unique_untranslated

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
    
    print("=" * 80)
    print("АНАЛИЗ НЕПЕРЕВЕДЕННЫХ ТЕКСТОВ НА САЙТЕ")
    print("=" * 80)
    print()
    
    for html_file in html_files:
        file_path = Path(html_file)
        
        if not file_path.exists():
            print(f"❌ Файл не найден: {html_file}")
            continue
        
        untranslated = find_russian_text_in_html(file_path)
        results[html_file] = untranslated
        total_untranslated += len(untranslated)
        
        print(f"\n{'='*80}")
        print(f"📄 ФАЙЛ: {html_file}")
        print(f"{'='*80}")
        
        if untranslated:
            print(f"❌ Найдено непереведенных элементов: {len(untranslated)}")
            print()
            
            for i, item in enumerate(untranslated, 1):
                print(f"{i}. Строка {item['line']}:")
                print(f"   Текст: {item['text'][:100]}...")
                if len(item['text']) > 100:
                    print(f"   (полный текст обрезан для читаемости)")
                print()
        else:
            print("✅ Все тексты переведены!")
    
    # Итоговая статистика
    print("\n" + "=" * 80)
    print("ИТОГОВАЯ СТАТИСТИКА")
    print("=" * 80)
    print(f"Всего проанализировано файлов: {len(html_files)}")
    print(f"Файлов с непереведенными текстами: {sum(1 for v in results.values() if v)}")
    print(f"\n🔴 ОБЩЕЕ КОЛИЧЕСТВО НЕПЕРЕВЕДЕННЫХ ЭЛЕМЕНТОВ: {total_untranslated}")
    print("=" * 80)
    
    # Топ-5 файлов с наибольшим количеством непереведенных текстов
    if total_untranslated > 0:
        print("\n📊 ТОП-5 ФАЙЛОВ С НАИБОЛЬШИМ КОЛИЧЕСТВОМ НЕПЕРЕВЕДЕННЫХ ТЕКСТОВ:")
        sorted_results = sorted(results.items(), key=lambda x: len(x[1]), reverse=True)[:5]
        for i, (filename, items) in enumerate(sorted_results, 1):
            if items:
                print(f"{i}. {filename}: {len(items)} элементов")
    
    return results, total_untranslated

if __name__ == '__main__':
    results, total = analyze_all_files()
    
    # Сохраняем результаты в файл
    output_file = 'untranslated_report.txt'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("ОТЧЕТ О НЕПЕРЕВЕДЕННЫХ ТЕКСТАХ\n")
        f.write("=" * 80 + "\n\n")
        
        for filename, items in results.items():
            f.write(f"\n{'='*80}\n")
            f.write(f"ФАЙЛ: {filename}\n")
            f.write(f"{'='*80}\n")
            f.write(f"Непереведенных элементов: {len(items)}\n\n")
            
            for i, item in enumerate(items, 1):
                f.write(f"{i}. Строка {item['line']}:\n")
                f.write(f"   {item['text']}\n\n")
        
        f.write(f"\n{'='*80}\n")
        f.write(f"ИТОГО: {total} непереведенных элементов\n")
        f.write(f"{'='*80}\n")
    
    print(f"\n📝 Детальный отчет сохранен в файл: {output_file}")
