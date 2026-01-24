#!/usr/bin/env python3
import os
import re

# Список файлов для замены в HTML
replacements = {
    'priz.jpg': 'priz.webp',
    'game2.jpg': 'game2.webp',
    'opencuh.jpg': 'opencuh.webp',
    'astana2.jpg': 'astana2.webp',
    'mansp2.jpg': 'mansp2.webp',
    'mansp.jpg': 'mansp.webp',
    'austr2.png': 'austr2.webp',
    'astana1.jpg': 'astana1.webp',
    'austr4.jpg': 'austr4.webp',
    'erlan.jpg': 'erlan.webp',
    'kalen2.jpg': 'kalen2.webp',
    'astanaopencup1.jpg': 'astanaopencup1.webp',
    'game.jpg': 'game.webp',
    'game1.jpg': 'game1.webp',
    'game3.jpg': 'game3.webp',
}

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for html_file in html_files:
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes = 0
    
    for old_img, new_img in replacements.items():
        if old_img in content:
            content = content.replace(old_img, new_img)
            changes += 1
    
    if changes > 0:
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'✓ {html_file}: заменено {changes} ссылок на изображения')

print('\nГотово!')
