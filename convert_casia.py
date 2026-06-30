from PIL import Image
import os

os.chdir('c:\\Users\\user0\\Desktop\\fffk.kz')

for i in range(1, 9):
    jpeg_path = f'images/news/casia{i}.jpeg'
    webp_path = f'images/news/casia{i}.webp'
    
    img = Image.open(jpeg_path)
    img = img.convert('RGB')
    img.save(webp_path, 'WEBP', quality=85)
    print(f'✓ Converted casia{i}.jpeg to casia{i}.webp')

print('\nВсе фотографии успешно конвертированы!')
