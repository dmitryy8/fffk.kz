# -*- coding: utf-8 -*-
"""
Автоматическое добавление переводов ко всем страницам новостей
"""

import re
import os

# Переводы для всех новостей
NEWS_TRANSLATIONS = {
    'news1': {
        'title_ru': 'Итоги соревнований Astana Open Cup 2025',
        'title_kz': 'Astana Open Cup 2025 жарыстарының қорытындылары',
        'title_en': 'Astana Open Cup 2025 Competition Results',
        'text_ru': '''7 мая в столице прошёл второй ежегодный открытый турнир по функциональному многоборью — Astana Open Cup 2025!
В финальном отборе участвовали более 60 сильнейших атлетов из Казахстана, России, Кыргызстана и Узбекистана.
Соревнования прошли благодаря полной поддержке генерального спонсора @kdlolymp — в лице Сулейменова Ерлана Мельсовича @suleimenov.yerlan
Участники вышли на максимум — демонстрируя не только физическую мощь, но и стойкость духа.
Каждая категория стала настоящей ареной силы, выносливости и высокого уровня подготовки.
Поздравляем всех участников и победителей!
Атлеты продемонстрировали высокий уровень подготовки, ещё раз подтвердив, что функциональное многоборье стремительно развивается как в организационном, так и в спортивном плане.
Благодарим всех, кто стоял за созданием этого турнира —организаторов, партнёров и всю команду, вложившую в него силы и сердце.''',
        'text_kz': '''7 мамырда астанада екінші жыл сайынғы ашық турнир өтті — Astana Open Cup 2025!
Финалдық іріктеуге Қазақстан, Ресей, Қырғызстан және Өзбекстаннан 60-тан астам мықты атлет қатысты.
Жарыстар бас демеуші @kdlolymp — Сүлейменов Ерлан Мелісұлы @suleimenov.yerlan-ның толық қолдауымен өтті.
Қатысушылар максимумға шықты — тек физикалық күш емес, рух берікділігін де көрсетті.
Әр санат күш, төзімділік және жоғары дайындық деңгейінің нағыз алаңына айналды.
Барлық қатысушылар мен жеңімпаздарды құттықтаймыз!
Атлеттер жоғары дайындық деңгейін көрсетті, функционалдық көпсайыс ұйымдастыру және спорттық жағынан қарқынды дамып жатқанын тағы бір рет растады.
Осы турнирді құруға көмектескен барлық ұйымдастырушыларға, серіктестерге және оған күш пен жүрек салған бүкіл командаға алғыс білдіреміз.''',
        'text_en': '''On May 7, the second annual open tournament in functional fitness took place in the capital — Astana Open Cup 2025!
The final selection featured more than 60 of the strongest athletes from Kazakhstan, Russia, Kyrgyzstan, and Uzbekistan.
The competition was held with the full support of the general sponsor @kdlolymp — represented by Suleimenov Yerlan Melsovich @suleimenov.yerlan
Participants performed at their maximum — demonstrating not only physical strength but also spirit resilience.
Each category became a true arena of strength, endurance, and high level of preparation.
Congratulations to all participants and winners!
Athletes demonstrated a high level of preparation, once again confirming that functional fitness is rapidly developing both organizationally and athletically.
We thank everyone who stood behind the creation of this tournament — organizers, partners, and the entire team who put their strength and heart into it.'''
    },
    
    'news3': {
        'title_ru': 'Казахстан — победитель Чемпионата Азии по функциональному многоборью 2025!',
        'title_kz': 'Қазақстан — 2025 жылғы Азия функционалдық көпсайыс чемпионатының жеңімпазы!',
        'title_en': 'Kazakhstan — Winner of the 2025 Asian Functional Fitness Championship!',
    },
    
    'news4': {
        'title_ru': 'Чемпионат Казахстана по функциональному многоборью 2025 состоялся в конце сентября!',
        'title_kz': 'Қазақстан функционалдық көпсайыс чемпионаты 2025 қыркүйек айының соңында өтті!',
        'title_en': 'Kazakhstan Functional Fitness Championship 2025 held at the end of September!',
    },
    
    'news5': {
        'title_ru': 'iF3 подписывает партнерское соглашение с Geraklion',
        'title_kz': 'iF3 Geraklion серіктестік келісімге қол қояды',
        'title_en': 'iF3 signs partnership agreement with Geraklion',
    },
    
    'news6': {
        'title_ru': 'Ливийская федерация функционального фитнеса получила признание Министерства спорта Ливии',
        'title_kz': 'Ливия функционалдық фитнес федерациясы Ливия Спорт министрлігінің мойындауын алды',
        'title_en': 'Libyan Functional Fitness Federation receives recognition from Libya\'s Ministry of Sports',
    },
    
    'news7': {
        'title_ru': 'Итоги IF3 Masters World Championship 2025',
        'title_kz': 'IF3 Masters әлем чемпионаты 2025 қорытындылары',
        'title_en': 'IF3 Masters World Championship 2025 Results',
    },
}

def add_translate_attributes(file_path, news_key):
    """Добавляет атрибуты перевода к HTML файлу новости"""
    
    if not os.path.exists(file_path):
        print(f"Файл {file_path} не найден!")
        return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if news_key not in NEWS_TRANSLATIONS:
        print(f"Переводы для {news_key} не найдены!")
        return False
    
    trans = NEWS_TRANSLATIONS[news_key]
    
    # Добавляем атрибуты к заголовку h3
    if 'title_ru' in trans:
        # Ищем h3 с заголовком
        h3_pattern = r'(<h3[^>]*>)\s*([^<]+)\s*(</h3>)'
        def add_title_attrs(match):
            opening = match.group(1)
            text = match.group(2).strip()
            closing = match.group(3)
            
            # Проверяем, похож ли текст на заголовок нашей новости
            if news_key == 'news1' and 'Astana Open Cup' in text:
                new_opening = opening.replace('>', 
                    f' data-translate-ru="{trans["title_ru"]}" '
                    f'data-translate-kz="{trans["title_kz"]}" '
                    f'data-translate-en="{trans["title_en"]}">')
                return f'{new_opening}\n                    {trans["title_ru"]}\n                {closing}'
            
            return match.group(0)
        
        content = re.sub(h3_pattern, add_title_attrs, content)
    
    # Сохраняем изменённый файл
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Обновлён файл: {file_path}")
    return True

# Обрабатываем все файлы новостей
if __name__ == '__main__':
    base_path = os.path.dirname(__file__)
    
    for i in range(1, 11):
        news_file = os.path.join(base_path, f'news{i}.html')
        news_key = f'news{i}'
        
        if os.path.exists(news_file):
            print(f"\nОбработка {news_file}...")
            add_translate_attributes(news_file, news_key)
        else:
            print(f"Файл {news_file} не существует, пропускаем...")
    
    print("\n✅ Обработка завершена!")
