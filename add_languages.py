#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для автоматического добавления системы многоязычности на все страницы сайта
"""

import os
import re
from pathlib import Path

# Список всех HTML файлов для обработки
HTML_FILES = [
    'index.html', 'about.html', 'leadership.html', 'news.html', 'news1.html', 
    'news2.html', 'news3.html', 'news4.html', 'docs.html', 'docs1.html', 
    'docs2.html', 'docs3.html', 'docs4.html', 'media.html', 'map.html',
    'competitions.html', 'partners.html', 'partners2.html'
]

# HTML для кнопки переключения языков
LANGUAGE_BUTTON_HTML = '''                <div class="language-switcher">
                    <button class="language-btn" id="languageBtn">
                        <span id="currentLang">RU</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="language-dropdown" id="languageDropdown">
                        <div class="language-option" data-lang="ru">🇷🇺 Русский</div>
                        <div class="language-option" data-lang="kz">🇰🇿 Қазақша</div>
                        <div class="language-option" data-lang="en">🇬🇧 English</div>
                    </div>
                </div>
'''

def add_language_button_to_nav(html_content):
    """Добавляет кнопку выбора языка в навигацию"""
    # Ищем блок навигации и добавляем кнопку языка после лого
    pattern = r'(<div class="logo">.*?</div>)'
    replacement = r'\1\n' + LANGUAGE_BUTTON_HTML
    
    # Проверяем, не добавлена ли уже кнопка
    if 'language-switcher' in html_content:
        print("  Кнопка языка уже добавлена")
        return html_content
    
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    return html_content

def add_data_translate_to_nav_links(html_content):
    """Добавляет атрибуты data-translate к ссылкам навигации"""
    nav_translations = {
        r'<a href="index.html"([^>]*)>Главная</a>': r'<a href="index.html"\1 data-translate="nav_home">Главная</a>',
        r'<a href="about.html"([^>]*)>О нас</a>': r'<a href="about.html"\1 data-translate="nav_about">О нас</a>',
        r'<a href="news.html"([^>]*)>Новости</a>': r'<a href="news.html"\1 data-translate="nav_news">Новости</a>',
        r'<a href="docs.html"([^>]*)>Документы</a>': r'<a href="docs.html"\1 data-translate="nav_docs">Документы</a>',
        r'<a href="leadership.html"([^>]*)>Руководство</a>': r'<a href="leadership.html"\1 data-translate="nav_leadership">Руководство</a>',
        r'<a href="media.html"([^>]*)>Медиа</a>': r'<a href="media.html"\1 data-translate="nav_media">Медиа</a>',
        r'<a href="competitions.html"([^>]*)>Соревнования</a>': r'<a href="competitions.html"\1 data-translate="nav_competitions">Соревнования</a>',
        r'<a href="partners.html"([^>]*)>Генеральный спонсор</a>': r'<a href="partners.html"\1 data-translate="nav_sponsor">Генеральный спонсор</a>',
        r'<a href="partners2.html"([^>]*)>Партнёры</a>': r'<a href="partners2.html"\1 data-translate="nav_partners">Партнёры</a>',
        r'<a href="map.html"([^>]*)>Карта залов</a>': r'<a href="map.html"\1 data-translate="nav_map">Карта залов</a>',
    }
    
    for pattern, replacement in nav_translations.items():
        html_content = re.sub(pattern, replacement, html_content)
    
    return html_content

def add_language_css_link(html_content):
    """Добавляет ссылку на CSS файл для языков"""
    if 'language.css' in html_content:
        print("  CSS уже подключен")
        return html_content
    
    # Добавляем перед </head>
    pattern = r'(</head>)'
    replacement = r'    <link rel="stylesheet" href="/language.css">\n\1'
    html_content = re.sub(pattern, replacement, html_content)
    return html_content

def add_language_js_script(html_content):
    """Добавляет ссылку на JS файл для языков"""
    if 'language.js' in html_content:
        print("  JS уже подключен")
        return html_content
    
    # Добавляем перед </body>
    pattern = r'(</body>)'
    replacement = r'    <script src="/language.js"></script>\n\1'
    html_content = re.sub(pattern, replacement, html_content)
    return html_content

def process_html_file(filepath):
    """Обрабатывает один HTML файл"""
    print(f"\nОбработка {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Применяем все изменения
        content = add_language_button_to_nav(content)
        content = add_data_translate_to_nav_links(content)
        content = add_language_css_link(content)
        content = add_language_js_script(content)
        
        # Сохраняем изменения
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"  ✓ Файл {filepath} успешно обновлен")
        return True
        
    except Exception as e:
        print(f"  ✗ Ошибка при обработке {filepath}: {e}")
        return False

def main():
    """Главная функция"""
    print("=== Добавление системы многоязычности ===\n")
    
    base_dir = Path(__file__).parent
    success_count = 0
    
    for filename in HTML_FILES:
        filepath = base_dir / filename
        if filepath.exists():
            if process_html_file(filepath):
                success_count += 1
        else:
            print(f"\n⚠ Файл {filename} не найден")
    
    print(f"\n=== Готово! ===")
    print(f"Обработано файлов: {success_count} из {len(HTML_FILES)}")

if __name__ == '__main__':
    main()
