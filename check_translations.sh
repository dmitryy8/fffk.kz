#!/bin/bash
echo "=== Проверка непереведенных элементов ==="
echo ""

# Файлы с наибольшим количеством непереведенного контента
for file in media.html federations.html news9.html news7.html news.html map.html partners2.html; do
    if [ -f "$file" ]; then
        echo "��� $file:"
        # Ищем заголовки H1/H2 без data-translate
        grep -n '<h[12][^>]*>[А-Яа-яёЁ]' "$file" | grep -v 'data-translate' | head -5
        echo ""
    fi
done
