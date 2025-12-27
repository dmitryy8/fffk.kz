#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Автоматическое добавление data-translate атрибутов во все HTML файлы
"""

import os
import re

# Огромный словарь для маппинга текстов на ключи переводов
TEXT_TO_KEY_MAPPING = {
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
    'Партнеры': 'nav_partners',
    'Федерации': 'nav_federations',
    
    # Главная страница
    'Добро пожаловать на наш сайт!': 'hero_welcome',
    'Наша организация объединяет спортсменов со всего Казахстана. Мы развиваем функциональный фитнес и проводим соревнования по функциональному многоборью. Присоединяйтесь к нашему спортивному сообществу!': 'hero_description_full',
    'Последние новости': 'news_title',
    'Следите за главными событиями в мире функционального многоборья': 'news_subtitle',
    'Документы': 'docs_title',
    'Официальные документы и положения федерации': 'docs_subtitle',
    'Карта залов': 'map_title',
    'Найдите ближайший зал для тренировок по функциональному многоборью в вашем городе': 'map_subtitle',
    
    # О нас
    'О Федерации': 'about_federation_title',
    'Казахстанская Федерация функционального многоборья (КФФМ) - это республиканское общественное объединение, которое развивает функциональный фитнес и функциональное многоборье на территории Республики Казахстан.': 'about_federation_text',
    'Наша миссия': 'about_mission_title',
    'Развитие функционального многоборья в Казахстане, популяризация здорового образа жизни и подготовка спортсменов мирового уровня. Мы стремимся сделать функциональный фитнес доступным для каждого казахстанца и создать условия для достижения высоких спортивных результатов.': 'about_mission_text',
    'Наши цели': 'about_goals_title',
    'Организация и проведение соревнований по функциональному многоборью на всех уровнях': 'about_goal_1',
    'Подготовка спортсменов и тренеров высокой квалификации': 'about_goal_2',
    'Развитие международного сотрудничества в области функционального фитнеса': 'about_goal_3',
    'Популяризация здорового образа жизни среди населения Казахстана': 'about_goal_4',
    
    # Руководство
    'Профессионалы, которые развивают спорт в стране': 'leadership_subtitle',
    'Мещеряков Николай Ильич': 'leader_name_1',
    'Президент Казахстанской Федерации функционального многоборья.': 'leader_position_1',
    'Сулейменов Ерлан Мельсович': 'leader_name_2',
    'вице-президент Казахстанской Федерации функционального многоборья, генеральный спонсор, директор КДЛ "Олимп".': 'leader_position_2',
    'Лукановский Валентин Владимирович': 'leader_name_3',
    'генеральный секретарь, вице-президент Казахстанской Федерации функционального многоборья.': 'leader_position_3',
    'Джантлеев Роман Алмасович': 'leader_name_4',
    'вице-президент Казахстанской Федерации функционального многоборья.': 'leader_position_4',
    
    # Новости
    'Зимний Кубок 2025': 'news_winter_cup',
    'CrossFit Challenge 2025': 'news_crossfit_challenge',
    'Summer Games 2025': 'news_summer_games',
    
    # Документы
    'Положение чемпионата Казахстана': 'doc_championship_rules',
    'Календарь': 'doc_calendar',
    'Стандарты': 'doc_standards',
    'Антидопинг': 'doc_antidoping',
    'Устав': 'doc_constitution',
    
    # Федерации
    'Международные федерации': 'federations_title',
    'Наши партнеры по всему миру': 'federations_subtitle',
    
    # Кнопки
    'Подробнее': 'btn_more',
    'Назад': 'btn_back',
    'Скачать': 'btn_download',
    'Просмотр': 'btn_view',
    
    # Футер
    '© 2025 Все права защищены — Казахстанская Федерация функционального многоборья': 'footer_rights',
    'Республиканское общественное объединение «Казахстанская Федерация функционального многоборья» (КФФМ, Functional Fitness Kazakhstan) — официальный руководящий орган по функциональному фитнесу (functional fitness) и функциональному многоборью в Республике Казахстан. Мы развиваем спорт, организуем соревнования и объединяем спортсменов по всему Казахстану.': 'footer_info',
    
    # Медиа
    'Фото и видео с наших мероприятий': 'media_subtitle',
    'Фотогалерея': 'media_gallery_title',
    'Лучшие моменты наших соревнований': 'media_gallery_subtitle',
    
    # Соревнования
    'Календарь спортивных событий': 'competitions_subtitle',
}

# Список всех HTML файлов
HTML_FILES = [
    'index.html',
    'about.html',
    'news.html', 'news1.html', 'news2.html', 'news3.html', 'news4.html', 'news5.html', 'news6.html',
    'docs.html', 'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'leadership.html',
    'media.html',
    'competitions.html',
    'partners.html', 'partners2.html',
    'map.html',
]

def add_data_translate(html_content, text, key):
    """Добавляет data-translate атрибут к элементу с указанным текстом"""
    
    # Простая замена без сложных regex
    modified = False
    
    # Проверяем, нет ли уже data-translate для этого ключа
    if f'data-translate="{key}"' in html_content:
        return html_content, False
    
    # Попробуем найти текст и добавить атрибут
    escaped_text = re.escape(text)
    
    # Ищем в заголовках
    for i in range(1, 7):
        pattern = f'<h{i}([^>]*)>(\s*){escaped_text}(\s*)</h{i}>'
        if re.search(pattern, html_content):
            replacement = f'<h{i}\\1 data-translate="{key}">\\2{text}\\3</h{i}>'
            html_content = re.sub(pattern, replacement, html_content, count=1)
            return html_content, True
    
    # Ищем в параграфах
    pattern = f'<p([^>]*)>(\s*){escaped_text}(\s*)</p>'
    if re.search(pattern, html_content):
        replacement = f'<p\\1 data-translate="{key}">\\2{text}\\3</p>'
        html_content = re.sub(pattern, replacement, html_content, count=1)
        return html_content, True
    
    # Ищем в ссылках
    pattern = f'<a([^>]*)>(\s*){escaped_text}(\s*)</a>'
    if re.search(pattern, html_content):
        replacement = f'<a\\1 data-translate="{key}">\\2{text}\\3</a>'
        html_content = re.sub(pattern, replacement, html_content, count=1)
        return html_content, True
    
    # Ищем в span
    pattern = f'<span([^>]*)>(\s*){escaped_text}(\s*)</span>'
    if re.search(pattern, html_content):
        replacement = f'<span\\1 data-translate="{key}">\\2{text}\\3</span>'
        html_content = re.sub(pattern, replacement, html_content, count=1)
        return html_content, True
    
    return html_content, modified

def process_html_file(filepath):
    """Обрабатывает один HTML файл"""
    
    if not os.path.exists(filepath):
        return 0
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    modifications = 0
    
    # Применяем все маппинги
    for text, key in TEXT_TO_KEY_MAPPING.items():
        if text in content and f'data-translate="{key}"' not in content:
            content, modified = add_data_translate(content, text, key)
            if modified:
                modifications += 1
    
    # Сохраняем, если были изменения
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ {filepath}: добавлено {modifications} атрибутов")
        return modifications
    else:
        print(f"⏭️  {filepath}: изменений не требуется")
        return 0

def main():
    """Обрабатываем все файлы"""
    
    total_modifications = 0
    
    print("🚀 Начинаем добавление data-translate атрибутов...\n")
    
    for html_file in HTML_FILES:
        modifications = process_html_file(html_file)
        total_modifications += modifications
    
    print(f"\n✅ ГОТОВО!")
    print(f"📊 Всего добавлено атрибутов: {total_modifications}")
    print(f"📁 Обработано файлов: {len(HTML_FILES)}")

if __name__ == "__main__":
    main()
