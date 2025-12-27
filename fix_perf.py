#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Критические исправления производительности
"""

import re
from pathlib import Path

def add_maps_preconnect(html_content):
    """Добавляет preconnect для Яндекс.Карт ПЕРЕД существующими"""
    
    # Проверяем, нет ли уже
    if 'maps.yastatic.net' in html_content:
        return html_content, 0
    
    # Ищем первый preconnect и вставляем перед ним
    pattern = r'(<link rel="preconnect" href="https://cdnjs\.cloudflare\.com"[^>]*>)'
    new_preconnect = '<link rel="preconnect" href="https://maps.yastatic.net" crossorigin>\n    '
    
    if re.search(pattern, html_content):
        html_content = re.sub(pattern, new_preconnect + r'\1', html_content, count=1)
        return html_content, 1
    
    return html_content, 0

def update_logos_to_webp(html_content):
    """Заменяет logo.png/sponsor.png/logoinsite.png на picture с WebP"""
    
    changes = 0
    
    # Логотипы для замены
    logos = [
        ('/logo.png', '/logo.webp', '1015', '787'),
        ('/sponsor.png', '/sponsor.webp', '1386', '980'),
        ('/logoinsite.png', '/logoinsite.webp', '1279', '540'),
    ]
    
    for png_path, webp_path, width, height in logos:
        # Простой паттерн без look-behind
        pattern = f'<img src="{png_path}"'
        
        # Ищем все вхождения
        if pattern in html_content:
            # Заменяем только те, которые ещё не в <picture>
            parts = html_content.split(pattern)
            
            for i in range(1, len(parts)):
                # Проверяем, не предшествует ли <source srcset
                prev_text = parts[i-1][-100:] if len(parts[i-1]) > 100 else parts[i-1]
                
                if '<source srcset=' not in prev_text:
                    # Находим конец тега img
                    match = re.match(r'([^>]*>)', parts[i])
                    if match:
                        img_attrs = match.group(1)
                        
                        # Создаём picture тег
                        new_html = f'''<picture>
      <source srcset="{webp_path}" type="image/webp">
      <img src="{png_path}"{img_attrs}'''
                        
                        # Добавляем </picture> после </img>
                        rest = parts[i][len(img_attrs):]
                        parts[i] = new_html + '\n    </picture>' + rest
                        changes += 1
            
            html_content = pattern.join(parts)
    
    return html_content, changes

def process_files():
    html_files = list(Path('.').glob('*.html'))
    
    print(f"Обработка {len(html_files)} HTML файлов...\n")
    
    preconnect_count = 0
    logo_count = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Добавляем preconnect
            content, p_changes = add_maps_preconnect(content)
            preconnect_count += p_changes
            
            # Обновляем логотипы
            content, l_changes = update_logos_to_webp(content)
            logo_count += l_changes
            
            if p_changes > 0 or l_changes > 0:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"OK {html_file.name}: preconnect={p_changes}, logos={l_changes}")
        
        except Exception as e:
            print(f"ERROR {html_file.name}: {e}")
    
    print(f"\nPreconnect добавлен: {preconnect_count} файлов")
    print(f"Логотипы обновлены: {logo_count}")
    print(f"\nОжидаемое улучшение LCP: -390 мс")

if __name__ == "__main__":
    process_files()
