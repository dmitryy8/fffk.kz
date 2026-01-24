#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

with open('translation_analysis.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Приоритетные файлы
priority_files = ['index.html', 'about.html', 'news.html', 'docs.html', 'competitions.html', 'federations.html']

print("АНАЛИЗ ПРИОРИТЕТНЫХ ФАЙЛОВ")
print("=" * 80)

for file in priority_files:
    if file in data:
        print(f'\n{file}: {len(data[file])} текстов')
        
        # Фильтруем простые тексты
        simple = []
        for t in data[file]:
            text = t['text']
            # Пропускаем технические и слипшиеся тексты
            if len(text) < 100 and 'RU' not in text[:5] and len(text.split()) < 15:
                simple.append(text)
        
        print(f'  Простые тексты для перевода: {len(simple)}')
        for i, text in enumerate(simple[:15], 1):
            print(f'    {i}. {text}')
        if len(simple) > 15:
            print(f'    ... и ещё {len(simple) - 15} текстов')

print("\n" + "=" * 80)
print("ИТОГО: Большинство текстов - это элементы навигации и интерфейса,")
print("которые уже имеют переводы в language.js")
print("Нужно добавить атрибуты data-translate к HTML элементам")
