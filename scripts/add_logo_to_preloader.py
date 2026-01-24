#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для добавления картинки footer-logo.png в preloader
"""

import re
import os

HTML_FILES = [
    'index.html', 'about.html', 'news.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'docs.html', 'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'docs5.html', 'docs6.html', 'competitions.html', 'leadership.html',
    'media.html', 'partners.html', 'partners2.html', 'map.html', 'federations.html'
]

def add_logo_to_preloader(filepath):
    """Добавляет лого в preloader"""
    if not os.path.exists(filepath):
        print(f"⚠️  Файл не найден: {filepath}")
        return False
    
    print(f"\n📄 Обработка: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверяем, уже ли добавлено
    if 'preloader-logo' in content and 'footer-logo.png' in content:
        print("  ⚠️  Лого уже добавлено")
        return False
    
    # Находим <div class="preloader-content"> и добавляем лого перед спиннером
    pattern = r'(<div class="preloader-content">)\s*(<div class="spinner">)'
    match = re.search(pattern, content)
    
    if match:
        replacement = match.group(1) + '\n            <img src="/footer-logo.png" alt="КФФМ" class="preloader-logo">\n            ' + match.group(2)
        content = content.replace(match.group(0), replacement)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("  ✅ Добавлено лого в preloader")
        return True
    else:
        print("  ⚠️  Не найден preloader-content")
        return False

def main():
    print("🚀 Добавление footer-logo.png в preloader...\n")
    
    updated = 0
    for filename in HTML_FILES:
        if add_logo_to_preloader(filename):
            updated += 1
    
    print(f"\n✅ Обновлено файлов: {updated}/{len(HTML_FILES)}")
    print("\n📊 Теперь в preloader показывается анимированное лого!")

if __name__ == '__main__':
    main()
