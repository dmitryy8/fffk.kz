#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Исправление битых picture тегов для логотипов
"""

import re
from pathlib import Path

def fix_broken_picture_tags(html_content):
    """Исправляет битую структуру <img src="/logo.png"<picture>..."""
    
    changes = 0
    
    # Паттерн: <img src="/logo.png"<picture>...<img src="/logo.png"...></picture>
    patterns = [
        (r'<img src="/logo\.png"<picture>\s*<source srcset="/logo\.webp" type="image/webp">\s*<img src="/logo\.png"([^>]*>)\s*</picture>',
         r'<picture>\n      <source srcset="/logo.webp" type="image/webp">\n      <img src="/logo.png"\1\n    </picture>'),
        
        (r'<img src="/sponsor\.png"<picture>\s*<source srcset="/sponsor\.webp" type="image/webp">\s*<img src="/sponsor\.png"([^>]*>)\s*</picture>',
         r'<picture>\n      <source srcset="/sponsor.webp" type="image/webp">\n      <img src="/sponsor.png"\1\n    </picture>'),
        
        (r'<img src="/logoinsite\.png"<picture>\s*<source srcset="/logoinsite\.webp" type="image/webp">\s*<img src="/logoinsite\.png"([^>]*>)\s*</picture>',
         r'<picture>\n      <source srcset="/logoinsite.webp" type="image/webp">\n      <img src="/logoinsite.png"\1\n    </picture>'),
    ]
    
    for pattern, replacement in patterns:
        original = html_content
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
        if html_content != original:
            changes += 1
    
    return html_content, changes

def process_files():
    html_files = list(Path('.').glob('*.html'))
    
    print(f"Исправление битых picture тегов...\n")
    
    total_fixed = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            fixed_content, changes = fix_broken_picture_tags(content)
            
            if changes > 0:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                
                print(f"OK {html_file.name}: исправлено {changes} тегов")
                total_fixed += changes
        
        except Exception as e:
            print(f"ERROR {html_file.name}: {e}")
    
    print(f"\nИсправлено файлов: {total_fixed}")

if __name__ == "__main__":
    process_files()
