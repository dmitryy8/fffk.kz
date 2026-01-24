#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import os

HTML_FILES = [
    'about.html', 'leadership.html', 'news.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'news8.html', 'news9.html', 'partners.html', 'partners2.html', 'docs.html',
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html', 'media.html',
    'competitions.html', 'federations.html', 'map.html'
]

for filename in HTML_FILES:
    if not os.path.exists(filename):
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Удаляем старые favicon теги
    content = re.sub(r'\s*<link rel="icon" type="image/png" href="/footer-logo\.png">\s*<link rel="shortcut icon" type="image/png" href="/footer-logo\.png">\s*<link rel="apple-touch-icon" href="/footer-logo\.png">', '', content)
    
    # Новые favicon теги
    new_favicon = '\n    \n    <!-- Favicon -->\n    <link rel="icon" href="/favicon.ico" sizes="any">\n    <link rel="icon" type="image/png" sizes="32x32" href="/footer-logo.png">\n    <link rel="apple-touch-icon" href="/footer-logo.png">\n    \n    <link href="https://cdnjs'
    
    # Вставляем после Twitter Card
    content = re.sub(r'(<meta name="twitter:image" content="[^"]*" />)\s*<link href="https://cdnjs', r'\1' + new_favicon, content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ {filename}")

print("Готово!")
