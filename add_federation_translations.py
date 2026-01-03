#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для добавления data-translate атрибутов к заголовкам федерации
"""

import re
import os

def process_file(filepath):
    """Обрабатывает один HTML файл"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Заменяем заголовок федерации
    content = re.sub(
        r'<h1>КАЗАХСТАНСКАЯ ФЕДЕРАЦИЯ ФУНКЦИОНАЛЬНОГО МНОГОБОРЬЯ</h1>',
        r'<h1 data-translate="federation_title_ru">КАЗАХСТАНСКАЯ ФЕДЕРАЦИЯ ФУНКЦИОНАЛЬНОГО МНОГОБОРЬЯ</h1>',
        content
    )
    
    # Заменяем информацию в футере
    content = re.sub(
        r'Республиканское общественное объединение «Казахстанская Федерация функционального многоборья»',
        r'<span data-translate="footer_info">Республиканское общественное объединение «Казахстанская Федерация функционального многоборья»',
        content
    )
    
    # Закрываем span если открыли
    content = re.sub(
        r'(<span data-translate="footer_info">Республиканское общественное объединение «Казахстанская Федерация функционального многоборья») \(КФФМ',
        r'\1</span> (КФФМ',
        content
    )
    
    # Заменяем copyright
    content = re.sub(
        r'© 2025 Все права защищены — Казахстанская Федерация функционального многоборья',
        r'<span data-translate="footer_rights">© 2025 Все права защищены — Казахстанская Федерация функционального многоборья</span>',
        content
    )
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Список всех HTML файлов
html_files = [
    'index.html', 'about.html', 'news.html', 'media.html', 'map.html',
    'partners.html', 'partners2.html', 'competitions.html', 'leadership.html',
    'federations.html', 'docs.html', 'docs1.html', 'docs2.html', 'docs3.html',
    'docs4.html', 'docs5.html', 'docs6.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'news8.html', 'news9.html'
]

updated = 0
for filename in html_files:
    if os.path.exists(filename):
        if process_file(filename):
            print(f'✅ {filename}')
            updated += 1
    else:
        print(f'❌ {filename} не найден')

print(f'\n✅ Обновлено файлов: {updated}')
