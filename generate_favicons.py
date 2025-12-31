"""
Скрипт для генерации всех необходимых favicon файлов из исходного изображения
"""

from PIL import Image
import os

def generate_favicons():
    """Генерирует все необходимые favicon файлы"""
    
    # Попробуем найти исходное изображение
    source_files = ['footer-logo.png', 'logo.png', 'favicon.ico']
    source_image = None
    
    for filename in source_files:
        if os.path.exists(filename):
            try:
                source_image = Image.open(filename)
                print(f"✓ Используем {filename} как источник")
                break
            except:
                continue
    
    if not source_image:
        print("❌ Не найдено исходное изображение!")
        print("Пожалуйста, убедитесь что есть файл footer-logo.png или logo.png")
        return
    
    # Конвертируем в RGBA если нужно
    if source_image.mode != 'RGBA':
        source_image = source_image.convert('RGBA')
    
    # Размеры которые нужно сгенерировать
    sizes = {
        'favicon-16x16.png': (16, 16),
        'favicon-32x32.png': (32, 32),
        'apple-touch-icon.png': (180, 180),
        'android-chrome-192x192.png': (192, 192),
        'android-chrome-512x512.png': (512, 512),
    }
    
    # Генерируем каждый размер
    for filename, size in sizes.items():
        try:
            # Изменяем размер с высоким качеством
            resized = source_image.resize(size, Image.Resampling.LANCZOS)
            resized.save(filename, 'PNG', optimize=True)
            print(f"✓ Создан {filename}")
        except Exception as e:
            print(f"❌ Ошибка при создании {filename}: {e}")
    
    # Создаем favicon.ico (мультиразмерный)
    try:
        # Создаем размеры для .ico
        ico_sizes = [(16, 16), (32, 32), (48, 48)]
        ico_images = []
        
        for size in ico_sizes:
            resized = source_image.resize(size, Image.Resampling.LANCZOS)
            ico_images.append(resized)
        
        # Сохраняем как мультиразмерный .ico
        ico_images[0].save(
            'favicon-2025.ico',  # Новое имя для сброса кэша
            format='ICO',
            sizes=[(16, 16), (32, 32), (48, 48)],
            append_images=ico_images[1:]
        )
        print(f"✓ Создан favicon-2025.ico (мультиразмерный)")
    except Exception as e:
        print(f"❌ Ошибка при создании favicon.ico: {e}")
    
    print("\n✅ Все favicon файлы созданы!")
    print("\nСледующий шаг: запустите скрипт update_html_favicon.py для обновления HTML файлов")

if __name__ == '__main__':
    print("🎨 Генерация favicon файлов...\n")
    
    # Проверяем наличие PIL
    try:
        from PIL import Image
    except ImportError:
        print("❌ Библиотека Pillow не установлена!")
        print("Установите её командой: pip install Pillow")
        exit(1)
    
    generate_favicons()
