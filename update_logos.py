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
    'map.html',
    'media.html'
]

def update_logos(file_path):
    """Заменяет footer-logo.png на logoinsite.png в навигации"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Ищем footer-logo.png в навигации (не в футере)
    # Паттерн: ищем в блоке с классом logo или nav-container
    pattern = r'(<div class="logo">[\s\S]*?<img src=")/footer-logo\.png("[\s\S]*?</div>)'
    replacement = r'\1/logoinsite.png\2'
    
    new_content = re.sub(pattern, replacement, content)
    
    # Проверяем, были ли изменения
    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def add_favicon_meta(file_path):
    """Добавляет meta теги для favicon если их еще нет"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверяем, есть ли уже footer-logo.png как favicon
    if 'rel="icon"' in content and 'footer-logo.png' in content:
        return False
    
    # Ищем существующие favicon теги с znachok.png
    if 'znachok.png' in content:
        # Заменяем znachok.png на footer-logo.png
        new_content = content.replace('/znachok.png', '/footer-logo.png')
        
        if content != new_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    
    return False

# Обрабатываем все файлы
changed_files_logos = []
changed_files_favicon = []

for html_file in html_files:
    file_path = os.path.join(os.path.dirname(__file__), html_file)
    if os.path.exists(file_path):
        if update_logos(file_path):
            changed_files_logos.append(html_file)
            print(f'✓ Логотип обновлен: {html_file}')
        
        if add_favicon_meta(file_path):
            changed_files_favicon.append(html_file)
            print(f'✓ Favicon обновлен: {html_file}')
    else:
        print(f'✗ Файл не найден: {html_file}')

print(f'\n✓ Файлов с обновленным логотипом: {len(changed_files_logos)}')
print(f'✓ Файлов с обновленным favicon: {len(changed_files_favicon)}')
