#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для исправления блокировки навигации preloader'ом
Добавляет pointer-events: none, чтобы можно было кликать по ссылкам
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

def fix_preloader_blocking(filepath):
    """Добавляет pointer-events: none к preloader"""
    if not os.path.exists(filepath):
        print(f"⚠️  Файл не найден: {filepath}")
        return False
    
    print(f"\n📄 Обработка: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверяем, уже ли исправлено
    if re.search(r'\.preloader\s*\{[^}]*pointer-events:\s*none', content):
        print("  ⚠️  pointer-events уже добавлен")
        return False
    
    # Находим .preloader { и добавляем pointer-events: none
    pattern = r'(\.preloader\s*\{[^}]*z-index:\s*9999;)'
    match = re.search(pattern, content)
    
    if match:
        replacement = match.group(1) + '\n            pointer-events: none;'
        content = content.replace(match.group(1), replacement)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("  ✅ Добавлен pointer-events: none к preloader")
        return True
    else:
        print("  ⚠️  Не найден .preloader")
        return False

def main():
    print("🚀 Исправление блокировки навигации preloader'ом...\n")
    
    updated = 0
    for filename in HTML_FILES:
        if fix_preloader_blocking(filename):
            updated += 1
    
    print(f"\n✅ Обновлено файлов: {updated}/{len(HTML_FILES)}")
    print("\n📊 Теперь можно переходить на другие страницы даже во время загрузки!")

if __name__ == '__main__':
    main()
