// Универсальная система переключения языков для всех страниц

const translations = {
    ru: {
        // Навигация
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
        
        // Главная страница
        news_title: 'Последние новости',
        news_subtitle: 'Следите за главными событиями в мире функционального многоборья',
        docs_title: 'Документы',
        docs_subtitle: 'Официальные документы и положения федерации',
        
        // Футер
        footer_rights: '© 2025 Все права защищены — Казахстанская Федерация функционального многоборья',
        
        // Кнопки
        btn_more: 'Подробнее',
        btn_back: 'Назад',
        btn_download: 'Скачать',
        btn_view: 'Просмотр',
        
        // О нас
        about_title: 'О Федерации',
        about_subtitle: 'Мы развиваем функциональное многоборье в Казахстане',
        
        // Руководство
        leadership_title: 'Наша команда',
        leadership_subtitle: 'Наша команда профессионалов',
        
        // Медиа
        media_title: 'Медиа',
        media_subtitle: 'Фото и видео с наших мероприятий',
        
        // Соревнования
        competitions_title: 'Соревнования',
        competitions_subtitle: 'Календарь спортивных событий',
        
        // Карта
        map_title: 'Карта залов',
        map_subtitle: 'Найдите ближайший зал для тренировок'
    },
    
    kz: {
        // Навигация
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
        
        // Главная страница
        news_title: 'Соңғы жаңалықтар',
        news_subtitle: 'Функционалдық көпсайыс әлеміндегі басты оқиғаларды қадағалаңыз',
        docs_title: 'Құжаттар',
        docs_subtitle: 'Федерацияның ресми құжаттары мен ережелері',
        
        // Футер
        footer_rights: '© 2025 Барлық құқықтар қорғалған — Қазақстандық функционалдық көпсайыс федерациясы',
        
        // Кнопки
        btn_more: 'Толығырақ',
        btn_back: 'Артқа',
        btn_download: 'Жүктеп алу',
        btn_view: 'Қарау',
        
        // О нас
        about_title: 'Федерация туралы',
        about_subtitle: 'Біз Қазақстанда функционалдық көпсайысты дамытамыз',
        
        // Руководство
        leadership_title: 'Біздің команда',
        leadership_subtitle: 'Біздің кәсіби команда',
        
        // Медиа
        media_title: 'Медиа',
        media_subtitle: 'Біздің іс-шараларымыздан фото және видео',
        
        // Соревнования
        competitions_title: 'Жарыстар',
        competitions_subtitle: 'Спорттық оқиғалар күнтізбесі',
        
        // Карта
        map_title: 'Залдар картасы',
        map_subtitle: 'Жаттығуға ең жақын залды табыңыз'
    },
    
    en: {
        // Навигация
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
        
        // Главная страница
        news_title: 'Latest News',
        news_subtitle: 'Stay updated with the main events in the world of functional fitness',
        docs_title: 'Documents',
        docs_subtitle: 'Official documents and regulations of the federation',
        
        // Футер
        footer_rights: '© 2025 All rights reserved — Kazakhstan Functional Fitness Federation',
        
        // Кнопки
        btn_more: 'Read More',
        btn_back: 'Back',
        btn_download: 'Download',
        btn_view: 'View',
        
        // О нас
        about_title: 'About Federation',
        about_subtitle: 'We develop functional fitness in Kazakhstan',
        
        // Руководство
        leadership_title: 'Our Team',
        leadership_subtitle: 'Our team of professionals',
        
        // Медиа
        media_title: 'Media',
        media_subtitle: 'Photos and videos from our events',
        
        // Соревнования
        competitions_title: 'Competitions',
        competitions_subtitle: 'Sports events calendar',
        
        // Карта
        map_title: 'Gym Map',
        map_subtitle: 'Find the nearest gym for training'
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
