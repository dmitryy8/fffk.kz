#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Автоматическое добавление data-translate атрибутов ко всем HTML файлам
"""

import re
import os
from pathlib import Path

# Маппинг текстов на ключи переводов
TEXT_TO_KEY = {
    # Навигация
    'Главная': 'nav_home',
    'О нас': 'nav_about',
    'Новости': 'nav_news',
    'Документы': 'nav_docs',
    'Наша команда': 'nav_leadership',
    'Медиа': 'nav_media',
    'Соревнования': 'nav_competitions',
    'Генеральный спонсор': 'nav_sponsor',
    'Партнёры': 'nav_partners',
    'Федерации': 'nav_federations',
    
    # Кнопки
    'Подробнее': 'btn_more',
    'Назад': 'btn_back',
    'Скачать': 'btn_download',
    'Просмотр': 'btn_view',
    
    # Названия федерации
    'ҚАЗАҚСТАНДЫҚ ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ': 'site_title_kz',
    'КАЗАХСТАНСКАЯ ФЕДЕРАЦИЯ ФУНКЦИОНАЛЬНОГО МНОГОБОРЬЯ': 'site_title',
    'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN': 'site_subtitle',
    
    # Футер
    '© 2025 Все права защищены — Казахстанская Федерация функционального многоборья': 'footer_rights',
}

def add_translate_to_nav(html_content):
    """Добавляет data-translate к элементам навигации"""
    
    # Паттерн для навигационных ссылок
    patterns = [
        (r'<a href="/">\s*Главная\s*</a>', '<a href="/" data-translate="nav_home">Главная</a>'),
        (r'<a href="/about">\s*О нас\s*</a>', '<a href="/about" data-translate="nav_about">О нас</a>'),
        (r'<a href="/news">\s*Новости\s*</a>', '<a href="/news" data-translate="nav_news">Новости</a>'),
        (r'<a href="/docs">\s*Документы\s*</a>', '<a href="/docs" data-translate="nav_docs">Документы</a>'),
        (r'<a href="/leadership">\s*Наша команда\s*</a>', '<a href="/leadership" data-translate="nav_leadership">Наша команда</a>'),
        (r'<a href="/media">\s*Медиа\s*</a>', '<a href="/media" data-translate="nav_media">Медиа</a>'),
        (r'<a href="/competitions">\s*Соревнования\s*</a>', '<a href="/competitions" data-translate="nav_competitions">Соревнования</a>'),
        (r'<a href="/partners">\s*Генеральный спонсор\s*</a>', '<a href="/partners" data-translate="nav_sponsor">Генеральный спонсор</a>'),
        (r'<a href="/partners2">\s*Партнёры\s*</a>', '<a href="/partners2" data-translate="nav_partners">Партнёры</a>'),
        (r'<a href="/federations">\s*Федерации\s*</a>', '<a href="/federations" data-translate="nav_federations">Федерации</a>'),
    ]
    
    for pattern, replacement in patterns:
        # Проверяем, нет ли уже data-translate
        if not re.search(pattern.replace('>', 'data-translate'), html_content):
            html_content = re.sub(pattern, replacement, html_content, flags=re.IGNORECASE)
    
    return html_content

def add_translate_to_buttons(html_content):
    """Добавляет data-translate к кнопкам"""
    
    patterns = [
        (r'<a href="[^"]*" class="btn[^"]*">\s*Подробнее\s*</a>', 
         lambda m: m.group(0).replace('>', ' data-translate="btn_more">', 1)),
        (r'<a href="[^"]*" class="btn[^"]*">\s*Назад\s*</a>',
         lambda m: m.group(0).replace('>', ' data-translate="btn_back">', 1)),
    ]
    
    for pattern, replacement in patterns:
        html_content = re.sub(pattern, replacement, html_content, flags=re.IGNORECASE)
    
    return html_content

def process_html_file(filepath):
    """Обрабатывает один HTML файл"""
    print(f"Обработка: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Добавляем data-translate
    content = add_translate_to_nav(content)
    content = add_translate_to_buttons(content)
    
    # Проверяем, были ли изменения
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  [OK] Updated")
        return True
    else:
        print(f"  [SKIP] No changes")
        return False

def main():
    """Основная функция"""
    print("=" * 80)
    print("АВТОМАТИЧЕСКОЕ ДОБАВЛЕНИЕ data-translate АТРИБУТОВ")
    print("=" * 80)
    print()
    
    # Список HTML файлов для обработки
    html_files = list(Path('.').glob('*.html'))
    
    updated_count = 0
    
    for filepath in sorted(html_files):
        if process_html_file(filepath):
            updated_count += 1
    
    print()
    print("=" * 80)
    print(f"ИТОГО: Обновлено файлов: {updated_count} из {len(html_files)}")
    print("=" * 80)

if __name__ == '__main__':
    main()
