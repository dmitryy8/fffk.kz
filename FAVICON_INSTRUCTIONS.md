# ИНСТРУКЦИЯ ПО СОЗДАНИЮ FAVICON

## ШАГ 1: Подготовка исходного изображения

1. Откройте файл `footer-logo.png` или `logo.png`
2. Убедитесь, что это квадратное изображение 512×512 px

## ШАГ 2: Генерация всех файлов favicon

1. Перейдите на сайт: https://realfavicongenerator.net/
2. Нажмите "Select your Favicon image"
3. Загрузите `footer-logo.png`
4. Настройте параметры:
   - iOS: оставьте по умолчанию
   - Android: оставьте по умолчанию
   - Windows: оставьте по умолчанию
5. Нажмите "Generate your Favicons and HTML code"
6. Скачайте архив с файлами
7. Извлеките все файлы в корень проекта (c:\Users\Анастасия\Desktop\fffk.kz\)

## ШАГ 3: Проверка файлов

После генерации у вас должны быть файлы:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png
- site.webmanifest

Все они должны быть в корне проекта.

## ШАГ 4: Агент обновит HTML файлы

После генерации файлов сообщите агенту, и он автоматически обновит все HTML файлы.
