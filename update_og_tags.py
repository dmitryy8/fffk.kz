import os
import re

# Список всех HTML файлов
html_files = [
    'about.html', 'competitions.html', 'docs.html', 
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
    
    # Заменяем logo.png на footer-logo.png в og:image
    content = re.sub(
        r'(<meta property="og:image" content="https://www\.functionalfitness\.kz/)logo\.png(")',
        r'\1footer-logo.png\2',
        content
    )
    
    # Заменяем logo.png на footer-logo.png в twitter:image
    content = re.sub(
        r'(<meta name="twitter:image" content="https://www\.functionalfitness\.kz/)logo\.png(")',
        r'\1footer-logo.png\2',
        content
    )
    
    # Добавляем og:site_name если его нет
    if 'og:site_name' not in content:
        # Ищем og:locale и добавляем после него
        content = re.sub(
            r'(<meta property="og:locale" content="ru_RU" />)',
            r'<meta property="og:site_name" content="КФФМ — Федерация функционального многоборья Казахстана" />\n    \1',
            content
        )
    else:
        # Обновляем существующий og:site_name
        content = re.sub(
            r'<meta property="og:site_name" content="[^"]*"',
            '<meta property="og:site_name" content="КФФМ — Федерация функционального многоборья Казахстана"',
            content
        )
    
    # Добавляем og:image:width и og:image:height если их нет
    if 'og:image:width' not in content:
        content = re.sub(
            r'(<meta property="og:image" content="[^"]*" />)',
            r'\1\n    <meta property="og:image:width" content="512" />\n    <meta property="og:image:height" content="512" />',
            content
        )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Обновлен {filename}")

print("\n🎉 Open Graph теги обновлены на всех страницах!")
print("   - Картинка: footer-logo.png")
print("   - og:site_name: КФФМ — Федерация функционального многоборья Казахстана")
print("   - og:image:width и og:image:height добавлены")
