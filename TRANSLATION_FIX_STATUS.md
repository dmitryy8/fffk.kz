# 🔍 ДИАГНОСТИКА СИСТЕМЫ ПЕРЕВОДОВ

## ✅ ЧТО БЫЛО ИСПРАВЛЕНО

### 1. Обновлен `language.js`
- ✅ Добавлена поддержка `data-translate-ru/kz/en` (прямые переводы)
- ✅ Добавлен перевод `<title>` и `<meta>` тегов
- ✅ Добавлены ключи `meta_title_home` и `meta_description_home`
- ✅ Функция `translatePage()` обновлена для обработки обоих типов атрибутов

### 2. Исправлен `index.html`
- ✅ Добавлены `data-translate-ru/kz/en` для заголовка федерации
- ✅ Убран хардкод в блоке федерации

## 🔧 ЧТО НУЖНО ДОДЕЛАТЬ

### 1. Добавить переводы для всех страниц в `language.js`
Нужно добавить ключи для каждой страницы:
```javascript
// About page
meta_title_about: 'О нас — КФФМ',
meta_description_about: '...',

// News page  
meta_title_news: 'Новости — КФФМ',
meta_description_news: '...',

// и т.д. для всех страниц
```

### 2. Обновить функцию translatePage()
Сделать её умнее - определять текущую страницу и использовать соответствующие ключи:
```javascript
// Определяем текущую страницу
const path = window.location.pathname;
let titleKey = 'meta_title_home';
let descKey = 'meta_description_home';

if (path.includes('/about')) {
    titleKey = 'meta_title_about';
    descKey = 'meta_description_about';
}
// и т.д.
```

### 3. Проверить все страницы на хардкоды
- [ ] about.html
- [ ] news.html
- [ ] docs.html
- [ ] leadership.html
- [ ] media.html
- [ ] competitions.html
- [ ] partners.html
- [ ] federations.html
- [ ] news1-10.html

## 🎯 ПРИОРИТЕТ

**СРОЧНО:**
1. Добавить поддержку переводов meta для разных страниц в language.js
2. Проверить основные страницы (index, about, news)
3. Протестировать переключение языков

**МОЖНО ПОЗЖЕ:**
- Оптимизировать код
- Добавить fallback для отсутствующих переводов
- Проверить все 28 HTML файлов
