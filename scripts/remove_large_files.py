#!/usr/bin/env python3
import os
import shutil

# Список папок и файлов для удаления (не используются или есть webp версии)
folders_to_remove = [
    'images_backup_original',
    'imageschampionat',
]

# Большие файлы для удаления (оставим только если есть webp версии)
large_files = [
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
    'footer-logo.png',
]

total_freed = 0

# Удаляем папки
for folder in folders_to_remove:
    if os.path.exists(folder):
        size = sum(os.path.getsize(os.path.join(dirpath, filename))
                   for dirpath, dirnames, filenames in os.walk(folder)
                   for filename in filenames)
        shutil.rmtree(folder)
        total_freed += size
        print(f'✓ Удалена папка {folder} ({size / 1024 / 1024:.1f} МБ)')

# Удаляем большие файлы
for file in large_files:
    if os.path.exists(file):
        size = os.path.getsize(file)
        os.remove(file)
        total_freed += size
        print(f'✓ Удален файл {file} ({size / 1024 / 1024:.1f} МБ)')

print(f'\nОсвобождено: {total_freed / 1024 / 1024:.1f} МБ')
print('\nВАЖНО: Теперь нужно обновить HTML файлы, заменив ссылки на удаленные изображения!')
