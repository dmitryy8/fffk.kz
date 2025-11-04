import re

# Читаем файл
with open('federations.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Находим все карточки федераций без социальных сетей
# Ищем паттерн: карточка заканчивается на </div>, но перед ним нет federation-socials
pattern = r'(<div class="federation-card">)(.*?)(</div>)(\s*(?:</div>|<!--))'

def replace_card(match):
    opening = match.group(1)
    card_content = match.group(2)
    first_closing = match.group(3)
    after = match.group(4)
    
    # Проверяем, нет ли уже социальных сетей
    if 'federation-socials' not in card_content:
        # Добавляем социальные сети перед закрывающим тегом карточки
        social_html = '''
                        <div class="federation-socials">
                            <a href="#" target="_blank"><img src="/facebooklogo.png" alt="Facebook"></a>
                            <a href="#" target="_blank"><img src="/instagramlogo.png" alt="Instagram"></a>
                        </div>
                    '''
        return opening + card_content + social_html + first_closing + after
    else:
        return match.group(0)

content = re.sub(pattern, replace_card, content, flags=re.DOTALL)

# Сохраняем
with open('federations.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Социальные сети добавлены ко всем карточкам!")
