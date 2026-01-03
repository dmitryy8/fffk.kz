#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для анализа всех русских слов на сайте без переводов
"""

import re
import os
from collections import defaultdict

HTML_FILES = [
    'index.html', 'about.html', 'news.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'news8.html', 'news9.html', 'docs.html', 'docs1.html', 'docs2.html',
    'docs3.html', 'docs4.html', 'docs5.html', 'docs6.html', 'competitions.html',
    'leadership.html', 'media.html', 'partners.html', 'partners2.html',
    'map.html', 'federations.html'
]

def has_cyrillic(text):
    """Проверяет наличие кириллицы в тексте"""
    return bool(re.search('[а-яА-ЯёЁ]', text))

def extract_translations_from_js():
    """Извлекает все существующие ключи переводов из language.js"""
    try:
        with open('language.js', 'r', encoding='utf-8') as f:
            content = f.read()
        
        pattern = r"(\w+):\s*['\"]"
        keys = set(re.findall(pattern, content))
        return keys
    except Exception as e:
        print(f"Ошибка чтения language.js: {e}")
        return set()

def analyze_html_file(filepath):
    """Анализирует HTML файл на наличие непереведенного текста"""
    if not os.path.exists(filepath):
        return []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    untranslated = []
    
    patterns = [
        (r'<h[1-6][^>]*>([^<]+)</h[1-6]>', 'heading'),
        (r'<p[^>]*>([^<]+)</p>', 'paragraph'),
        (r'<button[^>]*>([^<]+)</button>', 'button'),
        (r'<a[^>]*>([^<]+)</a>', 'link'),
        (r'<li[^>]*>([^<]+)</li>', 'list-item'),
        (r'<span[^>]*>([^<]+)</span>', 'span'),
        (r'<(?:strong|b)[^>]*>([^<]+)</(?:strong|b)>', 'emphasis'),
    ]
    
    for pattern, element_type in patterns:
        matches = re.finditer(pattern, content, re.DOTALL)
        for match in matches:
            text = match.group(1).strip()
            if not text or len(text) < 3 or text.isdigit():
                continue
            if text.startswith('<!--') or text.startswith('<'):
                continue
            if has_cyrillic(text):
                context_start = max(0, match.start() - 200)
                context = content[context_start:match.end()]
                has_translate = 'data-translate=' in context
                
                if not has_translate:
                    untranslated.append({
                        'file': filepath,
                        'type': element_type,
                        'text': text[:100],
                        'full_text': text
                    })
    
    return untranslated

def main():
    print("��� Анализ непереведенного контента на сайте...\n")
    
    translation_keys = extract_translations_from_js()
    print(f"��� Найдено ключей переводов в language.js: {len(translation_keys)}\n")
    
    all_untranslated = []
    files_with_issues = []
    
    for filename in HTML_FILES:
        untranslated = analyze_html_file(filename)
        if untranslated:
            all_untranslated.extend(untranslated)
            files_with_issues.append(filename)
            print(f"⚠️  {filename}: найдено {len(untranslated)} непереведенных элементов")
    
    print(f"\n" + "="*80)
    print(f"��� ИТОГОВАЯ СТАТИСТИКА")
    print("="*80)
    print(f"Всего файлов проанализировано: {len(HTML_FILES)}")
    print(f"Файлов с непереведенным контентом: {len(files_with_issues)}")
    print(f"Всего непереведенных элементов: {len(all_untranslated)}")
    
    if all_untranslated:
        print(f"\n" + "="*80)
        print(f"��� ДЕТАЛЬНЫЙ СПИСОК НЕПЕРЕВЕДЕННОГО КОНТЕНТА")
        print("="*80)
        
        by_file = defaultdict(list)
        for item in all_untranslated:
            by_file[item['file']].append(item)
        
        for filepath in sorted(by_file.keys()):
            items = by_file[filepath]
            print(f"\n��� {filepath} ({len(items)} элементов):")
            print("-" * 80)
            
            by_type = defaultdict(list)
            for item in items:
                by_type[item['type']].append(item)
            
            for element_type in sorted(by_type.keys()):
                type_items = by_type[element_type]
                print(f"\n  {element_type.upper()} ({len(type_items)}):")
                for item in type_items[:10]:
                    print(f"    • {item['text']}")
                if len(type_items) > 10:
                    print(f"    ... и еще {len(type_items) - 10} элементов")
        
        with open('TRANSLATION_ANALYSIS.txt', 'w', encoding='utf-8') as f:
            f.write("="*80 + "\n")
            f.write("ПОЛНЫЙ АНАЛИЗ НЕПЕРЕВЕДЕННОГО КОНТЕНТА\n")
            f.write("="*80 + "\n\n")
            
            for filepath in sorted(by_file.keys()):
                f.write(f"\n{'='*80}\n")
                f.write(f"ФАЙЛ: {filepath}\n")
                f.write(f"{'='*80}\n\n")
                
                items = by_file[filepath]
                for i, item in enumerate(items, 1):
                    f.write(f"{i}. [{item['type']}]\n")
                    f.write(f"   Текст: {item['full_text']}\n\n")
        
        print(f"\n✅ Полный отчет сохранен в TRANSLATION_ANALYSIS.txt")
    else:
        print(f"\n✅ Все элементы имеют переводы!")

if __name__ == '__main__':
    main()
