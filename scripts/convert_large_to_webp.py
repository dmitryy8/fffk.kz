#!/usr/bin/env python3
from PIL import Image
import os

# Файлы для конвертации в webp
files_to_convert = [
    'priz.jpg',
    'game2.jpg',
    'opencuh.jpg',
    'astana2.jpg',
    'mansp2.jpg',
    'mansp.jpg',
    'austr1.png',
    'austr2.png',
    'astana1.jpg',
    'austr4.jpg',
    'litva1.jpg',
    'erlan.jpg',
    'kalen2.jpg',
    'kalen.jpg',
    'astanaopencup1.jpg',
    'game.jpg',
    'game1.jpg',
    'game3.jpg',
]

total_saved = 0

for file in files_to_convert:
    if not os.path.exists(file):
        print(f'⚠ Файл {file} не найден, пропускаем')
        continue
    
    # Получаем имя без расширения
    name_without_ext = os.path.splitext(file)[0]
    webp_file = f'{name_without_ext}.webp'
    
    if os.path.exists(webp_file):
        print(f'- {webp_file} уже существует, пропускаем')
        continue
    
    try:
        # Открываем изображение
        img = Image.open(file)
        
        # Конвертируем в RGB если нужно
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        
        # Ресайзим если очень большое
        max_dimension = 1920
        if max(img.size) > max_dimension:
            ratio = max_dimension / max(img.size)
            new_size = tuple(int(dim * ratio) for dim in img.size)
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            print(f'  Размер уменьшен до {new_size}')
        
        # Сохраняем в webp с качеством 80
        img.save(webp_file, 'WEBP', quality=80, method=6)
        
        old_size = os.path.getsize(file)
        new_size = os.path.getsize(webp_file)
        saved = old_size - new_size
        total_saved += saved
        
        print(f'✓ {file} → {webp_file} ({old_size/1024/1024:.1f}MB → {new_size/1024/1024:.1f}MB, сохранено {saved/1024/1024:.1f}MB)')
        
    except Exception as e:
        print(f'✗ Ошибка конвертации {file}: {e}')

print(f'\nВсего сохранено: {total_saved / 1024 / 1024:.1f} МБ')
