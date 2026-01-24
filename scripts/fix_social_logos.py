#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Возврат PNG для логотипов соцсетей (WebP создал белый фон вместо прозрачности)
"""

import os
import re
from pathlib import Path

def revert_social_logos_to_png(html_content):
    """Возвращает <picture> теги для соцлоготипов обратно на <img>"""
    
    changes_count = 0
    
    # Паттерн для Facebook и Instagram логотипов
    social_logos = [
        ('/facebooklogo.png', '/facebooklogo.webp', 1563, 1563),
        ('/instagramlogo.png', '/instagramlogo.webp', 1563, 1563),
    ]
    
    for png_path, webp_path, width, height in social_logos:
        # Паттерн: <picture> с этими логотипами
        pattern = rf'<picture>\s*<source srcset="{re.escape(webp_path)}" type="image/webp">\s*<img src="{re.escape(png_path)}"([^>]*?)>\s*</picture>'
        
        # Замена обратно на простой <img>
        replacement = rf'<img src="{png_path}"\1>'
        
        original_len = len(html_content)
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
        
        if len(html_content) != original_len:
            changes_count += 1
    
    return html_content, changes_count

def process_html_files():
    """Обрабатывает все HTML файлы"""
    
    html_files = list(Path('.').glob('*.html'))
    
    print(f"🔄 Возврат PNG для логотипов соцсетей (WebP с белым фоном)...\n")
    
    total_changes = 0
    files_updated = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            updated_content, changes = revert_social_logos_to_png(content)
            
            if changes > 0:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                
                print(f"✅ {html_file.name}: {changes} логотипов возвращено на PNG")
                total_changes += changes
                files_updated += 1
            else:
                print(f"⏭️  {html_file.name}: без изменений")
        
        except Exception as e:
            print(f"❌ Ошибка: {html_file.name}: {e}")
    
    print(f"\n✅ Обработано файлов: {files_updated}")
    print(f"📊 Всего логотипов исправлено: {total_changes}")
    print(f"ℹ️  PNG логотипы сохраняют прозрачность (WebP создавал белый фон)")

if __name__ == "__main__":
    process_html_files()
