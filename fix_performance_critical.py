#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Критические исправления производительности:
1. Добавление preconnect для Яндекс.Карт
2. Конвертация логотипов в WebP с прозрачностью
"""

from PIL import Image
import os
import re
from pathlib import Path

def convert_logo_to_webp_with_transparency(input_path, output_path, quality=85):
    """Конвертирует PNG с прозрачностью в WebP"""
    try:
        img = Image.open(input_path)
        
        # Сохраняем с альфа-каналом
        img.save(output_path, 'WEBP', quality=quality, method=6, lossless=False)
        
        original_size = os.path.getsize(input_path) / 1024
        webp_size = os.path.getsize(output_path) / 1024
        savings = ((original_size - webp_size) / original_size) * 100
        
        print(f"✅ {os.path.basename(input_path)}: {original_size:.1f} KB → {webp_size:.1f} KB (-{savings:.1f}%)")
        return img.size
        
    except Exception as e:
        print(f"❌ Ошибка: {input_path}: {e}")
        return None

def add_preconnect_to_html(html_content):
    """Добавляет preconnect для Яндекс.Карт"""
    
    # Проверяем, нет ли уже preconnect для maps.yastatic.net
    if 'maps.yastatic.net' in html_content:
        return html_content, 0
    
    # Ищем существующие preconnect и добавляем после них
    pattern = r'(<link rel="preconnect"[^>]*>\s*)'
    
    new_preconnect = '''<link rel="preconnect" href="https://maps.yastatic.net" crossorigin>
    '''
    
    if re.search(pattern, html_content):
        # Вставляем после последнего preconnect
        parts = re.split(r'(</head>)', html_content, maxsplit=1)
        if len(parts) >= 2:
            # Находим последний preconnect
            last_preconnect_pos = parts[0].rfind('</head>')
            if last_preconnect_pos == -1:
                # Ищем перед </head>
                parts[0] = parts[0].replace('</head>', f'    {new_preconnect}</head>')
            else:
                parts[0] = parts[0] + new_preconnect
            html_content = ''.join(parts)
            return html_content, 1
    
    # Если нет preconnect, добавляем перед </head>
    html_content = html_content.replace('</head>', f'    {new_preconnect}</head>')
    return html_content, 1

def update_logos_to_webp(html_content):
    """Обновляет HTML для использования WebP логотипов"""
    
    changes = 0
    
    logos = [
        ('/logo.png', '/logo.webp', 1015, 787),
        ('/sponsor.png', '/sponsor.webp', 1386, 980),
        ('/logoinsite.png', '/logoinsite.webp', 1279, 540),
    ]
    
    for png_path, webp_path, width, height in logos:
        # Ищем <img src="/logo.png" ...> (исключая уже обёрнутые в picture)
        pattern = rf'<img\s+src="{re.escape(png_path)}"([^>]*?)>'
        
        def replace_with_picture(match):
            nonlocal changes
            attributes = match.group(1)
            
            # Проверяем, есть ли width/height
            if 'width=' not in attributes:
                attributes = f' width="{width}" height="{height}"' + attributes
            
            picture = f'''<picture>
      <source srcset="{webp_path}" type="image/webp">
      <img src="{png_path}"{attributes}>
    </picture>'''
            
            changes += 1
            return picture
        
        html_content = re.sub(pattern, replace_with_picture, html_content)
    
    return html_content, changes

def main():
    print("🚀 КРИТИЧЕСКИЕ ИСПРАВЛЕНИЯ ПРОИЗВОДИТЕЛЬНОСТИ\n")
    
    # 1. Конвертация логотипов в WebP с прозрачностью
    print("📷 Конвертация логотипов в WebP (с прозрачностью)...\n")
    
    logos_to_convert = [
        ('logo.png', 'logo.webp'),
        ('sponsor.png', 'sponsor.webp'),
        ('logoinsite.png', 'logoinsite.webp'),
    ]
    
    total_savings = 0
    
    for png_file, webp_file in logos_to_convert:
        if os.path.exists(png_file):
            dimensions = convert_logo_to_webp_with_transparency(png_file, webp_file, quality=85)
            if dimensions:
                original_size = os.path.getsize(png_file) / 1024
                webp_size = os.path.getsize(webp_file) / 1024
                total_savings += (original_size - webp_size)
        else:
            print(f"⚠️  {png_file} не найден")
    
    print(f"\n💾 Экономия на логотипах: {total_savings:.1f} KB\n")
    
    # 2. Обновление HTML файлов
    print("📝 Обновление HTML файлов...\n")
    
    html_files = list(Path('.').glob('*.html'))
    preconnect_added = 0
    logos_updated = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Добавляем preconnect
            updated_content, preconnect_changes = add_preconnect_to_html(content)
            
            # Обновляем логотипы на WebP
            updated_content, logo_changes = update_logos_to_webp(updated_content)
            
            if preconnect_changes > 0 or logo_changes > 0:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                
                changes_str = []
                if preconnect_changes:
                    changes_str.append("preconnect")
                    preconnect_added += 1
                if logo_changes:
                    changes_str.append(f"{logo_changes} лого")
                    logos_updated += logo_changes
                
                print(f"✅ {html_file.name}: {', '.join(changes_str)}")
        
        except Exception as e:
            print(f"❌ {html_file.name}: {e}")
    
    print(f"\n✅ ГОТОВО!")
    print(f"\n📊 Результат:")
    print(f"  • Preconnect для Яндекс.Карт: {preconnect_added} файлов")
    print(f"  • Логотипы обновлены: {logos_updated}")
    print(f"  • Экономия трафика: ~{total_savings:.0f} KB")
    print(f"\n⚡ Ожидаемое улучшение:")
    print(f"  • LCP: -390 мс (preconnect)")
    print(f"  • Размер страницы: -{total_savings:.0f} KB")

if __name__ == "__main__":
    main()
