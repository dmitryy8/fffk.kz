import os
import re

# Список всех HTML файлов
html_files = [
    'index.html', 'about.html', 'news.html', 'news1.html', 'news2.html', 
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'docs.html', 
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html', 'leadership.html', 
    'media.html', 'competitions.html', 'partners.html', 'partners2.html', 'map.html'
]

# Строки favicon для вставки
favicon_lines = '''    <link rel="icon" type="image/png" href="/logo.png">
    <link rel="shortcut icon" type="image/png" href="/logo.png">
    <link rel="apple-touch-icon" href="/logo.png">'''

count = 0
for filename in html_files:
    filepath = os.path.join(os.getcwd(), filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Проверяем, есть ли уже favicon
        if 'rel="icon"' in content or 'rel="shortcut icon"' in content:
            print(f'⊘ Пропущен (favicon уже есть): {filename}')
            continue
        
        # Ищем тег </head> и вставляем перед ним
        if '</head>' in content:
            new_content = content.replace('</head>', f'{favicon_lines}\n</head>')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f'✓ Обновлен: {filename}')
        else:
            print(f'✗ Не найден тег </head>: {filename}')
    else:
        print(f'✗ Не найден файл: {filename}')

print(f'\nВсего обновлено файлов: {count}')
print('\nFavicon добавлен! Теперь на всех страницах будет отображаться иконка сайта.')
