#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для массовой оптимизации всех HTML страниц сайта КФФМ
Применяет SEO, Open Graph, lazy loading, defer JS, мобильные оптимизации
"""

import re
import os

# Конфигурация страниц с метаданными
PAGES_CONFIG = {
    'news2.html': {
        'title': 'Чемпионат Австралии IF3 2024 — Казахстанская Федерация функционального многоборья',
        'description': 'Чемпионат Австралии IF3 по функциональному фитнесу 2024. Результаты и итоги соревнований.',
        'keywords': 'IF3, функциональный фитнес, Австралия, чемпионат, 2024, КФФМ',
        'og_title': 'Чемпионат Австралии IF3 2024',
        'og_image': 'https://www.functionalfitness.kz/austr1.png',
        'url': 'https://www.functionalfitness.kz/news2'
    },
    'news3.html': {
        'title': 'Ливийский чемпионат 2024 — Казахстанская Федерация функционального многоборья',
        'description': 'Результаты чемпионата по функциональному фитнесу в Ливии 2024',
        'keywords': 'КФФМ, Ливия, функциональный фитнес, чемпионат, 2024',
        'og_title': 'Ливийский чемпионат 2024',
        'og_image': 'https://www.functionalfitness.kz/livii.jpg',
        'url': 'https://www.functionalfitness.kz/news3'
    },
    'news4.html': {
        'title': 'Чемпионат Азии 2024 — Казахстанская Федерация функционального многоборья',
        'description': 'Чемпионат Азии по функциональному фитнесу 2024. Результаты азиатских соревнований.',
        'keywords': 'КФФМ, Азия, функциональный фитнес, чемпионат Азии, 2024',
        'og_title': 'Чемпионат Азии 2024',
        'og_image': 'https://www.functionalfitness.kz/imageschampionat/asia1.jpg',
        'url': 'https://www.functionalfitness.kz/news4'
    },
    'news5.html': {
        'title': 'Открытие залов в Казахстане — Казахстанская Федерация функционального многоборья',
        'description': 'Открытие новых залов функционального фитнеса в Казахстане',
        'keywords': 'КФФМ, залы, функциональный фитнес, Казахстан, открытие',
        'og_title': 'Открытие залов в Казахстане',
        'og_image': 'https://www.functionalfitness.kz/imageskz/kz.jpg',
        'url': 'https://www.functionalfitness.kz/news5'
    },
    'news6.html': {
        'title': 'Соглашение с партнерами — Казахстанская Федерация функционального многоборья',
        'description': 'Подписание соглашения о сотрудничестве КФФМ с партнерами',
        'keywords': 'КФФМ, соглашение, партнеры, сотрудничество, функциональный фитнес',
        'og_title': 'Соглашение с партнерами',
        'og_image': 'https://www.functionalfitness.kz/sogl2.jpg',
        'url': 'https://www.functionalfitness.kz/news6'
    },
    'news7.html': {
        'title': 'Игры функционального фитнеса — Казахстанская Федерация функционального многоборья',
        'description': 'Игры функционального фитнеса - крупнейшие соревнования года',
        'keywords': 'КФФМ, игры, функциональный фитнес, соревнования, спорт',
        'og_title': 'Игры функционального фитнеса',
        'og_image': 'https://www.functionalfitness.kz/game1.jpg',
        'url': 'https://www.functionalfitness.kz/news7'
    },
    'news9.html': {
        'title': 'Последние новости — Казахстанская Федерация функционального многоборья',
        'description': 'Актуальные новости функционального фитнеса в Казахстане',
        'keywords': 'КФФМ, новости, функциональный фитнес, Казахстан, события',
        'og_title': 'Последние новости КФФМ',
        'og_image': 'https://www.functionalfitness.kz/logo.png',
        'url': 'https://www.functionalfitness.kz/news9'
    },
    'partners.html': {
        'title': 'Партнеры — Казахстанская Федерация функционального многоборья',
        'description': 'Партнеры и спонсоры Казахстанской Федерации функционального многоборья',
        'keywords': 'КФФМ, партнеры, спонсоры, сотрудничество, функциональный фитнес',
        'og_title': 'Партнеры КФФМ',
        'og_image': 'https://www.functionalfitness.kz/sponsor.png',
        'url': 'https://www.functionalfitness.kz/partners'
    },
    'partners2.html': {
        'title': 'Наши партнеры — Казахстанская Федерация функционального многоборья',
        'description': 'Список партнеров и спонсоров федерации функционального многоборья',
        'keywords': 'КФФМ, партнеры, спонсоры, поддержка, функциональный фитнес',
        'og_title': 'Наши партнеры',
        'og_image': 'https://www.functionalfitness.kz/sponsor.png',
        'url': 'https://www.functionalfitness.kz/partners2'
    },
    'docs.html': {
        'title': 'Документы — Казахстанская Федерация функционального многоборья',
        'description': 'Официальные документы, регламенты и положения КФФМ',
        'keywords': 'КФФМ, документы, регламенты, положения, правила',
        'og_title': 'Документы КФФМ',
        'og_image': 'https://www.functionalfitness.kz/logo.png',
        'url': 'https://www.functionalfitness.kz/docs'
    },
    'docs1.html': {
        'title': 'Положение о чемпионатах — Казахстанская Федерация функционального многоборья',
        'description': 'Положение о проведении чемпионатов по функциональному фитнесу',
        'keywords': 'КФФМ, положение, чемпионат, регламент, правила',
        'og_title': 'Положение о чемпионатах',
        'og_image': 'https://www.functionalfitness.kz/pologenie.jpg',
        'url': 'https://www.functionalfitness.kz/docs1'
    },
    'docs2.html': {
        'title': 'Аккредитация — Казахстанская Федерация функционального многоборья',
        'description': 'Порядок аккредитации спортсменов и тренеров в КФФМ',
        'keywords': 'КФФМ, аккредитация, спортсмены, тренеры, регистрация',
        'og_title': 'Аккредитация в КФФМ',
        'og_image': 'https://www.functionalfitness.kz/acred.png',
        'url': 'https://www.functionalfitness.kz/docs2'
    },
    'docs3.html': {
        'title': 'Календарь соревнований — Казахстанская Федерация функционального многоборья',
        'description': 'Календарь соревнований по функциональному фитнесу на текущий год',
        'keywords': 'КФФМ, календарь, соревнования, турниры, расписание',
        'og_title': 'Календарь соревнований',
        'og_image': 'https://www.functionalfitness.kz/kalen.jpg',
        'url': 'https://www.functionalfitness.kz/docs3'
    },
    'docs4.html': {
        'title': 'Стандарты и правила — Казахстанская Федерация функционального многоборья',
        'description': 'Стандарты выполнения упражнений и правила соревнований',
        'keywords': 'КФФМ, стандарты, правила, упражнения, регламент',
        'og_title': 'Стандарты и правила',
        'og_image': 'https://www.functionalfitness.kz/ruls.jpg',
        'url': 'https://www.functionalfitness.kz/docs4'
    },
    'media.html': {
        'title': 'Медиа — Казахстанская Федерация функционального многоборья',
        'description': 'Фото и видео материалы соревнований и мероприятий КФФМ',
        'keywords': 'КФФМ, медиа, фото, видео, соревнования, галерея',
        'og_title': 'Медиа КФФМ',
        'og_image': 'https://www.functionalfitness.kz/logo.png',
        'url': 'https://www.functionalfitness.kz/media'
    },
    'competitions.html': {
        'title': 'Соревнования — Казахстанская Федерация функционального многоборья',
        'description': 'Информация о соревнованиях по функциональному фитнесу в Казахстане',
        'keywords': 'КФФМ, соревнования, турниры, чемпионаты, функциональный фитнес',
        'og_title': 'Соревнования КФФМ',
        'og_image': 'https://www.functionalfitness.kz/logo.png',
        'url': 'https://www.functionalfitness.kz/competitions'
    },
    'federations.html': {
        'title': 'Федерации — Казахстанская Федерация функционального многоборья',
        'description': 'Международные федерации функционального фитнеса и партнерство',
        'keywords': 'КФФМ, федерации, IF3, международное сотрудничество, партнерство',
        'og_title': 'Федерации функционального фитнеса',
        'og_image': 'https://www.functionalfitness.kz/logo.png',
        'url': 'https://www.functionalfitness.kz/federations'
    },
    'map.html': {
        'title': 'Карта залов — Казахстанская Федерация функционального многоборья',
        'description': 'Интерактивная карта залов функционального фитнеса в Казахстане',
        'keywords': 'КФФМ, карта, залы, функциональный фитнес, Казахстан, расположение',
        'og_title': 'Карта залов КФФМ',
        'og_image': 'https://www.functionalfitness.kz/mapslogo.png',
        'url': 'https://www.functionalfitness.kz/map'
    }
}

def add_meta_tags(html_content, config):
    """Добавляет SEO и Open Graph мета-теги"""
    
    # Ищем существующий title и description
    title_pattern = r'<title>.*?</title>'
    desc_pattern = r'<meta name="description" content=".*?" />'
    
    # Создаем новые мета-теги
    new_meta_tags = f'''<title>{config['title']}</title>
    <meta name="description" content="{config['description']}" />
    <meta name="keywords" content="{config['keywords']}" />
    <link rel="canonical" href="{config['url']}" />
    
    <!-- Open Graph / Facebook / VK -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="{config['url']}" />
    <meta property="og:title" content="{config['og_title']}" />
    <meta property="og:description" content="{config['description']}" />
    <meta property="og:image" content="{config['og_image']}" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:site_name" content="КФФМ - Казахстанская Федерация функционального многоборья" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{config['og_title']}" />
    <meta name="twitter:description" content="{config['description']}" />
    <meta name="twitter:image" content="{config['og_image']}" />
    
    <link href="https://cdnjs'''
    
    # Заменяем старые теги новыми
    html_content = re.sub(title_pattern, '', html_content, count=1)
    html_content = re.sub(desc_pattern, '', html_content, count=1)
    html_content = html_content.replace('<link href="https://cdnjs', new_meta_tags, 1)
    
    return html_content

def add_mobile_optimizations(html_content):
    """Добавляет мобильные CSS оптимизации"""
    
    mobile_css = '''/* Отключение тяжелых анимаций для старых телефонов */
            .particles,
            .neural-network {
                display: none !important;
            }

            body {
                background: #ffffff;
            }

            .fade-in {
                opacity: 1 !important;
                transform: none !important;
            }

            .navbar {
                padding: 10px 0;
            }'''
    
    # Ищем @media (max-width: 768px) и добавляем оптимизации
    pattern = r'(@media \(max-width: 768px\) \{\s*\.navbar \{)'
    replacement = r'@media (max-width: 768px) {\n            ' + mobile_css.split('.navbar')[0] + r'\1'
    
    html_content = re.sub(pattern, replacement, html_content, count=1)
    
    return html_content

def add_js_mobile_check(html_content):
    """Добавляет проверку мобильного устройства в JavaScript"""
    
    # Добавляем проверку перед функцией createParticles
    pattern = r'(function createParticles\(\) \{)'
    replacement = r'''// Определение мобильного устройства
        const isMobile = window.innerWidth <= 768;

        \1
            // Отключение анимаций на мобильных устройствах для производительности
            if (isMobile) return;

'''
    
    html_content = re.sub(pattern, replacement, html_content, count=1)
    
    # Уменьшаем количество частиц с 50 до 30
    html_content = html_content.replace('for (let i = 0; i < 50; i++)', 'for (let i = 0; i < 30; i++)', 1)
    
    return html_content

def add_defer_to_scripts(html_content):
    """Добавляет defer атрибут к language.js"""
    
    html_content = html_content.replace(
        '<script src="/language.js"></script>',
        '<script src="/language.js" defer></script>'
    )
    
    return html_content

def add_lazy_loading(html_content):
    """Добавляет loading="lazy" ко всем изображениям"""
    
    # Ищем все <img> без loading="lazy"
    pattern = r'<img\s+([^>]*?)(?<!loading="lazy")(/?>)'
    
    def add_lazy(match):
        attrs = match.group(1)
        closing = match.group(2)
        
        # Если уже есть loading="lazy", не добавляем
        if 'loading=' in attrs:
            return match.group(0)
        
        # Добавляем loading="lazy" перед закрывающим тегом
        return f'<img {attrs.rstrip()} loading="lazy"{closing}'
    
    html_content = re.sub(pattern, add_lazy, html_content)
    
    return html_content

def optimize_html_file(filepath, config):
    """Применяет все оптимизации к HTML файлу"""
    
    print(f"Оптимизация {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Применяем оптимизации
        content = add_meta_tags(content, config)
        content = add_mobile_optimizations(content)
        content = add_js_mobile_check(content)
        content = add_defer_to_scripts(content)
        content = add_lazy_loading(content)
        
        # Сохраняем
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ {filepath} оптимизирован")
        return True
        
    except Exception as e:
        print(f"✗ Ошибка при оптимизации {filepath}: {e}")
        return False

def main():
    """Главная функция"""
    
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    print("Начинаем массовую оптимизацию HTML страниц...\n")
    
    success_count = 0
    fail_count = 0
    
    for filename, config in PAGES_CONFIG.items():
        filepath = os.path.join(base_dir, filename)
        
        if os.path.exists(filepath):
            if optimize_html_file(filepath, config):
                success_count += 1
            else:
                fail_count += 1
        else:
            print(f"⚠ Файл не найден: {filepath}")
            fail_count += 1
    
    print(f"\n{'='*50}")
    print(f"Оптимизация завершена!")
    print(f"Успешно: {success_count}")
    print(f"Ошибок: {fail_count}")
    print(f"{'='*50}")

if __name__ == '__main__':
    main()
