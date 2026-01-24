#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для исправления навигации на всех HTML страницах
Требования:
- Logo слева с отступом 20px
- Language switcher справа от logo с отступом 20px
- Burger menu слева на мобильных с отступом 20px
"""

import os
import re
from pathlib import Path

# Новая правильная структура nav-container HTML
NEW_NAV_CONTAINER_HTML = '''            <div class="nav-container">
                <div class="logo">
                    <img src="/images/logos/logoinsite.png" width="1279" height="540" loading="lazy" alt="ФФМК" style="height: 40px; width: auto;">
                </div>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="/" data-translate="nav_home">Главная</a></li>
                    <li><a href="/about" data-translate="nav_about">О нас</a></li>
                    <li><a href="/news" data-translate="nav_news">Новости</a></li>
                    <li><a href="/docs" data-translate="nav_docs">Документы</a></li>
                    <li><a href="/leadership" data-translate="nav_team">Наша команда</a></li>
                    <li><a href="/media" data-translate="nav_media">Медиа</a></li>
                    <li><a href="/competitions" data-translate="nav_competitions">Соревнования</a></li>
                    <li><a href="/partners" data-translate="nav_sponsor">Генеральный спонсор</a></li>
                    <li><a href="/partners2" data-translate="nav_partners">Партнёры</a></li>
                    <li><a href="/federations" data-translate="nav_federations">Федерации</a></li>
                </ul>
                <div class="language-switcher">
                    <button class="language-btn" id="languageBtn">
                        <span id="currentLang">RU</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="language-dropdown" id="languageDropdown">
                        <div class="language-option" data-lang="ru">🇷🇺 Русский</div>
                        <div class="language-option" data-lang="kz">🇰🇿 Қазақша</div>
                        <div class="language-option" data-lang="en">🇬🇧 English</div>
                    </div>
                </div>
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>'''

# CSS стили для правильного позиционирования
NEW_NAV_CSS = '''        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .logo {
            display: flex;
            align-items: center;
            font-size: 1.5em;
            font-weight: bold;
            flex-shrink: 0;
        }

        .logo i {
            margin-right: 10px;
            color: white;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 30px;
            margin: 0 auto 0 20px;
        }

        .nav-menu a {
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            font-weight: 600;
        }

        .nav-menu a:hover {
            color: rgba(255, 255, 255, 0.8);
            transform: translateY(-2px);
        }

        .nav-menu a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient-sport);
            transition: width 0.3s ease;
        }

        .nav-menu a:hover::after {
            width: 100%;
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5em;
            cursor: pointer;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
        }

        .language-switcher {
            position: relative;
            margin-left: 20px;
            flex-shrink: 0;
        }

        .language-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }

        .language-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .language-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 10px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(11, 99, 183, 0.2);
            padding: 10px;
            display: none;
            min-width: 150px;
            z-index: 1001;
        }

        .language-dropdown.active {
            display: block;
        }

        .language-option {
            padding: 10px 15px;
            cursor: pointer;
            border-radius: 10px;
            transition: all 0.3s ease;
            color: var(--text-dark);
        }

        .language-option:hover {
            background: var(--accent-color);
            color: var(--primary-color);
        }'''

# Мобильные стили CSS
NEW_MOBILE_NAV_CSS = '''            .navbar {
                padding: 10px 0;
            }

            .nav-container {
                padding: 0 20px;
            }
            
            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 50px;
                transition: left 0.3s ease;
                border-top: 1px solid var(--border-color);
                margin: 0;
            }
            
            .nav-menu.active {
                left: 0;
            }

            .nav-menu a {
                color: var(--text-dark);
                padding: 15px;
                border-bottom: 1px solid var(--border-color);
                width: 100%;
                text-align: center;
            }
            
            .mobile-menu-btn {
                display: block;
                order: -1;
                margin-right: auto;
            }

            .logo {
                order: 1;
                margin-right: 0;
                margin-left: auto;
            }

            .language-switcher {
                margin-left: 20px;
                order: 2;
            }

            .language-btn {
                padding: 6px 12px;
                font-size: 12px;
            }

            .language-dropdown {
                right: 0;
            }'''


def fix_html_file(filepath):
    """Исправить навигацию в одном HTML файле"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Заменить nav-container HTML (от <div class="nav-container"> до </div> перед </nav>)
    pattern = r'(<div class="nav-container">)(.*?)(</div>\s*</div>\s*</nav>)'
    
    def replace_nav(match):
        return match.group(1) + '\n' + NEW_NAV_CONTAINER_HTML[NEW_NAV_CONTAINER_HTML.find('\n')+1:] + '\n            ' + match.group(3)
    
    content = re.sub(pattern, replace_nav, content, flags=re.DOTALL)
    
    # Заменить CSS для .nav-container
    css_pattern = r'(\.nav-container\s*\{)(.*?)(\.logo\s*\{)'
    content = re.sub(css_pattern, 
                     r'\g<1>\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n        }\n\n        \g<3>',
                     content, flags=re.DOTALL)
    
    # Обновить стили .logo
    logo_pattern = r'(\.logo\s*\{)(.*?)(\.logo i\s*\{)'
    content = re.sub(logo_pattern,
                     r'\g<1>\n            display: flex;\n            align-items: center;\n            font-size: 1.5em;\n            font-weight: bold;\n            flex-shrink: 0;\n        }\n\n        \g<3>',
                     content, flags=re.DOTALL)
    
    # Обновить стили .nav-menu
    nav_menu_pattern = r'(\.nav-menu\s*\{)(.*?)(\.nav-menu a\s*\{)'
    content = re.sub(nav_menu_pattern,
                     r'\g<1>\n            display: flex;\n            list-style: none;\n            gap: 30px;\n            margin: 0 auto 0 20px;\n        }\n\n        \g<3>',
                     content, flags=re.DOTALL)
    
    # Обновить стили .mobile-menu-btn
    mobile_btn_pattern = r'(\.mobile-menu-btn\s*\{)(.*?)(order:\s*\d+;)'
    content = re.sub(mobile_btn_pattern,
                     lambda m: m.group(1) + m.group(2).replace(m.group(3), ''),
                     content, flags=re.DOTALL)
    
    # Убрать order и margin-left: auto из .language-switcher в десктоп версии
    lang_switcher_pattern = r'(\.language-switcher\s*\{)(.*?)(margin-left:\s*auto;)'
    content = re.sub(lang_switcher_pattern,
                     lambda m: m.group(1) + m.group(2).replace('margin-left: auto;', 'margin-left: 20px;'),
                     content, flags=re.DOTALL)
    
    lang_switcher_order_pattern = r'(\.language-switcher\s*\{)(.*?)(order:\s*\d+;)'
    content = re.sub(lang_switcher_order_pattern,
                     lambda m: m.group(1) + m.group(2).replace(m.group(3), ''),
                     content, flags=re.DOTALL)
    
    # Добавить flex-shrink: 0 к .language-switcher
    lang_switcher_fix = r'(\.language-switcher\s*\{[^}]*?)(}\s*\.language-btn)'
    content = re.sub(lang_switcher_fix,
                     lambda m: m.group(1) + '\n            flex-shrink: 0;\n        ' + m.group(2),
                     content, flags=re.DOTALL)
    
    # Обновить мобильные стили
    mobile_pattern = r'(\.mobile-menu-btn\s*\{\s*display:\s*block;)(.*?)(\.language-switcher\s*\{[^}]*?})'
    
    def replace_mobile(match):
        new_mobile = '''
            .mobile-menu-btn {
                display: block;
                order: -1;
                margin-right: auto;
            }

            .logo {
                order: 1;
                margin-right: 0;
                margin-left: auto;
            }

            .language-switcher {
                margin-left: 20px;
                order: 2;
            }'''
        return new_mobile + '\n\n            '
    
    content = re.sub(mobile_pattern, replace_mobile, content, flags=re.DOTALL)
    
    # Добавить padding к nav-container на мобильном
    mobile_navbar_pattern = r'(\.navbar\s*\{\s*padding:\s*10px\s+0;\s*})'
    content = re.sub(mobile_navbar_pattern,
                     r'\g<1>\n\n            .nav-container {\n                padding: 0 20px;\n            }',
                     content)
    
    # Убрать margin из nav-menu в мобильной версии
    mobile_nav_menu_pattern = r'(\.nav-menu\s*\{[^}]*?padding-top:\s*50px;[^}]*?)(})'
    content = re.sub(mobile_nav_menu_pattern,
                     lambda m: m.group(1) + '\n                margin: 0;\n            ' + m.group(2),
                     content, flags=re.DOTALL)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Обновлён: {filepath}")
        return True
    else:
        print(f"⚠️  Без изменений: {filepath}")
        return False


def main():
    """Обработать все HTML файлы"""
    base_dir = Path(__file__).parent.parent
    html_files = list(base_dir.glob('*.html'))
    
    print(f"Найдено {len(html_files)} HTML файлов")
    print("=" * 60)
    
    updated = 0
    for html_file in sorted(html_files):
        if fix_html_file(html_file):
            updated += 1
    
    print("=" * 60)
    print(f"Обновлено {updated} из {len(html_files)} файлов")


if __name__ == '__main__':
    main()
