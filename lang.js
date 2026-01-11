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
  'Достижения':'Достижения','Партнёры и спонсоры':'Партнёры и спонсоры','Региональное отделение':'Карта залов',
      'Подробнее':'Подробнее','Наш адрес':'Наш адрес','Вернуться на главную':'Вернуться на главную',
      'news1_title':'Итоги соревнований Astana Open Cup 2025',
      'news1_excerpt':'7 мая в столице прошёл второй ежегодный открытый турнир по функциональному многоборью — Astana Open...',
      'news1_date':'07.05.2025','news2_title':'Историческое событие: казахстанец впервые прошёл в финал CrossFit Games!','news2_excerpt':'Впервые в истории спортсмен из Казахстана вышел в финал CrossFit Games — самого престижного мирового турнира...','news2_date':'24.08.2025',
      'news3_title':'Чемпионат Казахстана по функциональному многоборью 2025 состоялся в конце сентября!','news3_excerpt':'В сентябре прошёл Чемпионат Казахстана по функциональному многоборью 2025 — главное событие года в мире функционального фитнеса страны...','news3_date':'29.09.2025',
      'read_more':'Подробнее',
      // About page
      'about_welcome_text':'Добро пожаловать на официальный сайт Федерации функционального многоборья Республики Казахстан! Мы - часть международного спортивного сообщества iF3 и развиваем функциональное многоборье в Казахстане как современное, динамичное и доступное каждому направление, объединяющее людей, стремящихся к силе, выносливости и здоровью.',
      'about_mission_title':'Наша миссия',
      'about_mission_desc':'Популяризация и развитие функционального многоборья в Казахстане',
      'about_healthy_nation':'Здоровая нация',
      'about_healthy_nation_desc':'Формируем культуру движения, силы и выносливости. Продвигаем ценности активного и осознанного образа жизни среди людей всех возрастов - от детей до ветеранов спорта.',
      'about_olympic_recognition':'Олимпийское признание',
      'about_olympic_recognition_desc':'Поддерживаем развитие спорта на международной арене и представляем Казахстан в составе мирового сообщества iF3. Работаем над признанием функционального многоборья как олимпийского вида спорта.',
      'about_sport_development':'Развитие и популяризация спорта',
      'about_sport_development_desc':'Создаём условия для роста спортсменов, проведения национальных и международных турниров, развития спортивных клубов и сообществ по всей стране.',
      'about_our_history':'Наша история',
      'about_functional_definition':'Функциональное многоборье',
      'about_functional_desc':' - современный, динамично развивающийся вид спорта, основанный на выполнении функциональных движений с весом собственного тела, свободными отягощениями и циклическими упражнениями. Комплексы выполняются непрерывно на время, что позволяет проверить силу, скорость, координацию, выносливость и устойчивость духа спортсмена.',
      'about_main_idea':'Главная идея функционального многоборья - всестороннее развитие человека, способного проявлять физическую силу, ментальную устойчивость и командный дух в любых условиях. Это спорт, который воспитывает характер и объединяет людей всех возрастов вокруг стремления к здоровью, дисциплине и личному росту.',
      'about_federation_creation':'Создание Федерации',
      'about_federation_founding':'Республиканское общественное объединение «Казахстанская федерация функционального многоборья» было основано 8 сентября 2023 года в городе Астана решением Учредительного съезда.',
      'about_leadership':'Руководство Федерации:',
      'about_president':'Президент: Мещеряков Николай Ильич',
      'about_vicepresident_sponsor':'Вице-президент, Генеральный директор сети КДЛ «Олимп» и Генеральный спонсор Федерации: Сулейменов Ерлан Мельсович',
      'about_vicepresident_secretary':'Вице-президент и Генеральный секретарь: Лукановский Валентин Владимирович',
      'about_vicepresident_3':'Вице-президент: Джантлеев Роман Алмасович',
      'about_development_goals':'Развитие и цели Федерации',
      'about_federation_achievement':'Несмотря на короткий срок существования, Федерация уверенно заявила о себе как о новой спортивной силе Казахстана. Основные направления деятельности:',
      'about_healthy_nation_goal':'1. Формирование здоровой нации',
      'about_healthy_nation_goal_desc':'Развитие культуры физической активности, укрепление здоровья и продвижение ценностей спорта среди всех возрастных групп.',
      'about_olympic_goal':'2. Олимпийское признание',
      'about_olympic_goal_desc':'Стратегическая цель - включение функционального многоборья в программу Олимпийских игр и представление Казахстана на международной арене.',
      'about_sport_goal':'3. Развитие и популяризация спорта',
      'about_sport_goal_desc':'Организация национальных и международных соревнований, укрепление партнёрских связей и создание сильного спортивного сообщества.',
      'about_moving_forward':'Движение вперёд',
      'about_moving_forward_desc':'Федерация активно сотрудничает с Международной федерацией функционального фитнеса (iF3) и продолжает расширять своё присутствие на спортивной карте страны. Функциональное многоборье стремительно набирает популярность в Казахстане, объединяя спортсменов, активных людей и всех, кто выбирает движение, силу и здоровый образ жизни.',
      'about_motto':'Девиз Федерации:',
      'about_motto_text':'«Сила. Выносливость. Единство.»'
    },
    kz: {
      'site_title': 'ҚАЗАҚСТАН ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ','site_subtitle': 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN',
  'Главная':'Басты бет','О нас':'Біз туралы','Новости':'Жаңалықтар','Документы':'Құжаттар','Руководство':'басшылығы','Медиа':'Медиа','Соревнования':'Жарыстар','Достижения':'Жетістіктер','Партнёры и спонсоры':'Серіктестер мен демеушілер','Региональное отделение':'Залдардың картасы','Подробнее':'Толығырақ','Наш адрес':'Біздің мекен-жайымыз','Вернуться на главную':'Басты бетке оралу',
      'news1_title':'Astana Open Cup 2025 жарыстарының қорытындылары','news1_excerpt':'7 мамырда астанада функционалды көпсайыс бойынша екінші жыл сайынғы ашық турнир — Astana Open өтті...','news1_date':'07.05.2025','news2_title':'Тарихи оқиға: қазақстандық алғаш рет CrossFit Games финалына өтті!','news2_excerpt':'Қазақстаннан шыққан спортшы алғаш рет CrossFit Games финалына шықты — әлемдегі ең беделді турнир...','news2_date':'24.08.2025','news3_title':'2025 жылғы Қазақстан чемпионаты қыркүйек айының соңында өтті!','news3_excerpt':'Қыркүйекте 2025 жылғы Қазақстан чемпионаты өтті — елдегі функционалды фитнес әлемінің басты оқиғасы...','news3_date':'29.09.2025','read_more':'Толығырақ',
      // About page
      'about_welcome_text':'Қазақстан Республикасының функционалдық көпсайыс федерациясының ресми сайтына қош келдіңіздер! Біз халықаралық спорттық қоғамдастық iF3-тің бөлігіміз және Қазақстанда функционалдық көпсайысты заманауи, серпінді және әркімге қолжетімді бағыт ретінде дамытамыз, күш, төзімділік және денсаулыққа ұмтылатын адамдарды біріктіреміз.',
      'about_mission_title':'Біздің миссиямыз',
      'about_mission_desc':'Қазақстанда функционалдық көпсайысты насихаттау және дамыту',
      'about_healthy_nation':'Сау ұлт',
      'about_healthy_nation_desc':'Қозғалыс, күш және төзімділік мәдениетін қалыптастырамыз. Барлық жас топтарының - балалардан бастап спорт ардагерлеріне дейін - арасында белсенді және саналы өмір салтының құндылықтарын насихаттаймыз.',
      'about_olympic_recognition':'Олимпиадалық тану',
      'about_olympic_recognition_desc':'Халықаралық аренада спортты дамытуды қолдаймыз және Қазақстанды әлемдік iF3 қоғамдастығының құрамында білдіреміз. Функционалдық көпсайысты олимпиадалық спорт түрі ретінде тануға жұмыс істейміз.',
      'about_sport_development':'Спортты дамыту және насихаттау',
      'about_sport_development_desc':'Спортшылардың өсуі, ұлттық және халықаралық турнирлер өткізу, бүкіл ел бойынша спорт клубтары мен қоғамдастықтарды дамыту үшін жағдай жасаймыз.',
      'about_our_history':'Біздің тарихымыз',
      'about_functional_definition':'Функционалдық көпсайыс',
      'about_functional_desc':' - өз денесінің салмағымен, еркін ауырлықтармен және циклдік жаттығулармен функционалдық қозғалыстарды орындауға негізделген заманауи, серпінді дамып келе жатқан спорт түрі. Кешендер үздіксіз уақытқа орындалады, бұл спортшының күшін, жылдамдығын, үйлесімділігін, төзімділігін және рух тұрақтылығын тексеруге мүмкіндік береді.',
      'about_main_idea':'Функционалдық көпсайыстың басты идеясы - кез келген жағдайда физикалық күшті, ментальдық тұрақтылықты және командалық рухты көрсете алатын адамның жан-жақты дамуы. Бұл - мінезді тәрбиелейтін және барлық жастағы адамдарды денсаулық, тәртіп және жеке өсуге ұмтылудың айналасында біріктіретін спорт.',
      'about_federation_creation':'Федерацияны құру',
      'about_federation_founding':'«Қазақстан функционалдық көпсайыс федерациясы» республикалық қоғамдық бірлестігі 2023 жылдың 8 қыркүйегінде Астана қаласында Құрылтай съезінің шешімімен құрылды.',
      'about_leadership':'Федерация басшылығы:',
      'about_president':'Президент: Мещеряков Николай Ильич',
      'about_vicepresident_sponsor':'Вице-президент, КДЛ «Олимп» желісінің бас директоры және Федерацияның бас демеушісі: Сулейменов Ерлан Мельсович',
      'about_vicepresident_secretary':'Вице-президент және Бас хатшы: Лукановский Валентин Владимирович',
      'about_vicepresident_3':'Вице-президент: Джантлеев Роман Алмасович',
      'about_development_goals':'Федерацияның даму және мақсаттары',
      'about_federation_achievement':'Қысқа мерзімге қарамастан, Федерация Қазақстанның жаңа спорттық күші ретінде сенімді түрде мәлімдеді. Негізгі қызмет бағыттары:',
      'about_healthy_nation_goal':'1. Сау ұлтты қалыптастыру',
      'about_healthy_nation_goal_desc':'Дене белсенділігі мәдениетін дамыту, денсаулықты нығайту және барлық жас топтары арасында спорт құндылықтарын насихаттау.',
      'about_olympic_goal':'2. Олимпиадалық тану',
      'about_olympic_goal_desc':'Стратегиялық мақсат - функционалдық көпсайысты Олимпиада ойындарының бағдарламасына енгізу және Қазақстанды халықаралық аренада білдіру.',
      'about_sport_goal':'3. Спортты дамыту және насихаттау',
      'about_sport_goal_desc':'Ұлттық және халықаралық жарыстарды ұйымдастыру, серіктестік байланыстарды нығайту және күшті спорттық қоғамдастық құру.',
      'about_moving_forward':'Алға қарай қозғалыс',
      'about_moving_forward_desc':'Федерация Халықаралық функционалдық фитнес федерациясымен (iF3) белсенді ынтымақтасады және елдің спорт картасында өз қатысуын кеңейтуді жалғастырады. Функционалдық көпсайыс Қазақстанда қарқынды түрде танымал болып келеді, спортшыларды, белсенді адамдарды және қозғалысты, күшті және салауатты өмір салтын таңдайтын барлық адамдарды біріктіреді.',
      'about_motto':'Федерацияның ұраны:',
      'about_motto_text':'«Күш. Төзімділік. Бірлік.»'
    },
    en: {
      'site_title': 'KAZAKHSTAN FEDERATION OF FUNCTIONAL MULTI-SPORT','site_subtitle':'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN','Главная':'Home','О нас':'About','Новости':'News','Документы':'Documents','Руководство':'Leadership','Медиа':'Media','Соревнования':'Competitions','Достижения':'Achievements','Партнёры и спонсоры':'Partners & Sponsors','Региональное отделение':'Regional Office','Подробнее':'Read more','Наш адрес':'Our address','Вернуться на главную':'Return to home','news1_title':'Results of Astana Open Cup 2025','news1_excerpt':'On May 7 the capital hosted the second annual open tournament in functional multi-sport — Astana Open...','news1_date':'07.05.2025','news2_title':'Historic event: a Kazakh advanced to the CrossFit Games final for the first time!','news2_excerpt':'For the first time in history a Kazakh athlete reached the CrossFit Games final — the most prestigious global tournament...','news2_date':'24.08.2025','news3_title':'Kazakhstan Championship 2025 took place at the end of September!','news3_excerpt':'In September the Kazakhstan Championship 2025 took place — the country\'s main functional fitness event of the year...','news3_date':'29.09.2025','read_more':'Read more',
      // About page
      'about_welcome_text':'Welcome to the official website of the Functional Fitness Federation of the Republic of Kazakhstan! We are part of the international sports community iF3 and develop functional fitness in Kazakhstan as a modern, dynamic and accessible direction for everyone, uniting people striving for strength, endurance and health.',
      'about_mission_title':'Our Mission',
      'about_mission_desc':'Promotion and development of functional fitness in Kazakhstan',
      'about_healthy_nation':'Healthy Nation',
      'about_healthy_nation_desc':'We form a culture of movement, strength and endurance. We promote the values of an active and conscious lifestyle among people of all ages - from children to veteran athletes.',
      'about_olympic_recognition':'Olympic Recognition',
      'about_olympic_recognition_desc':'We support the development of sports on the international arena and represent Kazakhstan as part of the iF3 world community. We are working on recognizing functional fitness as an Olympic sport.',
      'about_sport_development':'Sport Development and Promotion',
      'about_sport_development_desc':'We create conditions for the growth of athletes, holding national and international tournaments, developing sports clubs and communities throughout the country.',
      'about_our_history':'Our History',
      'about_functional_definition':'Functional Fitness',
      'about_functional_desc':' is a modern, dynamically developing sport based on performing functional movements with bodyweight, free weights and cyclic exercises. Complexes are performed continuously for time, which allows testing the strength, speed, coordination, endurance and mental resilience of the athlete.',
      'about_main_idea':'The main idea of functional fitness is the comprehensive development of a person capable of showing physical strength, mental stability and team spirit in any conditions. This is a sport that builds character and unites people of all ages around the pursuit of health, discipline and personal growth.',
      'about_federation_creation':'Federation Creation',
      'about_federation_founding':'The Republican Public Association "Kazakhstan Federation of Functional Fitness" was founded on September 8, 2023 in Astana by decision of the Founding Congress.',
      'about_leadership':'Federation Leadership:',
      'about_president':'President: Nikolay Ilyich Meshcheryakov',
      'about_vicepresident_sponsor':'Vice President, General Director of KDL "Olymp" network and General Sponsor of the Federation: Yerlan Melsovich Suleimenov',
      'about_vicepresident_secretary':'Vice President and General Secretary: Valentin Vladimirovich Lukanovsky',
      'about_vicepresident_3':'Vice President: Roman Almasovich Dzhantleev',
      'about_development_goals':'Development and Goals of the Federation',
      'about_federation_achievement':'Despite its short existence, the Federation has confidently declared itself as a new sports force in Kazakhstan. Main areas of activity:',
      'about_healthy_nation_goal':'1. Formation of a Healthy Nation',
      'about_healthy_nation_goal_desc':'Development of physical activity culture, health promotion and promoting the values of sport among all age groups.',
      'about_olympic_goal':'2. Olympic Recognition',
      'about_olympic_goal_desc':'Strategic goal - inclusion of functional fitness in the Olympic Games program and representation of Kazakhstan on the international arena.',
      'about_sport_goal':'3. Sport Development and Promotion',
      'about_sport_goal_desc':'Organization of national and international competitions, strengthening partnerships and creating a strong sports community.',
      'about_moving_forward':'Moving Forward',
      'about_moving_forward_desc':'The Federation actively cooperates with the International Functional Fitness Federation (iF3) and continues to expand its presence on the country\'s sports map. Functional fitness is rapidly gaining popularity in Kazakhstan, uniting athletes, active people and everyone who chooses movement, strength and a healthy lifestyle.',
      'about_motto':'Federation Motto:',
      'about_motto_text':'"Strength. Endurance. Unity."'
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
