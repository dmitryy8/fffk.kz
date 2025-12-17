import os
import re

# Список всех HTML файлов в корне
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# Словарь замен: старая ссылка -> новая ссылка
replacements = {
    'href="index.html"': 'href="/"',
    'href="about.html"': 'href="/about"',
    'href="news.html"': 'href="/news"',
    'href="news1.html"': 'href="/news1"',
    'href="news2.html"': 'href="/news2"',
    'href="news3.html"': 'href="/news3"',
    'href="news4.html"': 'href="/news4"',
    'href="news5.html"': 'href="/news5"',
    'href="news6.html"': 'href="/news6"',
    'href="news7.html"': 'href="/news7"',
    'href="docs.html"': 'href="/docs"',
    'href="docs1.html"': 'href="/docs1"',
    'href="docs2.html"': 'href="/docs2"',
    'href="docs3.html"': 'href="/docs3"',
    'href="docs4.html"': 'href="/docs4"',
    'href="leadership.html"': 'href="/leadership"',
    'href="media.html"': 'href="/media"',
    'href="competitions.html"': 'href="/competitions"',
    'href="partners.html"': 'href="/partners"',
    'href="partners2.html"': 'href="/partners2"',
    'href="federations.html"': 'href="/federations"',
    'href="map.html"': 'href="/map"',
}

for html_file in html_files:
    print(f"Обработка {html_file}...")
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Применяем все замены
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ {html_file} обновлен")

print("\n✅ Все ссылки обновлены!")
