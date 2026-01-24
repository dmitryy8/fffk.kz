"""
Скрипт для обновления favicon тегов во всех HTML файлах
"""

import os
import re

def get_html_files():
    """Получает список всех HTML файлов"""
    html_files = []
    for file in os.listdir('.'):
        if file.endswith('.html'):
            html_files.append(file)
    return html_files

def update_favicon_tags(content):
    """Обновляет favicon теги в HTML"""
    
    # Правильные теги favicon
    new_favicon_tags = '''    <!-- Favicon -->
    <link rel="icon" href="/favicon-2025.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">'''
    
    # Удаляем старые favicon теги
    # Паттерн для поиска секции Favicon
    favicon_pattern = r'<!-- Favicon -->.*?(?=\n    \n    <link href="|</head>|<link href="https://cdnjs)'
    
    # Заменяем старые теги на новые
    updated_content = re.sub(
        favicon_pattern,
        new_favicon_tags + '\n    ',
        content,
        flags=re.DOTALL
    )
    
    # Если секция Favicon не найдена, добавляем перед </head>
    if '<!-- Favicon -->' not in content:
        # Ищем позицию перед </head>
        head_pattern = r'(\s*</head>)'
        updated_content = re.sub(
            head_pattern,
            '\n' + new_favicon_tags + r'\n\1',
            updated_content
        )
    
    return updated_content

def main():
    """Обновляет favicon теги во всех HTML файлах"""
    
    html_files = get_html_files()
    
    print(f"🔍 Найдено {len(html_files)} HTML файлов\n")
    
    updated_count = 0
    
    for filename in html_files:
        try:
            # Читаем файл
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Обновляем favicon теги
            updated_content = update_favicon_tags(content)
            
            # Проверяем были ли изменения
            if content != updated_content:
                # Записываем обновленный контент
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                
                print(f"✓ Обновлен {filename}")
                updated_count += 1
            else:
                print(f"○ {filename} уже актуален")
                
        except Exception as e:
            print(f"❌ Ошибка при обработке {filename}: {e}")
    
    print(f"\n✅ Обновлено файлов: {updated_count}")
    print("\n📋 Следующие шаги:")
    print("1. Проверьте что все файлы работают:")
    print("   - /favicon-2025.ico")
    print("   - /favicon-16x16.png")
    print("   - /favicon-32x32.png")
    print("   - /apple-touch-icon.png")
    print("2. Сделайте коммит и пуш изменений")
    print("3. Очистите кэш браузера (Ctrl+Shift+Del)")
    print("4. Добавьте сайт в Яндекс.Вебмастер для переиндексации")

if __name__ == '__main__':
    print("🔧 Обновление favicon тегов во всех HTML файлах...\n")
    main()
