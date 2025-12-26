#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Конвертация логотипов в WebP формат
"""

from PIL import Image
import os

def convert_to_webp(input_path, output_path, quality=85):
    """Конвертирует изображение в WebP"""
    try:
        img = Image.open(input_path)
        
        # Конвертируем в RGB если есть альфа-канал
        if img.mode in ('RGBA', 'LA', 'P'):
            # Сохраняем прозрачность для WebP
            img.save(output_path, 'WEBP', quality=quality, method=6)
        else:
            img = img.convert('RGB')
            img.save(output_path, 'WEBP', quality=quality, method=6)
        
        # Получаем размеры файлов
        original_size = os.path.getsize(input_path) / 1024
        webp_size = os.path.getsize(output_path) / 1024
        savings = ((original_size - webp_size) / original_size) * 100
        
        print(f"✅ {os.path.basename(input_path)}: {original_size:.1f} KB → {webp_size:.1f} KB (-{savings:.1f}%)")
        return img.size  # возвращаем размеры для HTML
        
    except Exception as e:
        print(f"❌ Ошибка при конвертации {input_path}: {e}")
        return None

def main():
    # Файлы логотипов для конвертации
    logos = [
        'logo.png',
        'sponsor.png',
        'logoinsite.png'
    ]
    
    print("🔄 Конвертация логотипов в WebP...\n")
    
    for logo in logos:
        if os.path.exists(logo):
            webp_name = logo.replace('.png', '.webp')
            dimensions = convert_to_webp(logo, webp_name, quality=85)
            if dimensions:
                print(f"   Размеры: {dimensions[0]}×{dimensions[1]}")
        else:
            print(f"⚠️  Файл {logo} не найден")
    
    print("\n✅ Конвертация завершена!")

if __name__ == "__main__":
    main()
