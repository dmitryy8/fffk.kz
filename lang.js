/* Минимальная кнопка переключения языков без функционала переводов */
(function(){
  'use strict';

  function setupLangUI(){
    const toggle = document.getElementById('languageBtn');
    const dropdown = document.getElementById('languageDropdown');
    const current = document.getElementById('currentLang');
    
    if(!toggle || !dropdown || !current) return;
    
    // Открытие/закрытие выпадающего меню
    toggle.addEventListener('click', (e)=> {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });
    
    // Закрытие при клике вне кнопки
    document.addEventListener('click', (e)=>{ 
      if(!e.target.closest('.language-switcher')) {
        dropdown.classList.remove('active');
      }
    });
    
    // Обработка выбора языка
    dropdown.querySelectorAll('.language-option').forEach(opt=> {
      opt.addEventListener('click', ()=>{
        const lang = opt.getAttribute('data-lang'); 
        if(!lang) return;
        
        // Сохраняем выбранный язык
        localStorage.setItem('site_lang', lang);
        
        // Обновляем отображение текущего языка
        current.textContent = lang.toUpperCase();
        
        // Закрываем меню
        dropdown.classList.remove('active');
        
        console.log('Выбран язык:', lang, '(переводы отключены)');
      });
    });
    
    // Показываем сохраненный язык при загрузке
    const saved = localStorage.getItem('site_lang') || 'ru';
    current.textContent = saved.toUpperCase();
  }

  // Инициализация при загрузке страницы
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    setupLangUI();
  } else {
    window.addEventListener('DOMContentLoaded', setupLangUI);
  }
})();
