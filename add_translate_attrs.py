#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для добавления data-translate атрибутов к элементам страниц
"""

import os
import re
from pathlib import Path

HTML_FILES = [
    'index.html', 'about.html', 'leadership.html', 'news.html', 'news1.html', 
    'news2.html', 'news3.html', 'news4.html', 'docs.html', 'docs1.html', 
    'docs2.html', 'docs3.html', 'docs4.html', 'media.html', 'map.html',
    'competitions.html', 'partners.html', 'partners2.html'
]

def add_translate_to_footer(html_content):
    """Добавляет data-translate к элементам футера"""
    replacements = [
        # Footer copyright
        (r'<div class="footer-bottom">(\s*©\s*2025[^<]+)</div>',
         r'<div class="footer-bottom" data-translate="footer_rights">\1</div>'),
        
        # Footer navigation links (если они без data-translate)
        (r'<a href="index.html">Главная</a>',
         r'<a href="index.html" data-translate="nav_home">Главная</a>'),
        (r'<a href="about.html">О нас</a>',
         r'<a href="about.html" data-translate="nav_about">О нас</a>'),
        (r'<a href="news.html">Новости</a>',
         r'<a href="news.html" data-translate="nav_news">Новости</a>'),
        (r'<a href="media.html">Медиа</a>',
         r'<a href="media.html" data-translate="nav_media">Медиа</a>'),
        (r'<a href="docs.html">Документы</a>',
         r'<a href="docs.html" data-translate="nav_docs">Документы</a>'),
        (r'<a href="competitions.html">Соревнования</a>',
         r'<a href="competitions.html" data-translate="nav_competitions">Соревнования</a>'),
    ]
    
    for pattern, replacement in replacements:
        html_content = re.sub(pattern, replacement, html_content)
    
    return html_content

def process_html_file(filepath):
    """Обрабатывает один HTML файл"""
    print(f"Обработка {filepath.name}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = add_translate_to_footer(content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ Обновлен")
        else:
            print(f"  - Изменений не требуется")
        
        return True
        
    except Exception as e:
        print(f"  ✗ Ошибка: {e}")
        return False

def main():
    """Главная функция"""
    print("=== Добавление data-translate атрибутов ===\n")
    
    base_dir = Path(__file__).parent
    success_count = 0
    
    for filename in HTML_FILES:
        filepath = base_dir / filename
        if filepath.exists():
            if process_html_file(filepath):
                success_count += 1
        else:
            print(f"⚠ Файл {filename} не найден")
    
    print(f"\n=== Готово! ===")
    print(f"Обработано файлов: {success_count} из {len(HTML_FILES)}")

if __name__ == '__main__':
    main()
