import os
import re

# Список всех HTML файлов
html_files = [
    'index.html', 'about.html', 'news.html', 'news1.html', 'news2.html', 
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'docs.html', 
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html', 'leadership.html', 
    'media.html', 'competitions.html', 'partners.html', 'partners2.html', 'map.html'
]

count = 0
for filename in html_files:
    filepath = os.path.join(os.getcwd(), filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        old_content = content
        
        # Заменяем обе версии строки (с одним и двумя data-translate)
        content = content.replace(
            '<li><a href="map.html" data-translate="nav_map" data-translate="nav_map">Карта залов</a></li>',
            '<li><a href="federations.html" data-translate="nav_federations">Федерации</a></li>'
        )
        content = content.replace(
            '<li><a href="map.html" data-translate="nav_map">Карта залов</a></li>',
            '<li><a href="federations.html" data-translate="nav_federations">Федерации</a></li>'
        )
        
        if old_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f'✓ Обновлен: {filename}')
        else:
            print(f'⊘ Не найдена строка для замены: {filename}')
    else:
        print(f'✗ Не найден файл: {filename}')

print(f'\nВсего обновлено файлов: {count}')
print('\nКнопка "Карта залов" заменена на "Федерации" в навигации!')
