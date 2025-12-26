#!/usr/bin/env python3
"""
Скрипт для обновления HTML файлов - замена <img> на <picture> с WebP
"""

import os
import re
from pathlib import Path

# Список HTML файлов
HTML_FILES = [
    'index.html', 'about.html', 'competitions.html', 'docs.html',
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'leadership.html', 'map.html', 'media.html', 'news.html',
    'news1.html', 'news2.html', 'news3.html', 'news4.html',
    'news5.html', 'news6.html', 'partners.html', 'partners2.html'
]

# Маппинг изображений: путь → (width, height)
IMAGE_DIMENSIONS = {
    '/austr1.png': (2870, 1637),
    '/litva1.jpg': (3856, 2191),
    '/imageschampionat/asia1.jpg': (4278, 2434),
    '/novygod.jpg': (4500, 2560),
    '/imageschampionat/asia39.jpg': (3024, 4032),
    '/livii.jpg': (851, 485),
    '/logo.png': (1015, 787),
    '/sponsor.png': (1386, 980),
    '/logoinsite.png': (1279, 540)
}

def convert_img_to_picture(img_tag, src_path):
    """Конвертирует <img> в <picture> с WebP"""
    
    # Извлекаем атрибуты
    alt_match = re.search(r'alt="([^"]*)"', img_tag)
    loading_match = re.search(r'loading="([^"]*)"', img_tag)
    class_match = re.search(r'class="([^"]*)"', img_tag)
    style_match = re.search(r'style="([^"]*)"', img_tag)
    
    alt = alt_match.group(1) if alt_match else ''
    loading = loading_match.group(1) if loading_match else 'lazy'
    css_class = f' class="{class_match.group(1)}"' if class_match else ''
    style = f' style="{style_match.group(1)}"' if style_match else ''
    
    # Получаем размеры
    width, height = IMAGE_DIMENSIONS.get(src_path, (800, 600))
    
    # Путь к WebP
    webp_path = src_path.rsplit('.', 1)[0] + '.webp'
    
    # Создаем picture элемент
    picture = f'''<picture>
      <source srcset="{webp_path}" type="image/webp">
      <img src="{src_path}" width="{width}" height="{height}" loading="{loading}" alt="{alt}"{css_class}{style}>
    </picture>'''
    
    return picture

def update_html_file(filepath):
    """Обновляет один HTML файл"""
    
    if not os.path.exists(filepath):
        print(f"⚠️  Пропускаем {filepath} - файл не найден")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    updates = 0
    
    # Ищем все <img> теги с конвертируемыми изображениями
    for src_path in IMAGE_DIMENSIONS.keys():
        # Паттерн для поиска img тегов
        pattern = rf'<img[^>]*src="{re.escape(src_path)}"[^>]*>'
        
        matches = re.findall(pattern, content)
        
        for img_tag in matches:
            # Пропускаем, если уже в <picture>
            if '<picture>' in content[max(0, content.find(img_tag) - 100):content.find(img_tag)]:
                continue
            
            # Конвертируем
            picture_tag = convert_img_to_picture(img_tag, src_path)
            content = content.replace(img_tag, picture_tag)
            updates += 1
    
    if updates > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ {filepath}: {updates} изображений обновлено")
        return True
    else:
        print(f"ℹ️  {filepath}: изменений не требуется")
        return False

def main():
    print("🔄 ОБНОВЛЕНИЕ HTML ФАЙЛОВ ДЛЯ WEBP")
    print("=" * 50)
    print()
    
    total_updated = 0
    
    for html_file in HTML_FILES:
        if update_html_file(html_file):
            total_updated += 1
        print()
    
    print("=" * 50)
    print(f"📊 ИТОГО: обновлено {total_updated} файлов")
    print()
    print("✅ Готово!")
    print()
    print("📝 СЛЕДУЮЩИЕ ШАГИ:")
    print("1. Протестируйте сайт в браузере")
    print("2. Проверьте, что все изображения загружаются")
    print("3. Запустите PageSpeed Insights")
    print("4. Сделайте git commit и push")

if __name__ == '__main__':
    main()
