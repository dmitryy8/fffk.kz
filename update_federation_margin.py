import os
import re

# Список всех HTML файлов
html_files = [
    'index.html', 'about.html', 'competitions.html', 'docs.html', 
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'leadership.html', 'map.html', 'media.html', 'news.html',
    'news1.html', 'news2.html', 'news3.html', 'news4.html',
    'news5.html', 'news6.html', 'partners.html', 'partners2.html'
]

for filename in html_files:
    filepath = os.path.join(os.path.dirname(__file__), filename)
    
    if not os.path.exists(filepath):
        print(f"Пропускаем {filename} - файл не найден")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Изменяем минифицированный вариант .federation-hero{...margin-top:80px}
    content = re.sub(
        r'(\.federation-hero\{[^}]*margin-top:)\d+px',
        r'\g<1>90px',
        content
    )
    
    # Изменяем обычный вариант .federation-hero { margin-top: 80px; }
    content = re.sub(
        r'(\.federation-hero\s*\{[^}]*margin-top:\s*)\d+px',
        r'\g<1>90px',
        content
    )
    
    # На главной странице также изменим margin-top у блока федерации (который после приветственного блока)
    if filename == 'index.html':
        # Ищем .federation-section и устанавливаем margin-top: 90px
        content = re.sub(
            r'(\.federation-section\s*\{[^}]*)(margin-top:\s*\d+px)',
            r'\g<1>margin-top: 90px',
            content
        )
        # Если margin-top нет, добавим
        if '.federation-section' in content and 'margin-top' not in content[content.find('.federation-section'):content.find('}', content.find('.federation-section'))]:
            content = re.sub(
                r'(\.federation-section\s*\{)',
                r'\g<1> margin-top: 90px;',
                content
            )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Обновлен {filename}")

print("\n🎉 Все страницы обновлены! Отступ .federation-hero установлен на 90px")
