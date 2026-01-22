#!/usr/bin/env python3
"""
Скрипт для исправления загрузки переводов:
1. Добавляет версионность к language.js для обхода кеша
2. Добавляет явную инициализацию переводов
"""

import os
import re
from datetime import datetime

# Версия для кеш-бастинга (текущий timestamp)
VERSION = datetime.now().strftime("%Y%m%d%H%M")

def fix_html_file(filepath):
    """Исправляет один HTML файл"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Заменяем language.js без версии на версию с параметром
        content = re.sub(
            r'<script src="/language\.js"(\s+defer)?(\s*)>',
            f'<script src="/language.js?v={VERSION}"\\1\\2>',
            content
        )
        
        # 2. Заменяем language.css без версии на версию с параметром
        content = re.sub(
            r'<link rel="stylesheet" href="/language\.css">',
            f'<link rel="stylesheet" href="/language.css?v={VERSION}">',
            content
        )
        
        # 3. Убеждаемся что есть только один language.js, удаляем дубликаты lang.js
        if '/lang.js' in content and '/language.js' in content:
            content = re.sub(r'<script src="/lang\.js"[^>]*>\s*</script>\s*\n?', '', content)
            print(f"  ⚠️  Удален дубликат lang.js из {os.path.basename(filepath)}")
        
        # Сохраняем только если были изменения
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
            
    except Exception as e:
        print(f"❌ Ошибка в {filepath}: {e}")
        return False

def main():
    """Основная функция"""
    print("🔧 Исправление загрузки language.js...")
    print(f"📦 Версия: {VERSION}\n")
    
    # Находим все HTML файлы
    html_files = []
    for file in os.listdir('.'):
        if file.endswith('.html'):
            html_files.append(file)
    
    print(f"📄 Найдено {len(html_files)} HTML файлов\n")
    
    # Обрабатываем каждый файл
    updated = 0
    for filepath in sorted(html_files):
        if fix_html_file(filepath):
            print(f"✅ {filepath}")
            updated += 1
        else:
            print(f"⏭️  {filepath} (без изменений)")
    
    print(f"\n✨ Обновлено: {updated}/{len(html_files)} файлов")
    print(f"🌐 Все файлы теперь используют: language.js?v={VERSION}")
    print("\n💡 Что дальше:")
    print("1. Сделайте git add, commit и push")
    print("2. Очистите кеш на Vercel (или дождитесь автодеплоя)")
    print("3. Проверьте сайт в инкогнито режиме браузера")

if __name__ == '__main__':
    main()
