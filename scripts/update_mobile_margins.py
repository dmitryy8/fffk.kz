import os
import re

# Список всех HTML файлов
html_files = [
    'index.html', 'about.html', 'competitions.html', 'docs.html', 
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html',
    'leadership.html', 'map.html', 'media.html', 'news.html',
    'news1.html', 'news2.html', 'news3.html', 'news4.html',
    'news5.html', 'news6.html', 'partners.html', 'partners2.html'
]

for filename in html_files:
    filepath = os.path.join(os.path.dirname(__file__), filename)
    
    if not os.path.exists(filepath):
        print(f"Пропускаем {filename} - файл не найден")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Ищем секцию @media (max-width: 768px)
    media_pattern = r'(@media\s*\(max-width:\s*768px\)\s*\{)'
    
    if re.search(media_pattern, content):
        # Проверяем, есть ли уже .federation-hero в медиа-запросе
        media_section_match = re.search(r'@media\s*\(max-width:\s*768px\)\s*\{.*?\n\s*\}(?=\s*</style>)', content, re.DOTALL)
        
        if media_section_match:
            media_content = media_section_match.group(0)
            
            # Если .federation-hero уже есть в медиа-запросе, обновляем
            if '.federation-hero' in media_content:
                # Обновляем существующее правило
                new_media = re.sub(
                    r'(\.federation-hero\s*\{[^}]*?)(margin-top:\s*\d+px)',
                    r'\1margin-top: 20px',
                    media_content
                )
                # Если margin-top не было, добавляем
                if 'margin-top' not in media_content or 'margin-top' not in new_media:
                    new_media = re.sub(
                        r'(\.federation-hero\s*\{)',
                        r'\1\n                margin-top: 20px !important;',
                        new_media
                    )
                content = content.replace(media_content, new_media)
            else:
                # Добавляем новое правило .federation-hero в конец медиа-запроса
                insertion_point = media_section_match.end() - 1  # Перед закрывающей }
                
                new_rule = '\n            .federation-hero {\n                margin-top: 20px !important;\n            }\n        '
                content = content[:insertion_point] + new_rule + content[insertion_point:]
    
    # Для index.html добавляем также правило для приветственного блока
    if filename == 'index.html':
        # Ищем inline style приветственного блока и добавляем медиа-запрос
        # Сначала проверим, есть ли уже правило для приветственного блока
        if '@media (max-width: 768px)' in content:
            # Добавляем стиль для секции с приветствием (используем селектор по тексту или позиции)
            media_section_match = re.search(r'@media\s*\(max-width:\s*768px\)\s*\{.*?\n\s*\}(?=\s*</style>)', content, re.DOTALL)
            if media_section_match:
                media_content = media_section_match.group(0)
                
                # Добавляем правило для приветственного блока, если его нет
                if 'section[style*="Добро пожаловать"]' not in media_content and '.welcome-section' not in media_content:
                    insertion_point = media_section_match.end() - 1
                    new_rule = '\n            /* Приветственный блок на главной */\n            body section:nth-of-type(1) {\n                margin-top: 72px !important;\n            }\n        '
                    content = content[:insertion_point] + new_rule + content[insertion_point:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Обновлен {filename}")

print("\n🎉 Мобильные отступы обновлены на всех страницах!")
print("   - Блок федерации: margin-top: 20px")
print("   - Приветственный блок (index.html): margin-top: 72px (вплотную к шапке)")
