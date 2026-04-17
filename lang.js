/* Полная система переводов для сайта КФФМ */
(function(){
  'use strict';

  // Словарь переводов
  const translations = {
    // Навигация
    nav_home: {
      ru: 'Главная',
      kz: 'Басты бет',
      en: 'Home'
    },
    nav_about: {
      ru: 'О нас',
      kz: 'Біз туралы',
      en: 'About'
    },
    nav_news: {
      ru: 'Новости',
      kz: 'Жаңалықтар',
      en: 'News'
    },
    nav_docs: {
      ru: 'Документы',
      kz: 'Құжаттар',
      en: 'Documents'
    },
    nav_team: {
      ru: 'Наша команда',
      kz: 'Біздің команда',
      en: 'Our Team'
    },
    nav_media: {
      ru: 'Медиа',
      kz: 'Медиа',
      en: 'Media'
    },
    nav_competitions: {
      ru: 'Соревнования',
      kz: 'Жарыстар',
      en: 'Competitions'
    },
    nav_sponsor: {
      ru: 'Генеральный спонсор',
      kz: 'Бас демеуші',
      en: 'General Sponsor'
    },
    nav_partners: {
      ru: 'Партнёры',
      kz: 'Серіктестер',
      en: 'Partners'
    },
    nav_federations: {
      ru: 'Федерации',
      kz: 'Федерациялар',
      en: 'Federations'
    },

    // Общие
    loading: {
      ru: 'Загрузка...',
      kz: 'Жүктелуде...',
      en: 'Loading...'
    },
    read_more: {
      ru: 'Подробнее',
      kz: 'Толығырақ',
      en: 'Read More'
    },
    back_home: {
      ru: 'Вернуться на главную',
      kz: 'Басты бетке оралу',
      en: 'Back to Home'
    },
    download_doc: {
      ru: 'Скачать документ',
      kz: 'Құжатты жүктеу',
      en: 'Download Document'
    },

    // Страница О нас
    about_title: {
      ru: 'О нас',
      kz: 'Біз туралы',
      en: 'About Us'
    },
    about_intro: {
      ru: 'Добро пожаловать на официальный сайт Федерации функционального многоборья Республики Казахстан! Мы - часть международного спортивного сообщества iF3 и развиваем функциональное многоборье в Казахстане как современное, динамичное и доступное каждому направление, объединяющее людей, стремящихся к силе, выносливости и здоровью.',
      kz: 'Қазақстан Республикасының Функционалдық көпсайыс федерациясының ресми сайтына қош келдіңіз! Біз iF3 халықаралық спорттық қауымдастығының бір бөлігіміз және Қазақстанда функционалдық көпсайысты күшке, төзімділікке және денсаулыққа ұмтылатын адамдарды біріктіретін заманауи, серпінді және барлығына қолжетімді бағыт ретінде дамытамыз.',
      en: 'Welcome to the official website of the Functional Fitness Federation of the Republic of Kazakhstan! We are part of the iF3 international sports community and develop functional fitness in Kazakhstan as a modern, dynamic and accessible direction uniting people striving for strength, endurance and health.'
    },
    mission_title: {
      ru: 'Наша миссия',
      kz: 'Біздің миссиямыз',
      en: 'Our Mission'
    },
    mission_subtitle: {
      ru: 'Популяризация и развитие функционального многоборья в Казахстане',
      kz: 'Қазақстанда функционалдық көпсайысты танымал ету және дамыту',
      en: 'Popularization and development of functional fitness in Kazakhstan'
    },
    mission_health_title: {
      ru: 'Здоровая нация',
      kz: 'Сау ұлт',
      en: 'Healthy Nation'
    },
    mission_health_text: {
      ru: 'Формируем культуру движения, силы и выносливости. Продвигаем ценности активного и осознанного образа жизни среди людей всех возрастов - от детей до ветеранов спорта.',
      kz: 'Қозғалыс, күш және төзімділік мәдениетін қалыптастырамыз. Балалардан бастап спорт ардагерлеріне дейін барлық жастағы адамдар арасында белсенді және саналы өмір салтының құндылықтарын насихаттаймыз.',
      en: 'We form a culture of movement, strength and endurance. We promote the values of an active and conscious lifestyle among people of all ages - from children to sports veterans.'
    },
    mission_olympic_title: {
      ru: 'Олимпийское признание',
      kz: 'Олимпиадалық мойындау',
      en: 'Olympic Recognition'
    },
    mission_olympic_text: {
      ru: 'Поддерживаем развитие спорта на международной арене и представляем Казахстан в составе мирового сообщества iF3. Работаем над признанием функционального многоборья как олимпийского вида спорта.',
      kz: 'Халықаралық аренада спорттың дамуын қолдаймыз және Қазақстанды iF3 әлемдік қауымдастығында ұсынамыз. Функционалдық көпсайысты олимпиадалық спорт түрі ретінде мойындату үшін жұмыс істеп жатырмыз.',
      en: 'We support the development of sports in the international arena and represent Kazakhstan as part of the iF3 world community. We are working on the recognition of functional fitness as an Olympic sport.'
    },
    mission_development_title: {
      ru: 'Развитие и популяризация спорта',
      kz: 'Спортты дамыту және танымал ету',
      en: 'Development and Popularization of Sports'
    },
    mission_development_text: {
      ru: 'Создаём условия для роста спортсменов, проведения национальных и международных турниров, развития спортивных клубов и сообществ по всей стране.',
      kz: 'Спортшылардың өсуіне, ұлттық және халықаралық турнирлердің өткізілуіне, бүкіл ел бойынша спорт клубтары мен қауымдастықтардың дамуына жағдай жасаймыз.',
      en: 'We create conditions for the growth of athletes, holding national and international tournaments, developing sports clubs and communities throughout the country.'
    },
    history_title: {
      ru: 'Наша история',
      kz: 'Біздің тарихымыз',
      en: 'Our History'
    },
    history_functional: {
      ru: 'Функциональное многоборье',
      kz: 'Функционалдық көпсайыс',
      en: 'Functional Fitness'
    },
    history_functional_text: {
      ru: ' - современный, динамично развивающийся вид спорта, основанный на выполнении функциональных движений с весом собственного тела, свободными отягощениями и циклическими упражнениями. Комплексы выполняются непрерывно на время, что позволяет проверить силу, скорость, координацию, выносливость и устойчивость духа спортсмена.',
      kz: ' - дене салмағымен, еркін салмақтармен және циклдік жаттығулармен функционалдық қозғалыстарды орындауға негізделген заманауи, серпінді дамып келе жатқан спорт түрі. Кешендер уақытқа қарай үздіксіз орындалады, бұл спортшының күшін, жылдамдығын, координациясын, төзімділігін және рухани тұрақтылығын тексеруге мүмкіндік береді.',
      en: ' - a modern, dynamically developing sport based on performing functional movements with body weight, free weights and cyclic exercises. Complexes are performed continuously for time, which allows testing the strength, speed, coordination, endurance and mental stability of the athlete.'
    },
    history_idea: {
      ru: 'Главная идея функционального многоборья - всестороннее развитие человека, способного проявлять физическую силу, ментальную устойчивость и командный дух в любых условиях. Это спорт, который воспитывает характер и объединяет людей всех возрастов вокруг стремления к здоровью, дисциплине и личному росту.',
      kz: 'Функционалдық көпсайыстың басты идеясы - кез келген жағдайда физикалық күшін, ментальды тұрақтылығын және команда рухын көрсете алатын адамды жан-жақты дамыту. Бұл мінезді тәрбиелейтін және барлық жастағы адамдарды денсаулыққа, тәртіпке және жеке өсуге ұмтылу төңірегінде біріктіретін спорт.',
      en: 'The main idea of functional fitness is the comprehensive development of a person capable of showing physical strength, mental stability and team spirit in any conditions. It is a sport that builds character and unites people of all ages around the pursuit of health, discipline and personal growth.'
    },
    history_creation: {
      ru: 'Создание Федерации',
      kz: 'Федерацияның құрылуы',
      en: 'Creation of the Federation'
    },
    history_creation_text: {
      ru: 'Республиканское общественное объединение «Казахстанская федерация функционального многоборья» было основано 8 сентября 2023 года в городе Астана решением Учредительного съезда.',
      kz: '«Қазақстандық функционалдық көпсайыс федерациясы» республикалық қоғамдық бірлестігі 2023 жылғы 8 қыркүйекте Астана қаласында Құрылтай съезінің шешімімен құрылды.',
      en: 'The Republican Public Association "Kazakhstan Federation of Functional Fitness" was founded on September 8, 2023 in Astana by the decision of the Founding Congress.'
    },
    history_leadership: {
      ru: 'Руководство Федерации:',
      kz: 'Федерация басшылығы:',
      en: 'Federation Leadership:'
    },
    history_president: {
      ru: 'Президент: Мещеряков Николай Ильич',
      kz: 'Президент: Мещеряков Николай Ильич',
      en: 'President: Nikolay Meshcheryakov'
    },
    history_vp1: {
      ru: 'Вице-президент, Генеральный директор сети КДЛ «Олимп» и Генеральный спонсор Федерации: Сулейменов Ерлан Мельсович',
      kz: 'Вице-президент, «Олимп» КДЛ желісінің Бас директоры және Федерацияның Бас демеушісі: Сүлейменов Ерлан Мельсұлы',
      en: 'Vice President, CEO of CDL Olymp network and General Sponsor of the Federation: Yerlan Suleymenov'
    },
    history_vp2: {
      ru: 'Вице-президент и Генеральный секретарь: Лукановский Валентин Владимирович',
      kz: 'Вице-президент және Бас хатшы: Лукановский Валентин Владимирович',
      en: 'Vice President and Secretary General: Valentin Lukanovskiy'
    },
    history_vp3: {
      ru: 'Вице-президент: Джантлеев Роман Алмасович',
      kz: 'Вице-президент: Джантлеев Роман Алмасұлы',
      en: 'Vice President: Roman Dzhantleyev'
    },
    history_goals: {
      ru: 'Развитие и цели Федерации',
      kz: 'Федерацияның дамуы және мақсаттары',
      en: 'Development and Goals of the Federation'
    },
    history_goals_text: {
      ru: 'Несмотря на короткий срок существования, Федерация уверенно заявила о себе как о новой спортивной силе Казахстана. Основные направления деятельности:',
      kz: 'Қысқа мерзімде болғанына қарамастан, Федерация Қазақстанның жаңа спорттық күші ретінде өзін сенімді танытты. Негізгі қызмет бағыттары:',
      en: 'Despite a short period of existence, the Federation has confidently declared itself as a new sports force in Kazakhstan. Main areas of activity:'
    },
    history_goal1: {
      ru: '1. Формирование здоровой нации',
      kz: '1. Сау ұлтты қалыптастыру',
      en: '1. Formation of a healthy nation'
    },
    history_goal1_text: {
      ru: 'Развитие культуры физической активности, укрепление здоровья и продвижение ценностей спорта среди всех возрастных групп.',
      kz: 'Дене белсенділігі мәдениетін дамыту, денсаулықты нығайту және барлық жас топтары арасында спорт құндылықтарын насихаттау.',
      en: 'Development of physical activity culture, health promotion and sport values among all age groups.'
    },
    history_goal2: {
      ru: '2. Олимпийское признание',
      kz: '2. Олимпиадалық мойындау',
      en: '2. Olympic recognition'
    },
    history_goal2_text: {
      ru: 'Стратегическая цель - включение функционального многоборья в программу Олимпийских игр и представление Казахстана на международной арене.',
      kz: 'Стратегиялық мақсат - функционалдық көпсайысты Олимпиада ойындарының бағдарламасына енгізу және Қазақстанды халықаралық аренада ұсыну.',
      en: 'Strategic goal - inclusion of functional fitness in the Olympic Games program and representation of Kazakhstan on the international arena.'
    },
    history_goal3: {
      ru: '3. Развитие и популяризация спорта',
      kz: '3. Спортты дамыту және танымал ету',
      en: '3. Development and popularization of sports'
    },
    history_goal3_text: {
      ru: 'Организация национальных и международных соревнований, укрепление партнёрских связей и создание сильного спортивного сообщества.',
      kz: 'Ұлттық және халықаралық жарыстарды ұйымдастыру, серіктестік байланыстарды нығайту және күшті спорттық қауымдастық құру.',
      en: 'Organization of national and international competitions, strengthening partnerships and creating a strong sports community.'
    },
    history_forward: {
      ru: 'Движение вперёд',
      kz: 'Алға қарай',
      en: 'Moving Forward'
    },
    history_forward_text: {
      ru: 'Федерация активно сотрудничает с Международной федерацией функционального фитнеса (iF3) и продолжает расширять своё присутствие на спортивной карте страны. Функциональное многоборье стремительно набирает популярность в Казахстане, объединяя спортсменов, активных людей и всех, кто выбирает движение, силу и здоровый образ жизни.',
      kz: 'Федерация Халықаралық функционалдық фитнес федерациясымен (iF3) белсенді ынтымақтасады және елдің спорттық картасындағы өз болмысын кеңейтуді жалғастыруда. Функционалдық көпсайыс Қазақстанда қарқынды түрде танымалдылыққа ие болуда, спортшыларды, белсенді адамдарды және қозғалысты, күшті және салауатты өмір салтын таңдайтын барлық адамдарды біріктіреді.',
      en: 'The Federation actively cooperates with the International Functional Fitness Federation (iF3) and continues to expand its presence on the sports map of the country. Functional fitness is rapidly gaining popularity in Kazakhstan, uniting athletes, active people and everyone who chooses movement, strength and a healthy lifestyle.'
    },
    history_motto: {
      ru: 'Девиз Федерации:',
      kz: 'Федерацияның ұраны:',
      en: 'Federation Motto:'
    },
    history_motto_text: {
      ru: '«Сила. Выносливость. Единство.»',
      kz: '«Күш. Төзімділік. Бірлік.»',
      en: '"Strength. Endurance. Unity."'
    },

    // Страница Соревнования
    competitions_title: {
      ru: 'Соревнования',
      kz: 'Жарыстар',
      en: 'Competitions'
    },
    comp_astana_title: {
      ru: 'Результаты соревнований Astana Open Cup 2025',
      kz: 'Astana Open Cup 2025 жарысының нәтижелері',
      en: 'Astana Open Cup 2025 Competition Results'
    },
    comp_astana_excerpt: {
      ru: '7 мая в столице прошёл второй ежегодный открытый турнир по функциональному фитнесу — Astana Open...',
      kz: '7 мамырда астанада функционалдық фитнес бойынша екінші жыл сайынғы ашық турнир — Astana Open өтті...',
      en: 'On May 7, the second annual open functional fitness tournament was held in the capital — Astana Open...'
    },
    comp_crossfit_title: {
      ru: 'Историческое событие: казахстанец впервые прошёл в финал CrossFit Games!',
      kz: 'Тарихи оқиға: қазақстандық алғаш рет CrossFit Games финалына шықты!',
      en: 'Historic Event: Kazakhstani Makes CrossFit Games Finals for the First Time!'
    },
    comp_crossfit_excerpt: {
      ru: 'Впервые в истории спортсмен из Казахстана вышел в финал CrossFit Games — самого престижного мирового турнира...',
      kz: 'Тарихта алғаш рет Қазақстандық спортшы CrossFit Games — әлемдегі ең беделді турнирдің финалына шықты...',
      en: 'For the first time in history, an athlete from Kazakhstan reached the finals of CrossFit Games — the most prestigious world tournament...'
    },
    comp_championship_title: {
      ru: 'Чемпионат Казахстана по функциональному многоборью 2025',
      kz: 'Функционалдық көпсайыс бойынша Қазақстан чемпионаты 2025',
      en: 'Kazakhstan Functional Fitness Championship 2025'
    },
    comp_championship_excerpt: {
      ru: 'В сентябре прошёл Чемпионат Казахстана по функциональному многоборью 2025 — главное событие года...',
      kz: 'Қыркүйекте Функционалдық көпсайыс бойынша Қазақстан чемпионаты 2025 өтті — жылдың басты оқиғасы...',
      en: 'In September, the Kazakhstan Functional Fitness Championship 2025 was held — the main event of the year...'
    },
    comp_asia_title: {
      ru: 'Казахстан — победитель Чемпионата Азии 2025!',
      kz: 'Қазақстан — 2025 Азия чемпионатының жеңімпазы!',
      en: 'Kazakhstan — Winner of the 2025 Asian Championship!'
    },
    comp_asia_excerpt: {
      ru: 'Впервые в столице Саудовской Аравии состоялся Чемпионат Азии по функциональному многоборью...',
      kz: 'Алғаш рет Сауд Арабиясының астанасында функционалдық көпсайыс бойынша Азия чемпионаты өтті...',
      en: 'For the first time, the Asian Functional Fitness Championship was held in the capital of Saudi Arabia...'
    },

    // Страница Документы
    docs_title: {
      ru: 'Документы',
      kz: 'Құжаттар',
      en: 'Documents'
    },
    docs8_page_title: {
      ru: 'Документы и Регламенты',
      kz: 'Құжаттар және Регламенттер',
      en: 'Documents and Regulations'
    },
    doc1_title: {
      ru: 'Антидопинговые Правила',
      kz: 'Допингке қарсы ережелер',
      en: 'Anti-Doping Rules'
    },
    doc1_description: {
      ru: 'Правила проведения антидопинг-контроля на соревнованиях',
      kz: 'Соревнованиях антидопинг-бақылау өткізу ережелері',
      en: 'Anti-doping control procedures for competitions'
    },
    doc2_title: {
      ru: '2026 Международные Правила и Судейство',
      kz: '2026 Халықаралық ережелер және сөйтіндіктеме',
      en: '2026 International Rules and Judging'
    },
    doc2_description: {
      ru: 'Международные правила и система судейства соревнований',
      kz: 'Халықаралық ережелер және жарыстарды сөйтіндіктеу жүйесі',
      en: 'International rules and competition judging system'
    },
    docs_subtitle: {
      ru: 'Официальные документы и положения федерации',
      kz: 'Федерацияның ресми құжаттары мен ережелері',
      en: 'Official documents and regulations of the federation'
    },
    doc_calendar_2026: {
      ru: 'Календарь соревнований 2026',
      kz: '2026 жылғы жарыстар күнтізбесі',
      en: 'Competition Calendar 2026'
    },
    doc_report_masters: {
      ru: 'Отчёт независимого эксперта по организации Чемпионата мира iF3 2025 - Masters',
      kz: 'iF3 2025 Masters әлем чемпионатын ұйымдастыру бойынша тәуелсіз сарапшының есебі',
      en: 'Independent Expert Report on iF3 2025 World Championship - Masters Organization'
    },
    doc_regulations: {
      ru: 'Положение чемпионата Казахстана',
      kz: 'Қазақстан чемпионатының ережесі',
      en: 'Kazakhstan Championship Regulations'
    },
    doc_anti_doping: {
      ru: 'Антидопинговые Правила и Правила проведения антидопинг-контроля на соревнованиях',
      kz: 'Допингке қарсы ережелер және жарыстарда допинг-бақылау өткізу ережелері',
      en: 'Anti-Doping Rules and Anti-Doping Control Procedures at Competitions'
    },
    doc_calendar: {
      ru: 'Календарь соревнований',
      kz: 'Жарыстар күнтізбесі',
      en: 'Competition Calendar'
    },
    doc_standards: {
      ru: 'Стандарты движений',
      kz: 'Қозғалыс стандарттары',
      en: 'Movement Standards'
    },
    doc_accreditation: {
      ru: 'Аккредитация IF3 в Казахстане',
      kz: 'Қазақстандағы IF3 аккредитациясы',
      en: 'IF3 Accreditation in Kazakhstan'
    },
    doc_regulations_title: {
      ru: 'Положение Чемпионата РК по функциональному многоборью',
      kz: 'ҚР Функционалдық көпсайыс чемпионатының ережесі',
      en: 'RK Functional Fitness Championship Regulations'
    },
    publication_date: {
      ru: 'Дата публикации:',
      kz: 'Жариялау күні:',
      en: 'Publication Date:'
    },

    // Страница Аккредитации
    accreditation_title: {
      ru: 'Международная аккредитация',
      kz: 'Халықаралық аккредитация',
      en: 'International Accreditation'
    },
    accreditation_text: {
      ru: 'Дата выдачи: 8 октября 2023 года\nВыдано: International Functional Fitness Federation (iF3)\nНастоящий документ подтверждает, что Федерация функционального многоборья Республики Казахстан аккредитована Международной Федерацией Функционального Фитнеса (iF3) и является единственным официальным представителем iF3 на территории Республики Казахстан.\nВ соответствии с условиями аккредитации, Федерация функционального многоборья Республики Казахстан:\nпредставляет интересы Международной Федерации Функционального Фитнеса (iF3) на территории страны;\nобладает всеми правами, предоставленными международной структурой iF3;\nуполномочена формировать и направлять спортсменов Республики Казахстан для участия в чемпионатах мира и континентальных первенстви iF3;\nполучает полную и всестороннюю поддержку со стороны iF3 для осуществления своей деятельности и развития функционального многоборья в Казахстане.\nДокумент подписан и заверен Международной Федерацией Функционального Фитнеса (iF3) как подтверждение официального международного статуса Федерации функционального многоборья Республики Казахстан.',
      kz: 'Берілген күні: 2023 жылғы 8 қазан\nБерген: International Functional Fitness Federation (iF3)\nОсы құжат Қазақстан Республикасының Функционалдық көпсайыс федерациясының Халықаралық Функционалдық Фитнес Федерациясымен (iF3) аккредитацияланғанын және Қазақстан Республикасы аумағында iF3-тің жалғыз ресми өкілі болып табылатынын растайды.\nАккредитация шарттарына сәйкес, Қазақстан Республикасының Функционалдық көпсайыс федерациясы:\nел аумағында Халықаралық Функционалдық Фитнес Федерациясының (iF3) мүдделерін білдіреді;\niF3 халықаралық құрылымы берген барлық құқықтарға ие;\nҚазақстан Республикасының спортшыларын iF3 әлем чемпионаттары мен құрлықтық біріншіліктеріне қатысуға қалыптастыруға және жіберуге уәкілетті;\nҚазақстанда функционалдық көпсайысты дамыту және өз қызметін жүзеге асыру үшін iF3 тарапынан толық және жан-жақты қолдау алады.\nҚұжатқа Қазақстан Республикасының Функционалдық көпсайыс федерациясының ресми халықаралық мәртебесін растау ретінде Халықаралық Функционалдық Фитнес Федерациясы (iF3) қол қойып, куәландырған.',
      en: 'Issue Date: October 8, 2023\nIssued by: International Functional Fitness Federation (iF3)\nThis document confirms that the Functional Fitness Federation of the Republic of Kazakhstan is accredited by the International Functional Fitness Federation (iF3) and is the sole official representative of iF3 in the territory of the Republic of Kazakhstan.\nIn accordance with the terms of accreditation, the Functional Fitness Federation of the Republic of Kazakhstan:\nrepresents the interests of the International Functional Fitness Federation (iF3) in the country;\npossesses all rights granted by the iF3 international structure;\nis authorized to form and send athletes of the Republic of Kazakhstan to participate in iF3 world championships and continental championships;\nreceives full and comprehensive support from iF3 for its activities and development of functional fitness in Kazakhstan.\nThe document is signed and certified by the International Functional Fitness Federation (iF3) as confirmation of the official international status of the Functional Fitness Federation of the Republic of Kazakhstan.'
    },

    // Футер
    footer_info: {
      ru: 'Республиканское общественное объединение «Казахстанская Федерация функционального многоборья» (КФФМ, Functional Fitness Kazakhstan) — официальный руководящий орган по функциональному фитнесу (functional fitness) и функциональному многоборью в Республике Казахстан. Мы развиваем спорт, организуем соревнования и объединяем спортсменов по всему Казахстану.',
      kz: '«Қазақстандық функционалдық көпсайыс федерациясы» республикалық қоғамдық бірлестігі (ҚФФФ, Functional Fitness Kazakhstan) — Қазақстан Республикасындағы функционалдық фитнес және функционалдық көпсайыс бойынша ресми басқарушы орган. Біз спортты дамытамыз, жарыстар ұйымдастырамыз және бүкіл Қазақстан бойынша спортшыларды біріктіреміз.',
      en: 'Republican Public Association "Kazakhstan Federation of Functional Fitness" (KFFF, Functional Fitness Kazakhstan) — the official governing body for functional fitness in the Republic of Kazakhstan. We develop sports, organize competitions and unite athletes throughout Kazakhstan.'
    },
    footer_copyright: {
      ru: '© 2025 Все права защищены — Казахстанская Федерация функционального многоборья',
      kz: '© 2025 Барлық құқықтар қорғалған — Қазақстандық функционалдық көпсайыс федерациясы',
      en: '© 2025 All rights reserved — Kazakhstan Federation of Functional Fitness'
    },

    // Страница Календарь соревнований
    calendar_title: {
      ru: 'Календарь',
      kz: 'Күнтізбе',
      en: 'Calendar'
    },

    // Страница Стандарты движений
    standards_title: {
      ru: 'Стандарты движений',
      kz: 'Қозғалыс стандарттары',
      en: 'Movement Standards'
    },

    // Страница Календарь 2026
    calendar_2026_title: {
      ru: 'Календарь соревнований по функциональному фитнесу на 2026 год',
      kz: '2026 жылға арналған функционалдық фитнес жарыстарының күнтізбесі',
      en: 'Functional Fitness Competition Calendar for 2026'
    },
    calendar_2026_desc: {
      ru: 'Календарь соревнований на 2026 год включает ключевые национальные и международные старты по функциональному фитнесу. Сезон охватывает соревнования различного уровня — от региональных кубков до мировых чемпионатов.',
      kz: '2026 жылға арналған жарыстар күнтізбесі функционалдық фитнес бойынша негізгі ұлттық және халықаралық старттарды қамтиды. Маусым аймақтық кубоктардан әлем чемпионаттарына дейінгі әртүрлі деңгейдегі жарыстарды қамтиды.',
      en: 'The 2026 competition calendar includes key national and international functional fitness events. The season covers competitions of various levels — from regional cups to world championships.'
    },
    events_2026_title: {
      ru: 'Соревнования 2026 года',
      kz: '2026 жылғы жарыстар',
      en: '2026 Competitions'
    },
    event_alash: {
      ru: 'Зимний кубок «Алаш»',
      kz: '«Алаш» қысқы кубогы',
      en: 'Alash Winter Cup'
    },
    event_astana_open: {
      ru: 'Astana Open Cup',
      kz: 'Astana Open Cup',
      en: 'Astana Open Cup'
    },
    event_smart_fit: {
      ru: 'Чемпионат Казахстана (Smart Fit Cup)',
      kz: 'Қазақстан чемпионаты (Smart Fit Cup)',
      en: 'Kazakhstan Championship (Smart Fit Cup)'
    },
    event_neptune: {
      ru: 'Кубок Нептуна',
      kz: 'Нептун кубогы',
      en: 'Neptune Cup'
    },
    event_asian_champ: {
      ru: 'Asian Functional Fitness Championship (iF3)',
      kz: 'Азия функционалдық фитнес чемпионаты (iF3)',
      en: 'Asian Functional Fitness Championship (iF3)'
    },
    event_masters_world: {
      ru: 'Masters World Championships (iF3)',
      kz: 'Masters әлем чемпионаты (iF3)',
      en: 'Masters World Championships (iF3)'
    },
    event_world_champ: {
      ru: 'World Championships',
      kz: 'Әлем чемпионаты',
      en: 'World Championships'
    },
    calendar_disclaimer: {
      ru: 'Возможны изменения дат, локаций и категорий участников.',
      kz: 'Күндер, орындар және қатысушылар санаттары өзгеруі мүмкін.',
      en: 'Dates, locations and participant categories are subject to change.'
    },
    recommendations_title: {
      ru: 'Рекомендации участникам',
      kz: 'Қатысушыларға ұсыныстар',
      en: 'Recommendations for Participants'
    },
    recommendation_1: {
      ru: 'Планируйте тренировочный процесс заранее с учётом календаря соревнований',
      kz: 'Жарыстар күнтізбесін ескере отырып, жаттығу процесін алдын ала жоспарлаңыз',
      en: 'Plan your training process in advance according to the competition calendar'
    },
    recommendation_2: {
      ru: 'Следите за официальными анонсами, регламентами и открытием регистрации',
      kz: 'Ресми хабарландыруларды, регламенттерді және тіркеудің ашылуын қадағалаңыз',
      en: 'Follow official announcements, regulations and registration openings'
    },
    recommendation_3: {
      ru: 'Выбирайте соревнования, соответствующие вашему уровню подготовки',
      kz: 'Дайындық деңгейіңізге сәйкес жарыстарды таңдаңыз',
      en: 'Choose competitions that match your level of preparation'
    },

    // Страница docs6 - Отчёт Masters 2025
    masters_report_title: {
      ru: 'Независимый отчёт о чемпионате мира iF3 среди мастеров 2025 года',
      kz: 'iF3 2025 жылғы мастерлер арасындағы әлем чемпионаты туралы тәуелсіз есеп',
      en: 'Independent Report on the 2025 iF3 Masters World Championship'
    },
    masters_report_location: {
      ru: 'Брисбен, Австралия, 21–23 ноября 2025 года\nЗальцбург / Флахау, 15 декабря 2025 года',
      kz: 'Брисбен, Австралия, 2025 жылғы 21–23 қараша\nЗальцбург / Флахау, 2025 жылғы 15 желтоқсан',
      en: 'Brisbane, Australia, November 21–23, 2025\nSalzburg / Flachau, December 15, 2025'
    },
    masters_recommendation: {
      ru: 'Рекомендация',
      kz: 'Ұсыныс',
      en: 'Recommendation'
    },
    masters_recommendations: {
      ru: 'Рекомендации',
      kz: 'Ұсыныстар',
      en: 'Recommendations'
    },
    masters_section_1: {
      ru: '1. Вводные замечания',
      kz: '1. Кіріспе ескертулер',
      en: '1. Introductory Remarks'
    },
    masters_intro_1: {
      ru: 'Международная федерация функционального фитнеса (International Functional Fitness Federation, "iF3") назначила проведение чемпионата мира iF3 среди мастеров 2025 года («Соревнование») своему австралийскому члену — Австралийской федерации функционального фитнеса (Australian Functional Fitness Federation, "AFFF").',
      kz: 'Халықаралық функционалдық фитнес федерациясы (International Functional Fitness Federation, "iF3") 2025 жылғы мастерлер арасындағы iF3 әлем чемпионатын («Жарыс») өзінің австралиялық мүшесі — Австралияның функционалдық фитнес федерациясына (Australian Functional Fitness Federation, "AFFF") өткізуге тағайындады.',
      en: 'The International Functional Fitness Federation ("iF3") assigned the hosting of the 2025 iF3 Masters World Championship ("Competition") to its Australian member — the Australian Functional Fitness Federation ("AFFF").'
    },
    masters_intro_2: {
      ru: 'Президент AFFF, г-жа Меле Робинсон, была вице-президентом iF3 на момент назначения соревнований, в подготовительный период мероприятия, а также на протяжении всего времени проведения соревнований, когда она занимала должность президента Местного организационного комитета («LOC»), вплоть до закрытия соревнований.',
      kz: 'AFFF президенті, Меле Робинсон ханым, жарыстарды тағайындау кезінде, іс-шараны дайындау кезеңінде, сондай-ақ жарыстардың бүкіл өткізілу уақытында Жергілікті ұйымдастыру комитетінің («LOC») президенті қызметін атқарған кезде, жарыстар жабылғанға дейін iF3 вице-президенті болды.',
      en: 'The President of AFFF, Ms. Mele Robinson, was Vice President of iF3 at the time of the competition assignment, during the preparatory period, and throughout the competition period when she served as President of the Local Organizing Committee ("LOC"), until the competition closed.'
    },
    masters_intro_3: {
      ru: 'Г-жа Робинсон подала в отставку с должностей вице-президента iF3 и президента AFFF, так же как и генеральный секретарь AFFF г-н Энтони Роджерс, после завершения соревнований.',
      kz: 'Робинсон ханым жарыстар аяқталғаннан кейін iF3 вице-президенті және AFFF президенті лауазымдарынан, сонымен қатар AFFF бас хатшысы Энтони Роджерс мырза сияқты отставкаға кетті.',
      en: 'Ms. Robinson resigned from her positions as iF3 Vice President and AFFF President, as did AFFF Secretary General Mr. Anthony Rogers, after the competition concluded.'
    },
    masters_intro_4: {
      ru: 'Факт того, что г-жа Робинсон являлась вице-президентом iF3, объясняет, почему президент iF3 г-жа Гретхен Киттельбергер, генеральный секретарь iF3 г-н Лоран Селлешлагс, казначей iF3 г-н Брентон Стоун, а также член исполнительного совета, Его Королевское Высочество принц Халед бин Альвалид бин Талал Аль Сауд, могли доверять тому, что соревнования будут подготовлены в соответствии с требованиями и стандартами, установленными iF3.',
      kz: 'Робинсон ханымның iF3 вице-президенті болғаны iF3 президенті Гретхен Киттельбергер ханым, iF3 бас хатшысы Лоран Селлешлагс мырза, iF3 қазынашысы Брентон Стоун мырза, сондай-ақ атқарушы кеңес мүшесі, Оның Корольдік Мәртебесі ханзада Халед бин Әлуәлид бин Талал Әл Сауд жарыстардың iF3 белгілеген талаптар мен стандарттарға сәйкес дайындалатынына сене алатынын түсіндіреді.',
      en: 'The fact that Ms. Robinson was iF3 Vice President explains why iF3 President Ms. Gretchen Kittelberger, iF3 Secretary General Mr. Laurent Selleslags, iF3 Treasurer Mr. Brenton Stone, and Executive Board member His Royal Highness Prince Khaled bin Alwaleed bin Talal Al Saud could trust that the competition would be prepared in accordance with iF3 requirements and standards.'
    },
    masters_intro_5: {
      ru: 'Эти требования и стандарты изложены в Соглашении о проведении чемпионата мира iF3 среди мастеров 2025 года («Соглашение о проведении»), которое было направлено г-же Робинсон для подписания 18 апреля 2025 года. В соответствии с пунктом 13 Соглашения о проведении, г-жа Робинсон представила итоговый отчёт.',
      kz: 'Бұл талаптар мен стандарттар 2025 жылғы 18 сәуірде Робинсон ханымға қол қоюға жіберілген iF3 мастерлер арасындағы әлем чемпионатын өткізу туралы келісімде («Өткізу туралы келісім») баяндалған. Өткізу туралы келісімнің 13-тармағына сәйкес, Робинсон ханым қорытынды есепті ұсынды.',
      en: 'These requirements and standards are set forth in the 2025 iF3 Masters World Championship Hosting Agreement ("Hosting Agreement"), which was sent to Ms. Robinson for signature on April 18, 2025. In accordance with clause 13 of the Hosting Agreement, Ms. Robinson submitted the final report.'
    },
    masters_section_2: {
      ru: '2. Дата, место, время проведения соревнований, программа и участие',
      kz: '2. Жарыстың күні, орны, уақыты, бағдарламасы және қатысу',
      en: '2. Date, Venue, Time of Competition, Program and Participation'
    },
    masters_section_2_text_1: {
      ru: 'Настоящий отчёт, насколько это разумно и осуществимо, следует структуре Соглашения о проведении.',
      kz: 'Бұл есеп, ақылға қонымды және мүмкін болғанша, Өткізу туралы келісімнің құрылымына сәйкес келеді.',
      en: 'This report, as far as reasonable and practicable, follows the structure of the Hosting Agreement.'
    },
    masters_section_2_text_2: {
      ru: 'Очевидно, что не возникло никаких проблем, связанных с датой, временем и местом проведения соревнований. Соревнования состоялись в Брисбене в запланированные даты (21–23 ноября 2025 года). Они были организованы в соответствии с требованиями Общего регламента соревнований и стандартов для международно санкционированных соревнований.',
      kz: 'Жарыстардың күні, уақыты және орнына байланысты ешқандай мәселелер туындамағаны анық. Жарыстар Брисбенде жоспарланған күндері (2025 жылғы 21–23 қараша) өтті. Олар халықаралық санкцияланған жарыстар үшін Жарыстардың жалпы регламенті мен стандарттарының талаптарына сәйкес ұйымдастырылды.',
      en: 'Obviously, there were no issues related to the date, time and venue of the competition. The competition took place in Brisbane on the scheduled dates (November 21–23, 2025). They were organized in accordance with the requirements of the General Competition Regulations and standards for internationally sanctioned competitions.'
    },
    masters_section_2_text_3: {
      ru: 'Функциональный фитнес имел целью выявить наиболее универсального (всесторонне подготовленного) атлета. Предполагалось, что спортсмены будут соревноваться в 6 различных дисциплинах (тестах) и ранжироваться между собой на основе занятых мест.',
      kz: 'Функционалдық фитнес ең әмбебап (жан-жақты дайындалған) спортшыны анықтауды мақсат етті. Спортшылар 6 түрлі пәнде (тесттерде) жарысып, алған орындары бойынша рейтинг алады деп болжанды.',
      en: 'Functional fitness aimed to identify the most versatile (well-rounded) athlete. Athletes were expected to compete in 6 different disciplines (tests) and be ranked based on their placements.'
    },
    masters_section_2_text_4: {
      ru: 'Отдельные спортсмены должны были быть протестированы в категориях выносливость, сила, работа с собственным весом, навыки, смешанные дисциплины и мощность. Спортсмен, показавший наилучший совокупный результат по всем тестам, должен был быть объявлен абсолютным победителем.',
      kz: 'Жеке спортшылар төзімділік, күш, өз салмағымен жұмыс, дағдылар, аралас пәндер және қуат санаттарында тестіленуі керек еді. Барлық тесттер бойынша ең жақсы жиынтық нәтиже көрсеткен спортшы абсолютті жеңімпаз деп жарияланады.',
      en: 'Individual athletes were to be tested in the categories of endurance, strength, bodyweight work, skills, mixed disciplines, and power. The athlete with the best combined result across all tests was to be declared the overall winner.'
    },
    masters_section_2_text_5: {
      ru: 'Однако возникли проблемы, касающиеся этапа планирования до соревнований, программирования, оборудования и подготовки площадки, технических судей и судейства, поставщика услуг Circle21, а также протоколов (карточек) результатов. Недостатки в расписании привели к длительным периодам ожидания для спортсменов.',
      kz: 'Алайда, жарыстарға дейінгі жоспарлау кезеңіне, бағдарламалауға, жабдықтар мен алаңды дайындауға, техникалық судьялар мен судьялыққа, Circle21 қызмет провайдеріне, сондай-ақ нәтижелер хаттамаларына (карталарына) қатысты мәселелер туындады. Кестедегі кемшіліктер спортшылар үшін ұзақ күту кезеңдеріне әкелді.',
      en: 'However, issues arose concerning the pre-competition planning stage, programming, equipment and venue preparation, technical officials and judging, the Circle21 service provider, and result protocols (score cards). Scheduling deficiencies led to long waiting periods for athletes.'
    },
    masters_section_2_1: {
      ru: '2.1 Период планирования до соревнований',
      kz: '2.1 Жарыстарға дейінгі жоспарлау кезеңі',
      en: '2.1 Pre-Competition Planning Period'
    },
    masters_section_2_1_text_1: {
      ru: 'Процесс предварительного планирования не соответствовал стандартной практике планирования iF3. Вместо ежемесячных планировочных созвонов в течение года перед соревнованиями и созвонов каждые 1–2 недели в последний месяц, из-за других срочных обязательств iF3 и недоступности г-жи Робинсон, с мая 2025 года и до самого соревнования между членами Исполнительного совета iF3 и LOC имели место лишь неформальные обсуждения через Facebook Messenger.',
      kz: 'Алдын ала жоспарлау процесі iF3 стандартты жоспарлау тәжірибесіне сәйкес келмеді. Жарыстар алдындағы жыл бойы ай сайынғы жоспарлау қоңырауларының және соңғы айда әр 1-2 аптада қоңырау шалудың орнына, iF3-тің басқа шұғыл міндеттемелері мен Робинсон ханымның қол жетімсіздігіне байланысты, 2025 жылдың мамырынан жарысқа дейін iF3 Атқарушы кеңесі мүшелері мен LOC арасында тек Facebook Messenger арқылы бейресми талқылаулар болды.',
      en: 'The pre-planning process did not conform to iF3 standard planning practice. Instead of monthly planning calls throughout the year before the competition and calls every 1–2 weeks in the final month, due to other urgent iF3 commitments and Ms. Robinson\'s unavailability, from May 2025 until the competition itself, only informal discussions via Facebook Messenger took place between iF3 Executive Board members and the LOC.'
    },
    masters_section_2_1_text_2: {
      ru: 'LOC не запрашивал проведение каких-либо встреч с iF3 до тех пор, пока iF3 сам не начал запрашивать такие встречи. Г-жа Робинсон отменила несколько ранее запланированных встреч в преддверии соревнований из-за других обязательств и конфликтов с мероприятиями, которые она параллельно организовывала. В результате единственный официальный планировочный созвон чемпионата мира среди мастеров состоялся 28 октября 2025 года.',
      kz: 'LOC iF3-тің өзі осындай кездесулерді сұрай бастағанша iF3-пен кездесулер өткізуді сұрамады. Робинсон ханым жарыстар алдында бірнеше бұрын жоспарланған кездесулерді басқа міндеттемелер мен ол параллель ұйымдастырған іс-шаралармен қайшылықтарға байланысты болдырмады. Нәтижесінде мастерлер арасындағы әлем чемпионатының жалғыз ресми жоспарлау қоңырауы 2025 жылғы 28 қазанда өтті.',
      en: 'The LOC did not request any meetings with iF3 until iF3 itself began requesting such meetings. Ms. Robinson cancelled several previously scheduled meetings in the run-up to the competition due to other commitments and conflicts with events she was organizing in parallel. As a result, the only official planning call for the Masters World Championship took place on October 28, 2025.'
    },
    masters_section_2_1_text_3: {
      ru: 'Г-жа Робинсон была единственным представителем LOC, присутствовавшим на этом созвоне. Главный технический судья не участвовал ни в одном планировочном совещании, как и другие члены команды планирования.',
      kz: 'Робинсон ханым осы қоңырауға қатысқан LOC-тың жалғыз өкілі болды. Бас техникалық судья ешбір жоспарлау жиналысына қатыспады, жоспарлау тобының басқа мүшелері сияқты.',
      en: 'Ms. Robinson was the only LOC representative present on this call. The Head Technical Official did not participate in any planning meetings, nor did other members of the planning team.'
    },
    masters_rec_2_1_1: {
      ru: 'В течение 30 дней после подписания Соглашения о проведении LOC должен быть обязан (путём включения соответствующего положения в стандартное Соглашение iF3 о проведении) представить себя и роли своих отдельных членов, площадку, программу, оборудование, план зала, персонал и логистику в рамках виртуального site visit.',
      kz: 'Өткізу туралы келісімге қол қойылғаннан кейін 30 күн ішінде LOC (iF3 стандартты Өткізу туралы келісіміне тиісті ережені енгізу арқылы) өзін және жеке мүшелерінің рөлдерін, алаңды, бағдарламаны, жабдықтарды, зал жоспарын, персоналды және логистиканы виртуалды site visit аясында ұсынуға міндетті болуы керек.',
      en: 'Within 30 days of signing the Hosting Agreement, the LOC should be required (by including a corresponding provision in the standard iF3 Hosting Agreement) to present itself and the roles of its individual members, the venue, program, equipment, floor plan, staff and logistics as part of a virtual site visit.'
    },
    masters_rec_2_1_2: {
      ru: 'iF3 намеревалась назначить и назначила местного Head TO вместо другого кандидата.',
      kz: 'iF3 басқа кандидаттың орнына жергілікті Head TO тағайындауды көздеді және тағайындады.',
      en: 'iF3 intended to appoint and did appoint a local Head TO instead of another candidate.'
    },
    masters_rec_2_1_3: {
      ru: 'Данный Head TO ранее никогда не был задействован в мероприятиях iF3, не обладал достаточными знаниями стандартов движений iF3, не изучил в полной мере документы Test Announcement iF3 и был вынужден несколько раз консультироваться с Президентом iF3 для обсуждения корректных стандартов выполнения движений.',
      kz: 'Бұл Head TO бұрын iF3 іс-шараларына ешқашан қатыспаған, iF3 қозғалыс стандарттары туралы жеткілікті білімге ие болмаған, iF3 Test Announcement құжаттарын толық зерттемеген және қозғалыстарды дұрыс орындау стандарттарын талқылау үшін iF3 Президентімен бірнеше рет кеңесуге мәжбүр болған.',
      en: 'This Head TO had never previously been involved in iF3 events, did not have sufficient knowledge of iF3 movement standards, had not fully studied iF3 Test Announcement documents, and had to consult with the iF3 President several times to discuss correct movement standards.'
    },
    masters_rec_2_1_4: {
      ru: 'Подготовленные Head TO скоринговые карты были недостаточными для эффективного и точного отслеживания результатов спортсменов.',
      kz: 'Head TO дайындаған скоринг карталары спортшылардың нәтижелерін тиімді және дәл қадағалау үшін жеткіліксіз болды.',
      en: 'The scoring cards prepared by the Head TO were insufficient for effective and accurate tracking of athlete results.'
    },
    masters_rec_2_1_5: {
      ru: 'Даже несмотря на то, что на мероприятии могли присутствовать Head Judges из Oceania Judges Syndicate — высококвалифицированные и стабильные профессионалы, MC — один из лучших в индустрии, Director of Sport (DIS) — очень эффективный, а также платный парамедик и дополнительно обученный персонал первой помощи, и при том, что в день 1 и день 2 были обеспечены достаточные запасы питания и гидратации, общего количества персонала оказалось недостаточно для одновременной работы двух соревновательных площадок, что было признано Генеральным секретарем AFFF.',
      kz: 'Іс-шарада Oceania Judges Syndicate-тен Head Judges - жоғары білікті және тұрақты мамандар, MC - индустриядағы ең жақсылардың бірі, Director of Sport (DIS) - өте тиімді, сонымен қатар ақылы парамедик және қосымша дайындалған алғашқы көмек персоналы қатыса алғанына және 1-ші және 2-ші күндері тамақ пен гидратацияның жеткілікті қорлары қамтамасыз етілгеніне қарамастан, персоналдың жалпы саны екі жарыс алаңының бір уақытта жұмыс істеуіне жеткіліксіз болды, бұл AFFF Бас хатшысы мойындады.',
      en: 'Even though Head Judges from the Oceania Judges Syndicate — highly qualified and stable professionals, an MC — one of the best in the industry, a Director of Sport (DIS) — very effective, as well as a paid paramedic and additionally trained first aid staff could be present at the event, and despite sufficient food and hydration supplies being provided on days 1 and 2, the total number of staff was insufficient to operate two competition floors simultaneously, as acknowledged by the AFFF Secretary General.'
    },
    masters_rec_2_1_6: {
      ru: 'Следует отметить, что «парамедик» не является «медицинским работником», как того требует пункт 7 u) Хостинг-соглашения, несмотря на то что, к счастью, за всё мероприятие произошло только две травмы.',
      kz: '«Парамедик» Хостинг-келісімнің 7 u) тармағы талап ететіндей «медицина қызметкері» болып табылмайтынын атап өткен жөн, бірақ, бақытымызға орай, бүкіл іс-шара барысында тек екі жарақат болды.',
      en: 'It should be noted that a "paramedic" is not a "medical professional" as required by clause 7 u) of the Hosting Agreement, although fortunately only two injuries occurred throughout the entire event.'
    },
    masters_rec_2_1_7: {
      ru: 'Генеральный секретарь AFFF сообщил, что при необходимости назначения двух медицинских работников на каждую площадку, фактически присутствовал только один медицинский работник, чего было недостаточно для одновременного покрытия двух площадок. Это привело к задержкам в реагировании и повышенным рискам для безопасности.',
      kz: 'AFFF Бас хатшысы әр алаңға екі медицина қызметкері қажет болғанда, іс жүзінде тек бір медицина қызметкері болғанын хабарлады, бұл екі алаңды бір уақытта қамту үшін жеткіліксіз болды. Бұл жауап берудегі кідірістерге және қауіпсіздік тәуекелдерінің артуына әкелді.',
      en: 'The AFFF Secretary General reported that while two medical professionals were needed for each floor, only one medical professional was actually present, which was insufficient to cover two floors simultaneously. This led to response delays and increased safety risks.'
    },
    masters_rec_2_1_8: {
      ru: 'Часть персонала отказалась от участия ещё до начала мероприятия, включая провайдера прямой трансляции. В результате LOC остался без команды вещания.',
      kz: 'Персоналдың бір бөлігі іс-шара басталмай тұрып қатысудан бас тартты, оның ішінде тікелей трансляция провайдері. Нәтижесінде LOC хабар тарату тобынсыз қалды.',
      en: 'Some staff withdrew before the event began, including the live streaming provider. As a result, the LOC was left without a broadcast team.'
    },
    masters_rec_2_1_9: {
      ru: 'LOC приобрёл два телефона, штативы и стабилизатор (gimbal), чтобы организовать базовую статичную трансляцию на платформе, к которой велась подготовка. Однако возникшие проблемы непосредственно на площадке сделали невозможным для медиа- и технических команд настроить, протестировать или стабилизировать резервную трансляцию, а также обеспечить даже минимальное надёжное вещание.',
      kz: 'LOC дайындық жүргізілген платформада негізгі статикалық трансляцияны ұйымдастыру үшін екі телефон, штативтер және стабилизатор (gimbal) сатып алды. Алайда, тікелей алаңда туындаған мәселелер медиа және техникалық топтардың резервтік трансляцияны баптауын, тестілеуін немесе тұрақтандыруын, сондай-ақ ең аз сенімді хабар таратуды қамтамасыз етуін мүмкін емес етті.',
      en: 'The LOC purchased two phones, tripods and a gimbal to set up a basic static broadcast on the platform being prepared. However, issues that arose directly on-site made it impossible for the media and technical teams to set up, test or stabilize a backup broadcast, or to provide even minimal reliable broadcasting.'
    },
    masters_rec_2_1_10: {
      ru: 'В результате зрители были вынуждены пользоваться только немецкой трансляцией, которой LOC делился и пытался адаптировать для всех максимально возможным образом.',
      kz: 'Нәтижесінде көрермендер тек LOC бөліскен және барлығы үшін барынша бейімдеуге тырысқан неміс трансляциясын пайдалануға мәжбүр болды.',
      en: 'As a result, viewers were forced to use only the German broadcast, which the LOC shared and tried to adapt for everyone as much as possible.'
    },
    masters_rec_2_2_1: {
      ru: 'Хостинг-соглашение следует изменить таким образом, чтобы бюджет мероприятия предоставлялся организатором (Host) в iF3 до проведения виртуального site visit.',
      kz: 'Хостинг-келісім іс-шара бюджетін ұйымдастырушы (Host) виртуалды site visit өткізілгенге дейін iF3-ке ұсынатындай өзгертілуі керек.',
      en: 'The Hosting Agreement should be amended so that the event budget is provided by the Host to iF3 before the virtual site visit.'
    },
    masters_rec_2_2_2: {
      ru: 'Одновременно с этим Head TO должен назначаться iF3, а расходы на его/её поездку должны быть отражены в бюджете LOC.',
      kz: 'Сонымен бірге Head TO iF3 тағайындауы керек, ал оның сапарына кететін шығындар LOC бюджетінде көрсетілуі керек.',
      en: 'At the same time, the Head TO should be appointed by iF3, and their travel expenses should be reflected in the LOC budget.'
    },
    masters_rec_2_2_3: {
      ru: 'Head TO должен принимать участие в виртуальном site visit.',
      kz: 'Head TO виртуалды site visit-ке қатысуы керек.',
      en: 'The Head TO should participate in the virtual site visit.'
    },
    masters_rec_2_2_4: {
      ru: 'Также одновременно с бюджетом должны быть определены количество и квалификация персонала, а сам персонал представлен в рамках виртуального site visit.',
      kz: 'Сондай-ақ бюджетпен бір уақытта персоналдың саны мен біліктілігі анықталуы керек, ал персоналдың өзі виртуалды site visit аясында таныстырылуы керек.',
      en: 'Also, along with the budget, the number and qualifications of staff should be determined, and the staff themselves should be presented as part of the virtual site visit.'
    },
    masters_rec_2_2_5: {
      ru: 'Для детализации требований Хостинг-соглашение должно ссылаться на Competition Playbook, который в настоящее время находится в стадии финализации iF3.',
      kz: 'Талаптарды егжей-тегжейлі көрсету үшін Хостинг-келісім қазіргі уақытта iF3 аяқтау сатысында тұрған Competition Playbook-қа сілтеме жасауы керек.',
      en: 'To detail the requirements, the Hosting Agreement should reference the Competition Playbook, which is currently being finalized by iF3.'
    },
    masters_rec_2_2_6: {
      ru: 'Данный Competition Playbook должен, в частности:',
      kz: 'Бұл Competition Playbook, атап айтқанда:',
      en: 'This Competition Playbook should, in particular:'
    },
    masters_playbook_1: {
      ru: 'определять необходимые роли и штатные позиции на мероприятии;',
      kz: 'іс-шарада қажетті рөлдер мен штаттық лауазымдарды анықтау;',
      en: 'define the necessary roles and staff positions at the event;'
    },
    masters_playbook_2: {
      ru: 'рекомендовать LOC заключать жёсткие договоры с подрядчиками (стриминг, трансляция, поставка оборудования и т.д.), которые исключают ситуации, при которых президент LOC вынуждена самостоятельно управлять грузовиком вместо сломанного транспорта или принимать письмо об отказе стримингового провайдера за две недели до мероприятия без обязательств по замене или штрафных санкций.',
      kz: 'LOC-қа мердігерлермен (стриминг, хабар тарату, жабдық жеткізу және т.б.) қатаң келісімшарттар жасасуды ұсыну, бұл LOC президенті сынған көліктің орнына жүк көлігін өзі басқаруға немесе іс-шарадан екі апта бұрын ауыстыру міндеттемелерінсіз немесе айыппұлсыз стриминг провайдерінің бас тарту хатын қабылдауға мәжбүр болатын жағдайларды болдырмайды.',
      en: 'recommend that the LOC enter into strict contracts with contractors (streaming, broadcasting, equipment supply, etc.) that prevent situations where the LOC president is forced to drive a truck themselves instead of a broken vehicle or accept a streaming provider\'s withdrawal letter two weeks before the event without replacement obligations or penalties.'
    },
    masters_section_2_3: {
      ru: '2.3 Программирование',
      kz: '2.3 Бағдарламалау',
      en: '2.3 Programming'
    },
    masters_section_2_3_text_1: {
      ru: 'AFFF договорилась с iF3 о том, что AFFF подготовит первый проект соревновательного программирования, который будет проверен Программным комитетом iF3.',
      kz: 'AFFF iF3-пен AFFF iF3 Бағдарлама комитеті тексеретін жарыс бағдарламалаудың бірінші жобасын дайындау туралы келісті.',
      en: 'AFFF agreed with iF3 that AFFF would prepare the first draft of the competition programming, which would be reviewed by the iF3 Programming Committee.'
    },
    masters_section_2_3_text_2: {
      ru: 'Однако, несмотря на многократные запросы предоставить программирование, которое должно было быть передано iF3 как минимум за 3 месяца до мероприятия, проект программирования был получен iF3 только 22 октября 2025 года.',
      kz: 'Алайда, іс-шарадан кемінде 3 ай бұрын iF3-ке берілуі тиіс бағдарламалауды ұсыну туралы көптеген сұраныстарға қарамастан, бағдарламалау жобасы iF3 тек 2025 жылғы 22 қазанда алды.',
      en: 'However, despite multiple requests to provide programming that was supposed to be submitted to iF3 at least 3 months before the event, the programming draft was only received by iF3 on October 22, 2025.'
    },
    masters_section_2_3_text_3: {
      ru: 'Это не оставило времени для рассмотрения и анализа со стороны Программного комитета. Проект требовал доработок, так как несколько тестов не соответствовали стандартам iF3 или содержали элементы, которые не могли быть реализованы по различным причинам.',
      kz: 'Бұл Бағдарлама комитетінің қарауы мен талдауына уақыт қалдырмады. Жоба пысықтауды қажет етті, өйткені бірнеше тесттер iF3 стандарттарына сәйкес келмеді немесе әртүрлі себептермен жүзеге асырылмайтын элементтерді қамтыды.',
      en: 'This left no time for review and analysis by the Programming Committee. The draft required revisions as several tests did not meet iF3 standards or contained elements that could not be implemented for various reasons.'
    },
    masters_section_2_3_text_4: {
      ru: 'В результате Президент iF3 Гретхен Киттельбергер была вынуждена лично вмешаться, чтобы в экстренном порядке привести документы Test Announcement в надлежащий вид.',
      kz: 'Нәтижесінде iF3 Президенті Гретхен Киттельбергер Test Announcement құжаттарын шұғыл түрде тиісті түрге келтіру үшін жеке араласуға мәжбүр болды.',
      en: 'As a result, iF3 President Gretchen Kittelberger was forced to personally intervene to urgently bring the Test Announcement documents into proper form.'
    },
    masters_section_2_3_text_5: {
      ru: 'Заявленный LOC в Финальном отчёте «подход программирования с приоритетом безопасности», возможно, был идеологически верным и в итоге оказался успешным, однако он не может заменить отсутствие своевременных действий.',
      kz: 'LOC Қорытынды есепте мәлімдеген «қауіпсізідікке басымдылық беретін бағдарламалау тәсілі» идеологиялық тұрғыдан дұрыс болған шығар және нәтижесінде сәтті болды, бірақ ол уақтылы әрекеттердің болмауын алмастыра алмайды.',
      en: 'The "safety-first programming approach" stated by the LOC in the Final Report may have been ideologically correct and ultimately proved successful, but it cannot replace the lack of timely action.'
    },
    masters_rec_2_3: {
      ru: 'Рекомендуется, чтобы Программный комитет iF3 взял на себя полную ответственность за программирование мероприятий iF3 и самостоятельно разрабатывал тесты, используя вклад LOC в рамках виртуального site visit.',
      kz: 'iF3 Бағдарлама комитетінің iF3 іс-шараларын бағдарламалауға толық жауапкершілікті өз мойнына алуы және виртуалды site visit аясында LOC үлесін пайдалана отырып, тесттерді өз бетінше әзірлеуі ұсынылады.',
      en: 'It is recommended that the iF3 Programming Committee take full responsibility for programming iF3 events and independently develop tests, using LOC input as part of the virtual site visit.'
    },
    masters_section_2_4: {
      ru: '2.4 Оборудование и подготовка площадки',
      kz: '2.4 Жабдық және алаңды дайындау',
      en: '2.4 Equipment and Venue Preparation'
    },
    masters_section_2_4_text_1: {
      ru: 'Жалобы спортсменов на площадку очевидно не имели под собой оснований. Перенос всей соревновательной зоны в нижний павильон площадки, который имел более ровную поверхность, следовало рассмотреть с самого начала, так же как и необходимость более качественной навигации и разметки.',
      kz: 'Спортшылардың алаңға шағымдары негізсіз болғаны анық. Бүкіл жарыс аймағын тегіс бетке ие алаңның төменгі павильонына көшіру басынан қарастырылуы керек еді, сондай-ақ жақсырақ навигация мен белгілеу қажеттілігі де.',
      en: 'Athletes\' complaints about the venue were obviously unfounded. Moving the entire competition area to the lower pavilion of the venue, which had a more even surface, should have been considered from the start, as should the need for better navigation and marking.'
    },
    masters_section_2_4_text_2: {
      ru: 'Жалобы спортсменов на использование стоек (столбов) в качестве целей для wall ball также не являлись обоснованными, поскольку стойки выполняли ту же функцию, что и цели, закреплённые на риге, и в правилах iF3 отсутствует требование об обязательном использовании wall ball-таргетов. Единственным требованием правил iF3 является высота цели, тогда как выбор типа цели — стена, стойка или иной объект — остаётся на усмотрение организаторов.',
      kz: 'Спортшылардың wall ball нысаналары ретінде тіректерді (бағаналарды) пайдалануға шағымдары да негізсіз болды, өйткені тіректер ригге бекітілген нысаналармен бірдей функцияны орындады және iF3 ережелерінде wall ball нысаналарын міндетті түрде пайдалану талабы жоқ. iF3 ережелерінің жалғыз талабы - нысананың биіктігі, ал нысана түрін таңдау - қабырға, тірек немесе басқа нысан - ұйымдастырушылардың қалауына қалдырылады.',
      en: 'Athletes\' complaints about using stands (poles) as wall ball targets were also unfounded, as the stands performed the same function as targets mounted on the rig, and iF3 rules do not require the mandatory use of wall ball targets. The only requirement in iF3 rules is the target height, while the choice of target type — wall, stand, or other object — is left to the organizers\' discretion.'
    },
    masters_section_2_4_text_3: {
      ru: 'Несмотря на утверждения об обратном, разминочного оборудования было достаточно, и оно было лично доставлено на грузовике Президентом LOC. Это оборудование включало:',
      kz: 'Керісінше мәлімдемелерге қарамастан, жылыну жабдығы жеткілікті болды және оны LOC Президенті жүк көлігімен жеке жеткізді. Бұл жабдыққа мыналар кірді:',
      en: 'Despite claims to the contrary, there was sufficient warm-up equipment, and it was personally delivered by truck by the LOC President. This equipment included:'
    },
    masters_equipment_1: {
      ru: 'дополнительный полный риг,',
      kz: 'қосымша толық риг,',
      en: 'an additional full rig,'
    },
    masters_equipment_2: {
      ru: 'полное покрытие матами,',
      kz: 'маттармен толық жабу,',
      en: 'full mat coverage,'
    },
    masters_equipment_3: {
      ru: 'шесть полных комплектов блинов и штанг,',
      kz: 'дискілер мен штангалардың алты толық жинағы,',
      en: 'six complete sets of plates and barbells,'
    },
    masters_equipment_4: {
      ru: 'дополнительные гантели,',
      kz: 'қосымша гантельдер,',
      en: 'additional dumbbells,'
    },
    masters_equipment_5: {
      ru: 'дополнительные мячи для wall ball,',
      kz: 'қосымша wall ball доптары,',
      en: 'additional wall balls,'
    },
    masters_equipment_6: {
      ru: 'один дополнительный BikeErg,',
      kz: 'бір қосымша BikeErg,',
      en: 'one additional BikeErg,'
    },
    masters_equipment_7: {
      ru: 'два дополнительных гребных тренажёра,',
      kz: 'екі қосымша есу тренажері,',
      en: 'two additional rowing machines,'
    },
    masters_section_2_4_text_4: {
      ru: '— всё это сверх оборудования, уже арендованного ранее.',
      kz: '— мұның бәрі бұрын жалға алынған жабдыққа қосымша.',
      en: '— all this in addition to equipment already rented earlier.'
    },
    masters_section_2_4_text_5: {
      ru: 'Часть оборудования не прибыла на площадку из-за поломки грузового автомобиля. Команда LOC самостоятельно выехала на склад на имеющемся грузовике и лично забрала 8 гребных тренажёров и 8 BikeErg.',
      kz: 'Жабдықтың бір бөлігі жүк көлігінің бұзылуына байланысты алаңға келмеді. LOC командасы қолда бар жүк көлігімен қоймаға өздері барып, 8 есу тренажері мен 8 BikeErg-ті жеке алып кетті.',
      en: 'Some equipment did not arrive at the venue due to a truck breakdown. The LOC team independently drove to the warehouse in the available truck and personally picked up 8 rowing machines and 8 BikeErgs.'
    },
    masters_section_2_4_text_6: {
      ru: 'Забрать SkiErg не представлялось возможным из-за отсутствия исправного грузовика, резервного транспорта, доступного поставщика и оставшегося временного окна для самовывоза. Это вынудило внести изменения в соревновательные тесты, запланированные на пятницу.',
      kz: 'Жұмыс істейтін жүк көлігінің, резервтік көліктің, қол жетімді жеткізушінің және өзін-өзі алып кету үшін қалған уақыт терезесінің болмауына байланысты SkiErg алу мүмкін болмады. Бұл жұмаға жоспарланған жарыс тесттеріне өзгерістер енгізуге мәжбүр етті.',
      en: 'It was not possible to pick up the SkiErg due to the lack of a working truck, backup transport, available supplier, and remaining time window for self-pickup. This forced changes to the competition tests scheduled for Friday.'
    },
    masters_section_2_4_text_7: {
      ru: 'Дополнительная попытка LOC одолжить SkiErg в местном зале (Torian) не увенчалась успехом, поскольку количества доступных тренажёров оказалось недостаточно для требований мероприятия.',
      kz: 'LOC-тың жергілікті залдан (Torian) SkiErg қарызға алу әрекеті сәтсіз аяқталды, өйткені қол жетімді тренажерлердің саны іс-шара талаптары үшін жеткіліксіз болды.',
      en: 'The LOC\'s additional attempt to borrow SkiErg from a local gym (Torian) was unsuccessful, as the number of available machines was insufficient for the event requirements.'
    },
    masters_section_2_4_text_8: {
      ru: 'Официальные футболки спортсменов задержались в пути. За счёт дополнительных расходов LOC была организована срочная авиадоставка, чтобы волонтёры, персонал и австралийские спортсмены получили футболки во время мероприятия.',
      kz: 'Спортшылардың ресми футболкалары жолда кешікті. LOC қосымша шығындар есебінен волонтерлер, персонал және австралиялық спортшылар іс-шара кезінде футболкаларды алуы үшін шұғыл әуе жеткізу ұйымдастырды.',
      en: 'Official athlete t-shirts were delayed in transit. At additional expense to the LOC, urgent air delivery was arranged so that volunteers, staff, and Australian athletes could receive t-shirts during the event.'
    },
    masters_section_2_4_text_9: {
      ru: 'Футболки спортсменов не были готовы к продаже на мероприятии, как планировалось изначально.',
      kz: 'Спортшылардың футболкалары бастапқыда жоспарланғандай іс-шарада сатуға дайын болмады.',
      en: 'Athlete t-shirts were not ready for sale at the event as originally planned.'
    },
    masters_section_2_4_text_10: {
      ru: 'Именные таблички спортсменов поступили с ошибками. LOC рассчитывал, что поставщик, который ранее всегда обеспечивал высокое качество для крупных мероприятий, выполнит заказ надлежащим образом, и не произвёл дополнительную проверку табличек перед их распространением.',
      kz: 'Спортшылардың есім тақтайшалары қателермен келді. LOC бұрын ірі іс-шаралар үшін әрқашан жоғары сапаны қамтамасыз еткен жеткізуші тапсырысты тиісті түрде орындайды деп есептеді және тақтайшаларды тарату алдында қосымша тексеру жүргізбеді.',
      en: 'Athlete name plates arrived with errors. The LOC expected that the supplier, who had always previously provided high quality for major events, would fulfill the order properly, and did not perform additional verification of the plates before distribution.'
    },
    masters_section_2_4_text_11: {
      ru: 'Президент LOC взяла на себя ответственность за проблему с именными табличками и официально выразила сожаление по поводу произошедшего.',
      kz: 'LOC Президенті есім тақтайшаларына қатысты мәселе үшін жауапкершілікті өз мойнына алды және болған жағдайға ресми түрде өкініш білдірді.',
      en: 'The LOC President took responsibility for the name plate issue and officially expressed regret for what happened.'
    },
    masters_rec_2_4_1: {
      ru: 'Упомянутый выше в разделе 2.2 Competition Playbook должен рекомендовать организационным комитетам (OC) заключать жёсткие договоры с поставщиками оборудования, которые, за исключением случаев форс-мажора, предотвращают необходимость замещающих действий со стороны LOC и возникновение дополнительных затрат.',
      kz: 'Жоғарыда 2.2 бөлімде аталған Competition Playbook ұйымдастыру комитеттеріне (OC) жабдық жеткізушілермен форс-мажор жағдайларынан басқа LOC тарапынан алмастыру әрекеттерін және қосымша шығындардың пайда болуын болдырмайтын қатаң келісімшарттар жасасуды ұсынуы керек.',
      en: 'The Competition Playbook mentioned above in section 2.2 should recommend that organizing committees (OC) enter into strict contracts with equipment suppliers that, except in cases of force majeure, prevent the need for replacement actions by the LOC and the incurrence of additional costs.'
    },
    masters_rec_2_4_2: {
      ru: 'Резервные решения должны быть предусмотрены заблаговременно, задолго до проведения мероприятия.',
      kz: 'Резервтік шешімдер іс-шара өткізілгенге дейін алдын ала қарастырылуы керек.',
      en: 'Backup solutions should be provided in advance, well before the event.'
    },
    masters_section_2_5: {
      ru: '2.5 Регистрация и участие',
      kz: '2.5 Тіркеу және қатысу',
      en: '2.5 Registration and Participation'
    },
    masters_section_2_5_text_1: {
      ru: 'Очевидно, что ожидания в отношении роли Circle21 на мероприятии различались.',
      kz: 'Іс-шарадағы Circle21 рөліне қатысты күтулер әртүрлі болғаны анық.',
      en: 'Obviously, expectations regarding Circle21\'s role at the event differed.'
    },
    masters_section_2_5_text_2: {
      ru: 'И iF3, и AFFF ожидали, что представитель Circle21 лично прибудет на мероприятие, чтобы помочь с организацией прямой трансляции и live-подсчётом результатов.',
      kz: 'iF3 де, AFFF де Circle21 өкілі тікелей трансляцияны және нәтижелерді тікелей эфирде санауды ұйымдастыруға көмектесу үшін іс-шараға жеке келеді деп күтті.',
      en: 'Both iF3 and AFFF expected a Circle21 representative to personally attend the event to help organize the live broadcast and live scoring.'
    },
    masters_section_2_5_text_3: {
      ru: 'Кроме того, AFFF ожидала физического присутствия, включая:',
      kz: 'Сонымен қатар, AFFF физикалық қатысуды күтті, оның ішінде:',
      en: 'Additionally, AFFF expected physical presence, including:'
    },
    masters_circle21_1: {
      ru: 'экраны «сервер – спортсмен»,',
      kz: '«сервер – спортшы» экрандары,',
      en: '"server – athlete" screens,'
    },
    masters_circle21_2: {
      ru: 'оборудование на площадке,',
      kz: 'алаңдағы жабдық,',
      en: 'on-site equipment,'
    },
    masters_circle21_3: {
      ru: 'устранение технических проблем в режиме реального времени.',
      kz: 'нақты уақыт режимінде техникалық мәселелерді жою.',
      en: 'real-time troubleshooting.'
    },
    masters_section_2_5_text_4: {
      ru: 'В итоговом отчёте AFFF отсутствие личного присутствия Circle21 было обозначено как причина серьёзных операционных пробелов, в частности:',
      kz: 'AFFF қорытынды есебінде Circle21-дің жеке қатыспауы елеулі операциялық олқылықтардың себебі ретінде көрсетілді, атап айтқанда:',
      en: 'In the AFFF final report, the absence of Circle21\'s physical presence was identified as a cause of serious operational gaps, specifically:'
    },
    masters_gaps_1: {
      ru: 'отсутствие технического специалиста по подсчёту результатов на площадке,',
      kz: 'алаңда нәтижелерді санау бойынша техникалық маманның болмауы,',
      en: 'lack of a technical scoring specialist on-site,'
    },
    masters_gaps_2: {
      ru: 'более медленная обработка результатов,',
      kz: 'нәтижелерді баяу өңдеу,',
      en: 'slower results processing,'
    },
    masters_gaps_3: {
      ru: 'увеличение объёма ручного ввода данных,',
      kz: 'деректерді қолмен енгізу көлемінің артуы,',
      en: 'increased manual data entry,'
    },
    masters_gaps_4: {
      ru: 'существенно возросшая нагрузка на персонал,',
      kz: 'персоналға жүктеменің айтарлықтай артуы,',
      en: 'significantly increased staff workload,'
    },
    masters_gaps_5: {
      ru: 'отсутствие резервного плана на случай исчезновения старт-листов (heat lists) из системы Circle21 при задержках заездов.',
      kz: 'жүгіріс кезінде кешігулер болған кезде Circle21 жүйесінен старт-тізімдердің (heat lists) жоғалуы жағдайында резервтік жоспардың болмауы.',
      en: 'lack of a backup plan in case heat lists disappeared from the Circle21 system during heat delays.'
    },
    masters_section_2_5_text_5: {
      ru: 'Президент iF3 сообщила, что отсутствие личного присутствия действительно усложнило использование платформы для LOC, однако изначально не предполагалось, что представитель Circle21 будет заниматься вводом результатов на протяжении всего уикенда.',
      kz: 'iF3 Президенті жеке қатысудың болмауы LOC үшін платформаны пайдалануды қиындатқанын хабарлады, бірақ бастапқыда Circle21 өкілі бүкіл демалыс күндері нәтижелерді енгізумен айналысады деп болжанбаған.',
      en: 'The iF3 President stated that the lack of physical presence did indeed complicate the use of the platform for the LOC, but it was not originally anticipated that a Circle21 representative would handle results entry throughout the weekend.'
    },
    masters_section_2_5_text_6: {
      ru: 'Представитель Circle21 также сообщил iF3, что предоставил LOC несколько обучающих видеоматериалов по работе с платформой, а также что LOC не воспользовался его предложением провести звонок для обучения эффективному использованию системы.',
      kz: 'Circle21 өкілі де iF3-ке LOC-қа платформамен жұмыс істеу бойынша бірнеше оқу бейнематериалдарын бергенін, сонымен қатар LOC жүйені тиімді пайдалануды үйрету үшін қоңырау шалу ұсынысын пайдаланбағанын хабарлады.',
      en: 'The Circle21 representative also informed iF3 that they had provided the LOC with several training videos on working with the platform, and that the LOC did not take up their offer to conduct a call to train on effective system use.'
    },
    masters_section_2_5_text_7: {
      ru: 'Учитывая ключевую роль Circle21, обусловленную фактической монополией на обслуживание iF3 и её мероприятий, непрофессиональным и не соответствующим деловым стандартам выглядит решение Circle21 отменить личное присутствие на мероприятии в столь короткие сроки без предоставления очного резервного решения.',
      kz: 'iF3 және оның іс-шараларына қызмет көрсетудегі нақты монополияға байланысты Circle21-дің негізгі рөлін ескере отырып, Circle21-дің іс-шараға жеке қатысуды мұндай қысқа мерзімде жеке резервтік шешім бермей болдырмау шешімі кәсіби емес және іскерлік стандарттарға сәйкес келмейтін болып көрінеді.',
      en: 'Given Circle21\'s key role due to their de facto monopoly on servicing iF3 and its events, Circle21\'s decision to cancel their physical presence at the event on such short notice without providing an on-site backup solution appears unprofessional and inconsistent with business standards.'
    },
    masters_rec_2_5: {
      ru: 'В связи с постоянно расширяющейся интеграцией Circle21 в структуру и мероприятия iF3, а также взаимной зависимостью сторон, крайне рекомендуется заключить официальный договор с Circle21, в котором будут чётко определены взаимные права и обязанности, а также предусмотрены последствия неисполнения обязательств и механизмы урегулирования споров.',
      kz: 'Circle21-дің iF3 құрылымы мен іс-шараларына үнемі кеңейіп келе жатқан интеграциясын, сондай-ақ тараптардың өзара тәуелділігін ескере отырып, Circle21-мен өзара құқықтар мен міндеттемелер нақты анықталатын, сондай-ақ міндеттемелерді орындамаудың салдары мен даулар реттеу тетіктері қарастырылатын ресми келісімшарт жасасу өте ұсынылады.',
      en: 'Given Circle21\'s constantly expanding integration into iF3\'s structure and events, as well as the mutual dependence of the parties, it is highly recommended to enter into a formal contract with Circle21 that clearly defines mutual rights and obligations, and provides for consequences of non-performance and dispute resolution mechanisms.'
    },
    masters_section_2_6: {
      ru: '2.6 Скоринговые карты',
      kz: '2.6 Скоринг карталары',
      en: '2.6 Scoring Cards'
    },
    masters_section_2_6_text_1: {
      ru: 'Подготовка скоринговых карт для мероприятия является обязанностью LOC под руководством Head TO.',
      kz: 'Іс-шара үшін скоринг карталарын дайындау Head TO басшылығымен LOC міндеті болып табылады.',
      en: 'Preparation of scoring cards for the event is the responsibility of the LOC under the guidance of the Head TO.'
    },
    masters_section_2_6_text_2: {
      ru: 'Скоринговые карты для 4 из 6 тестов на мероприятии были подготовлены ненадлежащим образом либо с ошибками.',
      kz: 'Іс-шарадағы 6 тесттің 4-і үшін скоринг карталары тиісті түрде дайындалмады немесе қателермен дайындалды.',
      en: 'Scoring cards for 4 out of 6 tests at the event were prepared improperly or with errors.'
    },
    masters_section_2_6_text_3: {
      ru: 'Каждый спортсмен должен иметь отдельную скоринговую карту для каждого теста. Это требование не было выполнено для теста на выносливость (Endurance Test).',
      kz: 'Әрбір спортшыда әр тест үшін жеке скоринг картасы болуы керек. Бұл талап төзімділік тесті (Endurance Test) үшін орындалмады.',
      en: 'Each athlete should have a separate scoring card for each test. This requirement was not met for the Endurance Test.'
    },
    masters_section_2_6_text_4: {
      ru: 'Скоринговые карты для теста на выносливость были настолько плохо подготовлены, что временные показатели невозможно было сопоставить с конкретными спортсменами, что вынудило iF3 и LOC аннулировать результаты данного теста.',
      kz: 'Төзімділік тесті үшін скоринг карталары соншалықты нашар дайындалды, уақыт көрсеткіштерін нақты спортшылармен сәйкестендіру мүмкін болмады, бұл iF3 және LOC-ты осы тест нәтижелерін жарамсыз деп тануға мәжбүр етті.',
      en: 'The scoring cards for the Endurance Test were so poorly prepared that time results could not be matched to specific athletes, forcing iF3 and the LOC to void the results of this test.'
    },
    masters_section_2_6_text_5: {
      ru: 'Кроме того:',
      kz: 'Сонымен қатар:',
      en: 'Additionally:'
    },
    masters_scoring_1: {
      ru: 'количество повторений, использованное для расчёта результатов в Skill Test, было указано неверно;',
      kz: 'Skill Test нәтижелерін есептеу үшін пайдаланылған қайталау саны дұрыс көрсетілмеген;',
      en: 'the number of repetitions used to calculate Skill Test results was incorrectly stated;'
    },
    masters_scoring_2: {
      ru: 'количество повторений, указанное в скоринговых картах Power Test, было некорректным;',
      kz: 'Power Test скоринг карталарында көрсетілген қайталау саны дұрыс емес болды;',
      en: 'the number of repetitions stated in Power Test scoring cards was incorrect;'
    },
    masters_scoring_3: {
      ru: 'половина скоринговых карт Mixed Test содержала пустые поля без указания количества повторений;',
      kz: 'Mixed Test скоринг карталарының жартысында қайталау санын көрсетпей бос өрістер болды;',
      en: 'half of the Mixed Test scoring cards contained blank fields without repetition counts;'
    },
    masters_scoring_4: {
      ru: 'скоринговая карта Bodyweight Test не содержала общего количества повторений в тесте.',
      kz: 'Bodyweight Test скоринг картасында тесттегі жалпы қайталау саны болмады.',
      en: 'the Bodyweight Test scoring card did not contain the total number of repetitions in the test.'
    },
    masters_section_2_6_text_6: {
      ru: 'Спортсменам часто выдавались скоринговые карты, не соответствующие их возрастной категории, а TO заполняли карты, но не фиксировали корректно имя спортсмена, номер заезда (heat) и возрастную категорию.',
      kz: 'Спортшыларға жиі олардың жас санатына сәйкес келмейтін скоринг карталары берілді, ал TO карталарды толтырды, бірақ спортшының атын, жүгіріс нөмірін (heat) және жас санатын дұрыс белгілемеді.',
      en: 'Athletes were often given scoring cards that did not match their age category, and TOs filled out cards but did not correctly record the athlete\'s name, heat number, and age category.'
    },
    masters_section_2_6_text_7: {
      ru: 'В Финальном отчёте AFFF было признано, что тест на выносливость привёл к серьёзным проблемам с подсчётом результатов, в том числе из-за:',
      kz: 'AFFF Қорытынды есебінде төзімділік тесті нәтижелерді санаумен байланысты елеулі мәселелерге әкелгені мойындалды, оның ішінде:',
      en: 'The AFFF Final Report acknowledged that the Endurance Test led to serious scoring issues, including due to:'
    },
    masters_problems_1: {
      ru: 'скоринговых карт, заполненных от руки в последний момент,',
      kz: 'соңғы сәтте қолмен толтырылған скоринг карталары,',
      en: 'scoring cards filled out by hand at the last moment,'
    },
    masters_problems_2: {
      ru: 'ручных исправлений,',
      kz: 'қолмен түзетулер,',
      en: 'manual corrections,'
    },
    masters_problems_3: {
      ru: 'медленной обработки данных.',
      kz: 'деректерді баяу өңдеу.',
      en: 'slow data processing.'
    },
    masters_section_2_6_text_8: {
      ru: 'Президент AFFF взяла на себя ответственность за то, что аудит скоринговых карт не был проведён своевременно.',
      kz: 'AFFF Президенті скоринг карталарының аудиті уақытылы жүргізілмегені үшін жауапкершілікті өз мойнына алды.',
      en: 'The AFFF President took responsibility for the fact that the scoring card audit was not conducted in a timely manner.'
    },
    masters_rec_2_6: {
      ru: 'Хостинг-соглашение следует изменить, дополнив его более конкретными обязательствами принимающей стороны, чем предусмотрено текущим пунктом 7 k), а именно — обязанностью иметь заранее напечатанные скоринговые карты с именами спортсменов и всеми необходимыми данными для соответствующего теста и обеспечить их выдачу участникам до начала каждого теста.',
      kz: 'Хостинг-келісімді ағымдағы 7 k) тармағында қарастырылғаннан гөрі қабылдаушы тараптың нақтырақ міндеттемелерімен толықтыру арқылы өзгерту керек, атап айтқанда — спортшылардың есімдері және тиісті тест үшін барлық қажетті деректері бар алдын ала басылған скоринг карталарын иелену және әр тест басталмас бұрын оларды қатысушыларға беруді қамтамасыз ету міндеті.',
      en: 'The Hosting Agreement should be amended to include more specific obligations of the host party than provided in the current clause 7 k), namely — the obligation to have pre-printed scoring cards with athlete names and all necessary data for the corresponding test and to ensure their distribution to participants before each test begins.'
    },
    masters_section_3: {
      ru: '3. Тесты',
      kz: '3. Тесттер',
      en: '3. Tests'
    },
    masters_section_3_1: {
      ru: '3.1 Тест на выносливость (Endurance Test)',
      kz: '3.1 Төзімділік тесті (Endurance Test)',
      en: '3.1 Endurance Test'
    },
    masters_section_3_1_text_1: {
      ru: 'Тест на выносливость пришлось изменить в последний момент, поскольку оборудование, необходимое для его проведения, не прибыло на площадку из-за поломки грузового автомобиля.',
      kz: 'Төзімділік тестін соңғы сәтте өзгертуге тура келді, өйткені оны өткізуге қажетті жабдық жүк көлігінің бұзылуына байланысты алаңға келмеді.',
      en: 'The Endurance Test had to be changed at the last moment because the equipment needed to conduct it did not arrive at the venue due to a truck breakdown.'
    },
    masters_section_3_1_text_2: {
      ru: 'Изменения были согласованы Президентом LOC и Генеральным секретарём iF3 в то время, когда Президент iF3 находилась в пути на мероприятие.',
      kz: 'Өзгерістер iF3 Президенті іс-шараға жолда болған кезде LOC Президенті мен iF3 Бас хатшысы келісті.',
      en: 'The changes were agreed upon by the LOC President and iF3 Secretary General while the iF3 President was in transit to the event.'
    },
    masters_section_3_1_text_3: {
      ru: 'Тест проводился волнами каждые 10 минут на непрерывно идущем таймере, а не в заездах с чётко обозначенными стартом и финишем, что является стандартным форматом.',
      kz: 'Тест стандартты формат болып табылатын нақты белгіленген старт пен финиші бар жүгірістерде емес, үздіксіз жүретін таймерде әр 10 минут сайын толқындармен өткізілді.',
      en: 'The test was conducted in waves every 10 minutes on a continuously running timer, rather than in heats with clearly marked start and finish, which is the standard format.'
    },
    masters_section_3_1_text_4: {
      ru: 'В связи с этим Head TO пытался отслеживать результаты спортсменов на одном листе бумаги, фиксируя только время окончания дорожки, а затем вычитая время в зависимости от заезда спортсмена.',
      kz: 'Осыған байланысты Head TO спортшылардың нәтижелерін бір қағаз парағында қадағалауға тырысты, тек жолдың аяқталу уақытын белгілеп, содан кейін спортшының жүгірісіне байланысты уақытты алып тастады.',
      en: 'In this regard, the Head TO tried to track athlete results on a single sheet of paper, recording only the lane finish time, then subtracting time depending on the athlete\'s heat.'
    },
    masters_section_3_1_text_5: {
      ru: 'Индивидуальные скоринговые карты для спортсменов в этом тесте отсутствовали. Имена вычёркивались и вписывались заново по всему листу бумаги.',
      kz: 'Бұл тесттегі спортшылар үшін жеке скоринг карталары болмады. Есімдер бүкіл қағаз парағы бойынша сызылып, қайта жазылды.',
      en: 'There were no individual scoring cards for athletes in this test. Names were crossed out and rewritten all over the sheet of paper.'
    },
    masters_section_3_1_text_6: {
      ru: 'В результате стало невозможно определить, какое время принадлежит какому спортсмену, и примерно 30% спортсменов получили неверно засчитанные времена, а у нескольких спортсменов время отсутствовало вовсе.',
      kz: 'Нәтижесінде қай уақыт қай спортшыға тиесілі екенін анықтау мүмкін болмады және спортшылардың шамамен 30%-ы қате есептелген уақыттарды алды, ал бірнеше спортшыда уақыт мүлдем болмады.',
      en: 'As a result, it became impossible to determine which time belonged to which athlete, and approximately 30% of athletes received incorrectly recorded times, while several athletes had no times at all.'
    },
    masters_section_3_1_text_7: {
      ru: 'Все эти обстоятельства не были своевременно доведены Президентом LOC до сведения Президента iF3, а стали известны постепенно в ночь с пятницы на субботу, по частям, и лишь впоследствии были полностью установлены.',
      kz: 'Барлық осы жағдайлар LOC Президенті iF3 Президентіне уақытылы хабарланбады, жұмадан сенбіге қараған түні бөліктеп біртіндеп белгілі болды және тек кейіннен толық анықталды.',
      en: 'All these circumstances were not timely communicated by the LOC President to the iF3 President, but became known gradually on Friday night into Saturday, in pieces, and were only fully established subsequently.'
    },
    masters_section_3_1_text_8: {
      ru: '…к тому моменту, как к утру субботы около 30 % всех участников уже подали апелляции, заявляя, что результаты, внесённые в лидерборд по тесту на выносливость, являются некорректными.',
      kz: '…сенбі таңына қарай барлық қатысушылардың шамамен 30%-ы төзімділік тесті бойынша лидерборд-қа енгізілген нәтижелер дұрыс емес деп мәлімдей отырып, апелляция берді.',
      en: '...by Saturday morning, approximately 30% of all participants had already filed appeals, claiming that the results entered into the leaderboard for the Endurance Test were incorrect.'
    },
    masters_section_3_1_text_9: {
      ru: 'Единого согласованного способа разрешения ситуации найдено не было. В рамках попыток перепроведения теста было направлено несколько электронных писем.',
      kz: 'Жағдайды шешудің бірыңғай келісілген жолы табылмады. Тестті қайта өткізу әрекеттері аясында бірнеше электрондық хат жіберілді.',
      en: 'No unified agreed-upon solution was found. Several emails were sent as part of attempts to re-run the test.'
    },
    masters_section_3_1_text_10: {
      ru: 'Спортсмены и другие лица кричали на персонал, а также на других спортсменов. Очевидно, что прямой доступ спортсменов к сотрудникам iF3 на мероприятии был чрезмерным и недопустимым.',
      kz: 'Спортшылар және басқа адамдар персоналға, сондай-ақ басқа спортшыларға айқайлады. Спортшылардың іс-шарада iF3 қызметкерлеріне тікелей қол жетімділігі шамадан тыс және рұқсат етілмейтін болғаны анық.',
      en: 'Athletes and others shouted at staff, as well as at other athletes. Obviously, athletes\' direct access to iF3 staff at the event was excessive and unacceptable.'
    },
    masters_section_3_1_text_11: {
      ru: 'Персонал, задействованный в попытке перепроведения теста, отказался продолжать его проведение. Было разослано письмо, в котором сообщалось об отмене всех повторных попыток на оставшуюся часть дня, а также описывался дальнейший порядок подсчёта результатов. После принятия этого решения поступило ещё несколько жалоб от спортсменов, которые продолжались даже на After Party, однако на этом этапе большинство протестов прекратилось.',
      kz: 'Тестті қайта өткізу әрекетіне қатысқан персонал оны жалғастырудан бас тартты. Күннің қалған бөлігіне барлық қайта әрекеттердің болдырмауы туралы хабарланатын, сондай-ақ нәтижелерді санаудың одан арғы тәртібі сипатталған хат таратылды. Бұл шешім қабылданғаннан кейін спортшылардан тағы бірнеше шағым түсті, олар тіпті After Party-де де жалғасты, бірақ осы кезеңде наразылықтардың көпшілігі тоқтады.',
      en: 'Staff involved in the re-run attempt refused to continue conducting it. A letter was sent announcing the cancellation of all re-run attempts for the rest of the day, as well as describing the further procedure for calculating results. After this decision was made, several more complaints were received from athletes, which continued even at the After Party, but at this point most protests ceased.'
    },
    masters_section_3_1_text_12: {
      ru: 'Окончательное решение заключалось в том, что результаты теста на выносливость не будут учитываться в итоговом зачёте.',
      kz: 'Түпкілікті шешім төзімділік тестінің нәтижелері қорытынды есепте ескерілмейді.',
      en: 'The final decision was that the Endurance Test results would not be counted in the final standings.'
    },
    masters_section_3_1_text_13: {
      ru: 'Итоговые результаты должны были и фактически были определены на основании пяти завершённых тестов.',
      kz: 'Қорытынды нәтижелер бес аяқталған тест негізінде анықталуы тиіс және іс жүзінде анықталды.',
      en: 'Final results were to be and were in fact determined based on five completed tests.'
    },
    masters_rec_3_1_1: {
      ru: 'Правила iF3 должны быть дополнены положением, регламентирующим действия в случае утраты либо искажения результатов до такой степени, что их невозможно восстановить или корректно зафиксировать.',
      kz: 'iF3 ережелері нәтижелерді қалпына келтіру немесе дұрыс белгілеу мүмкін болмайтын дәрежеде жоғалған немесе бұрмаланған жағдайда әрекеттерді реттейтін ережемен толықтырылуы керек.',
      en: 'iF3 rules should be supplemented with a provision regulating actions in case of loss or distortion of results to such an extent that they cannot be recovered or correctly recorded.'
    },
    masters_rec_3_1_2: {
      ru: 'Доступ спортсменов и тренеров к прямому обращению к сотрудникам iF3 на мероприятиях должен быть ограничен, а обязанность по созданию такого барьера возлагается на LOC.',
      kz: 'Спортшылар мен жаттықтырушылардың іс-шараларда iF3 қызметкерлеріне тікелей жүгіну мүмкіндігі шектелуі керек, ал мұндай кедергіні құру міндеті LOC-қа жүктеледі.',
      en: 'Athletes\' and coaches\' access to directly addressing iF3 staff at events should be limited, and the obligation to create such a barrier rests with the LOC.'
    },
    masters_section_3_2: {
      ru: '3.2 Тест на навыки (Skill Test)',
      kz: '3.2 Дағдылар тесті (Skill Test)',
      en: '3.2 Skill Test'
    },
    masters_section_3_2_text_1: {
      ru: 'LOC предусмотрел 8 соревновательных дорожек для данного теста и попытался разделить каждую дорожку пополам, чтобы разместить по два спортсмена на одной дорожке.',
      kz: 'LOC бұл тест үшін 8 жарыс жолын қарастырды және бір жолға екі спортшы орналастыру үшін әр жолды екіге бөлуге тырысты.',
      en: 'The LOC provided 8 competition lanes for this test and attempted to split each lane in half to accommodate two athletes per lane.'
    },
    masters_section_3_2_text_2: {
      ru: 'Когда спортсмены увидели предполагаемую конфигурацию, они немедленно начали жаловаться на небезопасность такой схемы.',
      kz: 'Спортшылар болжанған конфигурацияны көргенде, мұндай схеманың қауіпсіз еместігіне бірден шағымдана бастады.',
      en: 'When athletes saw the proposed configuration, they immediately began complaining about the unsafe nature of such a setup.'
    },
    masters_section_3_2_text_3: {
      ru: 'После поступления многочисленных жалоб LOC вернулся к формату из 8 дорожек и переформировал заезды. Однако Президент LOC чувствовала себя неуверенно при использовании обязательного для iF3 программного обеспечения Circle21 и не смогла своевременно сформировать заезды с использованием данной системы.',
      kz: 'Көптеген шағымдар түскеннен кейін LOC 8 жолды форматқа оралды және жүгірістерді қайта қалыптастырды. Алайда, LOC Президенті iF3 үшін міндетті Circle21 бағдарламалық жасақтамасын пайдалану кезінде өзін сенімсіз сезінді және осы жүйені пайдаланып жүгірістерді уақытылы қалыптастыра алмады.',
      en: 'After numerous complaints, the LOC reverted to an 8-lane format and re-formed the heats. However, the LOC President felt uncertain using the iF3-mandated Circle21 software and was unable to form heats in a timely manner using this system.'
    },
    masters_section_3_2_text_4: {
      ru: 'Чтобы не допустить значительного отставания соревнований по времени, она перевела процесс на другую платформу — Competition Corner. Это вызвало путаницу среди спортсменов, однако на тот момент другого варианта для продолжения соревнований не существовало, поскольку на площадке не оказалось ни одного специалиста, достаточно хорошо владеющего платформой Circle21.',
      kz: 'Жарыстардың уақыт бойынша айтарлықтай артта қалуын болдырмау үшін ол процесті басқа платформаға — Competition Corner-ге ауыстырды. Бұл спортшылар арасында шатасуға себеп болды, бірақ сол сәтте жарыстарды жалғастырудың басқа нұсқасы болмады, өйткені алаңда Circle21 платформасын жеткілікті жақсы меңгерген бірде-бір маман болмады.',
      en: 'To prevent significant time delays in the competition, she moved the process to another platform — Competition Corner. This caused confusion among athletes, but at that moment there was no other option to continue the competition, as there was no specialist on-site who was sufficiently proficient with the Circle21 platform.'
    },
    masters_section_3_2_text_5: {
      ru: 'Кроме того, тест на навыки предусматривал работу на перекладине для подтягиваний. Перекладина была очень высокой, и большинство спортсменов не могли дотянуться до неё без посторонней помощи.',
      kz: 'Сонымен қатар, дағдылар тесті тарту турнигінде жұмысты қарастырды. Турник өте биік болды және спортшылардың көпшілігі бөгде көмексіз оған жете алмады.',
      en: 'Additionally, the skill test involved work on a pull-up bar. The bar was very high, and most athletes could not reach it without assistance.'
    },
    masters_section_3_2_text_6: {
      ru: 'LOC приобрёл подставки (risers) для этой цели, однако они оказались нестабильными и недостаточно высокими. В итоге пришлось использовать плиобоксы высотой 20–24 дюйма.',
      kz: 'LOC осы мақсатта тіректер (risers) сатып алды, бірақ олар тұрақсыз және жеткілікті биік емес болып шықты. Нәтижесінде биіктігі 20-24 дюйм плиобокстарды пайдалануға тура келді.',
      en: 'The LOC purchased risers for this purpose, but they proved to be unstable and not high enough. Eventually, 20-24 inch plyo boxes had to be used.'
    },
    masters_section_3_2_text_7: {
      ru: 'Это загромоздило пространство под ригом и создало не только небезопасную среду для спортсменов, но и визуально неэстетичную картину. LOC следовало заранее разработать более продуманный план доступа спортсменов к перекладинам.',
      kz: 'Бұл риг астындағы кеңістікті толтырды және спортшылар үшін қауіпсіз емес ортаны ғана емес, визуалды эстетикалық емес көріністі де жасады. LOC спортшылардың турниктерге қол жетімділігі туралы неғұрлым ойластырылған жоспарды алдын ала әзірлеуі керек еді.',
      en: 'This cluttered the space under the rig and created not only an unsafe environment for athletes, but also a visually unaesthetic picture. The LOC should have developed a more thoughtful plan for athlete access to the bars in advance.'
    },
    masters_section_3_2_text_8: {
      ru: 'Наконец, результаты Skill Test были подсчитаны неверно и должны были быть пересчитаны Президентом iF3 и Президентом LOC поздно ночью в пятницу.',
      kz: 'Соңында, Skill Test нәтижелері дұрыс есептелмеді және жұма түні кеш iF3 Президенті мен LOC Президенті қайта есептеуі керек болды.',
      en: 'Finally, the Skill Test results were calculated incorrectly and had to be recalculated by the iF3 President and LOC President late Friday night.'
    },
    masters_rec_3_2_1: {
      ru: 'Детали Skill Test, как и всех остальных тестов, включая планы соревновательных площадок, должны быть представлены и окончательно утверждены во время виртуального site visit.',
      kz: 'Skill Test мәліметтері, барлық басқа тесттер сияқты, жарыс алаңдарының жоспарларын қоса, виртуалды site visit кезінде ұсынылуы және түпкілікті бекітілуі керек.',
      en: 'Skill Test details, like all other tests, including competition floor plans, should be presented and finally approved during the virtual site visit.'
    },
    masters_rec_3_2_2: {
      ru: 'Этот момент является последней точкой, на которой мероприятие может быть обоснованно отменено в случае неудовлетворительной подготовки и передано другому принимающему организатору.',
      kz: 'Бұл сәт дайындық қанағаттанарлықсыз болған жағдайда іс-шара негізді түрде болдырмауы және басқа қабылдаушы ұйымдастырушыға берілуі мүмкін соңғы нүкте болып табылады.',
      en: 'This point is the last moment at which the event can be reasonably cancelled in case of unsatisfactory preparation and transferred to another host organizer.'
    },
    masters_section_3_3: {
      ru: '3.3 Тест с собственным весом; Смешанный тест; Силовой тест',
      kz: '3.3 Өз салмағымен тест; Аралас тест; Күш тесті',
      en: '3.3 Bodyweight Test; Mixed Test; Strength Test'
    },
    masters_section_3_3_text_1: {
      ru: 'Все три теста пострадали из-за некорректных скоринговых карт.',
      kz: 'Барлық үш тест дұрыс емес скоринг карталарына байланысты зардап шекті.',
      en: 'All three tests suffered due to incorrect scoring cards.'
    },
    masters_section_3_3_text_2: {
      ru: 'Скоринговые карты для Bodyweight Test не содержали количества повторений во вводной фазе (buy-in) теста, что делало подсчёт результатов трудоёмким и проблематичным.',
      kz: 'Bodyweight Test үшін скоринг карталарында тесттің кіріспе фазасындағы (buy-in) қайталау саны болмады, бұл нәтижелерді санауды көп еңбекті және проблемалы етті.',
      en: 'The scoring cards for the Bodyweight Test did not contain the number of repetitions in the buy-in phase of the test, making results calculation labor-intensive and problematic.'
    },
    masters_section_3_3_text_3: {
      ru: 'Одновременно с представлением бюджета должны быть указаны количество и квалификация персонала, а также сам персонал должен быть представлен в рамках виртуального site visit.',
      kz: 'Бюджетті ұсынумен бір уақытта персоналдың саны мен біліктілігі көрсетілуі керек, сондай-ақ персоналдың өзі виртуалды site visit аясында таныстырылуы керек.',
      en: 'Along with the budget presentation, the number and qualifications of staff should be indicated, and the staff themselves should be presented as part of the virtual site visit.'
    },
    masters_section_3_3_text_4: {
      ru: 'Для детализации требований Хостинг-соглашение должно ссылаться на Competition Playbook, который в настоящее время находится в стадии финализации iF3.',
      kz: 'Талаптарды егжей-тегжейлі көрсету үшін Хостинг-келісім қазіргі уақытта iF3 аяқтау сатысында тұрған Competition Playbook-қа сілтеме жасауы керек.',
      en: 'To detail the requirements, the Hosting Agreement should reference the Competition Playbook, which is currently being finalized by iF3.'
    },
    masters_section_3_3_text_5: {
      ru: 'Данный Competition Playbook должен, в том числе:',
      kz: 'Бұл Competition Playbook, соның ішінде:',
      en: 'This Competition Playbook should include:'
    },
    masters_playbook_final_1: {
      ru: 'определять, какие роли и штатные позиции должны быть обеспечены на мероприятии;',
      kz: 'іс-шарада қандай рөлдер мен штаттық лауазымдар қамтамасыз етілуі керектігін анықтау;',
      en: 'define which roles and staff positions should be provided at the event;'
    },
    masters_playbook_final_2: {
      ru: 'рекомендовать LOC заключать жёсткие договоры с поставщиками услуг (прямая трансляция, вещание, поставка оборудования и т. д.).',
      kz: 'LOC-қа қызмет провайдерлерімен (тікелей трансляция, хабар тарату, жабдық жеткізу және т.б.) қатаң келісімшарттар жасасуды ұсыну.',
      en: 'recommend that the LOC enter into strict contracts with service providers (live streaming, broadcasting, equipment supply, etc.).'
    },
    masters_final_rec_c: {
      ru: 'c) Программный комитет iF3 должен взять на себя программирование мероприятий iF3 и самостоятельно разрабатывать тесты, используя вклад LOC в рамках виртуального site visit.',
      kz: 'c) iF3 Бағдарлама комитеті iF3 іс-шараларын бағдарламалауды өз мойнына алуы және виртуалды site visit аясында LOC үлесін пайдалана отырып, тесттерді өз бетінше әзірлеуі керек.',
      en: 'c) The iF3 Programming Committee should take on programming of iF3 events and independently develop tests, using LOC input as part of the virtual site visit.'
    },
    masters_final_rec_d: {
      ru: 'd) iF3 следует заключить официальный договор с Circle21, в котором будут чётко определены взаимные права и обязанности, а также предусмотрены последствия неисполнения обязательств и механизмы урегулирования споров.',
      kz: 'd) iF3 Circle21-мен өзара құқықтар мен міндеттемелер нақты анықталатын, сондай-ақ міндеттемелерді орындамаудың салдары мен даулар реттеу тетіктері қарастырылатын ресми келісімшарт жасасуы керек.',
      en: 'd) iF3 should enter into a formal contract with Circle21 that clearly defines mutual rights and obligations, and provides for consequences of non-performance and dispute resolution mechanisms.'
    },
    masters_final_rec_e: {
      ru: 'e) Хостинг-соглашение следует изменить, дополнив его более конкретными обязательствами принимающей стороны, чем предусмотрено текущим пунктом 7 k), а именно — обязанностью иметь заранее напечатанные скоринговые карты с именами спортсменов и иными необходимыми для соответствующего теста данными и обеспечить их выдачу участникам до начала каждого теста.',
      kz: 'e) Хостинг-келісімді ағымдағы 7 k) тармағында қарастырылғаннан гөрі қабылдаушы тараптың нақтырақ міндеттемелерімен толықтыру арқылы өзгерту керек, атап айтқанда — спортшылардың есімдері және тиісті тест үшін қажетті басқа да деректері бар алдын ала басылған скоринг карталарын иелену және әр тест басталмас бұрын оларды қатысушыларға беруді қамтамасыз ету міндеті.',
      en: 'e) The Hosting Agreement should be amended to include more specific obligations of the host party than provided in the current clause 7 k), namely — the obligation to have pre-printed scoring cards with athlete names and other data necessary for the corresponding test and to ensure their distribution to participants before each test begins.'
    },
    masters_final_rec_f: {
      ru: 'f) Правила iF3 должны быть дополнены положением, регламентирующим действия в случае утраты либо искажения результатов до такой степени, что их невозможно восстановить или корректно зафиксировать.',
      kz: 'f) iF3 ережелері нәтижелерді қалпына келтіру немесе дұрыс белгілеу мүмкін болмайтын дәрежеде жоғалған немесе бұрмаланған жағдайда әрекеттерді реттейтін ережемен толықтырылуы керек.',
      en: 'f) iF3 rules should be supplemented with a provision regulating actions in case of loss or distortion of results to such an extent that they cannot be recovered or correctly recorded.'
    },
    masters_final_rec_g_text: {
      ru: 'Спортсмены и тренеры должны иметь ограниченный доступ к прямому обращению к сотрудникам iF3 на мероприятиях, при этом обязанность по созданию такого барьера возлагается на LOC.',
      kz: 'Спортшылар мен жаттықтырушылардың іс-шараларда iF3 қызметкерлеріне тікелей жүгіну мүмкіндігі шектеулі болуы керек, сонымен бірге мұндай кедергіні құру міндеті LOC-қа жүктеледі.',
      en: 'Athletes and coaches should have limited access to directly addressing iF3 staff at events, with the obligation to create such a barrier resting with the LOC.'
    },
    masters_final_rec_g: {
      ru: 'g) Закрепить в правилах iF3, что спортсмены и тренеры имеют ограниченный доступ к прямому обращению к сотрудникам iF3 на мероприятиях, а ответственность за организацию такого ограничения лежит на LOC.',
      kz: 'g) iF3 ережелерінде спортшылар мен жаттықтырушылардың іс-шараларда iF3 қызметкерлеріне тікелей жүгіну мүмкіндігінің шектеулі екенін, ал мұндай шектеуді ұйымдастыру жауапкершілігі LOC-та жатқанын бекіту.',
      en: 'g) Establish in iF3 rules that athletes and coaches have limited access to directly addressing iF3 staff at events, and that responsibility for organizing such restrictions lies with the LOC.'
    },
    masters_final_rec_h: {
      ru: 'h) Внести изменения в пункт 4 m) Хостинг-соглашения, установив обязанность принимающей стороны обеспечивать сохранность призов принимающей стороны.',
      kz: 'h) Хостинг-келісімнің 4 m) тармағына өзгерістер енгізу, қабылдаушы тараптың жүлделерінің сақталуын қамтамасыз ету міндетін белгілеу.',
      en: 'h) Amend clause 4 m) of the Hosting Agreement to establish the host party\'s obligation to ensure the safety of host party prizes.'
    },
    masters_final_rec_i: {
      ru: 'i) Напоминать спортсменам о необходимости соблюдения Кодекса этики iF3 и надлежащем поведении.',
      kz: 'i) Спортшыларға iF3 Этика кодексін сақтау және тиісті мінез-құлық қажеттілігін еске салу.',
      en: 'i) Remind athletes of the need to comply with the iF3 Code of Ethics and proper behavior.'
    },

    // Страница docs7 - Astana Open Cup Regulations
    astana_open_cup_title: {
      ru: 'Положение Astana Open Cup',
      kz: 'Astana Open Cup ережесі',
      en: 'Astana Open Cup Regulations'
    },

    // Страница Федерации
    fed_national_title: {
      ru: 'Национальные федерации',
      kz: 'Ұлттық федерациялар',
      en: 'National Federations'
    },
    fed_national_text1: {
      ru: 'Официальная Национальная федерация (НФ) признается Международной федерацией (МФ), а также правительством этой страны (Министерством спорта и/или Национальным олимпийским комитетом) для работы в своей стране. Существует только одна официальная МФ для любого вида спорта и только одна официальная НФ в каждой стране, как признается ИФ.',
      kz: 'Ресми Ұлттық федерация (ҰФ) Халықаралық федерациямен (ХФ), сондай-ақ осы елдің үкіметімен (Спорт министрлігі және/немесе Ұлттық олимпиадалық комитетпен) өз елінде жұмыс істеу үшін танылады. Кез келген спорт түрі үшін тек бір ресми ХФ және әр елде тек бір ресми ҰФ бар, оны ХФ таниды.',
      en: 'An official National Federation (NF) is recognized by the International Federation (IF), as well as by the government of that country (Ministry of Sports and/or National Olympic Committee) to operate in its country. There is only one official IF for any sport and only one official NF in each country, as recognized by the IF.'
    },
    fed_national_text2: {
      ru: 'Каждый вид спорта, официально признанный в рамках Олимпийского движения, имеет руководящий орган, называемый международной федерацией (МФ), который определяет способ функционирования этого вида спорта. МФ создает общий набор правил, рейтингов и процедур (таких как правила безопасности и антидопинговые правила) и организует международные соревнования. Популяризация этого вида спорта также является функцией международных федераций. Национальные федерации преследуют те же цели, что и международные федерации, но в рамках одной страны. Они поддерживают местные клубы, соревнования и ассоциации и, как правило, отвечают за национальные сборные.',
      kz: 'Олимпиадалық қозғалыс шеңберінде ресми танылған әрбір спорт түрінің осы спорт түрінің жұмыс істеу тәсілін анықтайтын халықаралық федерация (ХФ) деп аталатын басқару органы бар. ХФ ережелердің, рейтингтердің және процедуралардың (мысалы, қауіпсіздік ережелері мен допингке қарсы ережелер) ортақ жинағын жасайды және халықаралық жарыстар ұйымдастырады. Бұл спорт түрін танымал ету де халықаралық федерациялардың функциясы болып табылады. Ұлттық федерациялар халықаралық федерациялармен бірдей мақсаттарды көздейді, бірақ бір ел шеңберінде. Олар жергілікті клубтарды, жарыстар мен қауымдастықтарды қолдайды және әдетте ұлттық құрамаларға жауапты.',
      en: 'Each sport officially recognized within the Olympic Movement has a governing body called an international federation (IF), which determines how the sport functions. The IF creates a common set of rules, rankings and procedures (such as safety rules and anti-doping rules) and organizes international competitions. Popularization of the sport is also a function of international federations. National federations pursue the same goals as international federations, but within one country. They support local clubs, competitions and associations and are generally responsible for national teams.'
    },
    fed_active_title: {
      ru: 'Действующие федерации',
      kz: 'Қолданыстағы федерациялар',
      en: 'Active Federations'
    },
    fed_active_text: {
      ru: 'Международная федерация функционального фитнеса в настоящее время признает следующие национальные федерации:',
      kz: 'Халықаралық функционалдық фитнес федерациясы қазіргі уақытта келесі ұлттық федерацияларды таниды:',
      en: 'The International Functional Fitness Federation currently recognizes the following national federations:'
    },
    fed_contact: {
      ru: 'Контакт:',
      kz: 'Байланыс:',
      en: 'Contact:'
    },

    // Континенты
    fed_africa: {
      ru: 'Африка',
      kz: 'Африка',
      en: 'Africa'
    },
    fed_americas: {
      ru: 'Северная и Южная Америка',
      kz: 'Солтүстік және Оңтүстік Америка',
      en: 'North and South America'
    },
    fed_asia: {
      ru: 'Азия',
      kz: 'Азия',
      en: 'Asia'
    },
    fed_europe: {
      ru: 'Европа',
      kz: 'Еуропа',
      en: 'Europe'
    },
    fed_oceania: {
      ru: 'Океания',
      kz: 'Океания',
      en: 'Oceania'
    },

    // Африканские страны
    fed_algeria: {
      ru: 'Алжир',
      kz: 'Алжир',
      en: 'Algeria'
    },
    fed_cameroon: {
      ru: 'Камерун',
      kz: 'Камерун',
      en: 'Cameroon'
    },
    fed_cameroon_name: {
      ru: 'Академия стронгмена и множественного спорта',
      kz: 'Стронгмен және көпсайыс спорты академиясы',
      en: 'Strongman and Plural Sports Academy'
    },
    fed_car: {
      ru: 'Центральноафриканская Республика',
      kz: 'Орталық Африка Республикасы',
      en: 'Central African Republic'
    },
    fed_car_name: {
      ru: 'Центральноафриканская федерация фитнеса',
      kz: 'Орталық Африка фитнес федерациясы',
      en: 'Central African Fitness Federation'
    },
    fed_egypt: {
      ru: 'Египет',
      kz: 'Мысыр',
      en: 'Egypt'
    },
    fed_egypt_name: {
      ru: 'Египетская федерация функционального фитнеса',
      kz: 'Мысыр функционалдық фитнес федерациясы',
      en: 'Egyptian Functional Fitness Federation'
    },
    fed_ghana: {
      ru: 'Гана',
      kz: 'Гана',
      en: 'Ghana'
    },
    fed_ghana_name: {
      ru: 'Функциональная спортивная лига Гана',
      kz: 'Гана функционалдық спорт лигасы',
      en: 'Ghana Functional Sports League'
    },
    fed_libya: {
      ru: 'Ливия',
      kz: 'Ливия',
      en: 'Libya'
    },
    fed_libya_name: {
      ru: 'Ливийская федерация функционального фитнеса',
      kz: 'Ливия функционалдық фитнес федерациясы',
      en: 'Libyan Functional Fitness Federation'
    },
    fed_mauritius: {
      ru: 'Маврикий',
      kz: 'Маврикий',
      en: 'Mauritius'
    },
    fed_mauritius_name: {
      ru: 'Федерация функционального фитнеса Маврикия',
      kz: 'Маврикий функционалдық фитнес федерациясы',
      en: 'Mauritius Functional Fitness Federation'
    },
    fed_south_africa: {
      ru: 'Южная Африка',
      kz: 'Оңтүстік Африка',
      en: 'South Africa'
    },
    fed_south_africa_name: {
      ru: 'Федерация функционального спорта ЮАР',
      kz: 'ОАР функционалдық спорт федерациясы',
      en: 'South African Functional Sports Federation'
    },

    // Американские страны
    fed_argentina: {
      ru: 'Аргентина',
      kz: 'Аргентина',
      en: 'Argentina'
    },
    fed_aruba: {
      ru: 'Аруба',
      kz: 'Аруба',
      en: 'Aruba'
    },
    fed_aruba_name: {
      ru: 'Федерация функционального фитнеса Арубы',
      kz: 'Аруба функционалдық фитнес федерациясы',
      en: 'Aruba Functional Fitness Federation'
    },
    fed_barbados: {
      ru: 'Барбадос',
      kz: 'Барбадос',
      en: 'Barbados'
    },
    fed_barbados_name: {
      ru: 'Барбадосский альянс функционального фитнеса',
      kz: 'Барбадос функционалдық фитнес альянсы',
      en: 'Barbados Functional Fitness Alliance'
    },
    fed_brazil: {
      ru: 'Бразилия',
      kz: 'Бразилия',
      en: 'Brazil'
    },
    fed_canada: {
      ru: 'Канада',
      kz: 'Канада',
      en: 'Canada'
    },
    fed_canada_name: {
      ru: 'Канадская федерация функционального фитнеса',
      kz: 'Канада функционалдық фитнес федерациясы',
      en: 'Canadian Functional Fitness Federation'
    },
    fed_chile: {
      ru: 'Чили',
      kz: 'Чили',
      en: 'Chile'
    },
    fed_chile_name: {
      ru: 'Чилийская федерация функционального фитнеса',
      kz: 'Чили функционалдық фитнес федерациясы',
      en: 'Chilean Functional Fitness Federation'
    },
    fed_costa_rica: {
      ru: 'Коста-Рика',
      kz: 'Коста-Рика',
      en: 'Costa Rica'
    },
    fed_ecuador: {
      ru: 'Эквадор',
      kz: 'Эквадор',
      en: 'Ecuador'
    },
    fed_salvador: {
      ru: 'Сальвадор',
      kz: 'Сальвадор',
      en: 'El Salvador'
    },
    fed_guatemala: {
      ru: 'Гватемала',
      kz: 'Гватемала',
      en: 'Guatemala'
    },
    fed_mexico: {
      ru: 'Мексика',
      kz: 'Мексика',
      en: 'Mexico'
    },
    fed_mexico_name: {
      ru: 'Мексиканская федерация функционального фитнеса',
      kz: 'Мексика функционалдық фитнес федерациясы',
      en: 'Mexican Functional Fitness Federation'
    },
    fed_panama: {
      ru: 'Панама',
      kz: 'Панама',
      en: 'Panama'
    },
    fed_puerto_rico: {
      ru: 'Пуэрто-Рико',
      kz: 'Пуэрто-Рико',
      en: 'Puerto Rico'
    },
    fed_puerto_rico_name: {
      ru: 'Федерация функционального фитнеса Пуэрто-Рико',
      kz: 'Пуэрто-Рико функционалдық фитнес федерациясы',
      en: 'Puerto Rico Functional Fitness Federation'
    },
    fed_usa: {
      ru: 'Соединенные Штаты Америки',
      kz: 'Америка Құрама Штаттары',
      en: 'United States of America'
    },
    fed_usa_name: {
      ru: 'США Функциональный фитнес',
      kz: 'АҚШ Функционалдық фитнес',
      en: 'USA Functional Fitness'
    },
    fed_venezuela: {
      ru: 'Венесуэла',
      kz: 'Венесуэла',
      en: 'Venezuela'
    },

    // Азиатские страны
    fed_china: {
      ru: 'Китай',
      kz: 'Қытай',
      en: 'China'
    },
    fed_china_name: {
      ru: 'Китайская федерация функционального фитнеса',
      kz: 'Қытай функционалдық фитнес федерациясы',
      en: 'Chinese Functional Fitness Federation'
    },
    fed_hong_kong: {
      ru: 'Гонконг',
      kz: 'Гонконг',
      en: 'Hong Kong'
    },
    fed_hong_kong_name: {
      ru: 'Гонконгская ассоциация спортивных достижений и силовой и кондиционной подготовки (HKSPSCA)',
      kz: 'Гонконг спорттық жетістіктер және күш пен кондициялық дайындық қауымдастығы (HKSPSCA)',
      en: 'Hong Kong Sports Performance and Strength & Conditioning Association (HKSPSCA)'
    },
    fed_india: {
      ru: 'Индия',
      kz: 'Үндістан',
      en: 'India'
    },
    fed_india_name: {
      ru: 'Федерация фитнес-спорта Индии',
      kz: 'Үндістан фитнес-спорт федерациясы',
      en: 'Fitness Sports Federation of India'
    },
    fed_iran: {
      ru: 'Иран',
      kz: 'Иран',
      en: 'Iran'
    },
    fed_iran_name: {
      ru: 'Иранская ассоциация функционального фитнеса',
      kz: 'Иран функционалдық фитнес қауымдастығы',
      en: 'Iranian Functional Fitness Association'
    },
    fed_japan: {
      ru: 'Япония',
      kz: 'Жапония',
      en: 'Japan'
    },
    fed_japan_name: {
      ru: 'Всеяпонская федерация функционального фитнеса',
      kz: 'Бүкілжапондық функционалдық фитнес федерациясы',
      en: 'All Japan Functional Fitness Federation'
    },
    fed_kazakhstan: {
      ru: 'Казахстан',
      kz: 'Қазақстан',
      en: 'Kazakhstan'
    },
    fed_kazakhstan_name: {
      ru: 'Федерация функционального фитнеса Казахстан',
      kz: 'Қазақстан функционалдық фитнес федерациясы',
      en: 'Functional Fitness Federation of Kazakhstan'
    },
    fed_kyrgyzstan: {
      ru: 'Кыргызская Республика',
      kz: 'Қырғыз Республикасы',
      en: 'Kyrgyz Republic'
    },
    fed_kyrgyzstan_name: {
      ru: 'Федерация соревнований по функциональному многоборью Кыргызской Республики',
      kz: 'Қырғыз Республикасының функционалдық көпсайыс бойынша жарыс федерациясы',
      en: 'Functional Fitness Competition Federation of the Kyrgyz Republic'
    },
    fed_lebanon: {
      ru: 'Ливан',
      kz: 'Ливан',
      en: 'Lebanon'
    },
    fed_lebanon_name: {
      ru: 'Ливанская федерация функционального фитнеса',
      kz: 'Ливан функционалдық фитнес федерациясы',
      en: 'Lebanese Functional Fitness Federation'
    },
    fed_mongolia: {
      ru: 'Монголия',
      kz: 'Моңғолия',
      en: 'Mongolia'
    },
    fed_mongolia_name: {
      ru: 'Монгольская федерация функционального фитнеса',
      kz: 'Моңғолия функционалдық фитнес федерациясы',
      en: 'Mongolian Functional Fitness Federation'
    },
    fed_pakistan: {
      ru: 'Пакистан',
      kz: 'Пәкістан',
      en: 'Pakistan'
    },
    fed_pakistan_name: {
      ru: 'Пакистанская федерация функционального фитнеса',
      kz: 'Пәкістан функционалдық фитнес федерациясы',
      en: 'Pakistan Functional Fitness Federation'
    },
    fed_saudi: {
      ru: 'Саудовская Аравия',
      kz: 'Сауд Арабиясы',
      en: 'Saudi Arabia'
    },
    fed_saudi_name: {
      ru: 'Саудовская федерация спорта для всех',
      kz: 'Сауд барлығы үшін спорт федерациясы',
      en: 'Saudi Sports for All Federation'
    },
    fed_south_korea: {
      ru: 'Южная Корея',
      kz: 'Оңтүстік Корея',
      en: 'South Korea'
    },
    fed_south_korea_name: {
      ru: 'Корейская ассоциация функционального фитнеса',
      kz: 'Корея функционалдық фитнес қауымдастығы',
      en: 'Korean Functional Fitness Association'
    },
    fed_sri_lanka: {
      ru: 'Шри-Ланка',
      kz: 'Шри-Ланка',
      en: 'Sri Lanka'
    },
    fed_sri_lanka_name: {
      ru: 'Федерация функционального фитнеса Шри-Ланки',
      kz: 'Шри-Ланка функционалдық фитнес федерациясы',
      en: 'Sri Lanka Functional Fitness Federation'
    },
    fed_uzbekistan: {
      ru: 'Узбекистан',
      kz: 'Өзбекстан',
      en: 'Uzbekistan'
    },

    // Европейские страны
    fed_andorra: {
      ru: 'Андорра',
      kz: 'Андорра',
      en: 'Andorra'
    },
    fed_andorra_name: {
      ru: 'Функциональный фитнес в Андорре',
      kz: 'Андоррадағы функционалдық фитнес',
      en: 'Functional Fitness Andorra'
    },
    fed_austria: {
      ru: 'Австрия',
      kz: 'Австрия',
      en: 'Austria'
    },
    fed_belarus: {
      ru: 'Беларусь',
      kz: 'Беларусь',
      en: 'Belarus'
    },
    fed_belarus_name: {
      ru: 'ФЕДЕРАЦИЯ ФУНКЦИОНАЛЬНОГО МНОГОБОРЬЯ РБ',
      kz: 'БР ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ',
      en: 'FUNCTIONAL FITNESS FEDERATION OF BELARUS'
    },
    fed_belgium: {
      ru: 'Бельгия',
      kz: 'Бельгия',
      en: 'Belgium'
    },
    fed_bulgaria: {
      ru: 'Болгария',
      kz: 'Болгария',
      en: 'Bulgaria'
    },
    fed_bulgaria_name: {
      ru: 'Болгарская ассоциация функционального фитнеса',
      kz: 'Болгария функционалдық фитнес қауымдастығы',
      en: 'Bulgarian Functional Fitness Association'
    },
    fed_czech: {
      ru: 'Чешская Республика',
      kz: 'Чехия Республикасы',
      en: 'Czech Republic'
    },
    fed_denmark: {
      ru: 'Дания',
      kz: 'Дания',
      en: 'Denmark'
    },
    fed_denmark_name: {
      ru: 'Датская федерация гимнастики и фитнеса',
      kz: 'Дания гимнастика және фитнес федерациясы',
      en: 'Danish Gymnastics and Fitness Federation'
    },
    fed_faroe: {
      ru: 'Фарерские о-ва',
      kz: 'Фарер аралдары',
      en: 'Faroe Islands'
    },
    fed_finland: {
      ru: 'Финляндия',
      kz: 'Финляндия',
      en: 'Finland'
    },
    fed_finland_name: {
      ru: 'Финляндия Функциональный Фитнес',
      kz: 'Финляндия Функционалдық Фитнес',
      en: 'Finland Functional Fitness'
    },
    fed_france: {
      ru: 'Франция',
      kz: 'Франция',
      en: 'France'
    },
    fed_france_name: {
      ru: 'Французская ассоциация функционального фитнеса',
      kz: 'Франция функционалдық фитнес қауымдастығы',
      en: 'French Functional Fitness Association'
    },
    fed_georgia: {
      ru: 'Грузия',
      kz: 'Грузия',
      en: 'Georgia'
    },
    fed_georgia_name: {
      ru: 'Федерация функционального фитнеса Грузии',
      kz: 'Грузия функционалдық фитнес федерациясы',
      en: 'Georgia Functional Fitness Federation'
    },
    fed_germany: {
      ru: 'Германия',
      kz: 'Германия',
      en: 'Germany'
    },
    fed_greece: {
      ru: 'Греция',
      kz: 'Грекия',
      en: 'Greece'
    },
    fed_greece_name: {
      ru: 'Греческая федерация функционального фитнеса',
      kz: 'Грекия функционалдық фитнес федерациясы',
      en: 'Hellenic Functional Fitness Federation'
    },
    fed_hungary: {
      ru: 'Венгрия',
      kz: 'Венгрия',
      en: 'Hungary'
    },
    fed_hungary_name: {
      ru: 'Венгерская федерация функционального фитнеса',
      kz: 'Венгрия функционалдық фитнес федерациясы',
      en: 'Hungarian Functional Fitness Federation'
    },
    fed_iceland: {
      ru: 'Исландия',
      kz: 'Исландия',
      en: 'Iceland'
    },
    fed_ireland: {
      ru: 'Ирландия',
      kz: 'Ирландия',
      en: 'Ireland'
    },
    fed_ireland_name: {
      ru: 'Федерация фитнеса Ирландии',
      kz: 'Ирландия фитнес федерациясы',
      en: 'Fitness Federation of Ireland'
    },
    fed_italy: {
      ru: 'Италия',
      kz: 'Италия',
      en: 'Italy'
    },
    fed_jersey: {
      ru: 'Джерси',
      kz: 'Джерси',
      en: 'Jersey'
    },
    fed_jersey_name: {
      ru: 'Ассоциация функционального фитнеса Джерси',
      kz: 'Джерси функционалдық фитнес қауымдастығы',
      en: 'Jersey Functional Fitness Association'
    },
    fed_latvia: {
      ru: 'Латвия',
      kz: 'Латвия',
      en: 'Latvia'
    },
    fed_lithuania: {
      ru: 'Литва',
      kz: 'Литва',
      en: 'Lithuania'
    },
    fed_lithuania_name: {
      ru: 'Литовская федерация функционального фитнеса',
      kz: 'Литва функционалдық фитнес федерациясы',
      en: 'Lithuanian Functional Fitness Federation'
    },
    fed_luxembourg: {
      ru: 'Люксембург',
      kz: 'Люксембург',
      en: 'Luxembourg'
    },
    fed_norway: {
      ru: 'Норвегия',
      kz: 'Норвегия',
      en: 'Norway'
    },
    fed_norway_name: {
      ru: 'Норвежская федерация функционального фитнеса',
      kz: 'Норвегия функционалдық фитнес федерациясы',
      en: 'Norwegian Functional Fitness Federation'
    },
    fed_portugal: {
      ru: 'Португалия',
      kz: 'Португалия',
      en: 'Portugal'
    },
    fed_russia: {
      ru: 'Россия',
      kz: 'Ресей',
      en: 'Russia'
    },
    fed_russia_name: {
      ru: 'Федерация функционального многоборья',
      kz: 'Функционалдық көпсайыс федерациясы',
      en: 'Functional Fitness Federation'
    },
    fed_serbia: {
      ru: 'Сербия',
      kz: 'Сербия',
      en: 'Serbia'
    },
    fed_slovakia: {
      ru: 'Словакия',
      kz: 'Словакия',
      en: 'Slovakia'
    },
    fed_slovenia: {
      ru: 'Словения',
      kz: 'Словения',
      en: 'Slovenia'
    },
    fed_spain: {
      ru: 'Испания',
      kz: 'Испания',
      en: 'Spain'
    },
    fed_spain_name: {
      ru: 'Испанская ассоциация функционального фитнеса',
      kz: 'Испания функционалдық фитнес қауымдастығы',
      en: 'Spanish Functional Fitness Association'
    },
    fed_sweden: {
      ru: 'Швеция',
      kz: 'Швеция',
      en: 'Sweden'
    },
    fed_switzerland: {
      ru: 'Швейцария',
      kz: 'Швейцария',
      en: 'Switzerland'
    },
    fed_switzerland_name: {
      ru: 'Швейцарская федерация функционального фитнеса',
      kz: 'Швейцария функционалдық фитнес федерациясы',
      en: 'Swiss Functional Fitness Federation'
    },
    fed_netherlands: {
      ru: 'Нидерланды',
      kz: 'Нидерланды',
      en: 'Netherlands'
    },
    fed_uk: {
      ru: 'Великобритания',
      kz: 'Ұлыбритания',
      en: 'United Kingdom'
    },
    fed_uk_name: {
      ru: 'Британская федерация функционального фитнеса',
      kz: 'Британия функционалдық фитнес федерациясы',
      en: 'British Functional Fitness Federation'
    },

    // ============================================
    // Главная страница (index.html)
    // ============================================
    
    // Приветственный блок
    home_welcome_title: {
      ru: 'Добро пожаловать на наш сайт!',
      kz: 'Біздің сайтқа қош келдіңіз!',
      en: 'Welcome to our website!'
    },
    home_welcome_text: {
      ru: 'Наша организация объединяет спортсменов со всего Казахстана. Мы развиваем функциональный фитнес и проводим соревнования по функциональному многоборью. Присоединяйтесь к нашему спортивному сообществу!',
      kz: 'Біздің ұйым бүкіл Қазақстаннан спортшыларды біріктіреді. Біз функционалдық фитнесті дамытамыз және функционалдық көпсайыс бойынша жарыстар өткіземіз. Біздің спорттық қауымдастыққа қосылыңыз!',
      en: 'Our organization unites athletes from all over Kazakhstan. We develop functional fitness and hold functional fitness competitions. Join our sports community!'
    },
    
    // Блок федерации
    federation_name_kz: {
      ru: 'ҚАЗАҚСТАНДЫҚ ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ',
      kz: 'ҚАЗАҚСТАНДЫҚ ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ',
      en: 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN'
    },
    federation_name_ru: {
      ru: 'КАЗАХСТАНСКАЯ ФЕДЕРАЦИЯ ФУНКЦИОНАЛЬНОГО МНОГОБОРЬЯ',
      kz: 'ҚАЗАҚСТАНДЫҚ ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ',
      en: 'KAZAKHSTAN FUNCTIONAL FITNESS FEDERATION'
    },
    federation_name_en: {
      ru: 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN',
      kz: 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN',
      en: 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN'
    },
    
    // Секция новостей
    home_news_title: {
      ru: 'Последние новости',
      kz: 'Соңғы жаңалықтар',
      en: 'Latest News'
    },
    home_news_subtitle: {
      ru: 'Следите за главными событиями в мире функционального многоборья',
      kz: 'Функционалдық көпсайыс әлеміндегі басты оқиғаларды қадағалаңыз',
      en: 'Follow the main events in the world of functional fitness'
    },
    
    // Новости - карточки
    news_astana_cup_title: {
      ru: 'ASTANA OPEN CUP 2026!',
      kz: 'ASTANA OPEN CUP 2026!',
      en: 'ASTANA OPEN CUP 2026!'
    },
    news_astana_cup_excerpt: {
      ru: 'Соревнования по функциональному многоборью ASTANA OPEN CUP 2026 проводятся...',
      kz: 'ASTANA OPEN CUP 2026 функционалдық көпсайыс жарыстары өткізіледі...',
      en: 'ASTANA OPEN CUP 2026 functional fitness competition is being held...'
    },
    news_calendar_2026_title: {
      ru: 'Календарь соревнований 2026',
      kz: '2026 жылғы жарыстар күнтізбесі',
      en: '2026 Competition Calendar'
    },
    news_calendar_2026_excerpt: {
      ru: 'Календарь соревнований на 2026 год включает ключевые национальные и международные старты по функциональному фитнесу...',
      kz: '2026 жылға арналған жарыстар күнтізбесі функционалдық фитнес бойынша негізгі ұлттық және халықаралық старттарды қамтиды...',
      en: 'The 2026 competition calendar includes key national and international functional fitness events...'
    },
    news_newyear_title: {
      ru: 'Новогодний командный турнир по функциональному многоборью в Flex.',
      kz: 'Flex-те функционалдық көпсайыс бойынша жаңа жылдық командалық турнир.',
      en: 'New Year Team Tournament in Functional Fitness at Flex.'
    },
    news_newyear_excerpt: {
      ru: '20 декабря в Кроссфит-зале Flex пройдёт предновогодний командный турнир по функциональному многоборью под эгидой КФФМ...',
      kz: '20 желтоқсанда Flex кроссфит залында ҚФФМ эгидасымен функционалдық көпсайыс бойынша жаңа жылдық командалық турнир өтеді...',
      en: 'On December 20, a pre-New Year team tournament in functional fitness will be held at Flex CrossFit gym under the aegis of KFFM...'
    },
    news_if3_world_title: {
      ru: 'Чемпионат мира IF3 2025 — Литва, Вильнюс.',
      kz: 'IF3 2025 Әлем чемпионаты — Литва, Вильнюс.',
      en: 'IF3 World Championship 2025 — Lithuania, Vilnius.'
    },
    news_if3_world_excerpt: {
      ru: 'В Вильнюсе, столице Литвы, с 5 по 7 декабря 2025 года состоялся Чемпионат мира IF3 по функциональному фитнесу...',
      kz: 'Литваның астанасы Вильнюсте 2025 жылғы 5-7 желтоқсан аралығында функционалдық фитнес бойынша IF3 Әлем чемпионаты өтті...',
      en: 'The IF3 World Championship in Functional Fitness was held in Vilnius, the capital of Lithuania, from December 5 to 7, 2025...'
    },
    news_masters_title: {
      ru: 'Итоги IF3 Masters World Championship 2025',
      kz: 'IF3 Masters World Championship 2025 қорытындылары',
      en: 'IF3 Masters World Championship 2025 Results'
    },
    news_masters_excerpt: {
      ru: 'Сборная Казахстана достойно представила страну на Чемпионате мира IF3 Masters 2025, проходившем в Брисбене (Австралия)...',
      kz: 'Қазақстан құрамасы Брисбенде (Австралия) өткен IF3 Masters 2025 Әлем чемпионатында елді лайықты түрде таныстырды...',
      en: 'The Kazakhstan team worthily represented the country at the IF3 Masters World Championship 2025, held in Brisbane (Australia)...'
    },
    news_libya_title: {
      ru: 'Ливийская федерация функционального фитнеса получила признание Министерства спорта Ливии!',
      kz: 'Ливия функционалдық фитнес федерациясы Ливия Спорт министрлігінің мойындауын алды!',
      en: 'Libyan Functional Fitness Federation received recognition from the Libyan Ministry of Sports!'
    },
    news_libya_excerpt: {
      ru: 'Ливийская федерация функционального фитнеса стала последним членом iF3, получившим официальное признание...',
      kz: 'Ливия функционалдық фитнес федерациясы ресми мойындау алған iF3-тің соңғы мүшесі болды...',
      en: 'The Libyan Functional Fitness Federation became the latest iF3 member to receive official recognition...'
    },
    news_asia_champ_title: {
      ru: 'Казахстан — победитель Чемпионата Азии 2025!',
      kz: 'Қазақстан — 2025 Азия чемпионатының жеңімпазы!',
      en: 'Kazakhstan — Winner of the Asian Championship 2025!'
    },
    news_asia_champ_excerpt: {
      ru: 'Впервые в столице Саудовской Аравии состоялся Чемпионат Азии по функциональному многоборью...',
      kz: 'Сауд Арабиясының астанасында алғаш рет функционалдық көпсайыс бойынша Азия чемпионаты өтті...',
      en: 'For the first time, the Asian Championship in Functional Fitness was held in the capital of Saudi Arabia...'
    },
    news_kz_champ_title: {
      ru: 'Чемпионат Казахстана по функциональному фитнесу 2025',
      kz: 'Функционалдық фитнес бойынша Қазақстан чемпионаты 2025',
      en: 'Kazakhstan Functional Fitness Championship 2025'
    },
    news_kz_champ_excerpt: {
      ru: 'В сентябре состоялся Чемпионат Казахстана по функциональному фитнесу 2025 — главное событие года...',
      kz: 'Қыркүйекте жылдың басты оқиғасы — функционалдық фитнес бойынша Қазақстан чемпионаты 2025 өтті...',
      en: 'In September, the Kazakhstan Functional Fitness Championship 2025 took place — the main event of the year...'
    },
    news_geraklion_title: {
      ru: 'iF3 подписала партнёрское соглашение с Гераклионом!',
      kz: 'iF3 Гераклионмен серіктестік келісімге қол қойды!',
      en: 'iF3 Signs Partnership Agreement with Geraklion!'
    },
    news_geraklion_excerpt: {
      ru: 'iF3 объявила о партнёрском соглашении с Фондом инноваций в медицине и спорте Гераклион...',
      kz: 'iF3 Гераклион медицина және спорттағы инновациялар қорымен серіктестік келісім жасағанын жариялады...',
      en: 'iF3 announced a partnership agreement with the Geraklion Foundation for Innovation in Medicine and Sports...'
    },
    news_crossfit_title: {
      ru: 'Историческое событие: казахстанец впервые вышел в финал CrossFit Games!',
      kz: 'Тарихи оқиға: қазақстандық алғаш рет CrossFit Games финалына шықты!',
      en: 'Historic Event: Kazakhstani Reaches CrossFit Games Finals for the First Time!'
    },
    news_crossfit_excerpt: {
      ru: 'Впервые в истории спортсмен из Казахстана вышел в финал CrossFit Games — самого престижного мирового турнира...',
      kz: 'Тарихта алғаш рет Қазақстаннан спортшы CrossFit Games финалына — әлемдегі ең беделді турнирге шықты...',
      en: 'For the first time in history, an athlete from Kazakhstan reached the CrossFit Games finals — the most prestigious world tournament...'
    },
    
    // Секция документов
    home_docs_title: {
      ru: 'Документы',
      kz: 'Құжаттар',
      en: 'Documents'
    },
    home_docs_subtitle: {
      ru: 'Официальные документы и положения федерации',
      kz: 'Федерацияның ресми құжаттары мен ережелері',
      en: 'Official documents and regulations of the federation'
    },
    
    // Документы - карточки
    doc_astana_cup_title: {
      ru: 'Положение Astana Open Cup',
      kz: 'Astana Open Cup ережесі',
      en: 'Astana Open Cup Regulations'
    },
    doc_calendar_2026_title: {
      ru: 'Календарь соревнований 2026',
      kz: '2026 жылғы жарыстар күнтізбесі',
      en: '2026 Competition Calendar'
    },
    doc_masters_report_title: {
      ru: 'Независимый экспертный отчёт о Чемпионате мира iF3 2025 - Masters',
      kz: 'iF3 2025 Әлем чемпионаты - Masters туралы тәуелсіз сарапшылық есеп',
      en: 'Independent Expert Report on iF3 World Championship 2025 - Masters'
    },
    doc_kz_champ_title: {
      ru: 'Положение Чемпионата Казахстана',
      kz: 'Қазақстан чемпионатының ережесі',
      en: 'Kazakhstan Championship Regulations'
    },
    doc_gym_map_title: {
      ru: 'Карта залов',
      kz: 'Залдар картасы',
      en: 'Gym Map'
    },
    doc_calendar_title: {
      ru: 'Календарь соревнований',
      kz: 'Жарыстар күнтізбесі',
      en: 'Competition Calendar'
    },
    doc_standards_title: {
      ru: 'Стандарты движений',
      kz: 'Қозғалыс стандарттары',
      en: 'Movement Standards'
    },
    doc_accreditation_title: {
      ru: 'Аккредитация IF3 в Казахстане',
      kz: 'Қазақстандағы IF3 аккредитациясы',
      en: 'IF3 Accreditation in Kazakhstan'
    },
    
    // Секция адреса
    home_address_title: {
      ru: 'Наш адрес',
      kz: 'Біздің мекенжай',
      en: 'Our Address'
    },
    home_address_subtitle: {
      ru: 'Посетите нас в центре Астаны',
      kz: 'Астана орталығында бізге келіңіз',
      en: 'Visit us in the center of Astana'
    },
    home_address_full: {
      ru: 'Адрес: Астана, проспект Бауыржана Момышулы, 16',
      kz: 'Мекенжай: Астана, Бауыржан Момышұлы даңғылы, 16',
      en: 'Address: Astana, Bauyrzhan Momyshuly Avenue, 16'
    },
    
    // Футер
    footer_about_text: {
      ru: 'Республиканское общественное объединение «Казахстанская Федерация функционального многоборья» (КФФМ, Functional Fitness Kazakhstan) — официальный руководящий орган по функциональному фитнесу (functional fitness) и функциональному многоборью в Республике Казахстан. Мы развиваем спорт, организуем соревнования и объединяем спортсменов по всему Казахстану.',
      kz: '«Қазақстандық Функционалдық көпсайыс федерациясы» республикалық қоғамдық бірлестігі (ҚФФФ, Functional Fitness Kazakhstan) — Қазақстан Республикасында функционалдық фитнес және функционалдық көпсайыс бойынша ресми басқарушы орган. Біз спортты дамытамыз, жарыстар ұйымдастырамыз және бүкіл Қазақстан бойынша спортшыларды біріктіреміз.',
      en: 'The Republican Public Association "Kazakhstan Federation of Functional Fitness" (KFFF, Functional Fitness Kazakhstan) is the official governing body for functional fitness in the Republic of Kazakhstan. We develop sports, organize competitions and unite athletes throughout Kazakhstan.'
    },
    footer_copyright: {
      ru: '© 2025 Все права защищены — Казахстанская Федерация функционального многоборья',
      kz: '© 2025 Барлық құқықтар қорғалған — Қазақстандық Функционалдық көпсайыс федерациясы',
      en: '© 2025 All rights reserved — Kazakhstan Functional Fitness Federation'
    },
    
    // Названия федерации
    fed_name_kz: {
      ru: 'ҚАЗАҚСТАНДЫҚ ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ',
      kz: 'ҚАЗАҚСТАНДЫҚ ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ',
      en: 'KAZAKHSTAN FUNCTIONAL FITNESS FEDERATION'
    },
    fed_name_ru: {
      ru: 'КАЗАХСТАНСКАЯ ФЕДЕРАЦИЯ ФУНКЦИОНАЛЬНОГО МНОГОБОРЬЯ',
      kz: 'ҚАЗАҚСТАНДЫҚ ФУНКЦИОНАЛДЫҚ КӨПСАЙЫС ФЕДЕРАЦИЯСЫ',
      en: 'KAZAKHSTAN FUNCTIONAL FITNESS FEDERATION'
    },
    fed_name_en: {
      ru: 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN',
      kz: 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN',
      en: 'FUNCTIONAL FITNESS FEDERATION KAZAKHSTAN'
    },
    
    // Страница руководства
    leadership_title: {
      ru: 'Наша команда',
      kz: 'Біздің команда',
      en: 'Our Team'
    },
    leadership_subtitle: {
      ru: 'Профессионалы, которые развивают спорт в стране',
      kz: 'Елде спортты дамытатын кәсіпқойлар',
      en: 'Professionals who develop sports in the country'
    },
    leader1_name: {
      ru: 'Мещеряков Николай Ильич',
      kz: 'Мещеряков Николай Ильич',
      en: 'Nikolay Meshcheryakov'
    },
    leader1_position: {
      ru: 'Президент Казахстанской Федерации функционального многоборья.',
      kz: 'Қазақстандық Функционалдық көпсайыс федерациясының Президенті.',
      en: 'President of the Kazakhstan Functional Fitness Federation.'
    },
    leader2_name: {
      ru: 'Сулейменов Ерлан Мельсович',
      kz: 'Сүлейменов Ерлан Мельсұлы',
      en: 'Yerlan Suleymenov'
    },
    leader2_position: {
      ru: 'вице-президент Казахстанской Федерации функционального многоборья, генеральный спонсор, директор КДЛ "Олимп".',
      kz: 'Қазақстандық Функционалдық көпсайыс федерациясының вице-президенті, бас демеуші, «Олимп» КДЛ директоры.',
      en: 'Vice President of the Kazakhstan Functional Fitness Federation, General Sponsor, Director of CDL "Olymp".'
    },
    leader3_name: {
      ru: 'Лукановский Валентин Владимирович',
      kz: 'Лукановский Валентин Владимирович',
      en: 'Valentin Lukanovskiy'
    },
    leader3_position: {
      ru: 'генеральный секретарь, вице-президент Казахстанской Федерации функционального многоборья.',
      kz: 'бас хатшы, Қазақстандық Функционалдық көпсайыс федерациясының вице-президенті.',
      en: 'Secretary General, Vice President of the Kazakhstan Functional Fitness Federation.'
    },
    leader4_name: {
      ru: 'Джантлеев Роман Алмасович',
      kz: 'Джантлеев Роман Алмасұлы',
      en: 'Roman Dzhantleyev'
    },
    leader4_position: {
      ru: 'вице-президент Казахстанской Федерации функционального многоборья.',
      kz: 'Қазақстандық Функционалдық көпсайыс федерациясының вице-президенті.',
      en: 'Vice President of the Kazakhstan Functional Fitness Federation.'
    },
    
    // Страница карты залов
    map_title: {
      ru: 'Карта залов Казахстана',
      kz: 'Қазақстан залдарының картасы',
      en: 'Gym Map of Kazakhstan'
    },
    map_download: {
      ru: 'Скачать',
      kz: 'Жүктеу',
      en: 'Download'
    },
    
    // Страница медиа
    media_gallery_title: {
      ru: 'Галерея',
      kz: 'Галерея',
      en: 'Gallery'
    },
    media_gallery_subtitle: {
      ru: 'Фотографии с соревнований и мероприятий',
      kz: 'Жарыстар мен іс-шаралардың суреттері',
      en: 'Photos from competitions and events'
    },
    
    // Страница новостей
    news_title: {
      ru: 'Новости',
      kz: 'Жаңалықтар',
      en: 'News'
    },
    news_subtitle: {
      ru: 'Актуальные события и достижения',
      kz: 'Өзекті оқиғалар мен жетістіктер',
      en: 'Current Events and Achievements'
    },
    
    // Карточки новостей
    news1_title: {
      ru: 'ASTANA OPEN CUP 2026!',
      kz: 'ASTANA OPEN CUP 2026!',
      en: 'ASTANA OPEN CUP 2026!'
    },
    news1_excerpt: {
      ru: 'Соревнование по функциональному многоборью ASTANA OPEN CUP 2026 пройдёт...',
      kz: 'ASTANA OPEN CUP 2026 функционалдық көпсайыс жарысы өтеді...',
      en: 'The ASTANA OPEN CUP 2026 functional fitness competition will be held...'
    },
    news2_title: {
      ru: 'Новогодний командный турнир по функциональному многоборью в Flex.',
      kz: 'Flex залындағы функционалдық көпсайыс бойынша жаңа жылдық командалық турнир.',
      en: 'New Year Team Tournament in Functional Fitness at Flex.'
    },
    news2_excerpt: {
      ru: '20 декабря в Кроссфит-зале Flex пройдёт предновогодний командный турнир по функциональному многоборью под эгидой КФФМ...',
      kz: '20 желтоқсанда Flex кроссфит залында ҚФФМ эгидасымен функционалдық көпсайыс бойынша жаңа жыл алдындағы командалық турнир өтеді...',
      en: 'On December 20, a pre-New Year team tournament in functional fitness will be held at the Flex CrossFit gym under the auspices of KFFM...'
    },
    news3_title: {
      ru: 'Чемпионат мира IF3 2025 — Литва, Вильнюс.',
      kz: 'IF3 2025 әлем чемпионаты — Литва, Вильнюс.',
      en: 'IF3 World Championship 2025 — Lithuania, Vilnius.'
    },
    news3_excerpt: {
      ru: 'В Вильнюсе, столице Литвы, с 5 по 7 декабря 2025 года состоялся Чемпионат мира IF3 по функциональному фитнесу...',
      kz: 'Литвияның астанасы Вильнюста 2025 жылдың 5-7 желтоқсанында IF3 функционалдық фитнес бойынша әлем чемпионаты өтті...',
      en: 'The IF3 World Championship in Functional Fitness was held in Vilnius, the capital of Lithuania, from December 5 to 7, 2025...'
    },
    news4_title: {
      ru: 'Итоги IF3 Masters World Championship 2025',
      kz: 'IF3 Masters 2025 әлем чемпионатының қорытындылары',
      en: 'Results of IF3 Masters World Championship 2025'
    },
    news4_excerpt: {
      ru: 'Сборная Казахстана достойно представила страну на Чемпионате мира IF3 Masters 2025, проходившем в Брисбене (Австралия)...',
      kz: 'Қазақстан құрамасы Брисбенде (Австралия) өткен IF3 Masters 2025 әлем чемпионатында елді лайықты түрде таныстырды...',
      en: 'The Kazakhstan national team worthily represented the country at the IF3 Masters World Championship 2025, held in Brisbane (Australia)...'
    },
    news5_title: {
      ru: 'Ливийская федерация функционального фитнеса получила признание Министерства спорта Ливии!',
      kz: 'Ливиялық функционалдық фитнес федерациясы Ливия Спорт министрлігінің мойындауын алды!',
      en: 'Libyan Functional Fitness Federation receives recognition from the Libyan Ministry of Sports!'
    },
    news5_excerpt: {
      ru: 'Ливийская федерация функционального фитнеса стала последним членом iF3, получившим официальное признание...',
      kz: 'Ливиялық функционалдық фитнес федерациясы ресми мойындау алған iF3-тің соңғы мүшесі болды...',
      en: 'The Libyan Functional Fitness Federation has become the latest iF3 member to receive official recognition...'
    },
    news6_title: {
      ru: 'Ливийская федерация функционального фитнеса получила признание Министерства спорта Ливии!',
      kz: 'Ливиялық функционалдық фитнес федерациясы Ливия Спорт министрлігінің мойындауын алды!',
      en: 'Libyan Functional Fitness Federation receives recognition from the Libyan Ministry of Sports!'
    },
    news6_excerpt: {
      ru: 'Ливийская федерация функционального фитнеса стала последним членом iF3, получившим официальное признание...',
      kz: 'Ливиялық функционалдық фитнес федерациясы ресми мойындау алған iF3-тің соңғы мүшесі болды...',
      en: 'The Libyan Functional Fitness Federation has become the latest iF3 member to receive official recognition...'
    },
    news7_title: {
      ru: 'Чемпионат Казахстана по функциональному многоборью 2025',
      kz: 'Қазақстанның функционалдық көпсайыс бойынша 2025 чемпионаты',
      en: 'Kazakhstan Functional Fitness Championship 2025'
    },
    news7_excerpt: {
      ru: 'В сентябре состоялся Чемпионат Казахстана по функциональному многоборью 2025 — главное событие года...',
      kz: 'Қыркүйекте Қазақстанның функционалдық көпсайыс бойынша 2025 чемпионаты өтті — жылдың басты оқиғасы...',
      en: 'In September, the Kazakhstan Functional Fitness Championship 2025 took place — the main event of the year...'
    },
    news8_title: {
      ru: 'iF3 подписывает соглашение о партнёрстве с Гераклионом!',
      kz: 'iF3 Гераклионмен серіктестік туралы келісімге қол қойды!',
      en: 'iF3 Signs Partnership Agreement with Geraklion!'
    },
    news8_excerpt: {
      ru: 'iF3 объявила о соглашении о партнёрстве с Фондом инноваций в медицине и спорте «Гераклион»...',
      kz: 'iF3 медицина және спорттағы инновациялар қоры «Гераклион» -мен серіктестік туралы келісім жасағанын хабарлады...',
      en: 'iF3 announced a partnership agreement with the Geraklion Foundation for Innovation in Medicine and Sports...'
    },
    news9_title: {
      ru: 'Историческое событие: Казахстанец впервые вышел в финал CrossFit Games!',
      kz: 'Тарихи оқиға: Қазақстандық алғаш рет CrossFit Games финалына шықты!',
      en: 'Historic Event: Kazakhstani Reaches CrossFit Games Finals for the First Time!'
    },
    news9_excerpt: {
      ru: 'Впервые в истории спортсмен из Казахстана вышел в финал CrossFit Games — самого престижного мирового турнира...',
      kz: 'Тарихта алғаш рет Қазақстандық спортшы CrossFit Games финалына шықты — әлемдегі ең беделді турнир...',
      en: 'For the first time in history, an athlete from Kazakhstan reached the CrossFit Games finals — the most prestigious world tournament...'
    },

    // Страница news9 - Новогодний турнир
    news9_page_title: {
      ru: 'Новогодний командный турнир по функциональному многоборью в Flex',
      kz: 'Flex-те функционалды көпсайыс бойынша жаңа жылдық командалық турнир',
      en: 'New Year Team Functional Fitness Tournament at Flex'
    },
    news9_greeting: {
      ru: 'Уважаемые атлеты и клиенты фитнес-зала Flex, г. Усть-Каменогорск!',
      kz: 'Құрметті спортшылар және Flex фитнес залының клиенттері, Өскемен қ.!',
      en: 'Dear Athletes and Fitness Club Flex Members, Ust-Kamenogorsk!'
    },
    news9_intro: {
      ru: '20 декабря в Кроссфит-зале Flex пройдёт предновогодний командный турнир по функциональному многоборью под эгидой КФФМ.',
      kz: '20 желтоқсанда Flex кроссфит залында КФФМ эгидасында жаңа жылдық командалық функционалды көпсайыс турнир ӧтетіңіз.',
      en: 'On December 20, a pre-New Year team functional fitness tournament will be held at Flex CrossFit box under the auspices of KFFM.'
    },
    news9_format_title: {
      ru: 'Формат участия',
      kz: 'Қатысу форматы',
      en: 'Participation Format'
    },
    news9_format_teams: {
      ru: 'Команды:',
      kz: 'Командалар:',
      en: 'Teams:'
    },
    news9_format_teams_desc: {
      ru: '2 человека (м + ж)',
      kz: '2 адам (ер + әйел)',
      en: '2 people (male + female)'
    },
    news9_format_req: {
      ru: 'Требования к участникам:',
      kz: 'Қатысушылардың талабы:',
      en: 'Participant Requirements:'
    },
    news9_format_req_desc: {
      ru: 'уверенное выполнение подъёма по канату, синхронной становой тяги, подтягиваний, бросков мяча (Wall Ball) и работы на гребле/байке.',
      kz: 'арапты өндіктеу, синхронды мертіге тартпа, ілініп жүру, доп лақтыру (Wall Ball) және сай/байкте жұмыс істеудің сенімді орындалуы.',
      en: 'confident performance of rope climbs, synchronized deadlifts, pull-ups, wall ball throws, and rowing/bike work.'
    },
    news9_schedule_title: {
      ru: 'Расписание',
      kz: 'Бағдарлама',
      en: 'Schedule'
    },
    news9_schedule_registration: {
      ru: '09:00 — регистрация участников',
      kz: '09:00 — қатысушыларды тіркеу',
      en: '09:00 - Participant Registration'
    },
    news9_schedule_briefing: {
      ru: '09:30 — брифинг',
      kz: '09:30 — брифинг',
      en: '09:30 - Briefing'
    },
    news9_schedule_start: {
      ru: '10:00 — старт',
      kz: '10:00 — басталуы',
      en: '10:00 - Start'
    },
    news9_location_label: {
      ru: '📍 Место проведения:',
      kz: '📍 Өтетін орны:',
      en: '📍 Venue:'
    },
    news9_location: {
      ru: 'Кроссфит-зал Flex',
      kz: 'Flex кроссфит залы',
      en: 'Flex CrossFit Box'
    },
    news9_registration: {
      ru: 'Запись участников — на ресепшене зала.',
      kz: 'Қатысушыларды тіркеу — залдың ресепшенде.',
      en: 'Registration of participants - at the hall reception.'
    },
    news9_organizers_title: {
      ru: 'Организаторы',
      kz: 'Ұйымдастырушылар',
      en: 'Organizers'
    },
    news9_organizers: {
      ru: 'Фитнес Клуб «FLEX», Лютовский Андрей, Магомадов Михаил',
      kz: '«FLEX» Фитнес Клубы, Лютовский Андрей, Магомадов Михаил',
      en: 'Fitness Club «FLEX», Lyutovskiy Andrey, Magomadov Mikhail'
    },

    news10_title: {
      ru: 'Итоги соревнований Astana Open Cup 2025',
      kz: 'Astana Open Cup 2025 жарыстарының қорытындылары',
      en: 'Astana Open Cup 2025 Competition Results'
    },
    news10_excerpt: {
      ru: '7 мая в столице прошёл второй ежегодный открытый турнир по функциональному многоборью — Astana Open...',
      kz: '7 мамырда астанада функционалдық көпсайыс бойынша екінші жыл сайынғы ашық турнир өтті — Astana Open...',
      en: 'On May 7, the second annual open functional fitness tournament was held in the capital — Astana Open...'
    },

    // Новые уникальные ключи для карточек с конфликтами
    if3_world_championship_title: {
      ru: 'Чемпионат мира IF3 2025 — Литва, Вильнюс.',
      kz: 'IF3 2025 әлем чемпионаты — Литва, Вильнюс.',
      en: 'IF3 World Championship 2025 — Lithuania, Vilnius.'
    },
    if3_world_championship_excerpt: {
      ru: 'В Вильнюсе, столице Литвы, с 5 по 7 декабря 2025 года состоялся Чемпионат мира IF3 по функциональному фитнесу...',
      kz: 'Литвияның астанасы Вильнюста 2025 жылдың 5-7 желтоқсанында IF3 функционалдық фитнес бойынша әлем чемпионаты өтті...',
      en: 'The IF3 World Championship in Functional Fitness was held in Vilnius, the capital of Lithuania, from December 5 to 7, 2025...'
    },
    if3_masters_championship_title: {
      ru: 'Итоги IF3 Masters World Championship 2025',
      kz: 'IF3 Masters 2025 әлем чемпионатының қорытындылары',
      en: 'Results of IF3 Masters World Championship 2025'
    },
    if3_masters_championship_excerpt: {
      ru: 'Сборная Казахстана достойно представила страну на Чемпионате мира IF3 Masters 2025, проходившем в Брисбене (Австралия)...',
      kz: 'Қазақстан құрамасы Брисбенде (Австралия) өтке IF3 Masters 2025 әлем чемпионатында еліні ұлғайтып ұсынды...',
      en: 'Kazakhstan\'s team proudly represented the country at the IF3 Masters World Championship 2025 held in Brisbane (Australia)...'
    },
    libya_federation_title: {
      ru: 'Ливийская федерация функционального фитнеса получила признание Министерства спорта Ливии!',
      kz: 'Ливия функционалдық фитнес федерациясы Ливия Спорт министрлігінің танылуын алды!',
      en: 'Libyan Functional Fitness Federation Receives Recognition from Libya\'s Ministry of Sports!'
    },
    libya_federation_excerpt: {
      ru: 'Ливийская федерация функционального фитнеса стала последним членом iF3, получившим официальное признание...',
      kz: 'Ливия функционалдық фитнес федерациясы iF3-тің соңғы мүшесі болып ресми танылуды алды...',
      en: 'The Libyan Functional Fitness Federation became the latest iF3 member to receive official recognition...'
    },
    if3_geraklion_partnership_title: {
      ru: 'iF3 подписывает соглашение о партнёрстве с Гераклионом!',
      kz: 'iF3 Гераклионмен серіктестік келісімге қол қойды!',
      en: 'iF3 Signs Partnership Agreement with Geraklion!'
    },
    if3_geraklion_partnership_excerpt: {
      ru: 'iF3 объявила о соглашении о партнёрстве с Фондом инноваций в медицине и спорте «Гераклион»...',
      kz: 'iF3 Гераклион медицина және спорттағы инновациялар қорымен серіктестік келісім жасағанын жариялады...',
      en: 'iF3 announced a partnership agreement with the Geraklion Foundation for Innovation in Medicine and Sports...'
    },

    kazakhstan_asia_championship_title: {
      ru: 'Казахстан — победитель Чемпионата Азии по функциональному многоборью 2025!',
      kz: 'Қазақстан — 2025 жылы Азия функционалды көпсайыс чемпионаты победигерді!',
      en: 'Kazakhstan - Winner of the 2025 Asia Functional Fitness Championship!'
    },

    kazakhstan_asia_championship_excerpt: {
      ru: 'Впервые в столице Саудовской Аравии состоялся Чемпионат Азии по функциональному многоборью, и сборная Казахстана показала отличный результат...',
      kz: 'Саудиялық Арабияның астанасында Азия функционалды көпсайыс чемпионаты өтті және Қазақстан команды сәтті нәтиже көрсетті...',
      en: 'The Asia Functional Fitness Championship took place for the first time in the capital of Saudi Arabia, and Kazakhstan\'s team showed excellent results...'
    },

    kazakhstan_championship_title: {
      ru: 'Чемпионат Казахстана по функциональному многоборью 2025',
      kz: '2025 жылы Қазақстан функционалды көпсайыс чемпионаты',
      en: 'Kazakhstan Functional Fitness Championship 2025'
    },

    kazakhstan_championship_excerpt: {
      ru: 'В сентябре состоялся Чемпионат Казахстана по функциональному многоборью 2025 — главное событие года, где встретились сильнейшие атлеты страны...',
      kz: 'Қыркүйекте 2025 жылғы Қазақстан функционалды көпсайыс чемпионаты өтті — жылдың негізгі іс-шарасы болды...',
      en: 'In September, the Kazakhstan Functional Fitness Championship 2025 took place - the main event of the year, where the strongest athletes of the country met...'
    },

    // Страница news1 - полное содержание
    news1_page_title: {
      ru: 'Итоги соревнований Astana Open Cup 2025',
      kz: 'Astana Open Cup 2025 жарыстарының қорытындылары',
      en: 'Astana Open Cup 2025 Competition Results'
    },
    news1_page_content: {
      ru: '7 мая в столице прошёл второй ежегодный открытый турнир по функциональному многоборью — Astana Open Cup 2025! В финальном отборе участвовали более 60 сильнейших атлетов из Казахстана, России, Кыргызстана и Узбекистана. Соревнования прошли благодаря полной поддержке генерального спонсора @kdlolymp — в лице Сулейменова Ерлана Мельсовича @suleimenov.yerlan Участники вышли на максимум — демонстрируя не только физическую мощь, но и стойкость духа. Каждая категория стала настоящей ареной силы, выносливости и высокого уровня подготовки. Поздравляем всех участников и победителей! Атлеты продемонстрировали высокий уровень подготовки, ещё раз подтвердив, что функциональное многоборье стремительно развивается как в организационном, так и в спортивном плане. Благодарим всех, кто стоял за созданием этого турнира —организаторов, партнёров и всю команду, вложившую в него силы и сердце.',
      kz: '7 мамырда астанада функционалдық көпсайыс бойынша екінші жыл сайынғы ашық турнир өтті — Astana Open Cup 2025! Финалдық іріктеуге Қазақстан, Ресей, Қырғызстан және Өзбекстаннан 60-тан астам күшті спортшы қатысты. Жарыс бас демеуші @kdlolymp — Сулейменов Ерлан Мельсович @suleimenov.yerlan толық қолдауымен өтті. Қатысушылар максимумға шықты — тек физикалық күшті ғана емес, рух тұрақтылығын да көрсетті. Әр санат күш, төзімділік және жоғары дайындық деңгейінің шынайы аренасына айналды. Барлық қатысушылар мен жеңімпаздарды құттықтаймыз! Спортшылар жоғары дайындық деңгейін көрсетіп, функционалдық көпсайыстың ұйымдастырушылық та, спорттық та жағынан қарқынды дамып жатқанын тағы бір рет дәлелдеді. Осы турнирдің жасалуына атсалысқан барлығына — ұйымдастырушыларға, серіктестерге және оған күш пен жүрегін салған барлық командаға алғыс білдіреміз.',
      en: 'On May 7, the second annual open functional fitness tournament was held in the capital — Astana Open Cup 2025! More than 60 of the strongest athletes from Kazakhstan, Russia, Kyrgyzstan, and Uzbekistan participated in the final selection. The competition was held thanks to the full support of the general sponsor @kdlolymp — represented by Yerlan Melsovich Suleimenov @suleimenov.yerlan. The participants gave their maximum — demonstrating not only physical power but also resilience of spirit. Each category became a true arena of strength, endurance, and high level of preparation. Congratulations to all participants and winners! The athletes demonstrated a high level of preparation, once again confirming that functional fitness is rapidly developing both organizationally and sportingly. We thank everyone who stood behind the creation of this tournament — the organizers, partners, and the entire team who put their strength and heart into it.'
    },
    view_leaderboard: {
      ru: 'Посмотреть лидерборд',
      kz: 'Лидерборды көру',
      en: 'View Leaderboard'
    },

    // Страница news2 - полное содержание
    news2_page_title: {
      ru: 'Историческое событие: казахстанец впервые прошёл в финал CrossFit Games!',
      kz: 'Тарихи оқиға: қазақстандық алғаш рет CrossFit Games финалына өтті!',
      en: 'Historic Event: Kazakhstani Reaches CrossFit Games Finals for the First Time!'
    },
    news2_page_content: {
      ru: 'Впервые в истории спортсмен из Казахстана вышел в финал CrossFit Games — самого престижного мирового турнира. Роман Джантлеев, вице-президент Казахстанской Федерации функционального многоборья, стал первым спортсменом из Казахстана, прошедшим в финал этого легендарного соревнования. Этот результат — не только личное достижение Романа, но и важная веха в развитии функционального многоборья в нашей стране. Его пример вдохновляет новое поколение атлетов и укрепляет позиции Казахстана на мировой спортивной арене. «Это невероятная честь — представить Казахстан на CrossFit Games. За этим результатом стоит многолетний труд, вера в спорт и развитие нашей Федерации», — отметил Роман Джантлеев.',
      kz: 'Тарихта алғаш рет Қазақстандық спортшы CrossFit Games финалына шықты — әлемдегі ең беделді турнир. Қазақстан Функционалдық көпсайыс федерациясының вице-президенті Роман Джантлеев осы аңызға айналған жарыстың финалына өткен алғашқы қазақстандық спортшы болды. Бұл нәтиже — тек Романның жеке жетістігі ғана емес, сонымен қатар біздің еліміздегі функционалдық көпсайыстың дамуындағы маңызды кезең. Оның үлгісі спортшылардың жаңа буынын шабыттандырады және Қазақстанның әлемдік спорт аренасындағы позициясын нығайтады. «CrossFit Games-те Қазақстанды таныстыру — керемет мақтаныш. Бұл нәтиженің артында көпжылдық еңбек, спортқа деген сенім және Федерациямыздың дамуы тұр», — деп атап өтті Роман Джантлеев.',
      en: 'For the first time in history, an athlete from Kazakhstan reached the CrossFit Games finals — the most prestigious world tournament. Roman Dzhantleev, Vice President of the Kazakhstan Functional Fitness Federation, became the first athlete from Kazakhstan to advance to the finals of this legendary competition. This result is not only Roman\'s personal achievement but also an important milestone in the development of functional fitness in our country. His example inspires a new generation of athletes and strengthens Kazakhstan\'s position on the world sports arena. "It is an incredible honor to represent Kazakhstan at the CrossFit Games. Behind this result is years of hard work, faith in sports and the development of our Federation," noted Roman Dzhantleev.'
    },

    // Страница news3 - Чемпионат Азии
    news3_page_title: {
      ru: 'Казахстан — победитель Чемпионата Азии по функциональному многоборью 2025!',
      kz: 'Қазақстан — 2025 функционалдық көпсайыс бойынша Азия чемпионатының жеңімпазы!',
      en: 'Kazakhstan — Winner of the Asian Functional Fitness Championship 2025!'
    },
    news3_page_content: {
      ru: 'Эр-Рияд, Королевство Саудовская Аравия, 2–4 октября 2025 года. Впервые в столице Саудовской Аравии состоялся Чемпионат Азии по функциональному многоборью, который собрал более 70 спортсменов из 10 стран, включая Казахстан, Саудовскую Аравию, Пакистан, Иран, Иорданию, Узбекистан, Монголию, Южную Корею, Австралию и Индию. 🇰🇿 Сборная Казахстана представила 11 сильнейших атлетов, продемонстрировавших высокий уровень физической подготовки, силы и выносливости. По итогам соревнований команда Казахстана заняла 1-е место в общекомандном зачёте, уверенно закрепив лидерство на континенте. Чемпионат был организован при поддержке Министерства спорта и Федерации спорта Саудовской Аравии, а также Международной федерации функционального фитнеса (iF3). В течение трёх дней участники проходили серию интенсивных комплексов, направленных на проверку силы, выносливости, ловкости, координации и психологической устойчивости — ключевых качеств функционального многоборья.',
      kz: 'Эр-Рияд, Сауд Арабиясы Патшалығы, 2025 жылдың 2-4 қазаны. Сауд Арабиясының астанасында алғаш рет функционалдық көпсайыс бойынша Азия чемпионаты өтті, оған Қазақстан, Сауд Арабиясы, Пәкістан, Иран, Иордания, Өзбекстан, Моңғолия, Оңтүстік Корея, Австралия және Үндістан қоса 10 елден 70-тен астам спортшы қатысты. 🇰🇿 Қазақстан құрамасы физикалық дайындықтың, күш пен төзімділіктің жоғары деңгейін көрсеткен 11 күшті спортшыны таныстырды. Жарыстардың қорытындысы бойынша Қазақстан командасы жалпы командалық есепте 1-ші орынды иеленіп, континенттегі көшбасшылығын сенімді түрде бекітті.',
      en: 'Riyadh, Kingdom of Saudi Arabia, October 2-4, 2025. For the first time, the Asian Functional Fitness Championship was held in the capital of Saudi Arabia, bringing together more than 70 athletes from 10 countries, including Kazakhstan, Saudi Arabia, Pakistan, Iran, Jordan, Uzbekistan, Mongolia, South Korea, Australia and India. 🇰🇿 The Kazakhstan national team presented 11 of the strongest athletes who demonstrated a high level of physical fitness, strength and endurance. According to the competition results, the Kazakhstan team took 1st place in the overall team standings, confidently consolidating its leadership on the continent.'
    },
    news3_preparation: {
      ru: 'Подготовка и руководство:',
      kz: 'Дайындық және басшылық:',
      en: 'Preparation and Leadership:'
    },
    news3_preparation_text: {
      ru: 'Казахстанскую сборную возглавил Президент Казахстанской Федерации функционального многоборья — Николай Ильич Мещеряков. Подготовку спортсменов осуществлял трёхкратный чемпион мира, финалист CrossFit Games — Роман Джантлеев.',
      kz: 'Қазақстан құрамасын Қазақстан Функционалдық көпсайыс федерациясының президенті — Николай Ильич Мещеряков басқарды. Спортшыларды дайындауды үш дүркін әлем чемпионы, CrossFit Games финалшысы — Роман Джантлеев жүзеге асырды.',
      en: 'The Kazakhstan national team was led by the President of the Kazakhstan Functional Fitness Federation — Nikolay Ilyich Meshcheryakov. The athletes were trained by three-time world champion, CrossFit Games finalist — Roman Dzhantleev.'
    },
    news3_sponsor: {
      ru: 'Генеральный спонсор:',
      kz: 'Бас демеуші:',
      en: 'General Sponsor:'
    },
    news3_sponsor_text: {
      ru: 'Генеральным спонсором сборной Казахстана на Чемпионате Азии выступила компания КДЛ Олимп в лице Ерлана Сулейменова. Федерация выражает благодарность партнёрам за поддержку и вклад в развитие функционального многоборья в Казахстане.',
      kz: 'Азия чемпионатында Қазақстан құрамасының бас демеушісі Ерлан Сулейменов атынан КДЛ Олимп компаниясы болды. Федерация серіктестерге Қазақстандағы функционалдық көпсайысты дамытуға қолдау мен үлес қосқаны үшін алғыс білдіреді.',
      en: 'The general sponsor of the Kazakhstan team at the Asian Championship was KDL Olymp represented by Yerlan Suleimenov. The Federation expresses gratitude to partners for their support and contribution to the development of functional fitness in Kazakhstan.'
    },
    news3_winners_title: {
      ru: 'Победители и призёры из Казахстана:',
      kz: 'Қазақстандық жеңімпаздар мен жүлдегерлер:',
      en: 'Winners and Prize Winners from Kazakhstan:'
    },
    news3_winner1: {
      ru: '1 место — Камила Такеева',
      kz: '1 орын — Камила Такеева',
      en: '1st place — Kamila Takeeva'
    },
    news3_winner2: {
      ru: '2 место — Виктор Ильченко, Валентин Жуков',
      kz: '2 орын — Виктор Ильченко, Валентин Жуков',
      en: '2nd place — Viktor Ilchenko, Valentin Zhukov'
    },
    news3_winner3: {
      ru: '2 место — Асылбек Жалеев, Дина Касымова',
      kz: '2 орын — Асылбек Жалеев, Дина Қасымова',
      en: '2nd place — Asylbek Zhaleev, Dina Kasymova'
    },
    news3_winner4: {
      ru: '3 место — Артём Мацак',
      kz: '3 орын — Артём Мацак',
      en: '3rd place — Artem Matsak'
    },
    news3_winner5: {
      ru: '4 место — Валентин Лукановский, Ксения Жалеева',
      kz: '4 орын — Валентин Лукановский, Ксения Жалеева',
      en: '4th place — Valentin Lukanovskiy, Ksenia Zhaleeva'
    },
    news3_winner6: {
      ru: '7 место — Амир Гайсин',
      kz: '7 орын — Амир Гайсин',
      en: '7th place — Amir Gaisin'
    },
    news3_winner7: {
      ru: '10 место — Нуркен Бахтияров, Баян Кинашев',
      kz: '10 орын — Нуркен Бахтияров, Баян Кинашев',
      en: '10th place — Nurken Bakhtiyarov, Bayan Kinashev'
    },

    // Страница news4 - Чемпионат Казахстана 2025
    news4_page_title: {
      ru: 'Чемпионат Казахстана по функциональному многоборью 2025 состоялся в конце сентября!',
      kz: 'Қазақстанның функционалдық көпсайыс бойынша 2025 чемпионаты қыркүйектің соңында өтті!',
      en: 'Kazakhstan Functional Fitness Championship 2025 took place at the end of September!'
    },
    news4_page_content: {
      ru: '27–28 сентября прошёл Чемпионат Казахстана по функциональному многоборью 2025 — главное событие года в мире функционального фитнеса страны. В соревнованиях приняли участие 100 сильнейших атлетов из разных регионов Казахстана, выступивших в 6 категориях. Атмосфера борьбы, поддержки и единства стала главным украшением чемпионата. Федерация благодарит всех участников, судей и партнёров за вклад в развитие функционального многоборья в Казахстане!',
      kz: '27–28 қыркүйекте Қазақстанның функционалдық көпсайыс бойынша 2025 чемпионаты өтті — еліміздегі функционалдық фитнес әлеміндегі жылдың басты оқиғасы. Жарысқа Қазақстанның түрлі өңірлерінен 100 күшті спортшы қатысып, 6 санатта өнер көрсетті. Күрес, қолдау және бірлік атмосферасы чемпионаттың басты безендірмесіне айналды. Федерация барлық қатысушыларға, төрешілерге және серіктестерге Қазақстанда функционалдық көпсайысты дамытуға қосқан үлестері үшін алғыс білдіреді!',
      en: 'On September 27–28, the Kazakhstan Functional Fitness Championship 2025 took place — the main event of the year in the world of functional fitness in the country. 100 of the strongest athletes from different regions of Kazakhstan participated in the competition, performing in 6 categories. The atmosphere of competition, support and unity became the main highlight of the championship. The Federation thanks all participants, judges and partners for their contribution to the development of functional fitness in Kazakhstan!'
    },
    news4_sponsor_title: {
      ru: 'Генеральный спонсор:',
      kz: 'Бас демеуші:',
      en: 'General Sponsor:'
    },
    news4_sponsor_text: {
      ru: 'Генеральным спонсором чемпионата Казахстана выступила компания КДЛ Олимп в лице Ерлана Сулейменова.',
      kz: 'Қазақстан чемпионатының бас демеушісі Ерлан Сүлейменов тұлғасында КДЛ Олимп компаниясы болды.',
      en: 'The general sponsor of the Kazakhstan Championship was KDL Olymp company represented by Yerlan Suleimenov.'
    },
    news4_winners_title: {
      ru: 'Победители и призёры Чемпионата Казахстана 2025:',
      kz: 'Қазақстан чемпионаты 2025 жеңімпаздары мен жүлдегерлері:',
      en: 'Kazakhstan Championship 2025 Winners and Prize Winners:'
    },
    news4_cat_scaled_women: {
      ru: 'Scaled Women',
      kz: 'Scaled Women',
      en: 'Scaled Women'
    },
    news4_sw1: {
      ru: '🥇 Лаура Кумарова',
      kz: '🥇 Лаура Құмарова',
      en: '🥇 Laura Kumarova'
    },
    news4_sw2: {
      ru: '🥈 Вероника Махметова',
      kz: '🥈 Вероника Махметова',
      en: '🥈 Veronika Makhmetova'
    },
    news4_sw3: {
      ru: '🥉 Асем Таржанова',
      kz: '🥉 Асем Таржанова',
      en: '🥉 Asem Tarzhanova'
    },
    news4_cat_scaled_men: {
      ru: 'Scaled Men',
      kz: 'Scaled Men',
      en: 'Scaled Men'
    },
    news4_sm1: {
      ru: '🥇 Тамерлан Муханбеткалиев',
      kz: '🥇 Тамерлан Мұханбеткалиев',
      en: '🥇 Tamerlan Mukhanbetkaliev'
    },
    news4_sm2: {
      ru: '🥈 Александр Бенгард',
      kz: '🥈 Александр Бенгард',
      en: '🥈 Alexander Bengard'
    },
    news4_sm3: {
      ru: '🥉 Алишер Апеков',
      kz: '🥉 Алишер Апеков',
      en: '🥉 Alisher Apekov'
    },
    news4_cat_masters_women: {
      ru: 'Masters Women 35+',
      kz: 'Masters Women 35+',
      en: 'Masters Women 35+'
    },
    news4_mw1: {
      ru: '🥇 Евгения Цой',
      kz: '🥇 Евгения Цой',
      en: '🥇 Evgeniya Tsoi'
    },
    news4_mw2: {
      ru: '🥈 Анна Товченик',
      kz: '🥈 Анна Товченик',
      en: '🥈 Anna Tovchenyk'
    },
    news4_mw3: {
      ru: '🥉 Екатерина Гарась',
      kz: '🥉 Екатерина Гарась',
      en: '🥉 Ekaterina Garas'
    },
    news4_cat_masters_men: {
      ru: 'Masters Men 40+',
      kz: 'Masters Men 40+',
      en: 'Masters Men 40+'
    },
    news4_mm1: {
      ru: '🥇 Александр Пономарев',
      kz: '🥇 Александр Пономарев',
      en: '🥇 Alexander Ponomarev'
    },
    news4_mm2: {
      ru: '🥈 Антон Кущ',
      kz: '🥈 Антон Кущ',
      en: '🥈 Anton Kushch'
    },
    news4_mm3: {
      ru: '🥉 Денис Мищур',
      kz: '🥉 Денис Мищур',
      en: '🥉 Denis Mishchur'
    },
    news4_cat_intermediate_women: {
      ru: 'Intermediate Women',
      kz: 'Intermediate Women',
      en: 'Intermediate Women'
    },
    news4_iw1: {
      ru: '🥇 Карина Богатырёва',
      kz: '🥇 Карина Богатырёва',
      en: '🥇 Karina Bogatyreva'
    },
    news4_iw2: {
      ru: '🥈 Диана Шапенова',
      kz: '🥈 Диана Шапенова',
      en: '🥈 Diana Shapenova'
    },
    news4_iw3: {
      ru: '🥉 Марина Сытник',
      kz: '🥉 Марина Сытник',
      en: '🥉 Marina Sytnik'
    },
    news4_cat_intermediate_men: {
      ru: 'Intermediate Men',
      kz: 'Intermediate Men',
      en: 'Intermediate Men'
    },
    news4_im1: {
      ru: '🥇 Булат Нурабаев',
      kz: '🥇 Булат Нұрабаев',
      en: '🥇 Bulat Nurabayev'
    },
    news4_im2: {
      ru: '🥈 Аскар Асенов',
      kz: '🥈 Асқар Асенов',
      en: '🥈 Askar Asenov'
    },
    news4_im3: {
      ru: '🥉 Вячеслав Субботин',
      kz: '🥉 Вячеслав Субботин',
      en: '🥉 Vyacheslav Subbotin'
    },
    news4_congrats: {
      ru: 'Поздравляем победителей и призёров с заслуженными результатами и благодарим всех спортсменов за яркие выступления и спортивный дух!',
      kz: 'Жеңімпаздар мен жүлдегерлерді лайықты нәтижелерімен құттықтаймыз және барлық спортшыларға жарқын өнерлері мен спорттық рухы үшін алғыс білдіреміз!',
      en: 'Congratulations to the winners and prize winners on their well-deserved results and we thank all athletes for their outstanding performances and sportsmanship!'
    },

    // Страница partners - Генеральный спонсор
    partners_intro1: {
      ru: 'Генеральным спонсором Федерации функционального многоборья Республики Казахстан является сеть медицинских лабораторий КДЛ «ОЛИМП» в лице Генерального директора компании Сулейменова Ерлана Мельсовича.',
      kz: 'Қазақстан Республикасы Функционалдық көпсайыс федерациясының бас демеушісі — компанияның Бас директоры Сүлейменов Ерлан Мельсұлы тұлғасындағы КДЛ «ОЛИМП» медициналық зертханалар желісі.',
      en: 'The General Sponsor of the Functional Fitness Federation of the Republic of Kazakhstan is the KDL Olymp medical laboratory network, represented by the company\'s General Director Suleimenov Erlan Melsovich.'
    },
    partners_intro2: {
      ru: 'Независимая сеть клинико-диагностических лабораторий «ОЛИМП» работает на рынке лабораторной диагностики с января 2007 года. За годы успешной работы компания зарекомендовала себя как надёжный партнёр в сфере здравоохранения, обеспечивая миллионам жителей Казахстана точные и своевременные результаты исследований.',
      kz: '«ОЛИМП» клиникалық-диагностикалық зертханаларының тәуелсіз желісі 2007 жылдың қаңтарынан бастап зертханалық диагностика нарығында жұмыс істеп келеді. Табысты жұмыс жылдарында компания денсаулық сақтау саласында сенімді серіктес ретінде өзін танытты, Қазақстанның миллиондаған тұрғындарына дәл және уақтылы зерттеу нәтижелерін қамтамасыз етуде.',
      en: 'The independent network of clinical diagnostic laboratories OLYMP has been operating in the laboratory diagnostics market since January 2007. Over the years of successful work, the company has established itself as a reliable partner in healthcare, providing millions of residents of Kazakhstan with accurate and timely research results.'
    },
    partners_visit_site: {
      ru: 'Перейти на сайт КДЛ "ОЛИМП"',
      kz: 'КДЛ "ОЛИМП" сайтына өту',
      en: 'Visit KDL "OLYMP" Website'
    },
    partners_kdl_info: {
      ru: 'Сегодня КДЛ «ОЛИМП» — это крупнейшая частная лабораторная сеть в стране, включающая более 600 процедурных кабинетов и 20 современных лабораторий, оснащённых высокотехнологичным оборудованием ведущих мировых производителей. Благодаря внедрению инновационных решений и строгому контролю качества, лаборатория обеспечивает высокий уровень достоверности и доступности своих услуг для населения всех регионов Казахстана. Миссия компании заключается в предоставлении качественной, быстрой и доступной лабораторной диагностики, основанной на принципах профессионализма, ответственности и заботы о пациентах. КДЛ «ОЛИМП» активно развивает культуру профилактики заболеваний, повышая уровень медицинской осведомлённости и доверия к современным методам диагностики.',
      kz: 'Бүгінде КДЛ «ОЛИМП» — елдегі ең ірі жеке зертханалық желі, оның құрамында 600-ден астам манипуляциялық кабинет және әлемдің жетекші өндірушілерінің жоғары технологиялық жабдықтарымен жабдықталған 20 заманауи зертхана бар. Инновациялық шешімдерді енгізу және сапаны қатаң бақылау арқылы зертхана Қазақстанның барлық өңірлерінің тұрғындары үшін өз қызметтерінің жоғары деңгейдегі сенімділігі мен қолжетімділігін қамтамасыз етеді. Компанияның миссиясы — кәсібилік, жауапкершілік және науқастарға қамқорлық қағидаттарына негізделген сапалы, жылдам және қолжетімді зертханалық диагностиканы ұсыну. КДЛ «ОЛИМП» аурулардың алдын алу мәдениетін белсенді дамытуда, медициналық хабардарлық пен заманауи диагностика әдістеріне сенім деңгейін арттыруда.',
      en: 'Today, KDL OLYMP is the largest private laboratory network in the country, comprising more than 600 procedure rooms and 20 modern laboratories equipped with high-tech equipment from leading global manufacturers. Thanks to the implementation of innovative solutions and strict quality control, the laboratory ensures a high level of reliability and accessibility of its services for the population of all regions of Kazakhstan. The company\'s mission is to provide high-quality, fast and affordable laboratory diagnostics based on the principles of professionalism, responsibility and patient care. KDL OLYMP actively develops a culture of disease prevention, raising the level of medical awareness and trust in modern diagnostic methods.'
    },
    partners_partnership: {
      ru: 'Федерацию функционального многоборья Республики Казахстан и КДЛ «ОЛИМП» объединяют общие ценности — стремление к здоровому, активному и сильному обществу. Компания, являясь признанным лидером в области лабораторной диагностики, последовательно реализует инициативы, направленные на развитие массового спорта, повышение культуры здоровья и укрепление благополучия казахстанцев. Разделяя ценности функционального фитнеса — силу, выносливость, целеустремлённость и стремление к самосовершенствованию, КДЛ «ОЛИМП» вносит значительный вклад в укрепление здоровья нации и формирование устойчивой культуры активного образа жизни в стране. В рамках стратегического партнёрства КДЛ «ОЛИМП» выступает генеральным спонсором Федерации функционального многоборья Республики Казахстан, оказывая поддержку в организации соревнований, развитии спортивной инфраструктуры и популяризации функционального фитнеса среди спортивного сообщества. Партнёрство с КДЛ «ОЛИМП» отражает общие цели и миссию Федерации — укрепление здоровья нации, развитие спортивного потенциала страны и воспитание сильного, дисциплинированного и активного поколения Казахстана.',
      kz: 'Қазақстан Республикасы Функционалдық көпсайыс федерациясы мен КДЛ «ОЛИМП»-ті ортақ құндылықтар біріктіреді — салауатты, белсенді және күшті қоғамға ұмтылу. Компания зертханалық диагностика саласындағы танылған көшбасшы бола отырып, бұқаралық спортты дамытуға, денсаулық мәдениетін жақсартуға және қазақстандықтардың әл-ауқатын нығайтуға бағытталған бастамаларды дәйекті түрде жүзеге асырады. Функционалдық фитнестің құндылықтарын — күш, төзімділік, мақсатқа ұмтылу және өзін-өзі жетілдіруге ұмтылуды бөлісе отырып, КДЛ «ОЛИМП» ұлт денсаулығын нығайтуға және елде белсенді өмір салтының тұрақты мәдениетін қалыптастыруға айтарлықтай үлес қосады. Стратегиялық серіктестік аясында КДЛ «ОЛИМП» Қазақстан Республикасы Функционалдық көпсайыс федерациясының бас демеушісі болып табылады, жарыстарды ұйымдастыруда, спорттық инфрақұрылымды дамытуда және спорттық қауымдастық арасында функционалдық фитнесті танымал етуде қолдау көрсетеді. КДЛ «ОЛИМП»-пен серіктестік Федерацияның ортақ мақсаттары мен миссиясын көрсетеді — ұлт денсаулығын нығайту, елдің спорттық әлеуетін дамыту және Қазақстанның күшті, тәртіпті және белсенді ұрпағын тәрбиелеу.',
      en: 'The Functional Fitness Federation of the Republic of Kazakhstan and CDL OLYMP are united by common values - the desire for a healthy, active and strong society. The company, being a recognized leader in laboratory diagnostics, consistently implements initiatives aimed at developing mass sports, improving health culture and strengthening the well-being of Kazakhstanis. Sharing the values of functional fitness - strength, endurance, determination and the pursuit of self-improvement, CDL OLYMP makes a significant contribution to strengthening the health of the nation and forming a sustainable culture of active lifestyle in the country. Within the framework of strategic partnership, CDL OLYMP acts as the general sponsor of the Functional Fitness Federation of the Republic of Kazakhstan, providing support in organizing competitions, developing sports infrastructure and popularizing functional fitness among the sports community. The partnership with CDL OLYMP reflects the common goals and mission of the Federation - strengthening the health of the nation, developing the country\'s sports potential and educating a strong, disciplined and active generation of Kazakhstan.'
    },
    // Partners2 page translations
    partners2_title: {
      ru: 'Партнёры',
      kz: 'Серіктестер',
      en: 'Partners'
    },
    partners2_wod_p1: {
      ru: 'WOD Friends — официальный партнёр Казахстанской Федерации функционального многоборья. Компания специализируется на оборудовании и аксессуарах для кроссфита, функциональных тренировок и силовых видов спорта.',
      kz: 'WOD Friends — Қазақстан Функционалдық көпсайыс федерациясының ресми серіктесі. Компания кроссфит, функционалдық жаттығулар және күш спорт түрлеріне арналған жабдықтар мен аксессуарларға маманданған.',
      en: 'WOD Friends is the official partner of the Functional Fitness Federation of Kazakhstan. The company specializes in equipment and accessories for CrossFit, functional training and strength sports.'
    },
    partners2_wod_p2: {
      ru: 'Миссия WOD Friends — поддерживать развитие кроссфита и функционального фитнеса в Казахстане, помогая спортсменам любого уровня тренироваться в комфортных и безопасных условиях. В ассортименте компании — профессиональное спортивное оборудование, одежда, аксессуары и инвентарь, проверенные атлетами и тренерами.',
      kz: 'WOD Friends миссиясы — Қазақстанда кроссфит пен функционалдық фитнестің дамуын қолдау, кез келген деңгейдегі спортшыларға қолайлы және қауіпсіз жағдайларда жаттығуға көмектесу. Компания ассортиментінде — спортшылар мен жаттықтырушылар тексерген кәсіби спорттық жабдықтар, киім, аксессуарлар және инвентарь.',
      en: 'WOD Friends\' mission is to support the development of CrossFit and functional fitness in Kazakhstan, helping athletes of all levels train in comfortable and safe conditions. The company\'s range includes professional sports equipment, clothing, accessories and sports equipment tested by athletes and coaches.'
    },
    partners2_wod_p3: {
      ru: 'Благодаря WOD Friends участники соревнований Федерации получают доступ к качественному инвентарю, а также призы и поддержку во время мероприятий.',
      kz: 'WOD Friends арқасында Федерация жарыстарының қатысушылары сапалы инвентарьға, сондай-ақ іс-шаралар кезінде жүлделер мен қолдауға қол жеткізеді.',
      en: 'Thanks to WOD Friends, Federation competition participants gain access to quality equipment, as well as prizes and support during events.'
    },
    partners2_wod_p4: {
      ru: 'Представитель компании — Владимир Смирнов, энтузиаст и популяризатор функциональных тренировок, активно развивающий бренд в Казахстане и странах СНГ.',
      kz: 'Компания өкілі — Владимир Смирнов, функционалдық жаттығулардың энтузиасты және танымал етушісі, Қазақстан мен ТМД елдерінде брендті белсенді дамытуда.',
      en: 'The company representative is Vladimir Smirnov, an enthusiast and promoter of functional training, who actively develops the brand in Kazakhstan and CIS countries.'
    },
    partners2_visit_wod: {
      ru: 'Посетить сайт WODfriends',
      kz: 'WODfriends сайтына кіру',
      en: 'Visit WODfriends Website'
    },
    partners2_back_home: {
      ru: 'На главную',
      kz: 'Басты бетке',
      en: 'Back to Home'
    },
    // News5 page
    news5_title: {
      ru: 'iF3 подписывает партнерское соглашение с Geraklion',
      kz: 'iF3 Geraklion-мен серіктестік келісіміне қол қойды',
      en: 'iF3 Signs Partnership Agreement with Geraklion'
    },
    news5_content: {
      ru: 'iF3 объявила о заключении партнерского соглашения с Фондом инноваций в медицине и спорте Гераклиона, которое позволит федерации сделать значительные шаги вперед на пути к признанию МОК. Соглашение включает в себя предоставление финансирования для подачи заявки iF3 на признание SportAccord, а также заявки iF3 на вступление в ВАДА. Как признание СпортАккорда, так и статус подписанта ВАДА являются требованиями для признания МОК и включения в Олимпийские игры.\n\nВ дополнение к финансированию этих важных элементов процесса признания, г-н Сергей Еремин, председатель наблюдательного совета Федерации функционального фитнеса России и президент компании Geraklion, станет специальным советником iF3. Еремин будет работать с Советом iF3, чтобы предоставить идеи и отзывы о стратегиях и проектах iF3. Первоначальная цель будет заключаться в более четком определении внутренней штатной структуры iF3.\n\nГ-н Еремин прокомментировал партнерство: «Соглашение, которое мы подписали с Международной федерацией функционального фитнеса, является очень важной вехой в развитии нашего любимого вида спорта. В очень сложной международной обстановке очень важно поддерживать дружеские отношения, основанные на сути спорта как мирного, честного, доброго отношения к соревнованиям на спортивных площадках. У нас общая цель – сделать вид разносторонней физической подготовки, которым является функциональный фитнес, олимпийской дисциплиной. Фонд инноваций в медицине и спорте «Гераклион» сделает все от него зависящего для выполнения взятых на себя обязательств по нашему общему продвижению к этой цели. Я уверен, что Федерация во главе с Гретхен Киттельбергер, отличной спортсменкой и очень надежным человеком, придерживается тех же подходов».\n\nПрезидент iF3 Гретхен Киттельбергер выразила свое волнение по поводу партнерства, сказав: «Это партнерство с Фондом инноваций в медицине и спорте Geraklion позволит нам вывести работу iF3 на новый уровень. Немедленное удовлетворение наших потребностей в области антидопинга и процесса признания СпортАккорда позволит нам, наконец, преодолеть несколько высоких препятствий, которые стояли на пути к нашей конечной цели. Но это партнерство выходит за рамки этого первоначального шага, и мы с нетерпением ждем возможности инициировать новые и творческие проекты и мероприятия с помощью и советами Гераклиона и г-на Еремина, который имеет большой опыт в развитии и создании новых видов спорта».',
      kz: 'iF3 Гераклион медицина мен спорт саласындағы инновациялар қорымен серіктестік келісіміне қол қойғанын жариялады, бұл федерацияға ХОК мойындауына жету жолында маңызды қадамдар жасауға мүмкіндік береді. Келісім iF3-тің SportAccord мойындауына өтінім беруіне, сондай-ақ iF3-тің ВАДА-ға кіруіне қаржыландыру ұсынуды қамтиды. SportAccord мойындауы да, ВАДА қол қоюшысы мәртебесі де ХОК мойындауы мен Олимпиада ойындарына қосылу үшін талаптар болып табылады.\n\nМойындау процесінің осы маңызды элементтерін қаржыландырумен қатар, Ресей Функционалдық фитнес федерациясының қадағалау кеңесінің төрағасы және Geraklion президенті мырза Сергей Еремин iF3-тің арнайы кеңесшісі болады. Еремин iF3 стратегиялары мен жобалары бойынша идеялар мен кері байланыс беру үшін iF3 Кеңесімен жұмыс істейді. Бастапқы мақсат iF3-тің ішкі штаттық құрылымын анықтау болады.\n\nМырза Еремин серіктестік туралы: «Біз Халықаралық функционалдық фитнес федерациясымен қол қойған келісім біздің сүйікті спортымыздың дамуындағы өте маңызды кезең болып табылады. Өте күрделі халықаралық жағдайда спорттың бейбіт, адал, жарыстарға жақсы қатынасы негізінде достық қарым-қатынасты қолдау өте маңызды. Бізде ортақ мақсат бар – функционалдық фитнес болып табылатын жан-жақты дене дайындығын олимпиадалық пәнге айналдыру. «Гераклион» медицина мен спорт саласындағы инновациялар қоры осы мақсатқа бірлесіп жылжу бойынша қабылдаған міндеттемелерді орындау үшін бар мүмкіндікті жасайды».\n\niF3 президенті Гретхен Киттельбергер серіктестікке қатысты: «Geraklion медицина мен спорт инновациялары қорымен серіктестік iF3 жұмысын жаңа деңгейге көтеруге мүмкіндік береді. Допингке қарсы саладағы және SportAccord мойындау процесіндегі қажеттіліктерді дереу қанағаттандыру бізге соңғы мақсатымызға жетуге кедергі болған бірнеше жоғары кедергілерді еңсеруге мүмкіндік береді».',
      en: 'iF3 announced the conclusion of a partnership agreement with the Geraklion Foundation for Innovation in Medicine and Sports, which will allow the federation to take significant steps forward on the path to IOC recognition. The agreement includes providing funding for iF3\'s application for SportAccord recognition, as well as iF3\'s application for WADA membership. Both SportAccord recognition and WADA signatory status are requirements for IOC recognition and inclusion in the Olympic Games.\n\nIn addition to funding these important elements of the recognition process, Mr. Sergey Eremin, Chairman of the Supervisory Board of the Functional Fitness Federation of Russia and President of Geraklion, will become a special advisor to iF3. Eremin will work with the iF3 Council to provide ideas and feedback on iF3 strategies and projects. The initial goal will be to more clearly define iF3\'s internal staffing structure.\n\nMr. Eremin commented on the partnership: "The agreement we signed with the International Functional Fitness Federation is a very important milestone in the development of our beloved sport. In a very difficult international environment, it is very important to maintain friendly relations based on the essence of sport as a peaceful, fair, kind attitude to competition on sports fields. We have a common goal – to make the type of versatile physical training, which is functional fitness, an Olympic discipline. The Geraklion Foundation for Innovation in Medicine and Sports will do everything in its power to fulfill its commitments to our common advancement towards this goal. I am confident that the Federation, led by Gretchen Kittelberger, an excellent athlete and a very reliable person, adheres to the same approaches."\n\niF3 President Gretchen Kittelberger expressed her excitement about the partnership, saying: "This partnership with the Geraklion Foundation for Innovation in Medicine and Sports will allow us to take iF3\'s work to a new level. Immediately meeting our anti-doping and SportAccord recognition process needs will finally allow us to overcome several high hurdles that stood in the way of our ultimate goal. But this partnership goes beyond this initial step, and we look forward to initiating new and creative projects and events with the help and advice of Geraklion and Mr. Eremin, who has extensive experience in developing and creating new sports."'
    },
    news5_back_home: {
      ru: 'Вернуться на главную',
      kz: 'Басты бетке оралу',
      en: 'Back to Home'
    },
    // News6 page
    news6_title: {
      ru: 'Ливийская федерация функционального фитнеса получила признание Министерства спорта Ливии',
      kz: 'Ливия функционалдық фитнес федерациясы Ливия Спорт министрлігінің мойындауын алды',
      en: 'Libyan Functional Fitness Federation Receives Recognition from Libya Ministry of Sports'
    },
    news6_content: {
      ru: 'Ливийская федерация функционального фитнеса стала последним членом iF3, получившим официальное признание в качестве Национальной спортивной федерации. Ливийская федерация недавно получила признание Министерства спорта Ливии, которое отвечает за развитие спорта и инфраструктурные проекты по всей стране. Это признание позволяет спорту стать частью национальной спортивной системы в Ливии.\n\nФаузи Эль Арби, президент Ливийской Федерации, прокомментировал: «Мы безмерно гордимся тем, что получили это официальное признание от Министерства спорта Ливии. Этот исторический шаг открывает двери для того, чтобы наш вид спорта стал неотъемлемой частью Национальной спортивной системы, подтверждая нашу приверженность развитию функционального фитнеса во всей Ливии, от низового до элитного уровня. Мы выражаем искреннюю благодарность Международной федерации функционального фитнеса (iF3) и ее руководству за их постоянное руководство и поддержку».\n\nПрезидент iF3 Гретхен Киттельбергер выразила свое волнение по поводу ливийской федерации, сказав: «Фаузи и Ливийская федерация усердно работали в течение нескольких лет, развивая этот вид спорта в Ливии. Благодаря этому признанию мы надеемся, что ливийские спортсмены теперь смогут участвовать в международных соревнованиях, поскольку федерация продолжает расти и развивать спортсменов всех уровней подготовки».',
      kz: 'Ливия функционалдық фитнес федерациясы iF3-тің Ұлттық спорт федерациясы ретінде ресми мойындауды алған соңғы мүшесі болды. Ливия федерациясы жақында елде спортты дамыту мен инфрақұрылымдық жобаларға жауапты Ливия Спорт министрлігінің мойындауын алды. Бұл мойындау спортқа Ливиядағы ұлттық спорт жүйесінің бөлігі болуға мүмкіндік береді.\n\nЛивия Федерациясының президенті Фаузи Эль Арби түсіндірді: «Біз Ливия Спорт министрлігінен осы ресми мойындауды алғанымызға өте мақтанамыз. Бұл тарихи қадам біздің спорт түрімізге Ұлттық спорт жүйесінің ажырамас бөлігіне айналу есігін ашады, бұл біздің Ливияда функционалдық фитнесті төменгі деңгейден элиталық деңгейге дейін дамытуға берілгендігімізді растайды. Біз Халықаралық функционалдық фитнес федерациясына (iF3) және оның басшылығына үнемі басшылық пен қолдау үшін шын ризашылығымызды білдіреміз».\n\niF3 президенті Гретхен Киттельбергер ливиялық федерация туралы: «Фаузи мен Ливия федерациясы бірнеше жыл бойы осы спорт түрін Ливияда дамытып, ынталы жұмыс істеді. Осы мойындаудың арқасында біз ливиялық спортшылардың енді халықаралық жарыстарға қатысуына үміттенеміз, өйткені федерация барлық деңгейдегі спортшыларды өсіруді және дамытуды жалғастырады».',
      en: 'The Libyan Functional Fitness Federation became the latest iF3 member to receive official recognition as a National Sports Federation. The Libyan Federation recently received recognition from Libya\'s Ministry of Sports, which is responsible for sports development and infrastructure projects across the country. This recognition allows the sport to become part of the national sports system in Libya.\n\nFawzi El Arbi, President of the Libyan Federation, commented: "We are immensely proud to have received this official recognition from the Ministry of Sports of Libya. This historic step opens the doors for our sport to become an integral part of the National Sports System, confirming our commitment to developing functional fitness throughout Libya, from grassroots to elite level. We express our sincere gratitude to the International Functional Fitness Federation (iF3) and its leadership for their constant guidance and support."\n\niF3 President Gretchen Kittelberger expressed her excitement about the Libyan federation, saying: "Fawzi and the Libyan Federation have worked diligently for several years, developing the sport in Libya. Thanks to this recognition, we hope that Libyan athletes will now be able to participate in international competitions as the federation continues to grow and develop athletes at all levels."'
    },
    news6_back_home: {
      ru: 'Вернуться на главную',
      kz: 'Басты бетке оралу',
      en: 'Back to Home'
    },
    // News7 page
    news7_title: {
      ru: 'Итоги IF3 Masters World Championship 2025',
      kz: 'IF3 Masters World Championship 2025 қорытындылары',
      en: 'IF3 Masters World Championship 2025 Results'
    },
    news7_content: {
      ru: 'Казахстанская команда на мировом чемпионате в Брисбене, Австралия\n\nСборная Казахстана достойно представила страну на Чемпионате мира IF3 Masters 2025, проходившем в Брисбене (Австралия). Турнир отличался высокой конкуренцией, яркой атмосферой и напряжённой борьбой, став одним из ключевых событий сезона.\n\nПризовые результаты:\nВалентин Лукановский - 3 место 🥉\nВалентин завершил соревнования с одинаковым количеством баллов со спортсменом из Норвегии, занявшим второе место. По дополнительным коэффициентам представитель Норвегии оказался выше.\n\nВыступления команды:\nРоман Джантлеев - 4 место\nПоказал высокое мастерство и уверенность. Из-за технической ошибки организаторов был аннулирован комплекс Endurance, в котором Роман одержал победу. Это лишило его возможности подняться на первое место в итоговом протоколе.\n\nАртем Мацак - 4 место\nДемонстрировал мощную динамику и стабильную силу. До призового места ему не хватило всего одного очка.\n\nМихаил Магомадов - 12 место\nХаризматичное и выразительное выступление. Ошибка в финальном комплексе стоила Михаилу семи позиций, отбросив его с 7 на 12 место.\n\nГордимся нашей командой!\nСпортсмены проявили стойкость, характер и высокий уровень подготовки, достойно представляя Казахстан на мировой арене.\n\nБлагодарности:\nГенеральный спонсор: КДЛ Олимп - Ерлан Мельсович Сулейменов\nЗа поддержку команды и вклад в развитие спорта в Казахстане.\n\nОфициальный партнёр: WodFriends - Владимир Смирнов\nЗа предоставленную экипировку, которая помогла спортсменам выступать комфортно и уверенно.\n\nЭто был серьёзный вызов для всей команды, и мы гордимся достигнутыми результатами!',
      kz: 'Қазақстан командасы Брисбен, Австралиядағы әлем чемпионатында\n\nҚазақстан құрамасы Брисбенде (Австралия) өткен IF3 Masters 2025 Әлем чемпионатында елді лайықты түрде таныстырды. Турнир жоғары бәсекелестікпен, жарқын атмосферамен және шиеленісті күреспен ерекшеленді, маусымның негізгі оқиғаларының біріне айналды.\n\nЖүлделі нәтижелер:\nВалентин Лукановский - 3 орын 🥉\nВалентин жарыстарды екінші орынды иеленген Норвегия спортшысымен бірдей ұпаймен аяқтады. Қосымша коэффициенттер бойынша Норвегия өкілі жоғары болды.\n\nКоманда өнері:\nРоман Джантлеев - 4 орын\nЖоғары шеберлік пен сенімділік көрсетті. Ұйымдастырушылардың техникалық қатесіне байланысты Роман жеңіске жеткен Endurance кешені жойылды. Бұл оның қорытынды хаттамада бірінші орынға көтерілу мүмкіндігінен айырды.\n\nАртем Мацак - 4 орын\nҚуатты динамика мен тұрақты күш көрсетті. Жүлделі орынға дейін оған бір ғана ұпай жетпеді.\n\nМихаил Магомадов - 12 орын\nХаризматты және мәнерлі өнер. Финалдық кешендегі қате Михаилға жеті позицияны жоғалтып, оны 7-ден 12 орынға түсірді.\n\nБіз командамызбен мақтанамыз!\nСпортшылар төзімділік, мінез және жоғары дайындық деңгейін көрсетіп, Қазақстанды әлемдік аренада лайықты таныстырды.\n\nАлғыстар:\nБас демеуші: КДЛ Олимп - Ерлан Мельсұлы Сүлейменов\nКоманданы қолдағаны және Қазақстандағы спортты дамытуға қосқан үлесі үшін.\n\nРесми серіктес: WodFriends - Владимир Смирнов\nСпортшыларға ыңғайлы және сенімді түрде өнер көрсетуге көмектескен жарақ үшін.\n\nБұл бүкіл команда үшін маңызды сынақ болды, және біз қол жеткізген нәтижелерімізбен мақтанамыз!',
      en: 'Kazakhstan team at the World Championship in Brisbane, Australia\n\nThe Kazakhstan national team worthily represented the country at the IF3 Masters World Championship 2025, held in Brisbane (Australia). The tournament was marked by high competition, a vibrant atmosphere and intense struggle, becoming one of the key events of the season.\n\nPrize results:\nValentin Lukanovsky - 3rd place 🥉\nValentin finished the competition with the same number of points as the athlete from Norway who took second place. According to additional coefficients, the Norwegian representative was higher.\n\nTeam performances:\nRoman Dzhantleev - 4th place\nShowed high skill and confidence. Due to a technical error by the organizers, the Endurance complex, in which Roman won, was canceled. This deprived him of the opportunity to rise to first place in the final protocol.\n\nArtem Matsak - 4th place\nDemonstrated powerful dynamics and stable strength. He was just one point short of a prize place.\n\nMikhail Magomadov - 12th place\nCharismatic and expressive performance. An error in the final complex cost Mikhail seven positions, dropping him from 7th to 12th place.\n\nWe are proud of our team!\nThe athletes showed resilience, character and a high level of preparation, worthily representing Kazakhstan on the world stage.\n\nAcknowledgments:\nGeneral Sponsor: KDL Olymp - Yerlan Melsovich Suleimenov\nFor supporting the team and contributing to the development of sports in Kazakhstan.\n\nOfficial Partner: WodFriends - Vladimir Smirnov\nFor providing the equipment that helped athletes perform comfortably and confidently.\n\nThis was a serious challenge for the whole team, and we are proud of the results achieved!'
    },
    news7_back_home: {
      ru: 'Вернуться на главную',
      kz: 'Басты бетке оралу',
      en: 'Back to Home'
    },
    // News8 page - IF3 World Championship 2025 Lithuania
    news8_title: {
      ru: 'Чемпионат мира IF3 2025 — Литва, Вильнюс',
      kz: 'IF3 2025 Әлем чемпионаты — Литва, Вильнюс',
      en: 'IF3 World Championship 2025 — Lithuania, Vilnius'
    },
    news8_section_participants: {
      ru: 'Кто участвовал',
      kz: 'Қатысушылар',
      en: 'Participants'
    },
    news8_participants_text: {
      ru: 'В Вильнюсе, столице Литвы, с 5 по 7 декабря 2025 года состоялся Чемпионат мира IF3 по функциональному фитнесу, объединивший сильнейших атлетов со всего мира. Национальные федерации IF3 направили своих спортсменов в трёх основных категориях: индивидуальной, юниорской и командной.',
      kz: 'Литваның астанасы Вильнюсте 2025 жылғы 5-7 желтоқсан аралығында IF3 функционалдық фитнес бойынша әлем чемпионаты өтті, ол бүкіл әлемнің ең күшті спортшыларын біріктірді. IF3 ұлттық федерациялары өз спортшыларын үш негізгі санатқа жіберді: жеке, юниор және командалық.',
      en: 'In Vilnius, the capital of Lithuania, from December 5-7, 2025, the IF3 World Championship in functional fitness was held, bringing together the strongest athletes from around the world. IF3 national federations sent their athletes in three main categories: individual, junior and team.'
    },
    news8_section_individual: {
      ru: 'Индивидуальные соревнования',
      kz: 'Жеке жарыстар',
      en: 'Individual Competitions'
    },
    news8_individual_text1: {
      ru: 'В индивидуальных категориях выступили лучшие мужчины и женщины, отобранные национальными федерациями.',
      kz: 'Жеке санаттарда ұлттық федерациялар таңдаған ең үздік ер және әйел адамдар өнер көрсетті.',
      en: 'The best men and women selected by national federations competed in individual categories.'
    },
    news8_individual_text2: {
      ru: 'Каждая страна могла заявить:',
      kz: 'Әр ел мынаны мәлімдей алды:',
      en: 'Each country could nominate:'
    },
    news8_individual_men: {
      ru: 'до 3 мужчин-индивидуалов,',
      kz: '3 жеке ер адамға дейін,',
      en: 'up to 3 individual men,'
    },
    news8_individual_women: {
      ru: 'до 3 женщин-индивидуалов.',
      kz: '3 жеке әйелге дейін.',
      en: 'up to 3 individual women.'
    },
    news8_individual_text3: {
      ru: 'Атлеты соревновались в шести дисциплинах, демонстрируя физическую подготовку, технику и стратегию.',
      kz: 'Спортшылар алты пәнде жарысып, физикалық дайындықты, техника мен стратегияны көрсетті.',
      en: 'Athletes competed in six disciplines, demonstrating physical fitness, technique and strategy.'
    },
    news8_section_juniors: {
      ru: 'Юниоры',
      kz: 'Юниорлар',
      en: 'Juniors'
    },
    news8_juniors_text1: {
      ru: 'Юниорские дивизионы собрали перспективных молодых атлетов из разных стран.',
      kz: 'Юниор дивизиондары әр түрлі елдерден келешегі зор жас спортшыларды жинады.',
      en: 'Junior divisions brought together promising young athletes from different countries.'
    },
    news8_juniors_text2: {
      ru: 'Федерации могли заявить:',
      kz: 'Федерациялар мынаны мәлімдей алды:',
      en: 'Federations could nominate:'
    },
    news8_juniors_boys: {
      ru: 'до 3 юниоров,',
      kz: '3 юниор жігітке дейін,',
      en: 'up to 3 junior boys,'
    },
    news8_juniors_girls: {
      ru: 'до 3 юниорок в каждой возрастной группе.',
      kz: '3 юниор қызға дейін әр жас тобында.',
      en: 'up to 3 junior girls in each age group.'
    },
    news8_juniors_text3: {
      ru: 'Выступления юниоров стали важной частью чемпионата, показывая развитие нового поколения спортсменов.',
      kz: 'Юниорлардың өнері чемпионаттың маңызды бөлігі болды, жаңа буын спортшылардың дамуын көрсетті.',
      en: 'Junior performances became an important part of the championship, showing the development of a new generation of athletes.'
    },
    news8_section_teams: {
      ru: 'Командные соревнования',
      kz: 'Командалық жарыстар',
      en: 'Team Competitions'
    },
    news8_teams_text1: {
      ru: 'В командных соревнованиях участвовали сборные из 4 атлетов — 2 мужчин и 2 женщин.',
      kz: 'Командалық жарыстарға 4 спортшыдан — 2 ер және 2 әйелден тұратын құрамалар қатысты.',
      en: 'Team competitions featured teams of 4 athletes — 2 men and 2 women.'
    },
    news8_teams_text2: {
      ru: 'Команды представляли свои страны и соревновались в комплексных тестах, требующих синхронной работы, тактики и высокой командной динамики.',
      kz: 'Командалар өз елдерін таныстырып, синхронды жұмысты, тактиканы және жоғары командалық динамиканы талап ететін кешенді сынақтарда жарысты.',
      en: 'Teams represented their countries and competed in complex tests requiring synchronized work, tactics and high team dynamics.'
    },
    news8_section_geography: {
      ru: 'География участников',
      kz: 'Қатысушылар географиясы',
      en: 'Participant Geography'
    },
    news8_geography_text1: {
      ru: 'На IF3 World Championship 2025 прибыли спортсмены из десятков стран Европы, Азии, Северной и Южной Америки.',
      kz: 'IF3 World Championship 2025-ке Еуропа, Азия, Солтүстік және Оңтүстік Американың ондаған елдерінен спортшылар келді.',
      en: 'Athletes from dozens of countries in Europe, Asia, North and South America arrived at the IF3 World Championship 2025.'
    },
    news8_geography_text2: {
      ru: 'Среди них — как страны с развитой спортивной системой IF3, так и новые федерации, впервые представившие своих атлетов на мировом первенстве.',
      kz: 'Олардың арасында IF3 спорт жүйесі дамыған елдер де, бірінші рет өз спортшыларын әлем біріншілігінде таныстырған жаңа федерациялар да бар.',
      en: 'Among them were countries with developed IF3 sports systems as well as new federations presenting their athletes at the world championship for the first time.'
    },
    news8_section_location: {
      ru: 'Локация и место проведения',
      kz: 'Локация және өткізу орны',
      en: 'Location and Venue'
    },
    news8_location_text1: {
      ru: 'Чемпионат мира IF3 2025 прошёл в Литве, в городе Вильнюс — современном европейском центре спорта и культуры. Соревнования разместились на одной из крупнейших спортивных арен города, оборудованной для мероприятий международного уровня.',
      kz: 'IF3 2025 Әлем чемпионаты Литвада, заманауи еуропалық спорт және мәдениет орталығы Вильнюс қаласында өтті. Жарыстар халықаралық деңгейдегі іс-шараларға жабдықталған қалалардың ең ірі спорт аренасының бірінде орналасты.',
      en: 'The IF3 World Championship 2025 was held in Lithuania, in the city of Vilnius — a modern European center of sports and culture. The competitions were hosted at one of the city\'s largest sports arenas, equipped for international events.'
    },
    news8_location_text2: {
      ru: 'Вильнюс стал идеальной площадкой для проведения мирового первенства: удобная инфраструктура, транспортная доступность, развитая спортивная база и атмосфера исторического центра Европы сделали чемпионат ярким событием для участников и болельщиков.',
      kz: 'Вильнюс әлем біріншілігін өткізуге тамаша алаң болды: ыңғайлы инфрақұрылым, көлік қолжетімділігі, дамыған спорт базасы және Еуропаның тарихи орталығының атмосферасы чемпионатты қатысушылар мен жанкүйерлер үшін жарқын оқиғаға айналдырды.',
      en: 'Vilnius became an ideal venue for the world championship: convenient infrastructure, transport accessibility, developed sports facilities and the atmosphere of the historical center of Europe made the championship a bright event for participants and fans.'
    },
    news8_location_text3: {
      ru: 'Спортсмены и гости могли насладиться:',
      kz: 'Спортшылар мен қонақтар ләззат ала алды:',
      en: 'Athletes and guests could enjoy:'
    },
    news8_location_item1: {
      ru: 'комфортом современной арены,',
      kz: 'заманауи арена жайлылығымен,',
      en: 'the comfort of a modern arena,'
    },
    news8_location_item2: {
      ru: 'возможностями для тренировок и восстановления,',
      kz: 'жаттығу және қалпына келтіру мүмкіндіктерімен,',
      en: 'opportunities for training and recovery,'
    },
    news8_location_item3: {
      ru: 'уютной городской средой,',
      kz: 'жайлы қалалық ортамен,',
      en: 'a cozy urban environment,'
    },
    news8_location_item4: {
      ru: 'красивой старинной архитектурой и зимней атмосферой декабрьского Вильнюса.',
      kz: 'әдемі ежелгі сәулетпен және желтоқсандағы Вильнюстің қысқы атмосферасымен.',
      en: 'beautiful ancient architecture and the winter atmosphere of December Vilnius.'
    },
    news8_total_athletes: {
      ru: 'В чемпионате приняли участие 392 атлета из 26 стран.',
      kz: 'Чемпионатқа 26 елден 392 спортшы қатысты.',
      en: '392 athletes from 26 countries participated in the championship.'
    },
    news8_categories_intro: {
      ru: 'Соревнования проводились в следующих категориях:',
      kz: 'Жарыстар келесі санаттарда өткізілді:',
      en: 'Competitions were held in the following categories:'
    },
    news8_category_junior_female: {
      ru: 'Junior Female',
      kz: 'Junior Female',
      en: 'Junior Female'
    },
    news8_category_junior_male: {
      ru: 'Junior Male',
      kz: 'Junior Male',
      en: 'Junior Male'
    },
    news8_category_senior: {
      ru: 'Senior',
      kz: 'Senior',
      en: 'Senior'
    },
    news8_section_results: {
      ru: 'Results by Country',
      kz: 'Елдер бойынша нәтижелер',
      en: 'Results by Country'
    },
    news8_results_top3: {
      ru: 'Top 3 Countries by Medals:',
      kz: 'Медальдар бойынша үздік 3 ел:',
      en: 'Top 3 Countries by Medals:'
    },
    news8_result_1st: {
      ru: '🥇 1 место: NORWAY и UNITED KINGDOM (по 8 медалей)',
      kz: '🥇 1 орын: NORWAY және UNITED KINGDOM (әрқайсысында 8 медаль)',
      en: '🥇 1st Place: NORWAY and UNITED KINGDOM (8 medals each)'
    },
    news8_result_2nd: {
      ru: '🥈 2 место: FINLAND (7 медалей)',
      kz: '🥈 2 орын: FINLAND (7 медаль)',
      en: '🥈 2nd Place: FINLAND (7 medals)'
    },
    news8_result_3rd: {
      ru: '🥉 3 место: SWEDEN и GERMANY (по 4 медали)',
      kz: '🥉 3 орын: SWEDEN және GERMANY (әрқайсысында 4 медаль)',
      en: '🥉 3rd Place: SWEDEN and GERMANY (4 medals each)'
    },
    news8_back_home: {
      ru: 'Вернуться на главную',
      kz: 'Басты бетке оралу',
      en: 'Back to Home'
    },

    // Страница news10 - ASTANA OPEN CUP 2026
    news10_page_title: {
      ru: 'ASTANA OPEN CUP 2026',
      kz: 'ASTANA OPEN CUP 2026',
      en: 'ASTANA OPEN CUP 2026'
    },
    news10_subtitle: {
      ru: 'Functional Fitness Competition',
      kz: 'Функционалды пішіндегі спорт турнири',
      en: 'Functional Fitness Competition'
    },
    news10_date_label: {
      ru: 'Дата проведения финала:',
      kz: 'Финал өткізу күні:',
      en: 'Final Date:'
    },
    news10_date: {
      ru: '7 мая 2026 года',
      kz: '2026 жылдың 7 мамырында',
      en: 'May 7, 2026'
    },
    news10_location_label: {
      ru: 'Место проведения:',
      kz: 'Өтетін орны:',
      en: 'Venue:'
    },
    news10_location: {
      ru: 'г. Астана, ЛАСК «Qazaqstan»',
      kz: 'Астана қ., ЛАСК «Qazaqstan»',
      en: 'Astana, LASK «Qazaqstan»'
    },
    news10_intro: {
      ru: 'Соревнования по функциональному многоборью ASTANA OPEN CUP 2026 проводятся в партнёрстве с КДЛ «Олимп» и WodFriends при организационной поддержке КФФМ.',
      kz: 'ASTANA OPEN CUP 2026 функционалды көпсайыс жарыстары КДЛ «Олимп» және WodFriends-пен серіктестіктің ұйымдастырушылық қолдауында ӧтетіліп жатыр.',
      en: 'The ASTANA OPEN CUP 2026 functional fitness competition is held in partnership with KDL «Olymp» and WodFriends with organizational support from KFFF.'
    },
    news10_section1_title: {
      ru: '1. Participant Registration',
      kz: '1. Қатысушыларды тіркеу',
      en: '1. Participant Registration'
    },
    news10_section1_text: {
      ru: 'Регистрация на финальный этап соревнований осуществляется на платформе Circle 21.',
      kz: 'Жарыстың финалдық кезеңіне тіркелу Circle 21 платформасында жүргізіледі.',
      en: 'Registration for the final stage of competitions is conducted on the Circle 21 platform.'
    },
    news10_registration_dates_label: {
      ru: 'Сроки регистрации:',
      kz: 'Тіркелу мерзімі:',
      en: 'Registration Dates:'
    },
    news10_early_reg: {
      ru: 'Ранняя регистрация:',
      kz: 'Ерте тіркелу:',
      en: 'Early Registration:'
    },
    news10_early_reg_dates: {
      ru: '8 января – 20 февраля 2026 года',
      kz: '2026 жылдың 8 қаңтар – 20 ақпан',
      en: 'January 8 - February 20, 2026'
    },
    news10_regular_reg: {
      ru: 'Регулярная регистрация:',
      kz: 'Қалыпты тіркелу:',
      en: 'Regular Registration:'
    },
    news10_regular_reg_dates: {
      ru: '20 февраля – 31 марта 2026 года',
      kz: '2026 жылдың 20 ақпан – 31 наурыз',
      en: 'February 20 - March 31, 2026'
    },
    news10_late_reg: {
      ru: 'Поздняя регистрация:',
      kz: 'Кеш тіркелу:',
      en: 'Late Registration:'
    },
    news10_late_reg_dates: {
      ru: '31 марта – 19 апреля 2026 года',
      kz: '2026 жылдың 31 наурыз – 19 сәуір',
      en: 'March 31 - April 19, 2026'
    },
    news10_limited_spots: {
      ru: 'Количество мест в категориях ограничено. Организаторы оставляют за собой право закрыть регистрацию ранее установленного срока при достижении лимита участников.',
      kz: 'Санаттардағы орындар саны шектеулі. Ұйымдастырушылар қатысушылардың лимитіне жеткенде регистрацияны қолданбастан жабу құқығын сақтап қалады.',
      en: 'The number of places in categories is limited. Organizers reserve the right to close registration before the established deadline if the participant limit is reached.'
    },
    news10_section2_title: {
      ru: '2. Participant Categories',
      kz: '2. Қатысушылардың санаттары',
      en: '2. Participant Categories'
    },
    news10_section2_intro: {
      ru: 'К участию допускаются атлеты старше 18 лет, граждане Республики Казахстан и других стран.',
      kz: '18 жастан жоғары спортшылар, Қазақстан Республикасының және басқа елдердің азаматтары қатыса алады.',
      en: 'Athletes over 18 years of age, citizens of the Republic of Kazakhstan and other countries are allowed to participate.'
    },
    news10_men_cats: {
      ru: 'Мужчины:',
      kz: 'Ерлер:',
      en: 'Men:'
    },
    news10_men_rx: {
      ru: '20 атлетов (регистрация по промокоду)',
      kz: '20 спортшы (промокод бойынша тіркелу)',
      en: '20 athletes (registration by promo code)'
    },
    news10_men_35: {
      ru: '10 атлетов',
      kz: '10 спортшы',
      en: '10 athletes'
    },
    news10_men_40: {
      ru: '10 атлетов',
      kz: '10 спортшы',
      en: '10 athletes'
    },
    news10_women_cats: {
      ru: 'Женщины:',
      kz: 'Әйелдер:',
      en: 'Women:'
    },
    news10_women_rx: {
      ru: '10 атлетов (регистрация по промокоду)',
      kz: '10 спортшы (промокод бойынша тіркелу)',
      en: '10 athletes (registration by promo code)'
    },
    news10_women_35: {
      ru: '10 атлетов',
      kz: '10 спортшы',
      en: '10 athletes'
    },
    news10_rx_desc: {
      ru: 'Категория RX предназначена для атлетов с опытом подготовки не менее 5 лет, владеющих всеми соревновательными навыками и работающих с высокими нагрузками.',
      kz: 'RX санаты кемінде 5 жыл дайындық тәжірибесі бар, барлық соревновательные дағдыларына ие және жоғары жүктемелермен жұмыс істейтін спортшылар үшін арналған.',
      en: 'The RX category is intended for athletes with at least 5 years of training experience, proficient in all competitive skills and working with high loads.'
    },
    news10_rx_registration: {
      ru: 'Регистрация в категории RX осуществляется по промокоду. Для его получения атлету необходимо обратиться к организаторам. Кандидатура рассматривается и согласовывается, после чего, в случае одобрения, предоставляется промокод для регистрации.',
      kz: 'RX санатына тіркелу промокод бойынша жүргізіледі. Оны алу үшін спортшыға ұйымдастырушыларға хабарласу керек. Кандидатура қарастырылып келісіледі, одан кейін, мақұлданса, тіркелу үшін промокод беріледі.',
      en: 'Registration in the RX category is done by promo code. To obtain it, the athlete must contact the organizers. The candidacy is reviewed and approved, after which, if approved, a promo code is provided for registration.'
    },
    news10_section3_title: {
      ru: '3. Competition Format',
      kz: '3. Жарыстың форматы',
      en: '3. Competition Format'
    },
    news10_one_day: {
      ru: 'Все соревновательные комплексы выполняются в течение одного дня',
      kz: 'Барлық соревновательные кешендер бір күн ішінде орындалады',
      en: 'All competition complexes are performed during one day'
    },
    news10_tasks_publish: {
      ru: 'Задания финальной части будут опубликованы не позднее 2 мая 2026 года',
      kz: 'Финалдық бөліктің тапсырмалары 2026 жылдың 2 мамырынан кешіктіні құралмайды',
      en: 'Final part tasks will be published no later than May 2, 2026'
    },
    news10_judging: {
      ru: 'Судейство и стандарты движений соответствуют правилам iF3 (2026)',
      kz: 'Соттау және қозғалыс стандарттары iF3 ережелеріне (2026) сәйкес келеді',
      en: 'Judging and movement standards comply with iF3 rules (2026)'
    },
    news10_quality_note: {
      ru: 'С целью повышения качества проведения мероприятия организаторы оставляют за собой право вносить изменения в регламент, формат, тайминг и задания соревнований.',
      kz: 'Іс-шараны өткізу сапасын арттыру мақсатында ұйымдастырушылар регламент, формат, уақыт және жарыс тапсырмаларын өзгерту құқығын сақтап қалады.',
      en: 'To improve the quality of the event, organizers reserve the right to make changes to the regulations, format, timing and competition tasks.'
    },
    news10_section4_title: {
      ru: '4. Awards',
      kz: '4. Марапаттар',
      en: '4. Awards'
    },
    news10_awards_intro: {
      ru: 'Победители и призёры соревнований награждаются:',
      kz: 'Жарыстың жеңімпасы және призёрлері марапатталады:',
      en: 'Winners and prize-winners of the competition are awarded:'
    },
    news10_awards_money: {
      ru: 'денежными призами;',
      kz: 'ақы сыйлықтарымен;',
      en: 'cash prizes;'
    },
    news10_awards_medals: {
      ru: 'медалями и грамотами.',
      kz: 'медальдар және сертификаттармен.',
      en: 'medals and certificates.'
    },
    news10_prize_pool: {
      ru: 'Информация о размере призового фонда будет опубликована дополнительно на официальных ресурсах КФФМ.',
      kz: 'Сыйлық қорының мөлшері туралы ақпарат КФФМ ресми ресурстарында қосымша жарияланатын болады.',
      en: 'Information about the prize pool amount will be published separately on the official KFFF resources.'
    },
    news10_section5_title: {
      ru: '5. Competition Goals',
      kz: '5. Жарыстың мақсаттары',
      en: '5. Competition Goals'
    },
    news10_goal1: {
      ru: 'выявление сильнейших атлетов по функциональному многоборью;',
      kz: 'функционалды көпсайыс бойынша ең күшті спортшыларды анықтау;',
      en: 'identification of the strongest athletes in functional fitness;'
    },
    news10_goal2: {
      ru: 'развитие и популяризация функционального многоборья;',
      kz: 'функционалды көпсайыстың дамуы мен танымалдануы;',
      en: 'development and popularization of functional fitness;'
    },
    news10_goal3: {
      ru: 'формирование сборной команды КФФМ для участия в Чемпионате Азии 2026 года.',
      kz: '2026 жылы Азия Чемпионатына қатысу үшін КФФМ жиынтық команdasын құрастыру.',
      en: 'formation of the KFFF national team for participation in the 2026 Asia Championship.'
    },
    news10_section6_title: {
      ru: '6. Competition Sponsors and Partners',
      kz: '6. Жарыстың спонсорлары және серіктестері',
      en: '6. Competition Sponsors and Partners'
    },
    news10_sponsor_label: {
      ru: 'Генеральный спонсор:',
      kz: 'Генералды спонсор:',
      en: 'General Sponsor:'
    },
    news10_sponsor: {
      ru: 'КДЛ «Олимп» в лице Ерлана Сулейменова',
      kz: 'КДЛ «Олимп» Ерлан Сулейменовтың өкілінде',
      en: 'KDL «Olymp» represented by Yerlan Suleimenov'
    },
    news10_partner_label: {
      ru: 'Партнёр:',
      kz: 'Серіктес:',
      en: 'Partner:'
    },
    news10_partner: {
      ru: 'WodFriends — компания по производству и продаже экипировки для функционального многоборья и тренировок.',
      kz: 'WodFriends — функционалды көпсайыс және машықтар үшін жабдық өндіру және сату компаниясы.',
      en: 'WodFriends - a company for the production and sale of equipment for functional fitness and training.'
    },

    // Страница news11 - Чемпионат Азии 2026
    news11_title: {
      ru: 'Чемпионат Азии по функциональному многоборью 2026 в Казахстане',
      kz: 'Қазақстанда 2026 жылғы функционалдық көпсайыс бойынша Азия чемпионаты',
      en: 'Asian Functional Fitness Championship 2026 in Kazakhstan'
    },
    news11_intro_p1: {
      ru: 'Федерация функционального многоборья Республики Казахстан, являясь официальным членом Международной Федерации функционального фитнеса (International Functional Fitness Federation), получила право проведения Чемпионата Азии 2026 на территории Республики Казахстан.',
      kz: 'Қазақстан Республикасының функционалдық көпсайыс федерациясы Халықаралық функционалдық фитнес федерациясының (International Functional Fitness Federation) ресми мүшесі болып табылады және Қазақстан Республикасы аумағында 2026 жылғы Азия чемпионатын өткізу құқығын алды.',
      en: 'The Functional Fitness Federation of the Republic of Kazakhstan, being an official member of the International Functional Fitness Federation, has been granted the right to host the Asian Championship 2026 in the Republic of Kazakhstan.'
    },
    news11_intro_p2: {
      ru: 'Это решение стало результатом многолетней, системной и последовательной работы Федерации, а также международного признания и высокого уровня доверия со стороны Президента Международной Федерации функционального фитнеса - Гретчен Киттельбергер.',
      kz: 'Бұл шешім Федерацияның көп жылдық, жүйелі және тұрақты жұмысының, сондай-ақ Халықаралық функционалдық фитнес федерациясының президенті Гретчен Киттельбергердің халықаралық танымалдығы мен жоғары деңгейдегі сенімінің нәтижесі болды.',
      en: 'This decision was the result of many years of systematic and consistent work by the Federation, as well as international recognition and a high level of trust from the President of the International Functional Fitness Federation - Gretchen Kittelberger.'
    },
    news11_support_title: {
      ru: 'Поддержка спонсора и партнёра',
      kz: 'Демеушінің және серіктестің қолдауы',
      en: 'Support from Sponsor and Partner'
    },
    news11_support_p1: {
      ru: 'На всём пути подготовки и развития функционального многоборья в Казахстане рядом с нами находится генеральный спонсор - КДЛ «Олимп», в лице Сулейменова Ерлана Мельсовича. Его поддержка, вовлечённость и вера в потенциал нашего вида спорта сыграли ключевую роль в достижении этого исторического результата.',
      kz: 'Қазақстанда функционалдық көпсайысты дайындау және дамыту жолында бізбен бірге бас демеуші - КДЛ «Олимп» Сулейменов Ерлан Мелсұлының атынан. Оның қолдауы, белсенді қатысуы және спорт түріміздің әлеуетіне сенімі осы тарихи нәтижеге қол жеткізуде шешуші рөл атқарды.',
      en: 'Throughout the preparation and development of functional fitness in Kazakhstan, we have been supported by our general sponsor - KDL "Olymp", represented by Suleimenov Erlan Melsovich. His support, involvement and belief in the potential of our sport played a key role in achieving this historic result.'
    },
    news11_support_p2: {
      ru: 'Важным партнёром Федерации является WodFriends, в лице Смирнова Владимира, который обеспечивает спортсменов качественной экипировкой и вносит значительный вклад в развитие и популяризацию функционального многоборья.',
      kz: 'Федерацияның маңызды серіктесі - WodFriends Смирнов Владимирдің атынан, ол спортшыларды сапалы жабдықпен қамтамасыз етеді және функционалдық көпсайысты дамыту мен танымал етуге елеулі үлес қосады.',
      en: 'An important partner of the Federation is WodFriends, represented by Smirnov Vladimir, who provides athletes with quality equipment and makes a significant contribution to the development and popularization of functional fitness.'
    },
    news11_support_p3: {
      ru: 'Благодаря поддержке партнёров и слаженной работе всей команды стало возможным проведение соревнований столь высокого международного уровня.',
      kz: 'Серіктестердің қолдауы мен бүкіл команданың үйлесімді жұмысының арқасында мұндай жоғары халықаралық деңгейдегі жарысты өткізу мүмкін болды.',
      en: 'Thanks to the support of partners and the coordinated work of the entire team, it became possible to hold competitions of such a high international level.'
    },
    news11_historic_title: {
      ru: 'Историческое событие для Казахстана',
      kz: 'Қазақстан үшін тарихи оқиға',
      en: 'Historic Event for Kazakhstan'
    },
    news11_historic_p1: {
      ru: 'Уже в августе 2026 года, в столице Республики Казахстан, впервые в истории отечественного функционального многоборья состоится официальный международный Чемпионат Азии.',
      kz: '2026 жылдың тамызында Қазақстан Республикасының астанасында отандық функционалдық көпсайыс тарихында алғаш рет ресми халықаралық Азия чемпионаты өтеді.',
      en: 'Already in August 2026, in the capital of the Republic of Kazakhstan, for the first time in the history of domestic functional fitness, an official international Asian Championship will be held.'
    },
    news11_historic_p2: {
      ru: 'За всю историю существования этого вида спорта в нашей стране подобного события ранее не проводилось.',
      kz: 'Біздің елде бұл спорт түрінің бар болу тарихында мұндай іс-шара бұрын өткізілмеген.',
      en: 'Throughout the entire history of this sport in our country, such an event has never been held before.'
    },
    news11_opportunities_title: {
      ru: 'Возможности для атлетов и зрителей',
      kz: 'Спортшылар мен көрермендер үшін мүмкіндіктер',
      en: 'Opportunities for Athletes and Spectators'
    },
    news11_opportunities_intro: {
      ru: 'Чемпионат Азии 2026 - это уникальная возможность:',
      kz: '2026 жылғы Азия чемпионаты - бұл бірегей мүмкіндік:',
      en: 'Asian Championship 2026 is a unique opportunity:'
    },
    news11_opportunity_1: {
      ru: 'увидеть выступления сильнейших атлетов Азии',
      kz: 'Азияның ең мықты спортшыларының өнерін көру',
      en: 'see performances of the strongest athletes in Asia'
    },
    news11_opportunity_2: {
      ru: 'представить Казахстан на международной региональной арене',
      kz: 'халықаралық аймақтық аренада Қазақстанды ұсыну',
      en: 'represent Kazakhstan on the international regional arena'
    },
    news11_opportunity_3: {
      ru: 'стать частью события, которое войдёт в историю спорта страны',
      kz: 'ел спортының тарихына енетін оқиғаның бөлігі болу',
      en: 'become part of an event that will go down in the history of the country\'s sports'
    },
    news11_opportunities_p2: {
      ru: 'В текущем сезоне спортсмены получат возможность пройти отбор и выступить на чемпионате, продемонстрировав своё мастерство перед широкой аудиторией болельщиков и профессионального сообщества.',
      kz: 'Ағымдағы маусымда спортшылар іріктеуден өтіп, чемпионатта өнер көрсетуге, кең көрермендер мен кәсіби қоғамдастық алдында шеберліктерін көрсетуге мүмкіндік алады.',
      en: 'In the current season, athletes will have the opportunity to qualify and compete in the championship, demonstrating their skills in front of a wide audience of fans and the professional community.'
    },
    news11_future_title: {
      ru: 'Впереди - ещё больше',
      kz: 'Алда - одан да көп',
      en: 'Ahead - Even More'
    },
    news11_future_p1: {
      ru: 'В ближайшее время мы анонсируем подробности формата проведения Чемпионата Азии 2026. Мы уверены, что масштаб события позволит вовлечь большое количество спортсменов и сделает чемпионат по-настоящему грандиозным.',
      kz: 'Жақын арада біз 2026 жылғы Азия чемпионатын өткізу форматының егжей-тегжейлерін жариялаймыз. Біз оқиғаның ауқымы көптеген спортшыларды тартуға мүмкіндік береді және чемпионатты шынымен ұлы етеді деп сенімдіміз.',
      en: 'Soon we will announce the details of the format for the Asian Championship 2026. We are confident that the scale of the event will allow us to involve a large number of athletes and make the championship truly grand.'
    },
    news11_gratitude_title: {
      ru: 'Благодарность',
      kz: 'Алғыс',
      en: 'Gratitude'
    },
    news11_gratitude_p1: {
      ru: 'Мы поздравляем всех, кто причастен к этому достижению:',
      kz: 'Біз осы жетістікке қатысты барлығын құттықтаймыз:',
      en: 'We congratulate everyone involved in this achievement:'
    },
    news11_gratitude_p1_cont: {
      ru: 'атлетов, тренеров, судей, организаторов, партнёров и болельщиков.',
      kz: 'спортшыларды, жаттықтырушыларды, төрешілерді, ұйымдастырушыларды, серіктестерді және жанкүйерлерді.',
      en: 'athletes, coaches, judges, organizers, partners and fans.'
    },
    news11_gratitude_p2: {
      ru: 'Каждый из вас - часть этой истории.',
      kz: 'Сіздердің әрқайсысыңыз - осы тарихтың бір бөлігісіз.',
      en: 'Each of you is part of this story.'
    },
    news11_gratitude_p2_cont: {
      ru: 'Без вас этот путь был бы невозможен.',
      kz: 'Сіздерсіз бұл жол мүмкін болмас еді.',
      en: 'Without you, this path would not have been possible.'
    },
    news11_gratitude_p3: {
      ru: 'Мы работаем для вас.',
      kz: 'Біз сіздер үшін жұмыс істейміз.',
      en: 'We work for you.'
    },
    news11_slogan: {
      ru: 'Алға, Қазақстан!',
      kz: 'Алға, Қазақстан!',
      en: 'Forward, Kazakhstan!'
    },
    news11_back_home: {
      ru: 'Вернуться на главную',
      kz: 'Басты бетке оралу',
      en: 'Back to Home'
    },

    // Карточка news11 на странице новостей
    news11_card_title: {
      ru: 'Чемпионат Азии по функциональному многоборью 2026 в Казахстане!',
      kz: 'Қазақстанда 2026 жылғы функционалдық көпсайыс бойынша Азия чемпионаты!',
      en: 'Asian Functional Fitness Championship 2026 in Kazakhstan!'
    },
    news11_card_excerpt: {
      ru: 'Казахстан получил право проведения Чемпионата Азии 2026. Историческое событие для функционального многоборья страны...',
      kz: 'Қазақстан 2026 жылғы Азия чемпионатын өткізу құқығын алды. Ел функционалдық көпсайысының тарихи оқиғасы...',
      en: 'Kazakhstan has been granted the right to host the Asian Championship 2026. A historic event for the country\'s functional fitness...'
    },

    // Карточка news12 на странице новостей
    news12_card_title: {
      ru: 'Alash Winter Cup 2026: Главное событие зимы в мире функционального многоборья!',
      kz: 'Alash Winter Cup 2026: Функционалдық көпсайыс әлемінде қыстың басты оқиғасы!',
      en: 'Alash Winter Cup 2026: The Main Winter Event in Functional Fitness!'
    },
    news12_card_excerpt: {
      ru: '31 января и 1 февраля 2026 года в Астане в спортивном комплексе Invictus go (Oxy gym) состоялся...',
      kz: '2026 жылдың 31 қаңтары мен 1 ақпанында Астанада Invictus go (Oxy gym) спорт кешенінде өтті...',
      en: 'On January 31 and February 1, 2026, in Astana at the Invictus go sports complex (Oxy gym)...'
    },

    // Страница news12 - Alash Winter Cup 2026
    news12_title: {
      ru: 'Alash Winter Cup 2026: Главное событие зимы в мире функционального многоборья',
      kz: 'Alash Winter Cup 2026: Функционалдық көпсайыс әлемінде қыстың басты оқиғасы',
      en: 'Alash Winter Cup 2026: The Main Winter Event in Functional Fitness'
    },
    news12_intro: {
      ru: '31 января и 1 февраля 2026 года в Астане в спортивном комплексе Invictus go (Oxy gym) состоялся регулярный турнир Alash Winter Cup, прошедший под эгидой Казахстанской Федерации функционального многоборья. Этот старт является центральным событием в зимнем календаре Федерации, способствуя активному вовлечению граждан Казахстана в спорт и поддержанию атлетов в оптимальной физической форме.',
      kz: '2026 жылдың 31 қаңтары мен 1 ақпанында Астанада Invictus go (Oxy gym) спорт кешенінде Қазақстандық функционалдық көпсайыс федерациясының қолдауымен Alash Winter Cup турнирі өтті. Бұл жарыс Федерацияның қысқы күнтізбесіндегі орталық оқиға болып табылады, Қазақстан азаматтарын спортқа белсенді тарту және спортшыларды оңтайлы физикалық формада ұстауға ықпал етеді.',
      en: 'On January 31 and February 1, 2026, the regular Alash Winter Cup tournament was held in Astana at the Invictus go (Oxy gym) sports complex under the auspices of the Kazakhstan Functional Fitness Federation. This event is a central part of the Federation\'s winter calendar, promoting active involvement of Kazakhstan citizens in sports and maintaining athletes in optimal physical condition.'
    },
    news12_media_title: {
      ru: '🎥 Медийная поддержка и официальные лица',
      kz: '🎥 Медиа қолдауы және ресми тұлғалар',
      en: '🎥 Media Support and Official Representatives'
    },
    news12_media_p1: {
      ru: 'Турнир получил статусное освещение в республиканской прессе. Спортивный телеканал «Спорт +» выступил информационным партнером, любезно согласившись анонсировать событие и транслировать ключевые моменты на своих ресурсах.',
      kz: 'Турнир республикалық баспасөзде мәртебелі жарияланым алды. «Спорт +» спорттық телеарнасы ақпараттық серіктес бола отырып, оқиғаны жариялауға және өз ресурстарында негізгі сәттерді трансляциялауға келісті.',
      en: 'The tournament received significant coverage in the national press. The sports channel "Sport +" acted as an information partner, kindly agreeing to announce the event and broadcast key moments on their platforms.'
    },
    news12_media_p2: {
      ru: 'Мероприятие посетили руководители Федерации функционального многоборья, что подчеркивает значимость турнира для национального спорта:',
      kz: 'Іс-шараға функционалдық көпсайыс федерациясының басшылары қатысты, бұл турнирдің ұлттық спорт үшін маңыздылығын көрсетеді:',
      en: 'The event was attended by the leaders of the Functional Fitness Federation, which emphasizes the significance of the tournament for national sports:'
    },
    news12_leader1: {
      ru: 'Мещеряков Николай Ильич — Президент Федерации;',
      kz: 'Мещеряков Николай Ильич — Федерация президенті;',
      en: 'Meshcheryakov Nikolay Ilyich — President of the Federation;'
    },
    news12_leader2: {
      ru: 'Лукановский Валентин — Генеральный секретарь;',
      kz: 'Лукановский Валентин — Бас хатшы;',
      en: 'Lukanovsky Valentin — General Secretary;'
    },
    news12_leader3: {
      ru: 'Джантлеев Роман — Вице-президент.',
      kz: 'Джантлеев Роман — Вице-президент.',
      en: 'Dzhantleev Roman — Vice President.'
    },
    news12_geography_title: {
      ru: '🇰🇿 География участников и международное судейство',
      kz: '🇰🇿 Қатысушылардың географиясы және халықаралық төрелік',
      en: '🇰🇿 Participants Geography and International Judging'
    },
    news12_geography_p1: {
      ru: 'Турнир объединил атлетов из множества городов Казахстана, включая Алматы, Семей, Шымкент, Усть-Каменогорск, Петропавловск, Актобе и другие регионы. Для обеспечения объективности и профессионализма на турнир были приглашены гости из Узбекистана, которые осуществляли квалифицированное судейство.',
      kz: 'Турнир Алматы, Семей, Шымкент, Өскемен, Петропавл, Ақтөбе және басқа өңірлерді қоса алғанда, Қазақстанның көптеген қалаларынан спортшыларды біріктірді. Объективтілік пен кәсіпқойлықты қамтамасыз ету үшін турнирге білікті төрелік жүргізген Өзбекстаннан қонақтар шақырылды.',
      en: 'The tournament united athletes from many cities of Kazakhstan, including Almaty, Semey, Shymkent, Ust-Kamenogorsk, Petropavlovsk, Aktobe and other regions. To ensure objectivity and professionalism, guests from Uzbekistan were invited to the tournament, who carried out qualified judging.'
    },
    news12_categories_title: {
      ru: '🏆 Категории и формат соревнований',
      kz: '🏆 Санаттар мен жарыс форматы',
      en: '🏆 Categories and Competition Format'
    },
    news12_categories_p1: {
      ru: 'В течение двух соревновательных дней атлеты прошли через 6 заданий и 7 зачетов, демонстрируя предел своих возможностей. Борьба велась в следующих категориях:',
      kz: 'Екі сайыс күні ішінде спортшылар 6 тапсырма мен 7 есептен өтіп, өз мүмкіндіктерінің шегін көрсетті. Күрес келесі санаттарда жүргізілді:',
      en: 'During two competitive days, athletes went through 6 tasks and 7 scores, demonstrating the limit of their capabilities. The competition was held in the following categories:'
    },
    news12_cat1: {
      ru: 'Scaled (Мужчины и Женщины)',
      kz: 'Scaled (Ерлер және Әйелдер)',
      en: 'Scaled (Men and Women)'
    },
    news12_cat2: {
      ru: 'Мастера 35+ (Мужчины)',
      kz: 'Шеберлер 35+ (Ерлер)',
      en: 'Masters 35+ (Men)'
    },
    news12_cat3: {
      ru: 'Intermediate (Команды: мужчина + женщина)',
      kz: 'Intermediate (Командалар: ер + әйел)',
      en: 'Intermediate (Teams: man + woman)'
    },
    news12_wildcard_title: {
      ru: '🎟 Прямой путь на Чемпионат Казахстана (Wildcard)',
      kz: '🎟 Қазақстан чемпионатына тікелей жол (Wildcard)',
      en: '🎟 Direct Path to Kazakhstan Championship (Wildcard)'
    },
    news12_wildcard_p1: {
      ru: 'Одной из главных задач турнира стало выявление сильнейших для участия в главных стартах страны. Спортсмены категорий Scaled (мужчины и женщины), а также команды категории Intermediate, успешно прошедшие испытания, получили Wildcard — официальное приглашение на Чемпионат Казахстана, который пройдет в июне 2026 года в городе Актобе.',
      kz: 'Турнирдің басты міндеттерінің бірі елдің негізгі жарыстарына қатысу үшін ең күштілерді анықтау болды. Scaled (ерлер және әйелдер) санаттарының спортшылары, сондай-ақ Intermediate санатының командалары сынақтан сәтті өтіп, 2026 жылдың маусымында Ақтөбе қалаларында өтетін Қазақстан чемпионатына ресми шақыру — Wildcard алды.',
      en: 'One of the main tasks of the tournament was to identify the strongest for participation in the main starts of the country. Athletes of the Scaled categories (men and women), as well as teams of the Intermediate category, who successfully passed the tests, received a Wildcard — an official invitation to the Kazakhstan Championship, which will be held in June 2026 in the city of Aktobe.'
    },
    news12_thanks_title: {
      ru: '🌟 Благодарность клубу «Алаш»: Профессионализм и единство',
      kz: '🌟 «Алаш» клубына алғыс: Кәсіпқойлық және бірлік',
      en: '🌟 Gratitude to Alash Club: Professionalism and Unity'
    },
    news12_thanks_p1: {
      ru: 'Особую признательность всё спортивное сообщество выражает клубу «Алаш». Под руководством Жалела Асылбека и его супруги Ксении, все члены команды проявили невероятное упорство, креативность и преданность делу.',
      kz: 'Барлық спорт қауымдастығы «Алаш» клубына ерекше алғыс білдіреді. Жалел Асылбек пен оның жұбайы Ксенияның басшылығымен команданың барлық мүшелері керемет табандылық, шығармашылық және ісіне берілгендік танытты.',
      en: 'The entire sports community expresses special gratitude to the Alash club. Under the leadership of Zhalel Asylbek and his wife Ksenia, all team members showed incredible perseverance, creativity and dedication.'
    },
    news12_thanks_p2: {
      ru: 'Это была по-настоящему слаженная и дружная работа всего коллектива. Трудолюбие каждого члена команды «Алаш» при подготовке к турниру заслуживает отдельной похвалы: их вклад стал фундаментом, на котором был построен этот масштабный спортивный праздник.',
      kz: 'Бұл шынымен де үйлесімді және достық ұжым жұмысы болды. Турнирге дайындық барысында «Алаш» командасының әр мүшесінің еңбекқорлығы жеке мақтауға тұрарлық: олардың үлесі осы ауқымды спорт мерекесі салынған іргетас болды.',
      en: 'This was a truly coordinated and friendly work of the entire team. The diligence of each member of the Alash team in preparing for the tournament deserves special praise: their contribution became the foundation on which this large-scale sports festival was built.'
    },
    news12_goals_title: {
      ru: '🎯 Цели и задачи турнира',
      kz: '🎯 Турнирдің мақсаттары мен міндеттері',
      en: '🎯 Goals and Objectives of the Tournament'
    },
    news12_goal1: {
      ru: 'Популяризация функционального многоборья в Республике Казахстан.',
      kz: 'Қазақстан Республикасында функционалдық көпсайысты танымал ету.',
      en: 'Popularization of functional fitness in the Republic of Kazakhstan.'
    },
    news12_goal2: {
      ru: 'Выявление наиболее сильных и подготовленных спортсменов в своих категориях.',
      kz: 'Өз санаттарында ең күш және дайындығы бар спортшыларды анықтау.',
      en: 'Identifying the strongest and most prepared athletes in their categories.'
    },
    news12_goal3: {
      ru: 'Пропаганда здорового образа жизни и вовлечение молодежи в регулярные занятия спортом.',
      kz: 'Салауатты өмір салтын насихаттау және жастарды спортпен тұрақты айналысуға тарту.',
      en: 'Promotion of a healthy lifestyle and involvement of young people in regular sports.'
    },

    // Страница news13 - Панамериканский чемпионат
    news13_title: {
      ru: 'Панамериканский чемпионат',
      kz: 'Панамерикандық чемпионат',
      en: 'Pan-American Championship'
    },
    news13_subtitle: {
      ru: 'Морелия готова приветствовать континент!',
      kz: 'Морелия құрлықты қарсы алуға дайын!',
      en: 'Morelia is ready to welcome the continent!'
    },
    news13_p1: {
      ru: 'В столице Мичоакана пройдет первый Панамериканский чемпионат по функциональному фитнесу IF3, который соберет спортсменов со всей Америки, чтобы побороться за титул континента.',
      kz: 'Мичоакан астанасында IF3 функционалдық фитнес бойынша алғашқы Панамерикандық чемпионат өтеді, ол Американың барлық бөлігінен спортшыларды құрлықтық титул үшін күресуге жинайды.',
      en: 'The first Pan-American Functional Fitness Championship IF3 will be held in the capital of Michoacan, bringing together athletes from all over America to compete for the continental title.'
    },
    news13_p2: {
      ru: 'В течение четырех дней Морелия станет сценой элитного конкурса, сообщества и выступления в одном из самых знаковых городов Мексики.',
      kz: 'Төрт күн бойы Морелия Мексиканың ең танымал қалаларының бірінде элиталық жарыстардың, қауымдастықтың және өнер көрсетудің сахнасы болады.',
      en: 'Over four days, Morelia will be the stage for elite competition, community and performance in one of Mexico\'s most iconic cities.'
    },
    news13_participants_title: {
      ru: 'Участники:',
      kz: 'Қатысушылар:',
      en: 'Participants:'
    },
    news13_participants_intro: {
      ru: 'Примут участие спортсмены из следующих стран:',
      kz: 'Келесі елдерден спортшылар қатысады:',
      en: 'Athletes from the following countries will participate:'
    },
    news13_location: {
      ru: 'Морелия, Мексика',
      kz: 'Морелия, Мексика',
      en: 'Morelia, Mexico'
    },
    news13_date: {
      ru: '13-16 августа 2026 года',
      kz: '2026 жылғы 13-16 тамыз',
      en: 'August 13-16, 2026'
    },
    news13_welcome: {
      ru: 'Добро пожаловать на Панамериканский чемпионат. Увидимся в Морелии!',
      kz: 'Панамерикандық чемпионатқа қош келдіңіз. Морелияда көрісеміз!',
      en: 'Welcome to the Pan-American Championship. See you in Morelia!'
    },
    news13_card_title: {
      ru: 'Панамериканский чемпионат по функциональному фитнесу IF3!',
      kz: 'IF3 функционалдық фитнес бойынша Панамерикандық чемпионат!',
      en: 'Pan-American Functional Fitness Championship IF3!'
    },
    news13_card_excerpt: {
      ru: 'В столице Мичоакана пройдет первый Панамериканский чемпионат по функциональному фитнесу IF3, который соберет спортсменов со всей Америки...',
      kz: 'Мичоакан астанасында IF3 функционалдық фитнес бойынша алғашқы Панамерикандық чемпионат өтеді, ол Американың барлық бөлігінен спортшыларды жинайды...',
      en: 'The first Pan-American Functional Fitness Championship IF3 will be held in the capital of Michoacan, bringing together athletes from all over America...'
    },
    news13_country_usa: {
      ru: 'США',
      kz: 'АҚШ',
      en: 'USA'
    },
    news13_country_canada: {
      ru: 'Канада',
      kz: 'Канада',
      en: 'Canada'
    },
    news13_country_puerto_rico: {
      ru: 'Пуэрто-Рико',
      kz: 'Пуэрто-Рико',
      en: 'Puerto Rico'
    },
    news13_country_costa_rica: {
      ru: 'Коста-Рика',
      kz: 'Коста-Рика',
      en: 'Costa Rica'
    },
    news13_country_brazil: {
      ru: 'Бразилия',
      kz: 'Бразилия',
      en: 'Brazil'
    },
    news13_country_aruba: {
      ru: 'Аруба',
      kz: 'Аруба',
      en: 'Aruba'
    },
    news13_country_mexico: {
      ru: 'Мексика',
      kz: 'Мексика',
      en: 'Mexico'
    },

    // Страница news14 - Чемпионат мира IF3 в Шотландии
    news14_title: {
      ru: 'Чемпионат мира IF3 в Шотландии',
      kz: 'IF3 әлем чемпионаты Шотландияда',
      en: 'IF3 World Championship in Scotland'
    },
    news14_subtitle: {
      ru: 'Британская Федерация функционального фитнеса с гордостью проводит Чемпионат мира',
      kz: 'Британ функционалдық фитнес федерациясы әлем чемпионатын құрметтеп өткізеді',
      en: 'British Functional Fitness Federation proudly hosts the World Championship'
    },
    news14_p1: {
      ru: 'Глазго примет спортсменов со всего мира, которые соберутся вместе, чтобы посоревноваться за звание чемпиона мира в функциональном фитнесе.',
      kz: 'Глазго бүкіл әлемнен келген спортшыларды қарсы алады, олар функционалдық фитнесте әлем чемпионы атына өнер сынасуға жиналады.',
      en: 'Glasgow will welcome athletes from around the world who will gather together to compete for the title of world champion in functional fitness.'
    },
    news14_p2: {
      ru: 'Впервые стартовавший в 2017 году чемпионат мира IF3 превратился в глобальную демонстрацию элитного функционального фитнеса, став за последние годы сильнее, чем когда-либо.',
      kz: '2017 жылы алғашқы рет стартталған IF3 әлем чемпионаты элиталық функционалдық фитнестің глобальды көрінісіне айналды, соңғы жылдары кез келген кезінен күштіге айналды.',
      en: 'Launched for the first time in 2017, the IF3 World Championship has become a global showcase of elite functional fitness, becoming stronger than ever in recent years.'
    },
    news14_p3: {
      ru: 'В декабре этого года он приезжает в Шотландию — на землю спортсменов, где каждый день начинается с вызова и заканчивается победой.',
      kz: 'Осы жылдың желтоқсанында ол Шотландияға келеді — спортшылардың жерінде, мұнда әр күн сынақтан басталып жеңіспен аяқталады.',
      en: 'This December it comes to Scotland — the land of champions, where every day begins with a challenge and ends with victory.'
    },
    news14_location: {
      ru: 'Региональный спортивный комплекс Рейвенскрейг',
      kz: 'Ravenscraigg Аймақтық спорт комплексі',
      en: 'Ravenscraigg Regional Sports Complex'
    },
    news14_date: {
      ru: '11-13 декабря 2026 года',
      kz: '2026 жылғы 11-13 желтоқсан',
      en: 'December 11-13, 2026'
    },
    news14_slogan_1: {
      ru: 'Соревнования мирового уровня.',
      kz: 'Әлем деңгейіндегі жарыстар.',
      en: 'World-class competitions.'
    },
    news14_slogan_2: {
      ru: 'Международные спортсмены.',
      kz: 'Халықаралық спортшылар.',
      en: 'International athletes.'
    },
    news14_slogan_3: {
      ru: 'Одна арена.',
      kz: 'Бір аренасы.',
      en: 'One arena.'
    },
    news14_cta: {
      ru: 'Стань частью этого.',
      kz: 'Осының бөлігі бол.',
      en: 'Be part of it.'
    },
    news15_title: {
      ru: 'SMART FIT Чемпионат Казахстана 2026 🏆',
      kz: 'SMART FIT Қазақстан чемпионаты 2026 🏆',
      en: 'SMART FIT Kazakhstan Championship 2026 🏆'
    },
    news15_subtitle: {
      ru: 'Отбор, финал и лидерборд — лето в Актобе',
      kz: 'Іріктеу, финал және лидерборд — жаз Ақтөбеде',
      en: 'Selection, final and leaderboard — summer in Aktobe'
    },
    news15_p1: {
      ru: 'Регистрация 9 марта — 15 апреля. Онлайн отбор 16-23 апреля. Финал 20-21 июня 2026 года в Актобе, Казахстан.',
      kz: 'Тіркелу 9 наурыздан 15 сәуірге дейін. Онлайн іріктеу 16-23 сәуір. Финал 20-21 маусым 2026 жылы Ақтөбеде, Қазақстанда.',
      en: 'Registration March 9 — April 15. Online selection April 16-23. Final June 20-21, 2026 in Aktobe, Kazakhstan.'
    },
    news15_p2: {
      ru: 'Категории Teams MM, Teams MW и Teams WW проходят в финал напрямую без онлайн отбора. Остальные категории соревнуются в отборочном онлайн этапе.',
      kz: 'Teams MM, Teams MW және Teams WW категориялары онлайн іріктеусіз тікелей финалға өтеді. Қалған категориялар онлайн іріктеу кезеңінде сайысқа түседі.',
      en: 'Categories Teams MM, Teams MW and Teams WW qualify directly for the final without online selection. Other categories compete in the online selection stage.'
    },
    news15_p3: {
      ru: 'Призёры финала получат отбор на Чемпионат Азии 2026. Генеральный спонсор: @rakhmet_group. Организаторы: @fffk.20_23 @smartfitcup @smart_fitness_aktobe. Video: @cfmed1a. Увидимся в лидерборде и летом в Актобе ☀️',
      kz: 'Финалдың жеңімпаздары 2026 жылғы Азия чемпионатына жолдама алады. Бас демеуші: @rakhmet_group. Ұйымдастырушылар: @fffk.20_23 @smartfitcup @smart_fitness_aktobe. Видео: @cfmed1a. Лидербордта және жазда Ақтөбеде кездесеміз ☀️',
      en: 'Final winners will be selected for the 2026 Asian Championship. General sponsor: @rakhmet_group. Organizers: @fffk.20_23 @smartfitcup @smart_fitness_aktobe. Video: @cfmed1a. See you on the leaderboard and in Aktobe this summer ☀️'
    },
    news15_location: {
      ru: 'Актобе, Казахстан',
      kz: 'Ақтөбе, Қазақстан',
      en: 'Aktobe, Kazakhstan'
    },
    news15_date: {
      ru: 'Финал 20-21 июня 2026',
      kz: 'Финал 20-21 маусым 2026',
      en: 'Final June 20-21, 2026'
    },
    news15_slogan_1: {
      ru: 'Регистрация 9 марта — 15 апреля',
      kz: 'Тіркелу 9 наурыз — 15 сәуір',
      en: 'Registration March 9 — April 15'
    },
    news15_slogan_2: {
      ru: 'Онлайн отбор 16-23 апреля',
      kz: 'Онлайн іріктеу 16-23 сәуір',
      en: 'Online selection April 16-23'
    },
    news15_slogan_3: {
      ru: 'Teams MM, Teams MW, Teams WW — финал без отбора',
      kz: 'Teams MM, Teams MW, Teams WW — финалға тікелей өтеді',
      en: 'Teams MM, Teams MW, Teams WW — straight to final'
    },
    news15_cta: {
      ru: 'Готовься к старту — увидимся в Актобе.',
      kz: 'Жарысқа дайын болыңыз — Ақтөбеде кездесеміз.',
      en: 'Get ready for the start — see you in Aktobe.'
    },
    news14_card_title: {
      ru: 'Чемпионат мира IF3 в Шотландии!',
      kz: 'IF3 әлем чемпионаты Шотландияда!',
      en: 'IF3 World Championship in Scotland!'
    },
    news14_card_excerpt: {
      ru: 'Британская Федерация функционального фитнеса с гордостью проводит Чемпионат мира IF3 в Глазго...',
      kz: 'Британ функционалдық фитнес федерациясы IF3 әлем чемпионатын Глазгода өткізеді...',
      en: 'British Functional Fitness Federation proudly hosts the IF3 World Championship in Glasgow...'
    },
    
    // News15 - Открытый Чемпионат Казахстана 2026
    news15_main_title: {
      ru: 'Открытый Чемпионат Казахстана 2026 "SMART FIT"',
      kz: '2026 Ашық Қазақстан чемпионаты "SMART FIT"',
      en: 'Kazakhstan Open Championship 2026 "SMART FIT"'
    },
    news15_location_name: {
      ru: 'г. Актобе',
      kz: 'Ақтөбе қ.',
      en: 'Aktobe'
    },
    news15_final_date: {
      ru: 'Финал: 20–21 июня 2026',
      kz: 'Финал: 2026 жылғы 20–21 маусым',
      en: 'Final: June 20–21, 2026'
    },
    news15_intro: {
      ru: 'Один из главных стартов года в функциональном многоборье, объединяющий сильнейших атлетов со всего Казахстана.',
      kz: 'Функционалдық көпсайыс саласындағы жылдың негізгі стартытарының бірі, бүкіл Қазақстан бойынша ең күшті спортшыларын біріктіретін.',
      en: 'One of the main starts of the year in functional fitness, uniting the strongest athletes from all over Kazakhstan.'
    },
    news15_registration: {
      ru: 'Регистрация',
      kz: 'Тіркеу',
      en: 'Registration'
    },
    news15_reg_period_label: {
      ru: 'Период:',
      kz: 'Кезең:',
      en: 'Period:'
    },
    news15_reg_period_dates: {
      ru: '18 марта — 15 апреля 2026',
      kz: '2026 жылғы 18 наурыз — 15 сәуір',
      en: 'March 18 — April 15, 2026'
    },
    news15_reg_tournament_label: {
      ru: 'Название турнира при регистрации:',
      kz: 'Тіркеу кезінде турнир атауы:',
      en: 'Tournament name for registration:'
    },
    news15_reg_tournament_name: {
      ru: 'SMART FIT Kazakhstan Open Championship 2026',
      kz: 'SMART FIT Kazakhstan Open Championship 2026',
      en: 'SMART FIT Kazakhstan Open Championship 2026'
    },
    news15_categories: {
      ru: 'Категории участников',
      kz: 'Қатысушылар санаттары',
      en: 'Participant Categories'
    },
    news15_individual_cats: {
      ru: 'Индивидуальные категории (с онлайн-отбором):',
      kz: 'Жеке санаттар (онлайн-іріктеумен):',
      en: 'Individual Categories (with online selection):'
    },
    news15_selection_label: {
      ru: 'Отбор:',
      kz: 'Іріктеу:',
      en: 'Selection:'
    },
    news15_selection_dates: {
      ru: '16–24 апреля 2026',
      kz: '2026 жылғы 16–24 сәуір',
      en: 'April 16–24, 2026'
    },
    news15_cat_scaled_men: {
      ru: 'SCALED MEN',
      kz: 'SCALED MEN',
      en: 'SCALED MEN'
    },
    news15_cat_scaled_women: {
      ru: 'SCALED WOMEN',
      kz: 'SCALED WOMEN',
      en: 'SCALED WOMEN'
    },
    news15_cat_inter_men: {
      ru: 'INTERMEDIATE MEN',
      kz: 'INTERMEDIATE MEN',
      en: 'INTERMEDIATE MEN'
    },
    news15_cat_inter_women: {
      ru: 'INTERMEDIATE WOMEN',
      kz: 'INTERMEDIATE WOMEN',
      en: 'INTERMEDIATE WOMEN'
    },
    news15_team_cats: {
      ru: 'Командные категории (без отбора):',
      kz: 'Команда санаттары (іріктеусіз):',
      en: 'Team Categories (no selection):'
    },
    news15_cat_team_mm: {
      ru: 'TEAMS M+M',
      kz: 'TEAMS M+M',
      en: 'TEAMS M+M'
    },
    news15_cat_team_mw: {
      ru: 'TEAMS M+W',
      kz: 'TEAMS M+W',
      en: 'TEAMS M+W'
    },
    news15_cat_team_ww: {
      ru: 'TEAMS W+W',
      kz: 'TEAMS W+W',
      en: 'TEAMS W+W'
    },
    news15_important: {
      ru: 'Важно',
      kz: 'Маңызды',
      en: 'Important'
    },
    news15_important_text: {
      ru: 'В рамках чемпионата пройдет отбор на Чемпионат Азии в командных категориях и юниорах (17-18 лет).',
      kz: 'Чемпионат аясында команда санаттарында және жасөспірімдерде (17-18 жас) Азия Чемпионатына іріктеу өтеді.',
      en: 'During the championship, there will be a selection for the Asian Championship in team categories and juniors (17-18 years old).'
    },
    
    news15_card_title: {
      ru: 'SMART FIT Чемпионат Казахстана 2026!',
      kz: 'SMART FIT Қазақстан чемпионаты 2026!',
      en: 'SMART FIT Kazakhstan Championship 2026!'
    },
    news15_card_excerpt: {
      ru: 'Отбор, финал и лидерборд — лето в Актобе...',
      kz: 'Іріктеу, финал және лидерборд — жаз Ақтөбеде...',
      en: 'Selection, final and leaderboard — summer in Aktobe...'
    }
  };

  // Функция применения переводов
  function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });
  }

  // Функция инициализации переключателя языков
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
        
        // Применяем переводы
        applyTranslations(lang);
        
        // Закрываем меню
        dropdown.classList.remove('active');
        
        console.log('Выбран язык:', lang);
      });
    });
    
    // Показываем сохраненный язык при загрузке и применяем переводы
    const saved = localStorage.getItem('site_lang') || 'ru';
    current.textContent = saved.toUpperCase();
    applyTranslations(saved);
  }

  // Инициализация при загрузке страницы
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    setupLangUI();
  } else {
    window.addEventListener('DOMContentLoaded', setupLangUI);
  }
})();
