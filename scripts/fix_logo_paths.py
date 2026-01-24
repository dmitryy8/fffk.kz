#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Исправление путей к логотипам - убираем <picture> теги для несуществующих WebP
"""

import os
import re
from pathlib import Path

def fix_logo_picture_tags(html_content):
    """Заменяет <picture> теги для логотипов на простые <img> теги"""
    
    # Паттерны для замены (логотипы, для которых не созданы WebP)
    logos_to_fix = [
        ('logoinsite', 'logoinsite.png', '1279', '540'),
        ('logo', 'logo.png', '1015', '787'),
        ('sponsor', 'sponsor.png', '1386', '980')
    ]
    
    for logo_base, logo_file, width, height in logos_to_fix:
        # Паттерн для поиска <picture> блоков с этим логотипом
        pattern = rf'<picture>\s*<source srcset="/{logo_base}\.webp" type="image/webp">\s*<img src="/{logo_file}"([^>]*?)>\s*</picture>'
        
        # Замена на простой <img> тег
        replacement = rf'<img src="/{logo_file}"\1>'
        
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def process_html_files():
    """Обрабатывает все HTML файлы в текущей директории"""
    
    html_files = list(Path('.').glob('*.html'))
    
    if not html_files:
        print("❌ HTML файлы не найдены")
        return
    
    print(f"🔄 Найдено {len(html_files)} HTML файлов для обработки\n")
    
    fixed_count = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            fixed_content = fix_logo_picture_tags(content)
            
            if fixed_content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                
                # Подсчёт замен
                changes = len(re.findall(r'<picture>.*?logoinsite\.webp', original_content, re.DOTALL))
                changes += len(re.findall(r'<picture>.*?logo\.webp', original_content, re.DOTALL))
                changes += len(re.findall(r'<picture>.*?sponsor\.webp', original_content, re.DOTALL))
                
                print(f"✅ {html_file.name}: {changes} логотипов исправлено")
                fixed_count += 1
            else:
                print(f"⏭️  {html_file.name}: без изменений")
        
        except Exception as e:
            print(f"❌ Ошибка при обработке {html_file.name}: {e}")
    
    print(f"\n✅ Обработано файлов: {fixed_count}")
    print("📝 Логотипы теперь используют PNG напрямую (без WebP)")

if __name__ == "__main__":
    process_html_files()
