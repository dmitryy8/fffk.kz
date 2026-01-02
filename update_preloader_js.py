#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для обновления JavaScript preloader во всех файлах
"""

import re
import os

HTML_FILES = [
    'about.html', 'news.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'docs.html', 'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'docs5.html', 'docs6.html', 'competitions.html', 'leadership.html',
    'media.html', 'partners.html', 'partners2.html', 'map.html', 'federations.html'
]

NEW_PRELOADER_JS = """    </script>
    <script src="/language.js" defer></script>
    <script>
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
    </script>
</body>"""

def update_preloader_js(filepath):
    """Обновляет JavaScript для preloader"""
    if not os.path.exists(filepath):
        print(f"⚠️  Файл не найден: {filepath}")
        return False
    
    print(f"\n📄 Обработка: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверяем, уже ли обновлен
    if 'preloaderStartTime' in content:
        print("  ⚠️  JavaScript уже обновлен")
        return False
    
    # Паттерн для старого кода
    pattern = r'</script>\s*<script src="/language\.js"[^>]*>\s*//\s*Скрытие preloader после загрузки.*?</script>\s*</body>'
    
    if re.search(pattern, content, re.DOTALL):
        content = re.sub(pattern, NEW_PRELOADER_JS, content, flags=re.DOTALL)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("  ✅ JavaScript preloader обновлен")
        return True
    else:
        print("  ⚠️  Не найден старый код preloader")
        return False

def main():
    print("🚀 Обновление JavaScript preloader...\n")
    
    updated = 0
    for filename in HTML_FILES:
        if update_preloader_js(filename):
            updated += 1
    
    print(f"\n✅ Обновлено файлов: {updated}/{len(HTML_FILES)}")

if __name__ == '__main__':
    main()
