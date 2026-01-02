#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для добавления стилей preloader во все HTML файлы
"""

import re
import os

# Список HTML файлов для обработки (кроме index.html - уже обработан)
HTML_FILES = [
    'about.html', 'news.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'docs.html', 'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'docs5.html', 'docs6.html', 'competitions.html', 'leadership.html',
    'media.html', 'partners.html', 'partners2.html', 'map.html'
]

# Стили для preloader
PRELOADER_STYLES = """
        /* Preloader */
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0b63b7 0%, #2b78b9 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .preloader.hidden {
            opacity: 0;
            visibility: hidden;
        }

        .preloader-content {
            text-align: center;
            color: white;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .preloader-text {
            font-size: 18px;
            font-weight: 500;
            opacity: 0.9;
        }"""

def add_preloader_styles(filepath):
    """Добавляет стили preloader в файл"""
    if not os.path.exists(filepath):
        print(f"⚠️  Файл не найден: {filepath}")
        return False
    
    print(f"\n📄 Обработка: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверяем, есть ли уже стили preloader
    if '.preloader {' in content:
        print("  ⚠️  Стили preloader уже есть")
        return False
    
    # Ищем закрывающий тег </style> перед </head>
    # Используем regex для поиска последнего вхождения
    matches = list(re.finditer(r'(\s*)(</style>)', content, re.IGNORECASE))
    
    if not matches:
        print("  ❌ Не найден тег </style>")
        return False
    
    # Берем последнее вхождение перед </head>
    last_match = None
    for match in matches:
        # Проверяем, что после этого </style> есть </head>
        after = content[match.end():match.end()+200]
        if '</head>' in after.lower():
            last_match = match
            break
    
    if not last_match:
        last_match = matches[-1]
    
    # Вставляем стили перед </style>
    insert_pos = last_match.start()
    content = content[:insert_pos] + PRELOADER_STYLES + '\n    ' + content[insert_pos:]
    
    # Сохраняем файл
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✅ Добавлены стили preloader")
    return True

def main():
    print("🚀 Добавление стилей preloader во все файлы...\n")
    
    updated = 0
    for filename in HTML_FILES:
        if add_preloader_styles(filename):
            updated += 1
    
    print(f"\n✅ Обновлено файлов: {updated}/{len(HTML_FILES)}")

if __name__ == '__main__':
    main()
