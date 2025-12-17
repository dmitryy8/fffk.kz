import os
import re

html_files = [
    'index.html', 'about.html', 'news.html', 'news1.html', 'news2.html', 
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'docs.html',
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html', 'leadership.html',
    'competitions.html', 'partners.html', 'partners2.html', 'federations.html',
    'map.html', 'media.html'
]

changed_files = []
for html_file in html_files:
    if os.path.exists(html_file):
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = content.replace('href="/znachok.png"', 'href="/footer-logo.png"')
        if content != new_content:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            changed_files.append(html_file)
            print(f'✓ {html_file}')

print(f'\n✓ Обновлено файлов: {len(changed_files)}')
