#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Конвертация оставшихся больших изображений в WebP
"""

from PIL import Image
import os
from pathlib import Path

def convert_to_webp(input_path, quality=82):
    """Конвертирует изображение в WebP"""
    try:
        # Определяем путь для WebP файла (в той же папке)
        path_obj = Path(input_path)
        output_path = path_obj.with_suffix('.webp')
        
        img = Image.open(input_path)
        
        # Конвертируем в RGB если нужно
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            if 'A' in img.mode:
                background.paste(img, mask=img.split()[-1])
                img = background
            else:
                img = img.convert('RGB')
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Сохраняем WebP
        img.save(str(output_path), 'WEBP', quality=quality, method=6)
        
        # Получаем размеры
        original_size = os.path.getsize(input_path) / 1024
        webp_size = os.path.getsize(output_path) / 1024
        savings = ((original_size - webp_size) / original_size) * 100
        
        print(f"✅ {input_path}")
        print(f"   {original_size:.1f} KB → {webp_size:.1f} KB (-{savings:.1f}%)")
        print(f"   Размеры: {img.size[0]}×{img.size[1]}")
        
        return {
            'path': str(output_path),
            'width': img.size[0],
            'height': img.size[1],
            'savings': original_size - webp_size
        }
        
    except Exception as e:
        print(f"❌ Ошибка при конвертации {input_path}: {e}")
        return None

def main():
    # Список файлов для конвертации с их путями
    images_to_convert = [
        'imageskz/kz.jpg',          # 9.2 MB - КРИТИЧНЫЙ
        'kalen.jpg',                 # 3.2 MB
        'ruls.jpg',                  # 629 KB
        'pologenie.jpg',             # 556 KB
        'facebooklogo.png',          # 448 KB
        'instagramlogo.png',         # 395 KB
    ]
    
    print("🔄 Конвертация оставшихся больших изображений в WebP...\n")
    
    total_savings = 0
    converted = []
    
    for image_path in images_to_convert:
        if os.path.exists(image_path):
            result = convert_to_webp(image_path, quality=82)
            if result:
                converted.append({
                    'original': image_path,
                    'webp': result['path'],
                    'width': result['width'],
                    'height': result['height']
                })
                total_savings += result['savings']
            print()
        else:
            print(f"⚠️  Файл {image_path} не найден\n")
    
    print(f"✅ Конвертация завершена!")
    print(f"📊 Общая экономия: {total_savings:.1f} KB ({total_savings/1024:.1f} MB)")
    print(f"\n📝 Конвертировано файлов: {len(converted)}")
    
    # Сохраняем информацию для обновления HTML
    if converted:
        with open('webp_conversion_info.txt', 'w', encoding='utf-8') as f:
            f.write("Конвертированные файлы:\n\n")
            for item in converted:
                f.write(f"Оригинал: {item['original']}\n")
                f.write(f"WebP: {item['webp']}\n")
                f.write(f"Размеры: {item['width']}×{item['height']}\n\n")
        print(f"ℹ️  Информация сохранена в webp_conversion_info.txt")

if __name__ == "__main__":
    main()
