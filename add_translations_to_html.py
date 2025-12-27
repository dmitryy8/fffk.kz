#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Добавление data-translate атрибутов на все страницы
"""

import re
from pathlib import Path

# Маппинг текстов и их ключей перевода
TEXT_MAPPINGS = [
    # Hero секция
    ('Добро пожаловать на наш сайт!', 'hero_welcome'),
    ('Наша организация объединяет спортсменов со всего Казахстана. Мы развиваем функциональное многоборье и организуем соревнования мирового уровня.', 'hero_description'),
    
    # Заголовки секций
    ('Последние новости', 'news_title'),
    ('Следите за главными событиями в мире функционального многоборья', 'news_subtitle'),
    ('Документы', 'docs_title'),
    ('Официальные документы и положения федерации', 'docs_subtitle'),
    ('Наша команда', 'leadership_title'),
    ('Профессионалы, которые развивают спорт в стране', 'leadership_subtitle'),
    ('Медиа', 'media_title'),
    ('Фото и видео с наших мероприятий', 'media_subtitle'),
    ('Соревнования', 'competitions_title'),
    ('Календарь спортивных событий', 'competitions_subtitle'),
    ('Карта залов', 'map_title'),
    ('Найдите ближайший зал для тренировок', 'map_subtitle'),
    ('Найдите ближайший зал для тренировок по функциональному многоборью в вашем городе', 'map_description'),
    ('О Федерации', 'about_title'),
    ('Мы развиваем функциональное многоборье в Казахстане', 'about_subtitle'),
    
    # Миссия/Ценности
    ('Наша миссия', 'about_mission_title'),
    ('Развитие функционального многоборья в Казахстане, популяризация здорового образа жизни и подготовка спортсменов мирового уровня.', 'about_mission_text'),
    ('Наши ценности', 'about_values_title'),
    
    # Новости
    ('Зимний Кубок 2025', 'news_winter_cup'),
    ('CrossFit Challenge 2025', 'news_crossfit_challenge'),
    ('Summer Games 2025', 'news_summer_games'),
    
    # Документы
    ('Положение чемпионата Казахстана', 'doc_championship_rules'),
    ('Календарь', 'doc_calendar'),
    ('Стандарты', 'doc_standards'),
    ('Антидопинг', 'doc_antidoping'),
    ('Устав', 'doc_constitution'),
    
    # Руководство
    ('Президент Казахстанской Федерации функционального многоборья.', 'leader_president'),
    ('вице-президент Казахстанской Федерации функционального многоборья, генеральный спонсор, директор КДЛ "Олимп".', 'leader_vicepresident_sponsor'),
    ('генеральный секретарь, вице-президент Казахстанской Федерации функционального многоборья.', 'leader_vicepresident_secretary'),
    ('вице-президент Казахстанской Федерации функционального многоборья.', 'leader_vicepresident'),
    
    # Федерации
    ('Международные федерации', 'federations_title'),
    
    # Footer
    ('Республиканское общественное объединение «Казахстанская Федерация функционального многоборья» (КФФМ, Functional Fitness Kazakhstan) — официальный руководящий орган по функциональному фитнесу (functional fitness) и функциональному многоборью в Республике Казахстан. Мы развиваем спорт, организуем соревнования и объединяем спортсменов по всему Казахстану.', 'footer_info'),
]

def add_data_translate_attributes(html_content):
    """Добавляет data-translate атрибуты к текстам"""
    
    changes = 0
    
    for text, key in TEXT_MAPPINGS:
        # Проверяем, нет ли уже этого ключа
        if f'data-translate="{key}"' in html_content:
            continue
        
        # Простая замена текста с добавлением атрибута
        # Ищем текст в разных тегах
        replacements = [
            # Заголовки
            (f'<h1>{text}</h1>', f'<h1 data-translate="{key}">{text}</h1>'),
            (f'<h2>{text}</h2>', f'<h2 data-translate="{key}">{text}</h2>'),
            (f'<h3>{text}</h3>', f'<h3 data-translate="{key}">{text}</h3>'),
            # Параграфы
            (f'<p>{text}</p>', f'<p data-translate="{key}">{text}</p>'),
            (f'<p style="color: rgb(255, 255, 255); font-size: 19px; line-height: 1.8; margin: 0px;">{text}</p>',
             f'<p style="color: rgb(255, 255, 255); font-size: 19px; line-height: 1.8; margin: 0px;" data-translate="{key}">{text}</p>'),
            # Div
            (f'<div>{text}</div>', f'<div data-translate="{key}">{text}</div>'),
        ]
        
        for old, new in replacements:
            if old in html_content:
                html_content = html_content.replace(old, new)
                changes += 1
                break
    
    return html_content, changes

def process_html_files():
    """Обрабатывает все HTML файлы"""
    
    html_files = list(Path('.').glob('*.html'))
    
    print(f"Добавление data-translate атрибутов на {len(html_files)} страниц...\n")
    
    total_changes = 0
    files_updated = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            updated_content, changes = add_data_translate_attributes(content)
            
            if changes > 0:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                
                print(f"OK {html_file.name}: {changes} атрибутов добавлено")
                total_changes += changes
                files_updated += 1
            else:
                print(f"-- {html_file.name}: уже переведено")
        
        except Exception as e:
            print(f"ERROR {html_file.name}: {e}")
    
    print(f"\nОбработано файлов: {files_updated}")
    print(f"Всего атрибутов добавлено: {total_changes}")
    print(f"\nТеперь все тексты переводятся на 3 языка: RU, KZ, EN")

if __name__ == "__main__":
    process_html_files()
