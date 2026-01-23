#!/usr/bin/env python3
"""Обновление версии lang.js для сброса кэша"""
import os
import re
from datetime import datetime

# Генерируем версию на основе текущего времени
version = datetime.now().strftime('%Y%m%d%H%M')

# Ищем все HTML файлы
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

print(f"Обновление версии lang.js до v={version}")
print(f"Найдено {len(html_files)} HTML файлов")

updated_count = 0

for filename in html_files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Заменяем все варианты подключения lang.js
    original = content
    content = re.sub(
        r'<script src="/lang\.js(\?v=\d+)?"',
        f'<script src="/lang.js?v={version}"',
        content
    )
    
    if content != original:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        updated_count += 1
        print(f"✓ {filename}")

print(f"\n✅ Обновлено {updated_count} файлов")
