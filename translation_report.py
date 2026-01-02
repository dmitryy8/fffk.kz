#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Создание отчёта по всем непереведённым текстам с рекомендациями
"""

import json
import re

# Чтение результатов анализа
with open('translation_analysis.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Чтение существующих переводов из language.js
with open('language.js', 'r', encoding='utf-8') as f:
    lang_content = f.read()

# Извлечение существующих ключей переводов
existing_keys = set(re.findall(r"(\w+):\s*['\"]", lang_content))

print("=" * 80)
print("📋 ОТЧЁТ ПО АНАЛИЗУ ПЕРЕВОДОВ")
print("=" * 80)

# Категории текстов
categories = {
    'Навигация': ['Главная', 'О нас', 'Новости', 'Документы', 'Наша команда', 'Медиа', 
                  'Соревнования', 'Генеральный спонсор', 'Партнёры', 'Федерации'],
    'Кнопки': ['Подробнее', 'Назад', 'Скачать', 'Просмотр', 'Читать далее'],
    'Технические': ['RU', 'EN', 'KZ', '🇷🇺 Русский', '🇰🇿 Қазақша', '🇬🇧 English'],
    'Даты': []
}

# Сбор уникальных текстов
unique_texts = set()
for file, texts in data.items():
    for item in texts:
        text = item['text'].strip()
        # Пропускаем склееные тексты и очень длинные
        if len(text) < 200 and '\n' not in text:
            unique_texts.add(text)

# Фильтрация
navigation_texts = [t for t in unique_texts if any(nav in t for nav in categories['Навигация'])]
button_texts = [t for t in unique_texts if any(btn in t for btn in categories['Кнопки'])]
date_texts = [t for t in unique_texts if re.search(r'\d{2}\.\d{2}\.\d{4}', t)]
content_texts = [t for t in unique_texts if t not in navigation_texts and t not in button_texts and t not in date_texts and len(t) > 10]

print(f"\n📊 СТАТИСТИКА:")
print(f"   Всего уникальных текстов: {len(unique_texts)}")
print(f"   - Навигация/меню: {len(navigation_texts)}")
print(f"   - Кнопки: {len(button_texts)}")
print(f"   - Даты: {len(date_texts)}")
print(f"   - Контентные тексты: {len(content_texts)}")

print(f"\n\n🔍 ДЕТАЛЬНЫЙ АНАЛИЗ ПО ФАЙЛАМ:\n")
print("-" * 80)

for file, texts in sorted(data.items()):
    print(f"\n📄 {file} ({len(texts)} текстов)")
    
    # Группируем тексты
    simple_texts = []
    complex_texts = []
    
    for item in texts:
        text = item['text'].strip()
        if len(text) < 100 and '\n' not in text and not re.search(r'[🇷🇺🇰🇿🇬🇧]', text):
            simple_texts.append(text)
        else:
            complex_texts.append(text[:100] + '...' if len(text) > 100 else text)
    
    if simple_texts:
        print(f"   Простые тексты ({len(simple_texts)}):")
        for text in simple_texts[:5]:
            print(f"      • {text}")
        if len(simple_texts) > 5:
            print(f"      ... и ещё {len(simple_texts) - 5} текстов")
    
    if complex_texts:
        print(f"   Сложные/составные тексты ({len(complex_texts)}):")
        for text in complex_texts[:3]:
            print(f"      • {text}")

print("\n\n" + "=" * 80)
print("💡 РЕКОМЕНДАЦИИ:")
print("=" * 80)
print("""
1. ✅ Простые тексты (кнопки, заголовки, навигация):
   - Добавить data-translate к элементам
   - Переводы уже есть в language.js

2. ⚠️ Склеенные тексты (из переключателя языка):
   - Это техническая проблема структуры HTML
   - Не требуют отдельного перевода

3. 📝 Контентные тексты (новости, документы):
   - Требуют индивидуального перевода
   - Рекомендуется переводить вручную или через профессиональный перевод

4. 🎯 Приоритеты:
   Высокий: Навигация, кнопки, заголовки секций
   Средний: Заголовки новостей и документов
   Низкий: Длинные текстовые блоки в документах

""")

print("✨ Создаю автоматический скрипт для добавления переводов...")
