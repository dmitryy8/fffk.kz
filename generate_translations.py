#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Расширенная система переводов - анализ и добавление data-translate атрибутов
"""

import re
from pathlib import Path
from collections import defaultdict

# Тексты для перевода по страницам (собираем все уникальные тексты)
texts_to_translate = {
    # Общие элементы
    'hero_welcome': {
        'ru': 'Добро пожаловать на наш сайт!',
        'kz': 'Біздің сайтқа қош келдіңіз!',
        'en': 'Welcome to our website!'
    },
    'hero_description': {
        'ru': 'Наша организация объединяет спортсменов со всего Казахстана. Мы развиваем функциональное многоборье и организуем соревнования мирового уровня.',
        'kz': 'Біздің ұйым бүкіл Қазақстаннан спортшыларды біріктіреді. Біз функционалдық көпсайысты дамытамыз және әлемдік деңгейдегі жарыстар ұйымдастырамыз.',
        'en': 'Our organization unites athletes from all over Kazakhstan. We develop functional fitness and organize world-class competitions.'
    },
    
    # Новости
    'news_winter_cup': {
        'ru': 'Зимний Кубок 2025',
        'kz': 'Қысқы Кубок 2025',
        'en': 'Winter Cup 2025'
    },
    'news_crossfit_challenge': {
        'ru': 'CrossFit Challenge 2025',
        'kz': 'CrossFit Challenge 2025',
        'en': 'CrossFit Challenge 2025'
    },
    'news_summer_games': {
        'ru': 'Summer Games 2025',
        'kz': 'Summer Games 2025',
        'en': 'Summer Games 2025'
    },
    
    # Документы
    'doc_championship_rules': {
        'ru': 'Положение чемпионата Казахстана',
        'kz': 'Қазақстан чемпионаты ережесі',
        'en': 'Kazakhstan Championship Regulations'
    },
    'doc_calendar': {
        'ru': 'Календарь',
        'kz': 'Күнтізбе',
        'en': 'Calendar'
    },
    'doc_standards': {
        'ru': 'Стандарты',
        'kz': 'Стандарттар',
        'en': 'Standards'
    },
    'doc_antidoping': {
        'ru': 'Антидопинг',
        'kz': 'Антидопинг',
        'en': 'Anti-Doping'
    },
    'doc_constitution': {
        'ru': 'Устав',
        'kz': 'Жарғы',
        'en': 'Constitution'
    },
    
    # Руководство
    'leader_president': {
        'ru': 'Президент Казахстанской Федерации функционального многоборья.',
        'kz': 'Қазақстандық функционалдық көпсайыс федерациясының президенті.',
        'en': 'President of the Kazakhstan Functional Fitness Federation.'
    },
    'leader_vicepresident_sponsor': {
        'ru': 'вице-президент Казахстанской Федерации функционального многоборья, генеральный спонсор, директор КДЛ "Олимп".',
        'kz': 'Қазақстандық функционалдық көпсайыс федерациясының вице-президенті, бас демеуші, КДЛ "Олимп" директоры.',
        'en': 'Vice President of the Kazakhstan Functional Fitness Federation, General Sponsor, Director of CDL "Olymp".'
    },
    'leader_vicepresident_secretary': {
        'ru': 'генеральный секретарь, вице-президент Казахстанской Федерации функционального многоборья.',
        'kz': 'бас хатшы, Қазақстандық функционалдық көпсайыс федерациясының вице-президенті.',
        'en': 'General Secretary, Vice President of the Kazakhstan Functional Fitness Federation.'
    },
    'leader_vicepresident': {
        'ru': 'вице-президент Казахстанской Федерации функционального многоборья.',
        'kz': 'Қазақстандық функционалдық көпсайыс федерациясының вице-президенті.',
        'en': 'Vice President of the Kazakhstan Functional Fitness Federation.'
    },
    
    # Карта
    'map_description': {
        'ru': 'Найдите ближайший зал для тренировок по функциональному многоборью в вашем городе',
        'kz': 'Сіздің қалаңызда функционалдық көпсайыс бойынша жаттығуға ең жақын залды табыңыз',
        'en': 'Find the nearest functional fitness gym in your city'
    },
    
    # О нас
    'about_mission_title': {
        'ru': 'Наша миссия',
        'kz': 'Біздің миссиямыз',
        'en': 'Our Mission'
    },
    'about_mission_text': {
        'ru': 'Развитие функционального многоборья в Казахстане, популяризация здорового образа жизни и подготовка спортсменов мирового уровня.',
        'kz': 'Қазақстанда функционалдық көпсайысты дамыту, салауатты өмір салтын насихаттау және әлемдік деңгейдегі спортшыларды даярлау.',
        'en': 'Development of functional fitness in Kazakhstan, promotion of a healthy lifestyle and training of world-class athletes.'
    },
    'about_values_title': {
        'ru': 'Наши ценности',
        'kz': 'Біздің құндылықтарымыз',
        'en': 'Our Values'
    },
    
    # Федерации
    'nav_federations': {
        'ru': 'Федерации',
        'kz': 'Федерациялар',
        'en': 'Federations'
    },
    'federations_title': {
        'ru': 'Международные федерации',
        'kz': 'Халықаралық федерациялар',
        'en': 'International Federations'
    },
    
    # Даты
    'date_format': {
        'ru': 'дд.мм.гггг',
        'kz': 'кк.аа.жжжж',
        'en': 'dd.mm.yyyy'
    },
    
    # Footer дополнительная информация
    'footer_info': {
        'ru': 'Республиканское общественное объединение «Казахстанская Федерация функционального многоборья» (КФФМ, Functional Fitness Kazakhstan) — официальный руководящий орган по функциональному фитнесу (functional fitness) и функциональному многоборью в Республике Казахстан. Мы развиваем спорт, организуем соревнования и объединяем спортсменов по всему Казахстану.',
        'kz': '«Қазақстандық функционалдық көпсайыс федерациясы» республикалық қоғамдық бірлестігі (ҚФКФ, Functional Fitness Kazakhstan) — Қазақстан Республикасындағы функционалдық фитнес (functional fitness) және функционалдық көпсайыс бойынша ресми басқарушы орган. Біз спортты дамытамыз, жарыстар ұйымдастырамыз және бүкіл Қазақстан бойынша спортшыларды біріктіреміз.',
        'en': 'Republican Public Association "Kazakhstan Functional Fitness Federation" (KFFF, Functional Fitness Kazakhstan) is the official governing body for functional fitness and functional pentathlon in the Republic of Kazakhstan. We develop sport, organize competitions and unite athletes throughout Kazakhstan.'
    }
}

def generate_extended_translations():
    """Генерирует расширенный файл переводов"""
    
    js_content = '''// Расширенная универсальная система переключения языков

const translations = {
    ru: {
        // ===== НАВИГАЦИЯ =====
        nav_home: 'Главная',
        nav_about: 'О нас',
        nav_news: 'Новости',
        nav_docs: 'Документы',
        nav_leadership: 'Наша команда',
        nav_media: 'Медиа',
        nav_competitions: 'Соревнования',
        nav_sponsor: 'Генеральный спонсор',
        nav_partners: 'Партнёры',
        nav_map: 'Карта залов',
        nav_federations: 'Федерации',
        
        // ===== ГЛАВНАЯ СТРАНИЦА =====
        hero_welcome: 'Добро пожаловать на наш сайт!',
        hero_description: 'Наша организация объединяет спортсменов со всего Казахстана. Мы развиваем функциональное многоборье и организуем соревнования мирового уровня.',
        
        news_title: 'Последние новости',
        news_subtitle: 'Следите за главными событиями в мире функционального многоборья',
        
        // ===== НОВОСТИ =====
        news_winter_cup: 'Зимний Кубок 2025',
        news_crossfit_challenge: 'CrossFit Challenge 2025',
        news_summer_games: 'Summer Games 2025',
        
        // ===== ДОКУМЕНТЫ =====
        docs_title: 'Документы',
        docs_subtitle: 'Официальные документы и положения федерации',
        doc_championship_rules: 'Положение чемпионата Казахстана',
        doc_calendar: 'Календарь',
        doc_standards: 'Стандарты',
        doc_antidoping: 'Антидопинг',
        doc_constitution: 'Устав',
        
        // ===== РУКОВОДСТВО =====
        leadership_title: 'Наша команда',
        leadership_subtitle: 'Профессионалы, которые развивают спорт в стране',
        leader_president: 'Президент Казахстанской Федерации функционального многоборья.',
        leader_vicepresident_sponsor: 'вице-президент Казахстанской Федерации функционального многоборья, генеральный спонсор, директор КДЛ "Олимп".',
        leader_vicepresident_secretary: 'генеральный секретарь, вице-президент Казахстанской Федерации функционального многоборья.',
        leader_vicepresident: 'вице-президент Казахстанской Федерации функционального многоборья.',
        
        // ===== МЕДИА =====
        media_title: 'Медиа',
        media_subtitle: 'Фото и видео с наших мероприятий',
        
        // ===== СОРЕВНОВАНИЯ =====
        competitions_title: 'Соревнования',
        competitions_subtitle: 'Календарь спортивных событий',
        
        // ===== КАРТА =====
        map_title: 'Карта залов',
        map_subtitle: 'Найдите ближайший зал для тренировок',
        map_description: 'Найдите ближайший зал для тренировок по функциональному многоборью в вашем городе',
        
        // ===== О НАС =====
        about_title: 'О Федерации',
        about_subtitle: 'Мы развиваем функциональное многоборье в Казахстане',
        about_mission_title: 'Наша миссия',
        about_mission_text: 'Развитие функционального многоборья в Казахстане, популяризация здорового образа жизни и подготовка спортсменов мирового уровня.',
        about_values_title: 'Наши ценности',
        
        // ===== ФЕДЕРАЦИИ =====
        federations_title: 'Международные федерации',
        
        // ===== КНОПКИ =====
        btn_more: 'Подробнее',
        btn_back: 'Назад',
        btn_download: 'Скачать',
        btn_view: 'Просмотр',
        
        // ===== ФУТЕР =====
        footer_rights: '© 2025 Все права защищены — Казахстанская Федерация функционального многоборья',
        footer_info: 'Республиканское общественное объединение «Казахстанская Федерация функционального многоборья» (КФФМ, Functional Fitness Kazakhstan) — официальный руководящий орган по функциональному фитнесу (functional fitness) и функциональному многоборью в Республике Казахстан. Мы развиваем спорт, организуем соревнования и объединяем спортсменов по всему Казахстану.'
    },
    
    kz: {
        // ===== НАВИГАЦИЯ =====
        nav_home: 'Басты бет',
        nav_about: 'Біз туралы',
        nav_news: 'Жаңалықтар',
        nav_docs: 'Құжаттар',
        nav_leadership: 'Біздің команда',
        nav_media: 'Медиа',
        nav_competitions: 'Жарыстар',
        nav_sponsor: 'Бас демеуші',
        nav_partners: 'Серіктестер',
        nav_map: 'Залдар картасы',
        nav_federations: 'Федерациялар',
        
        // ===== ГЛАВНАЯ СТРАНИЦА =====
        hero_welcome: 'Біздің сайтқа қош келдіңіз!',
        hero_description: 'Біздің ұйым бүкіл Қазақстаннан спортшыларды біріктіреді. Біз функционалдық көпсайысты дамытамыз және әлемдік деңгейдегі жарыстар ұйымдастырамыз.',
        
        news_title: 'Соңғы жаңалықтар',
        news_subtitle: 'Функционалдық көпсайыс әлеміндегі басты оқиғаларды қадағалаңыз',
        
        // ===== НОВОСТИ =====
        news_winter_cup: 'Қысқы Кубок 2025',
        news_crossfit_challenge: 'CrossFit Challenge 2025',
        news_summer_games: 'Summer Games 2025',
        
        // ===== ДОКУМЕНТЫ =====
        docs_title: 'Құжаттар',
        docs_subtitle: 'Федерацияның ресми құжаттары мен ережелері',
        doc_championship_rules: 'Қазақстан чемпионаты ережесі',
        doc_calendar: 'Күнтізбе',
        doc_standards: 'Стандарттар',
        doc_antidoping: 'Антидопинг',
        doc_constitution: 'Жарғы',
        
        // ===== РУКОВОДСТВО =====
        leadership_title: 'Біздің команда',
        leadership_subtitle: 'Елде спортты дамытатын кәсіпқойлар',
        leader_president: 'Қазақстандық функционалдық көпсайыс федерациясының президенті.',
        leader_vicepresident_sponsor: 'Қазақстандық функционалдық көпсайыс федерациясының вице-президенті, бас демеуші, КДЛ "Олимп" директоры.',
        leader_vicepresident_secretary: 'бас хатшы, Қазақстандық функционалдық көпсайыс федерациясының вице-президенті.',
        leader_vicepresident: 'Қазақстандық функционалдық көпсайыс федерациясының вице-президенті.',
        
        // ===== МЕДИА =====
        media_title: 'Медиа',
        media_subtitle: 'Біздің іс-шараларымыздан фото және видео',
        
        // ===== СОРЕВНОВАНИЯ =====
        competitions_title: 'Жарыстар',
        competitions_subtitle: 'Спорттық оқиғалар күнтізбесі',
        
        // ===== КАРТА =====
        map_title: 'Залдар картасы',
        map_subtitle: 'Жаттығуға ең жақын залды табыңыз',
        map_description: 'Сіздің қалаңызда функционалдық көпсайыс бойынша жаттығуға ең жақын залды табыңыз',
        
        // ===== О НАС =====
        about_title: 'Федерация туралы',
        about_subtitle: 'Біз Қазақстанда функционалдық көпсайысты дамытамыз',
        about_mission_title: 'Біздің миссиямыз',
        about_mission_text: 'Қазақстанда функционалдық көпсайысты дамыту, салауатты өмір салтын насихаттау және әлемдік деңгейдегі спортшыларды даярлау.',
        about_values_title: 'Біздің құндылықтарымыз',
        
        // ===== ФЕДЕРАЦИИ =====
        federations_title: 'Халықаралық федерациялар',
        
        // ===== КНОПКИ =====
        btn_more: 'Толығырақ',
        btn_back: 'Артқа',
        btn_download: 'Жүктеп алу',
        btn_view: 'Қарау',
        
        // ===== ФУТЕР =====
        footer_rights: '© 2025 Барлық құқықтар қорғалған — Қазақстандық функционалдық көпсайыс федерациясы',
        footer_info: '«Қазақстандық функционалдық көпсайыс федерациясы» республикалық қоғамдық бірлестігі (ҚФКФ, Functional Fitness Kazakhstan) — Қазақстан Республикасындағы функционалдық фитнес (functional fitness) және функционалдық көпсайыс бойынша ресми басқарушы орган. Біз спортты дамытамыз, жарыстар ұйымдастырамыз және бүкіл Қазақстан бойынша спортшыларды біріктіреміз.'
    },
    
    en: {
        // ===== NAVIGATION =====
        nav_home: 'Home',
        nav_about: 'About',
        nav_news: 'News',
        nav_docs: 'Documents',
        nav_leadership: 'Our Team',
        nav_media: 'Media',
        nav_competitions: 'Competitions',
        nav_sponsor: 'General Sponsor',
        nav_partners: 'Partners',
        nav_map: 'Gym Map',
        nav_federations: 'Federations',
        
        // ===== HOME PAGE =====
        hero_welcome: 'Welcome to our website!',
        hero_description: 'Our organization unites athletes from all over Kazakhstan. We develop functional fitness and organize world-class competitions.',
        
        news_title: 'Latest News',
        news_subtitle: 'Stay updated with the main events in the world of functional fitness',
        
        // ===== NEWS =====
        news_winter_cup: 'Winter Cup 2025',
        news_crossfit_challenge: 'CrossFit Challenge 2025',
        news_summer_games: 'Summer Games 2025',
        
        // ===== DOCUMENTS =====
        docs_title: 'Documents',
        docs_subtitle: 'Official documents and regulations of the federation',
        doc_championship_rules: 'Kazakhstan Championship Regulations',
        doc_calendar: 'Calendar',
        doc_standards: 'Standards',
        doc_antidoping: 'Anti-Doping',
        doc_constitution: 'Constitution',
        
        // ===== LEADERSHIP =====
        leadership_title: 'Our Team',
        leadership_subtitle: 'Professionals who develop sports in the country',
        leader_president: 'President of the Kazakhstan Functional Fitness Federation.',
        leader_vicepresident_sponsor: 'Vice President of the Kazakhstan Functional Fitness Federation, General Sponsor, Director of CDL "Olymp".',
        leader_vicepresident_secretary: 'General Secretary, Vice President of the Kazakhstan Functional Fitness Federation.',
        leader_vicepresident: 'Vice President of the Kazakhstan Functional Fitness Federation.',
        
        // ===== MEDIA =====
        media_title: 'Media',
        media_subtitle: 'Photos and videos from our events',
        
        // ===== COMPETITIONS =====
        competitions_title: 'Competitions',
        competitions_subtitle: 'Sports events calendar',
        
        // ===== MAP =====
        map_title: 'Gym Map',
        map_subtitle: 'Find the nearest gym for training',
        map_description: 'Find the nearest functional fitness gym in your city',
        
        // ===== ABOUT =====
        about_title: 'About Federation',
        about_subtitle: 'We develop functional fitness in Kazakhstan',
        about_mission_title: 'Our Mission',
        about_mission_text: 'Development of functional fitness in Kazakhstan, promotion of a healthy lifestyle and training of world-class athletes.',
        about_values_title: 'Our Values',
        
        // ===== FEDERATIONS =====
        federations_title: 'International Federations',
        
        // ===== BUTTONS =====
        btn_more: 'Read More',
        btn_back: 'Back',
        btn_download: 'Download',
        btn_view: 'View',
        
        // ===== FOOTER =====
        footer_rights: '© 2025 All rights reserved — Kazakhstan Functional Fitness Federation',
        footer_info: 'Republican Public Association "Kazakhstan Functional Fitness Federation" (KFFF, Functional Fitness Kazakhstan) is the official governing body for functional fitness and functional pentathlon in the Republic of Kazakhstan. We develop sport, organize competitions and unite athletes throughout Kazakhstan.'
    }
};

// Функция перевода страницы
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Сохраняем выбранный язык
    localStorage.setItem('selectedLanguage', lang);
    
    // Обновляем отображение текущего языка
    const currentLangDisplay = document.getElementById('currentLang');
    if (currentLangDisplay) {
        currentLangDisplay.textContent = lang.toUpperCase();
    }
    
    // Обновляем активный пункт в выпадающем меню
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
}

// Инициализация переключателя языков
document.addEventListener('DOMContentLoaded', () => {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    // Открытие/закрытие выпадающего меню
    if (languageBtn) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
    }

    // Выбор языка
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            translatePage(lang);
            languageDropdown.classList.remove('active');
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-switcher')) {
            if (languageDropdown) {
                languageDropdown.classList.remove('active');
            }
        }
    });

    // Загрузка сохраненного языка при загрузке страницы
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    translatePage(savedLang);
});
'''
    
    with open('language.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("Расширенный файл переводов создан: language.js")

if __name__ == "__main__":
    generate_extended_translations()
