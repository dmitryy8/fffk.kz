#!/usr/bin/env python3
"""
Замена language.js на lang.js во всех HTML файлах
"""

import os
import re

print("🔄 Замена language.js на lang.js...")

# Находим все HTML файлы
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

print(f"📄 Найдено {len(html_files)} HTML файлов\n")

updated = 0
for filename in sorted(html_files):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Заменяем language.js на lang.js
        content = re.sub(
            r'<script src="/language\.js(\?v=[^"]*)?"\s*defer\s*>',
            '<script src="/lang.js" defer>',
            content
        )
        
        if content != original:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ {filename}")
            updated += 1
        else:
            print(f"⏭️  {filename} (без изменений)")
            
    except Exception as e:
        print(f"❌ Ошибка в {filename}: {e}")

print(f"\n✨ Обновлено: {updated}/{len(html_files)} файлов")
print(f"🎯 Теперь все используют: lang.js (проверенный рабочий файл)")
