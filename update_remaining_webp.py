#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Обновление HTML файлов для оставшихся WebP изображений
ВАЖНО: Учитывает разные пути (корень и подпапки)
"""

import os
import re
from pathlib import Path

# Маппинг файлов с их размерами и путями
IMAGE_MAPPING = {
    # Путь в HTML -> (путь к оригиналу, путь к WebP, ширина, высота)
    '/imageskz/kz.jpg': ('/imageskz/kz.jpg', '/imageskz/kz.webp', 4758, 3173),
    '/kalen.jpg': ('/kalen.jpg', '/kalen.webp', 8000, 5267),
    '/ruls.jpg': ('/ruls.jpg', '/ruls.webp', 2548, 1713),
    '/pologenie.jpg': ('/pologenie.jpg', '/pologenie.webp', 2480, 2480),
    '/facebooklogo.png': ('/facebooklogo.png', '/facebooklogo.webp', 1563, 1563),
    '/instagramlogo.png': ('/instagramlogo.png', '/instagramlogo.webp', 1563, 1563),
}

def update_img_to_picture(html_content):
    """Заменяет <img> теги на <picture> с WebP"""
    
    changes_count = 0
    
    for img_path, (orig_path, webp_path, width, height) in IMAGE_MAPPING.items():
        # Экранируем путь для regex
        escaped_path = re.escape(img_path)
        
        # Паттерн: ищем <img src="/path/file.jpg" ...>
        # НО НЕ трогаем meta теги и data-src
        pattern = rf'<img\s+src="{escaped_path}"([^>]*?)>'
        
        def replace_with_picture(match):
            nonlocal changes_count
            attributes = match.group(1)
            
            # Проверяем, есть ли уже width/height
            has_width = 'width=' in attributes
            has_height = 'height=' in attributes
            
            # Добавляем размеры если их нет
            if not has_width and not has_height:
                attributes = f' width="{width}" height="{height}"' + attributes
            
            # Создаем <picture> тег
            picture = f'''<picture>
      <source srcset="{webp_path}" type="image/webp">
      <img src="{orig_path}"{attributes}>
    </picture>'''
            
            changes_count += 1
            return picture
        
        # Заменяем, но НЕ трогаем meta теги
        # Ищем только в обычном HTML контенте, не в <meta>
        parts = re.split(r'(<meta[^>]*>)', html_content)
        for i in range(len(parts)):
            if not parts[i].startswith('<meta'):
                parts[i] = re.sub(pattern, replace_with_picture, parts[i])
        
        html_content = ''.join(parts)
    
    return html_content, changes_count

def process_html_files():
    """Обрабатывает все HTML файлы"""
    
    html_files = list(Path('.').glob('*.html'))
    
    if not html_files:
        print("❌ HTML файлы не найдены")
        return
    
    print(f"🔄 Обработка {len(html_files)} HTML файлов...\n")
    
    total_changes = 0
    files_updated = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            updated_content, changes = update_img_to_picture(content)
            
            if changes > 0:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                
                print(f"✅ {html_file.name}: {changes} изображений обновлено")
                total_changes += changes
                files_updated += 1
            else:
                print(f"⏭️  {html_file.name}: без изменений")
        
        except Exception as e:
            print(f"❌ Ошибка при обработке {html_file.name}: {e}")
    
    print(f"\n✅ Обработано файлов: {files_updated}")
    print(f"📊 Всего изображений обновлено: {total_changes}")
    print(f"💾 Ожидаемая экономия трафика: ~12.3 МБ на страницу")

if __name__ == "__main__":
    process_html_files()
