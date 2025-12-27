#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Смягчение анимации появления контента при скролле
"""

import re
from pathlib import Path

def fix_scroll_animation(html_content):
    """Улучшает параметры анимации появления"""
    
    changes = 0
    
    # 1. Изменяем observerOptions - контент появляется раньше (за 200px до viewport)
    old_observer = r'''const observerOptions = \{
                threshold: 0\.1,
                rootMargin: '0px 0px -50px 0px'
            \};'''
    
    new_observer = '''const observerOptions = {
                threshold: 0.05,
                rootMargin: '0px 0px 200px 0px'
            };'''
    
    if re.search(old_observer, html_content):
        html_content = re.sub(old_observer, new_observer, html_content)
        changes += 1
    
    # 2. Ускоряем анимацию (0.6s → 0.4s) и уменьшаем сдвиг (30px → 20px)
    old_fade_css = r'''\.fade-in \{
            opacity: 0;
            transform: translateY\(30px\);
            transition: all 0\.6s ease;
        \}'''
    
    new_fade_css = '''.fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
        }'''
    
    if re.search(old_fade_css, html_content):
        html_content = re.sub(old_fade_css, new_fade_css, html_content)
        changes += 1
    
    return html_content, changes

def process_html_files():
    """Обрабатывает все HTML файлы"""
    
    html_files = list(Path('.').glob('*.html'))
    
    print(f"🔄 Улучшение анимации скролла на {len(html_files)} страницах...\n")
    
    total_changes = 0
    files_updated = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            updated_content, changes = fix_scroll_animation(content)
            
            if changes > 0:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                
                print(f"✅ {html_file.name}: обновлено")
                total_changes += changes
                files_updated += 1
            else:
                print(f"⏭️  {html_file.name}: без изменений")
        
        except Exception as e:
            print(f"❌ Ошибка: {html_file.name}: {e}")
    
    print(f"\n✅ Обработано файлов: {files_updated}")
    print(f"\n📝 Изменения:")
    print(f"  • Контент появляется за 200px ДО входа в viewport (было: после -50px)")
    print(f"  • Анимация быстрее: 0.4s (было: 0.6s)")
    print(f"  • Меньше сдвиг: 20px (было: 30px)")
    print(f"  • Порог срабатывания: 5% (было: 10%)")

if __name__ == "__main__":
    process_html_files()
