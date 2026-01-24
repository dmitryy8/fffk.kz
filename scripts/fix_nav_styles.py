#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Исправление навигации на всех HTML страницах"""

import re
from pathlib import Path

def fix_mobile_nav(content):
    """Исправить мобильные стили навигации"""
    
    # Паттерн для замены мобильных стилей .mobile-menu-btn
    mobile_btn_old = r'(\s+\.mobile-menu-btn\s*\{\s*display:\s*block;\s*\})'
    mobile_btn_new = r'''
            .mobile-menu-btn {
                display: block;
                order: -1;
                margin-right: auto;
            }

            .logo {
                order: 1;
                margin-right: 0;
                margin-left: auto;
            }'''
    
    content = re.sub(mobile_btn_old, mobile_btn_new, content, flags=re.MULTILINE)
    
    # Обновить .language-switcher в мобильной версии
    lang_mobile_old = r'(\s+\.language-switcher\s*\{\s*margin-left:\s*15px;)'
    lang_mobile_new = r'''
            .language-switcher {
                margin-left: 20px;
                order: 2;
                flex-shrink: 0;'''
    
    content = re.sub(lang_mobile_old, lang_mobile_new, content, flags=re.MULTILINE)
    
    return content


def fix_desktop_nav(content):
    """Исправить десктоп стили навигации"""
    
    # Добавить flex-shrink: 0 к .language-switcher если его нет
    if 'flex-shrink: 0' not in content:
        pattern = r'(\.language-switcher\s*\{[^}]*?margin-left:\s*20px;)'
        replacement = r'\1\n            flex-shrink: 0;'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Обновить .nav-menu добавить margin
    nav_menu_old = r'(\.nav-menu\s*\{\s*display:\s*flex;\s*list-style:\s*none;\s*gap:\s*30px;\s*\})'
    nav_menu_new = r'''nav-menu {
            display: flex;
            list-style: none;
            gap: 30px;
            margin: 0 auto 0 20px;
        }'''
    
    content = re.sub(nav_menu_old, nav_menu_new, content, flags=re.MULTILINE)
    
    # Добавить flex-shrink: 0 к .logo
    logo_old = r'(\.logo\s*\{\s*display:\s*flex;\s*align-items:\s*center;\s*font-size:\s*1\.5em;\s*font-weight:\s*bold;\s*\})'
    logo_new = r'''.logo {
            display: flex;
            align-items: center;
            font-size: 1.5em;
            font-weight: bold;
            flex-shrink: 0;
        }'''
    
    content = re.sub(logo_old, logo_new, content, flags=re.MULTILINE)
    
    # Добавить gap к .nav-container
    nav_container_old = r'(\.nav-container\s*\{\s*display:\s*flex;\s*justify-content:\s*space-between;\s*align-items:\s*center;\s*\})'
    nav_container_new = r'''.nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }'''
    
    content = re.sub(nav_container_old, nav_container_new, content, flags=re.MULTILINE)
    
    return content


def main():
    """Обработать все HTML файлы"""
    base_dir = Path('c:/Users/Анастасия/Desktop/fffk.kz')
    html_files = list(base_dir.glob('*.html'))
    
    print(f"Найдено {len(html_files)} HTML файлов\n" + "=" * 60)
    
    updated = 0
    for html_file in sorted(html_files):
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original = content
            
            # Применить исправления
            content = fix_desktop_nav(content)
            content = fix_mobile_nav(content)
            
            if content != original:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"✅ {html_file.name}")
                updated += 1
            else:
                print(f"⚠️  {html_file.name} (без изменений)")
        except Exception as e:
            print(f"❌ {html_file.name}: {e}")
    
    print("=" * 60 + f"\nОбновлено: {updated}/{len(html_files)}")


if __name__ == '__main__':
    main()
