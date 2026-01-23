#!/usr/bin/env python3
"""Удаление всех переводов из HTML файлов"""
import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

print(f"Очистка {len(html_files)} HTML файлов от переводов...")

for filename in html_files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Удаляем подключение lang.js и language.js
    content = re.sub(r'\s*<script src="/lang\.js(\?v=\d+)?"[^>]*></script>', '', content)
    content = re.sub(r'\s*<script src="/language\.js(\?v=\d+)?"[^>]*></script>', '', content)
    content = re.sub(r'\s*<link[^>]*href="/language\.css[^>]*>', '', content)
    
    # Удаляем атрибуты data-translate
    content = re.sub(r'\s+data-translate="[^"]*"', '', content)
    content = re.sub(r'\s+data-translate-ru="[^"]*"', '', content)
    content = re.sub(r'\s+data-translate-kz="[^"]*"', '', content)
    content = re.sub(r'\s+data-translate-en="[^"]*"', '', content)
    content = re.sub(r'\s+data-i18n-key="[^"]*"', '', content)
    
    if content != original:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ {filename}")
    else:
        print(f"- {filename} (без изменений)")

print("\n✅ Готово! Все переводы удалены из HTML.")
