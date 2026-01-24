#!/usr/bin/env python3
import os
import re

# Meta-теги для отключения кеша
cache_meta_tags = '''    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
'''

# Получаем все HTML файлы
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for html_file in html_files:
    print(f'Обработка {html_file}...')
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверяем, нет ли уже этих тегов
    if 'http-equiv="Cache-Control"' in content:
        print(f'  - {html_file} уже содержит meta-теги кеша, пропускаем')
        continue
    
    # Ищем тег <meta name="viewport" и добавляем после него
    pattern = r'(<meta name="viewport"[^>]*>)'
    
    if re.search(pattern, content):
        new_content = re.sub(pattern, r'\1\n' + cache_meta_tags, content)
        
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f'  ✓ Добавлены meta-теги в {html_file}')
    else:
        print(f'  - Не найден тег viewport в {html_file}')

print('\nГотово!')
