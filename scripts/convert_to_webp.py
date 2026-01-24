#!/usr/bin/env python3
"""
Скрипт для конвертации изображений в WebP формат
Создает резервные копии и обновляет HTML файлы
"""

import os
import shutil
from PIL import Image
from pathlib import Path

# Список файлов для конвертации (самые тяжелые)
IMAGES_TO_CONVERT = [
    'austr1.png',
    'litva1.jpg', 
    'novygod.jpg',
    'imageschampionat/asia1.jpg',
    'imageschampionat/asia39.jpg',
    'livii.jpg'
]

# Качество WebP (80 = хороший баланс размер/качество)
WEBP_QUALITY = 82

def create_backup_dir():
    """Создает папку для резервных копий"""
    backup_dir = Path('images_backup_original')
    if not backup_dir.exists():
        backup_dir.mkdir()
        print(f"✅ Создана папка для бэкапов: {backup_dir}")
    return backup_dir

def convert_image_to_webp(image_path):
    """Конвертирует изображение в WebP"""
    try:
        # Открываем изображение
        img = Image.open(image_path)
        
        # Конвертируем в RGB если нужно
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Путь для WebP
        webp_path = image_path.with_suffix('.webp')
        
        # Сохраняем как WebP
        img.save(webp_path, 'WEBP', quality=WEBP_QUALITY, method=6)
        
        # Получаем размеры файлов
        original_size = os.path.getsize(image_path) / 1024  # KB
        webp_size = os.path.getsize(webp_path) / 1024  # KB
        savings = ((original_size - webp_size) / original_size) * 100
        
        print(f"✅ {image_path.name}")
        print(f"   Было: {original_size:.1f} KB → Стало: {webp_size:.1f} KB")
        print(f"   Экономия: {savings:.1f}% ({original_size - webp_size:.1f} KB)")
        
        return webp_path, img.size
        
    except Exception as e:
        print(f"❌ Ошибка при конвертации {image_path}: {e}")
        return None, None

def main():
    print("🚀 КОНВЕРТАЦИЯ ИЗОБРАЖЕНИЙ В WEBP")
    print("=" * 50)
    
    # Создаем папку для бэкапов
    backup_dir = create_backup_dir()
    
    total_original = 0
    total_webp = 0
    converted_files = []
    
    for img_file in IMAGES_TO_CONVERT:
        img_path = Path(img_file)
        
        if not img_path.exists():
            print(f"⚠️  Пропускаем {img_file} - файл не найден")
            continue
        
        # Создаем бэкап
        backup_path = backup_dir / img_path.name
        if not backup_path.exists():
            shutil.copy2(img_path, backup_path)
            print(f"📦 Бэкап создан: {backup_path}")
        
        # Конвертируем
        webp_path, dimensions = convert_image_to_webp(img_path)
        
        if webp_path and dimensions:
            original_size = os.path.getsize(img_path) / 1024
            webp_size = os.path.getsize(webp_path) / 1024
            
            total_original += original_size
            total_webp += webp_size
            
            converted_files.append({
                'original': img_path.as_posix(),
                'webp': webp_path.as_posix(),
                'width': dimensions[0],
                'height': dimensions[1]
            })
        
        print()
    
    # Итоговая статистика
    print("=" * 50)
    print(f"📊 ИТОГОВАЯ СТАТИСТИКА:")
    print(f"   Конвертировано файлов: {len(converted_files)}")
    print(f"   Общий размер до: {total_original:.1f} KB ({total_original/1024:.1f} MB)")
    print(f"   Общий размер после: {total_webp:.1f} KB ({total_webp/1024:.1f} MB)")
    print(f"   Общая экономия: {((total_original - total_webp) / total_original * 100):.1f}% ({(total_original - total_webp)/1024:.1f} MB)")
    print()
    print("✅ Конвертация завершена!")
    print()
    print("📝 СЛЕДУЮЩИЕ ШАГИ:")
    print("1. Проверьте качество WebP файлов")
    print("2. Обновите HTML файлы (используйте update_html_for_webp.py)")
    print("3. Протестируйте сайт")
    print("4. Если всё ОК - удалите оригиналы (они в папке images_backup_original)")
    print()
    print(f"🔍 Размеры изображений для HTML:")
    for file in converted_files:
        print(f"   {file['original']} → width=\"{file['width']}\" height=\"{file['height']}\"")

if __name__ == '__main__':
    # Проверка наличия Pillow
    try:
        from PIL import Image
    except ImportError:
        print("❌ Ошибка: необходима библиотека Pillow")
        print("Установите: pip install Pillow")
        exit(1)
    
    main()
