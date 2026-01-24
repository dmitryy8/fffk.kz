import os
import re
from pathlib import Path

# Получаем список всех HTML файлов в корне
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# Категории для анализа
has_html = []
has_full_css = []
has_partial_css = []
no_html = []
no_css = []
has_html_no_css = []

# Проверяем каждый файл
for filename in sorted(html_files):
    filepath = os.path.join('.', filename)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверка наличия HTML разметки language-switcher
    has_switcher_html = bool(re.search(r'<div\s+class="language-switcher"', content))
    has_btn_html = bool(re.search(r'<button\s+class="language-btn"', content))
    
    # Проверка наличия CSS стилей
    has_switcher_css = bool(re.search(r'\.language-switcher\s*\{', content))
    has_btn_css = bool(re.search(r'\.language-btn\s*\{', content))
    has_dropdown_css = bool(re.search(r'\.language-dropdown\s*\{', content))
    has_option_css = bool(re.search(r'\.language-option\s*\{', content))
    
    # Подсчёт стилей
    css_count = sum([has_switcher_css, has_btn_css, has_dropdown_css, has_option_css])
    
    # Категоризация
    if has_switcher_html and has_btn_html:
        has_html.append(filename)
        
        if css_count == 4:
            has_full_css.append(filename)
        elif css_count > 0:
            has_partial_css.append(filename)
        else:
            has_html_no_css.append(filename)
    else:
        no_html.append(filename)
        
        if css_count == 0:
            no_css.append(filename)

# Вывод отчёта
print("=" * 80)
print("ОТЧЁТ: АНАЛИЗ LANGUAGE-SWITCHER НА HTML СТРАНИЦАХ")
print("=" * 80)
print(f"\nВсего проверено файлов: {len(html_files)}")
print()

print("1. СТРАНИЦЫ С ПОЛНОЙ РЕАЛИЗАЦИЕЙ (HTML + все 4 CSS класса):")
print("-" * 80)
if has_full_css:
    for i, file in enumerate(has_full_css, 1):
        print(f"{i}. {os.path.abspath(file)}")
else:
    print("Нет файлов")
print(f"Итого: {len(has_full_css)} файлов")
print()

print("2. СТРАНИЦЫ С HTML РАЗМЕТКОЙ, НО БЕЗ CSS СТИЛЕЙ:")
print("-" * 80)
if has_html_no_css:
    for i, file in enumerate(has_html_no_css, 1):
        print(f"{i}. {os.path.abspath(file)}")
else:
    print("Нет файлов")
print(f"Итого: {len(has_html_no_css)} файлов")
print()

print("3. СТРАНИЦЫ С HTML РАЗМЕТКОЙ И НЕПОЛНЫМИ CSS СТИЛЯМИ:")
print("-" * 80)
if has_partial_css:
    for i, file in enumerate(has_partial_css, 1):
        filepath = os.path.abspath(file)
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        has_s = bool(re.search(r'\.language-switcher\s*\{', content))
        has_b = bool(re.search(r'\.language-btn\s*\{', content))
        has_d = bool(re.search(r'\.language-dropdown\s*\{', content))
        has_o = bool(re.search(r'\.language-option\s*\{', content))
        
        missing = []
        if not has_s: missing.append(".language-switcher")
        if not has_b: missing.append(".language-btn")
        if not has_d: missing.append(".language-dropdown")
        if not has_o: missing.append(".language-option")
        
        print(f"{i}. {filepath}")
        print(f"   Отсутствуют: {', '.join(missing)}")
else:
    print("Нет файлов")
print(f"Итого: {len(has_partial_css)} файлов")
print()

print("4. СТРАНИЦЫ БЕЗ HTML РАЗМЕТКИ LANGUAGE-SWITCHER:")
print("-" * 80)
if no_html:
    for i, file in enumerate(no_html, 1):
        print(f"{i}. {os.path.abspath(file)}")
else:
    print("Нет файлов")
print(f"Итого: {len(no_html)} файлов")
print()

print("=" * 80)
print("СВОДКА:")
print("-" * 80)
print(f"✓ Полная реализация (HTML + CSS):     {len(has_full_css)} файлов")
print(f"⚠ HTML есть, CSS нет:                  {len(has_html_no_css)} файлов")
print(f"⚠ HTML есть, CSS неполные:             {len(has_partial_css)} файлов")
print(f"✗ Нет HTML разметки:                   {len(no_html)} файлов")
print("=" * 80)
