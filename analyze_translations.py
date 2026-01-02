#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для анализа всех HTML файлов и поиска русских текстов без переводов
"""

import os
import re
from bs4 import BeautifulSoup
import json

def is_russian_text(text):
    """Проверяет, содержит ли текст русские буквы"""
    return bool(re.search('[а-яА-ЯёЁ]', text))

def extract_text_from_html(file_path):
    """Извлекает все текстовые элементы из HTML файла"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Удаляем скрипты и стили
    for script in soup(['script', 'style', 'head']):
        script.decompose()
    
    texts_without_translate = []
    
    # Ищем все элементы с текстом
    for element in soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b', 'strong', 'span', 'div', 'li', 'a', 'button', 'label', 'td', 'th']):
        # Пропускаем элементы с data-translate
        if element.get('data-translate'):
            continue
        
        # Получаем прямой текст элемента (не вложенных)
        text = element.get_text(strip=True)
        
        # Проверяем, есть ли русский текст
        if text and is_russian_text(text) and len(text) > 1:
            # Пропускаем очень длинные тексты (больше 500 символов) - они требуют отдельного рассмотрения
            if len(text) > 500:
                continue
            
            # Пропускаем футер и технические элементы
            if 'footer' in element.get('class', []) or element.find_parent(class_='footer'):
                continue
            
            texts_without_translate.append({
                'text': text,
                'tag': element.name,
                'file': os.path.basename(file_path)
            })
    
    return texts_without_translate

def main():
    """Основная функция"""
    html_files = [
        'index.html', 'about.html', 'news.html', 'docs.html', 'leadership.html',
        'media.html', 'competitions.html', 'partners.html', 'partners2.html',
        'federations.html', 'map.html',
        'news1.html', 'news2.html', 'news3.html', 'news4.html', 'news5.html',
        'news6.html', 'news7.html', 'news8.html', 'news9.html',
        'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html', 'docs5.html', 'docs6.html'
    ]
    
    all_texts = {}
    
    for html_file in html_files:
        if os.path.exists(html_file):
            print(f"\n📄 Анализ файла: {html_file}")
            texts = extract_text_from_html(html_file)
            
            if texts:
                # Убираем дубликаты
                unique_texts = {}
                for item in texts:
                    if item['text'] not in unique_texts:
                        unique_texts[item['text']] = item
                
                all_texts[html_file] = list(unique_texts.values())
                print(f"   Найдено русских текстов без перевода: {len(unique_texts)}")
                
                # Выводим первые 5 примеров
                for i, item in enumerate(list(unique_texts.values())[:5]):
                    print(f"   - <{item['tag']}>: {item['text'][:80]}...")
            else:
                print(f"   ✅ Все тексты имеют переводы")
    
    # Сохраняем результаты в JSON
    with open('translation_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(all_texts, f, ensure_ascii=False, indent=2)
    
    print(f"\n\n📊 ИТОГО:")
    total_texts = sum(len(texts) for texts in all_texts.values())
    print(f"Всего файлов проанализировано: {len(html_files)}")
    print(f"Файлов с непереведёнными текстами: {len(all_texts)}")
    print(f"Всего уникальных текстов без перевода: {total_texts}")
    print(f"\nРезультаты сохранены в: translation_analysis.json")

if __name__ == '__main__':
    main()
