#!/usr/bin/env python3
"""Подключение lang.js ко всем HTML файлам"""
import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

print(f"Подключение lang.js к {len(html_files)} HTML файлам...")

for filename in html_files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Проверяем, есть ли уже подключение lang.js
    if 'lang.js' not in content:
        # Ищем закрывающий тег </body> и добавляем перед ним
        if '</body>' in content:
            content = content.replace('</body>', '    <script src="/lang.js" defer></script>\n</body>')
            print(f"✓ {filename}")
        else:
            print(f"⚠ {filename} - не найден </body>")
    else:
        print(f"- {filename} (уже подключен)")
    
    if content != original:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

print("\n✅ Готово!")
