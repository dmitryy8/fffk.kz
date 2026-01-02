#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для оптимизации загрузки страниц:
- Добавляет лого над спиннером с анимацией
- Устанавливает загрузку 1-2 секунды
- Добавляет плавный скролл
- Оптимизирует скрипты
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

def add_smooth_scroll(content):
    """Добавляет плавный скролл"""
    if 'scroll-behavior: smooth' in content:
        print("  ⚠️  Плавный скролл уже добавлен")
        return content
    
    # Ищем объявление html или * { в начале CSS
    pattern = r'(\* \{[^}]*margin: 0;[^}]*padding: 0;[^}]*box-sizing: border-box;)'
    match = re.search(pattern, content)
    
    if match:
        # Добавляем после box-sizing
        replacement = match.group(1) + '\n            scroll-behavior: smooth;'
        content = content.replace(match.group(1), replacement)
        print("  ✅ Добавлен плавный скролл")
    else:
        print("  ⚠️  Не найдено место для плавного скролла")
    
    return content

def update_preloader_styles(content):
    """Обновляет стили preloader с лого"""
    if '.preloader-logo' in content:
        print("  ⚠️  Стили preloader-logo уже добавлены")
        return content
    
    # Находим .preloader-content и добавляем стили для лого
    pattern = r'(\.preloader-content \{[^}]+\})'
    match = re.search(pattern, content)
    
    if match:
        new_styles = """
        .preloader-logo {
            width: 120px;
            height: auto;
            margin-bottom: 30px;
            animation: logoFloat 2s ease-in-out infinite;
            filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
        }

        @keyframes logoFloat {
            0%, 100% {
                transform: translateY(0px);
                opacity: 1;
            }
            50% {
                transform: translateY(-10px);
                opacity: 0.9;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .preloader-content {
            animation: fadeIn 0.5s ease-out;
        }
"""
        insert_pos = content.find(match.group(1)) + len(match.group(1))
        content = content[:insert_pos] + new_styles + content[insert_pos:]
        print("  ✅ Добавлены стили для анимированного лого")
    
    return content

def update_preloader_html(content):
    """Обновляет HTML preloader с лого"""
    if 'preloader-logo' in content:
        print("  ⚠️  HTML лого уже добавлен")
        return content
    
    # Ищем <div class="preloader-content"> и добавляем лого
    pattern = r'(<div class="preloader-content">)\s*(<div class="spinner">)'
    match = re.search(pattern, content)
    
    if match:
        replacement = match.group(1) + '\n            <img src="/footer-logo.png" alt="КФФМ" class="preloader-logo">\n            ' + match.group(2)
        content = content.replace(match.group(0), replacement)
        print("  ✅ Добавлено лого в preloader")
    
    return content

def update_preloader_js(content):
    """Обновляет JavaScript для контроля времени загрузки"""
    # Ищем существующий код скрытия preloader
    pattern = r"window\.addEventListener\('load',\s*\(\)\s*=>\s*\{[^}]*getElementById\('preloader'\)[^}]*\}\);"
    
    if re.search(pattern, content):
        new_js = """
        // Контроль времени загрузки preloader (минимум 300ms, максимум 2000ms)
        const preloaderStartTime = Date.now();
        const minLoadTime = 300;
        const maxLoadTime = 2000;

        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                const elapsedTime = Date.now() - preloaderStartTime;
                const remainingTime = Math.max(minLoadTime - elapsedTime, 0);
                const hideTime = Math.min(remainingTime, maxLoadTime - elapsedTime);
                
                setTimeout(() => {
                    preloader.classList.add('hidden');
                }, hideTime);
            }
        });

        // Автоматическое скрытие через 2 секунды, даже если страница не загрузилась
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader && !preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
            }
        }, maxLoadTime);
"""
        content = re.sub(pattern, new_js, content)
        print("  ✅ Обновлен JavaScript preloader с контролем времени")
    else:
        print("  ⚠️  Не найден JavaScript preloader")
    
    return content

def optimize_scripts(content):
    """Добавляет defer к скриптам для ускорения загрузки"""
    # Добавляем defer к внешним скриптам, если его нет
    pattern = r'<script\s+src="([^"]+lang\.js[^"]*)"(?!\s+defer)>'
    if re.search(pattern, content):
        content = re.sub(pattern, r'<script src="\1" defer>', content)
        print("  ✅ Добавлен defer к lang.js")
    
    return content

def process_file(filepath):
    """Обрабатывает один файл"""
    if not os.path.exists(filepath):
        print(f"⚠️  Файл не найден: {filepath}")
        return False
    
    print(f"\n📄 Обработка: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Применяем оптимизации
    content = add_smooth_scroll(content)
    content = update_preloader_styles(content)
    content = update_preloader_html(content)
    content = update_preloader_js(content)
    content = optimize_scripts(content)
    
    # Сохраняем если были изменения
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Файл обновлен")
        return True
    else:
        print(f"ℹ️  Нет изменений")
        return False

def main():
    print("🚀 Начинаем оптимизацию загрузки...\n")
    
    updated = 0
    for filename in HTML_FILES:
        if process_file(filename):
            updated += 1
    
    print(f"\n✅ Обновлено файлов: {updated}/{len(HTML_FILES)}")
    print("\n📊 Применённые оптимизации:")
    print("  • Плавный скролл (scroll-behavior: smooth)")
    print("  • Анимированное лого над спиннером")
    print("  • Время загрузки: минимум 300ms, максимум 2000ms")
    print("  • Автоскрытие preloader через 2 секунды")
    print("  • Оптимизация скриптов с defer")

if __name__ == '__main__':
    main()
