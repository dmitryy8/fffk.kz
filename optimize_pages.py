#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для оптимизации загрузки страниц:
- Добавляет preloader
- Улучшает touch-action для бургер-меню
- Отключает IntersectionObserver на мобильных
"""

import re
import os

# Список HTML файлов для обработки
HTML_FILES = [
    'index.html', 'about.html', 'news.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'docs.html', 'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'docs5.html', 'docs6.html', 'competitions.html', 'leadership.html',
    'media.html', 'partners.html', 'partners2.html', 'map.html', 'federations.html'
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
        }
"""

# HTML для preloader
PRELOADER_HTML = """    <!-- Preloader -->
    <div class="preloader" id="preloader">
        <div class="preloader-content">
            <div class="spinner"></div>
            <div class="preloader-text">Загрузка...</div>
        </div>
    </div>

"""

# JavaScript для скрытия preloader
PRELOADER_JS = """
        // Скрытие preloader после загрузки
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                setTimeout(() => {
                    preloader.classList.add('hidden');
                }, 300);
            }
        });
"""

def add_preloader_styles(content):
    """Добавляет стили preloader перед закрывающим тегом </style>"""
    if '.preloader {' in content:
        print("  ⚠️  Стили preloader уже есть, пропускаем")
        return content
    
    # Находим последний </style> перед </head>
    match = re.search(r'(</style>\s*</head>)', content, re.IGNORECASE)
    if match:
        content = content.replace(match.group(1), PRELOADER_STYLES + '\n    ' + match.group(1))
        print("  ✅ Добавлены стили preloader")
    else:
        print("  ⚠️  Не найден тег </style>")
    
    return content

def add_preloader_html(content):
    """Добавляет HTML preloader после <body>"""
    if 'id="preloader"' in content:
        print("  ⚠️  HTML preloader уже есть, пропускаем")
        return content
    
    match = re.search(r'(<body[^>]*>)', content, re.IGNORECASE)
    if match:
        content = content.replace(match.group(1), match.group(1) + '\n' + PRELOADER_HTML)
        print("  ✅ Добавлен HTML preloader")
    else:
        print("  ⚠️  Не найден тег <body>")
    
    return content

def add_preloader_js(content):
    """Добавляет JavaScript для скрытия preloader"""
    if "getElementById('preloader')" in content or 'getElementById("preloader")' in content:
        print("  ⚠️  JavaScript preloader уже есть, пропускаем")
        return content
    
    # Ищем место после DOMContentLoaded или в конце скриптов
    match = re.search(r"(document\.addEventListener\('DOMContentLoaded'[^}]+\}\);)", content, re.DOTALL)
    if match:
        insert_pos = content.find(match.group(1)) + len(match.group(1))
        content = content[:insert_pos] + '\n' + PRELOADER_JS + content[insert_pos:]
        print("  ✅ Добавлен JavaScript для preloader")
    else:
        # Если нет DOMContentLoaded, добавляем перед </script> перед </body>
        match = re.search(r'(</script>\s*</body>)', content, re.IGNORECASE)
        if match:
            content = content.replace(match.group(1), PRELOADER_JS + '\n    ' + match.group(1))
            print("  ✅ Добавлен JavaScript для preloader (перед </script>)")
    
    return content

def improve_burger_touch(content):
    """Улучшает touch-action для бургер-меню"""
    # Ищем стили для mobile-menu-btn
    pattern = r'(\.mobile-menu-btn\s*\{[^}]*)(cursor:\s*pointer;)'
    
    if re.search(pattern, content):
        # Добавляем touch-action: manipulation после cursor
        def replacer(match):
            if 'touch-action:' not in match.group(0):
                return match.group(1) + match.group(2) + '\n            touch-action: manipulation;\n            -webkit-tap-highlight-color: transparent;'
            return match.group(0)
        
        new_content = re.sub(pattern, replacer, content)
        if new_content != content:
            content = new_content
            print("  ✅ Улучшен touch-action для бургер-меню")
        else:
            print("  ⚠️  touch-action уже добавлен")
    else:
        print("  ⚠️  Не найден .mobile-menu-btn")
    
    return content

def disable_observer_on_mobile(content):
    """Отключает IntersectionObserver на мобильных устройствах"""
    # Ищем функцию initScrollAnimations
    pattern = r'(function\s+initScrollAnimations\(\)\s*\{[^}]*const\s+observer\s*=\s*new\s+IntersectionObserver)'
    
    if re.search(pattern, content):
        # Добавляем проверку ширины экрана
        replacement = r'''function initScrollAnimations() {
            // Отключаем анимации на мобильных для производительности
            if (window.innerWidth <= 768) {
                document.querySelectorAll('.fade-in').forEach(el => {
                    el.classList.add('visible');
                });
                return;
            }
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver'''
        
        new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        if new_content != content:
            content = new_content
            print("  ✅ Отключен IntersectionObserver на мобильных")
        else:
            print("  ⚠️  IntersectionObserver уже оптимизирован")
    else:
        print("  ⚠️  Не найдена функция initScrollAnimations")
    
    return content

def optimize_file(filepath):
    """Оптимизирует один HTML файл"""
    if not os.path.exists(filepath):
        print(f"⚠️  Файл не найден: {filepath}")
        return
    
    print(f"\n📄 Обработка: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Применяем оптимизации
    content = add_preloader_styles(content)
    content = add_preloader_html(content)
    content = add_preloader_js(content)
    content = improve_burger_touch(content)
    content = disable_observer_on_mobile(content)
    
    # Сохраняем если были изменения
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Файл обновлен: {filepath}")
    else:
        print(f"ℹ️  Нет изменений: {filepath}")

def main():
    print("🚀 Начинаем оптимизацию страниц...\n")
    
    processed = 0
    for filename in HTML_FILES:
        optimize_file(filename)
        processed += 1
    
    print(f"\n✅ Обработано файлов: {processed}")
    print("\n📊 Применённые оптимизации:")
    print("  • Добавлен preloader для плавной загрузки")
    print("  • Улучшен touch-action для бургер-меню")
    print("  • Отключен IntersectionObserver на мобильных")
    print("  • Добавлена анимация загрузки")

if __name__ == '__main__':
    main()
