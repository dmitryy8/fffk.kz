/* Central language switcher for all pages. Safe: only defines translateAll if missing, and initializes controls if present in the DOM. */
(function(){
  if(window.__langLoaded) return; // idempotent
  window.__langLoaded = true;

  const DICT = {
    ru: {
      'site_title': 'КАЗАХСТАНСКАЯ ФЕДЕРАЦИЯ ФУНКЦИОНАЛЬНОГО МНОГОБОРЬЯ',
      'site_subtitle': 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN',
      'Главная': 'Главная', 'О нас': 'О нас', 'Новости': 'Новости', 'Документы': 'Документы',
      'Руководство': 'Руководство','Медиа':'Медиа','Соревнования':'Соревнования',
      'Достижения':'Достижения','Партнёры и спонсоры':'Партнёры и спонсоры','Региональное отделение':'Региональное отделение',
      'Подробнее':'Подробнее','Наш адрес':'Наш адрес','Вернуться на главную':'Вернуться на главную',
      'news1_title':'Итоги соревнований Astana Open Cup 2025',
      'news1_excerpt':'7 мая в столице прошёл второй ежегодный открытый турнир по функциональному многоборью — Astana Open...',
      'news1_date':'07.05.2025','news2_title':'Историческое событие: казахстанец впервые прошёл в финал CrossFit Games!','news2_excerpt':'Впервые в истории спортсмен из Казахстана вышел в финал CrossFit Games — самого престижного мирового турнира...','news2_date':'24.08.2025',
      'news3_title':'Чемпионат Казахстана по функциональному многоборью 2025 состоялся в конце сентября!','news3_excerpt':'В сентябре прошёл Чемпионат Казахстана по функциональному многоборью 2025 — главное событие года в мире функционального фитнеса страны...','news3_date':'29.09.2025',
      'read_more':'Подробнее'
    },
    kz: {
      'site_title': 'ҚАЗАҚСТАН ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ','site_subtitle': 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN',
      'Главная':'Басты бет','О нас':'Біз туралы','Новости':'Жаңалықтар','Документы':'Құжаттар','Руководство':'басшылығы','Медиа':'Медиа','Соревнования':'Жарыстар','Достижения':'Жетістіктер','Партнёры и спонсоры':'Серіктестер мен демеушілер','Региональное отделение':'Аймақтық бөлімше','Подробнее':'Толығырақ','Наш адрес':'Біздің мекен-жайымыз','Вернуться на главную':'Басты бетке оралу',
      'news1_title':'Astana Open Cup 2025 жарыстарының қорытындылары','news1_excerpt':'7 мамырда астанада функционалды көпсайыс бойынша екінші жыл сайынғы ашық турнир — Astana Open өтті...','news1_date':'07.05.2025','news2_title':'Тарихи оқиға: қазақстандық алғаш рет CrossFit Games финалына өтті!','news2_excerpt':'Қазақстаннан шыққан спортшы алғаш рет CrossFit Games финалына шықты — әлемдегі ең беделді турнир...','news2_date':'24.08.2025','news3_title':'2025 жылғы Қазақстан чемпионаты қыркүйек айының соңында өтті!','news3_excerpt':'Қыркүйекте 2025 жылғы Қазақстан чемпионаты өтті — елдегі функционалды фитнес әлемінің басты оқиғасы...','news3_date':'29.09.2025','read_more':'Толығырақ'
    },
    en: {
      'site_title': 'KAZAKHSTAN FEDERATION OF FUNCTIONAL MULTI-SPORT','site_subtitle':'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN','Главная':'Home','О нас':'About','Новости':'News','Документы':'Documents','Руководство':'Leadership','Медиа':'Media','Соревнования':'Competitions','Достижения':'Achievements','Партнёры и спонсоры':'Partners & Sponsors','Региональное отделение':'Regional Office','Подробнее':'Read more','Наш адрес':'Our address','Вернуться на главную':'Return to home','news1_title':'Results of Astana Open Cup 2025','news1_excerpt':'On May 7 the capital hosted the second annual open tournament in functional multi-sport — Astana Open...','news1_date':'07.05.2025','news2_title':'Historic event: a Kazakh advanced to the CrossFit Games final for the first time!','news2_excerpt':'For the first time in history a Kazakh athlete reached the CrossFit Games final — the most prestigious global tournament...','news2_date':'24.08.2025','news3_title':'Kazakhstan Championship 2025 took place at the end of September!','news3_excerpt':'In September the Kazakhstan Championship 2025 took place — the country\'s main functional fitness event of the year...','news3_date':'29.09.2025','read_more':'Read more'
    }
  };

  // define translateAll only if missing to avoid clobbering inline scripts
  if(!window.translateAll){
    window.translateAll = function(lang){
      try{
        document.querySelectorAll('[data-i18n-key]').forEach(el=>{
          const key = el.getAttribute('data-i18n-key');
          if(key && DICT[lang] && DICT[lang][key]) el.textContent = DICT[lang][key];
        });
        document.querySelectorAll('nav.main-nav a, .more-menu a, nav.footer-nav a').forEach(a=>{
          const original = a.dataset.orig || a.textContent.trim();
          if(!a.dataset.orig) a.dataset.orig = original;
          const t = DICT[lang] && DICT[lang][original] ? DICT[lang][original] : original;
          a.textContent = t;
        });
        document.querySelectorAll('button, a, h1, h2, h3, p, li, span').forEach(node=>{
          if(node.closest('[data-no-translate]')) return;
          const key = node.getAttribute && node.getAttribute('data-i18n-key');
          if(key && DICT[lang] && DICT[lang][key]){ node.textContent = DICT[lang][key]; return; }
          if(node.childNodes.length===1 && node.childNodes[0].nodeType===3){
            const text = node.textContent.trim();
            if(text && DICT[lang] && DICT[lang][text]) node.textContent = DICT[lang][text];
          }
        });
      }catch(e){console.error('translateAll failed', e)}
    };
  }

  function setupLangUI(){
    const toggle = document.getElementById('langToggle');
    const dropdown = document.getElementById('langDropdown');
    const current = document.getElementById('langCurrent');
    if(!toggle || !dropdown || !current) return;
    toggle.addEventListener('click', ()=> dropdown.style.display = dropdown.style.display==='block' ? 'none' : 'block');
    document.addEventListener('click', (e)=>{ if(!e.target.closest('#langWrap')) dropdown.style.display='none'; });
    dropdown.querySelectorAll('button[data-lang]').forEach(b=> b.addEventListener('click', (e)=>{
      const lang = b.getAttribute('data-lang'); if(!lang) return;
      localStorage.setItem('site_lang', lang);
      current.textContent = lang.toUpperCase();
      try{ window.translateAll(lang) }catch(e){}
      dropdown.style.display='none';
      setTimeout(()=>{ location.reload(); }, 120);
    }));
    const saved = localStorage.getItem('site_lang') || 'ru';
    current.textContent = saved.toUpperCase();
    try{ window.translateAll(saved) }catch(e){}
  }

  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    setupLangUI();
  } else {
    window.addEventListener('DOMContentLoaded', setupLangUI);
  }
})();
