#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import os

HTML_FILES = [
    'about.html', 'leadership.html', 'news.html', 'news1.html', 'news2.html',
    'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
    'news8.html', 'news9.html', 'partners.html', 'partners2.html', 'docs.html',
    'docs1.html', 'docs2.html', 'docs3.html', 'docs4.html', 'media.html',
    'competitions.html', 'federations.html', 'map.html'
]

footer_info = '''
            <div class="footer-info" style="text-align: center; padding: 20px 0; color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.6; max-width: 900px; margin: 0 auto;">
                <p>
                    Республиканское общественное объединение «Казахстанская Федерация функционального многоборья» 
                    (КФФМ, Functional Fitness Kazakhstan) — официальный руководящий орган по функциональному фитнесу 
                    (functional fitness) и функциональному многоборью в Республике Казахстан. 
                    Мы развиваем спорт, организуем соревнования и объединяем спортсменов по всему Казахстану.
                </p>
            </div>
            
            <div class="footer-bottom"'''

for filename in HTML_FILES:
    if not os.path.exists(filename):
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Проверяем, есть ли уже footer-info
    if 'footer-info' in content:
        print(f"⏭ {filename} - уже есть footer-info")
        continue
    
    # Заменяем <div class="footer-bottom" на новый блок
    pattern = r'(\s*)<div class="footer-bottom"'
    replacement = footer_info
    
    if re.search(pattern, content):
        content = re.sub(pattern, replacement, content, count=1)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ {filename}")
    else:
        print(f"⚠ {filename} - не найден footer-bottom")

print("Готово!")
