import os
import re

# Список HTML файлов
html_files = [
    'index.html', 'about.html', 'news.html', 'news1.html', 'news2.html', 
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'docs.html', 
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html', 'leadership.html', 
    'media.html', 'competitions.html', 'partners.html', 'partners2.html', 'map.html'
]

# Шаблон для замены в навигационном меню
pattern = r'<a href="leadership\.html"([^>]*)>Руководство</a>'
replacement = r'<a href="leadership.html"\1>Наша команда</a>'

count = 0
for filename in html_files:
    filepath = os.path.join(os.getcwd(), filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Заменяем только в навигации (где есть data-translate="nav_leadership")
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f'✓ Обновлен: {filename}')
    else:
        print(f'✗ Не найден: {filename}')

print(f'\nВсего обновлено файлов: {count}')
