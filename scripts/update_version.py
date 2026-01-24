#!/usr/bin/env python3
"""Добавление версии к lang.js для сброса кэша"""
import os
import re
from datetime import datetime

version = datetime.now().strftime('%Y%m%d%H%M%S')

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

print(f"Обновление версии lang.js до v={version}")

for filename in html_files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    content = re.sub(
        r'<script src="/lang\.js(\?v=\d+)?"',
        f'<script src="/lang.js?v={version}"',
        content
    )
    
    if content != original:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ {filename}")

print(f"\n✅ Версия обновлена до {version}")
