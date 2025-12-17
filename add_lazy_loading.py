import os
import re

# Список HTML файлов для обработки
html_files = [
    'index.html',
    'about.html',
    'news.html',
    'news1.html',
    'news2.html',
    'news3.html',
    'news4.html',
    'news5.html',
    'news6.html',
    'docs.html',
    'docs1.html',
    'docs2.html',
    'docs3.html',
    'docs4.html',
    'leadership.html',
    'competitions.html',
    'partners.html',
    'partners2.html',
    'federations.html',
    'map.html'
]

def add_lazy_loading(file_path):
    """Добавляет loading='lazy' ко всем img тегам, которые его еще не имеют"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Паттерн для поиска img тегов без loading="lazy"
    # Ищем <img с любыми атрибутами, но без loading
    pattern = r'<img\s+(?![^>]*loading=)[^>]*>'
    
    def add_loading_attr(match):
        img_tag = match.group(0)
        # Добавляем loading="lazy" перед закрывающим >
        if img_tag.endswith('/>'):
            return img_tag[:-2] + ' loading="lazy"/>'
        else:
            return img_tag[:-1] + ' loading="lazy">'
    
    # Заменяем все img теги без loading
    new_content = re.sub(pattern, add_loading_attr, content)
    
    # Проверяем, были ли изменения
    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Обрабатываем все файлы
changed_files = []
for html_file in html_files:
    file_path = os.path.join(os.path.dirname(__file__), html_file)
    if os.path.exists(file_path):
        if add_lazy_loading(file_path):
            changed_files.append(html_file)
            print(f'✓ Обновлен: {html_file}')
        else:
            print(f'- Без изменений: {html_file}')
    else:
        print(f'✗ Файл не найден: {html_file}')

print(f'\n✓ Обработано файлов с изменениями: {len(changed_files)}')
if changed_files:
    print('Измененные файлы:', ', '.join(changed_files))
