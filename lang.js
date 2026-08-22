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
    nav_main: {
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
    preloader_text: {
      ru: 'Загрузка...',
      kz: 'Жүктелуде...',
      en: 'Loading...'
    },
    footer_dev: {
      ru: 'Разработка: Дмитрий Глухих',
      kz: 'Әзірлеген: Дмитрий Глухих',
      en: 'Developed by: Dmitry Glukhikh'
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
    doc_gym_map: {
      ru: 'Карта залов',
      kz: 'Залдар картасы',
      en: 'Gym Map'
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

    // Страница docs9 — Дополнительный регламент ASIAN 2026
    docs9_meta_title: {
      ru: 'Дополнительный регламент ASIAN 2026 — Казахстанская Федерация функционального многоборья',
      kz: 'ASIAN 2026 қосымша регламенті — Қазақстандық функционалдық көпсайыс федерациясы',
      en: 'Additional Competition Regulations ASIAN 2026 — Functional Fitness Federation Kazakhstan'
    },
    docs9_page_title: {
      ru: 'Дополнительный регламент',
      kz: 'Қосымша регламент',
      en: 'Additional Competition Regulations'
    },
    docs9_subtitle: {
      ru: 'ASIAN 2026 FUNCTIONAL FITNESS CHAMPIONSHIP — категории: индивидуалы, мастера, юниоры, пары',
      kz: 'ASIAN 2026 FUNCTIONAL FITNESS CHAMPIONSHIP — санаттар: жеке спортшылар, мастерлер, жасөспірімдер, жұптар',
      en: 'ASIAN 2026 FUNCTIONAL FITNESS CHAMPIONSHIP — all divisions: individuals, masters, juniors, pairs'
    },
    docs9_doc_ru_title: {
      ru: 'Регламент (на русском)',
      kz: 'Регламент (орыс тілінде)',
      en: 'Regulations (in Russian)'
    },
    docs9_doc_ru_desc: {
      ru: 'Дополнительный регламент соревнований на русском языке',
      kz: 'Жарыстардың қосымша регламенті орыс тілінде',
      en: 'Additional competition regulations in Russian'
    },
    docs9_doc_en_title: {
      ru: 'Регламент (на английском)',
      kz: 'Регламент (ағылшын тілінде)',
      en: 'Regulations (in English)'
    },
    docs9_doc_en_desc: {
      ru: 'Дополнительный регламент соревнований на английском языке',
      kz: 'Жарыстардың қосымша регламенті ағылшын тілінде',
      en: 'Additional competition regulations in English'
    },
    docs9_open_doc: {
      ru: 'Открыть документ',
      kz: 'Құжатты ашу',
      en: 'Open Document'
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

    // Страница news191 - Чемпионат Азии 2026
    news191_title: {
      ru: 'Чемпионат Азии по функциональному многоборью 2026: всё, что важно знать',
      kz: '2026 жылғы Азия функционалдық көпсайыс чемпионаты: білуге маңызды барлығы',
      en: 'Asian Functional Fitness Championship 2026: everything you need to know'
    },
    news191_subtitle: {
      ru: 'Ключевая информация о главном азиатском старте года',
      kz: 'Жылдың басты азиялық дебюті туралы негізгі ақпарат',
      en: 'Key information about the biggest Asian event of the year'
    },
    news191_intro: {
      ru: 'На этой странице собрана ключевая информация о Чемпионате Азии по функциональному многоборью 2026, который пройдет в Казахстане. Здесь вы найдете сведения о странах-участницах, рекордном призовом фонде, официальных медалях, партнёрах чемпионата и расписании первого соревновательного дня.',
      kz: 'Бұл бетте Қазақстанда өтетін 2026 жылғы Азия функционалдық көпсайыс чемпионаты туралы негізгі ақпарат жинақталған. Мұнда қатысушы елдер, рекордтық сыйақы қорлары, ресми медалдар, чемпионат серіктестері және бірінші жарыс күнінің кестесі туралы мәліметтерді таба аласыз.',
      en: 'This page brings together key information about the Asian Functional Fitness Championship 2026, which will take place in Kazakhstan. Here you will find details about the participating countries, record prize fund, official medals, championship partners and the schedule of the first competition day.'
    },
    news191_medals_heading: {
      ru: 'Официальные медали чемпионата',
      kz: 'Чемпионаттың ресми медалдары',
      en: 'Official Championship Medals'
    },
    news191_medals_p1: {
      ru: 'Представляем официальные медали <strong>Asian Championship 2026</strong> — символ главного спортивного достижения чемпионата.',
      kz: 'Біз ұсынатын <strong>Asian Championship 2026</strong> ресми медалдары — чемпионаттағы басты спорттық жетістік символы.',
      en: 'Here are the official medals of <strong>Asian Championship 2026</strong> — a symbol of the championship’s main sporting achievement.'
    },
    news191_medals_p2: {
      ru: 'Совсем скоро именно эти медали станут воплощением больших побед, ярких эмоций и незабываемых моментов для сильнейших спортсменов Азии.',
      kz: 'Жақын арада дәл осы медалдар Азияның ең күшті спортшыларында үлкен жеңістердің, жарқын эмоциялардың және естен шықпайтын сәттердің символына айналады.',
      en: 'Very soon these medals will become the embodiment of major victories, vivid emotions and unforgettable moments for the strongest athletes of Asia.'
    },
    news191_medals_p3: {
      ru: 'Автором уникального дизайна стала <strong>Надежда Лукановская</strong>. При создании медалей были гармонично объединены национальные мотивы Казахстана и фирменный стиль <strong>Asian Championship 2026</strong>, что подчеркивает значимость турнира и уважение к культуре страны-хозяйки.',
      kz: 'Бірегей дизайн авторы — <strong>Надежда Лукановская</strong>. Медалдарды жасау кезінде Қазақстанның ұлттық мотивтері мен <strong>Asian Championship 2026</strong> брендинг стилі үйлесімді түрде біріктірілді, бұл турнирдің маңыздылығын және қабылдаушы ел мәдениетіне құрметті көрсетеді.',
      en: 'The unique design was created by <strong>Nadezhda Lukanovskaya</strong>. In creating the medals, the national motifs of Kazakhstan and the brand style of <strong>Asian Championship 2026</strong> were harmoniously combined, emphasizing the significance of the tournament and respect for the culture of the host country.'
    },
    news191_video_fallback: {
      ru: 'Ваш браузер не поддерживает видео.',
      kz: 'Сіздің браузеріңіз видеоны қолдамайды.',
      en: 'Your browser does not support video.'
    },
    news191_countries_heading: {
      ru: 'Страны-участницы',
      kz: 'Қатысушы елдер',
      en: 'Participating Countries'
    },
    news191_countries_text: {
      ru: 'В Чемпионате Азии по функциональному многоборью 2026 примут участие спортсмены из восьми стран Азии и Евразии:',
      kz: '2026 жылғы Азия функционалдық көпсайыс чемпионатына Азия мен Еуразиядан сегіз елдің спортшылары қатысады:',
      en: 'Athletes from eight countries in Asia and Eurasia will take part in the 2026 Asian Functional Fitness Championship:'
    },
    news191_country_kz: { ru: 'Казахстан', kz: 'Қазақстан', en: 'Kazakhstan' },
    news191_country_kr: { ru: 'Южная Корея', kz: 'Оңтүстік Корея', en: 'South Korea' },
    news191_country_kg: { ru: 'Кыргызстан', kz: 'Қырғызстан', en: 'Kyrgyzstan' },
    news191_country_uz: { ru: 'Узбекистан', kz: 'Өзбекстан', en: 'Uzbekistan' },
    news191_country_kw: { ru: 'Кувейт', kz: 'Кувейт', en: 'Kuwait' },
    news191_country_ru: { ru: 'Россия', kz: 'Ресей', en: 'Russia' },
    news191_country_mn: { ru: 'Монголия', kz: 'Моңғолия', en: 'Mongolia' },
    news191_country_ir: { ru: 'Иран', kz: 'Иран', en: 'Iran' },
    news191_country_jo: { ru: 'Иордания', kz: 'Иордания', en: 'Jordan' },
    news191_countries_footer: {
      ru: 'Участники будут бороться за звание сильнейших спортсменов континента в соответствии с международными стандартами функционального многоборья.',
      kz: 'Спортшылар континенттің ең күшті спортшылары атағына халықаралық функционалдық көпсайыс стандарттарына сәйкес күреседі.',
      en: 'Participants will compete for the title of the strongest athletes on the continent in accordance with international functional fitness standards.'
    },
    news191_prize_heading: {
      ru: 'Рекордный призовой фонд',
      kz: 'Рекордтық сыйақы қоры',
      en: 'Record Prize Fund'
    },
    news191_prize_p1: {
      ru: 'Чемпионат Азии 2026 войдет в историю благодаря крупнейшему призовому фонду.',
      kz: '2026 жылғы Азия чемпионаты ең үлкен сыйақы қоры есебінен тарихқа енеді.',
      en: 'The 2026 Asian Championship will go down in history thanks to the largest prize fund.'
    },
    news191_prize_p2: {
      ru: 'Впервые чемпионат Азии по функциональному многоборью пройдет с максимальным призовым фондом за всю историю проведения азиатских первенств. Кроме того, турнир станет соревнованием с самым крупным призовым фондом в истории функционального многоборья Казахстана.',
      kz: 'Азия функционалдық көпсайыс чемпионаты алғаш рет азиялық чемпионаттардың бүкіл тарихындағы ең үлкен сыйақы қорымен өткізіледі. Сонымен қатар, турнир Қазақстандағы функционалдық көпсайыс тарихындағы ең үлкен сыйақы қоры бар жарыс болады.',
      en: 'For the first time, the Asian Functional Fitness Championship will be held with the largest prize fund in the entire history of Asian championships. In addition, the tournament will become the competition with the largest prize fund in the history of functional fitness in Kazakhstan.'
    },
    news191_prize_value: {
      ru: 'Общий призовой фонд составляет 14 000 000 тенге.',
      kz: 'Жалпы сыйақы қоры 14 000 000 теңгені құрайды.',
      en: 'The total prize fund is 14,000,000 tenge.'
    },
    news191_partners_heading: {
      ru: 'Официальные партнёры',
      kz: 'Ресми серіктестер',
      en: 'Official Partners'
    },
    news191_partners_text: {
      ru: 'Проведение Чемпионата Азии 2026 стало возможным благодаря поддержке партнеров, которые вносят значительный вклад в развитие функционального многоборья.',
      kz: '2026 жылғы Азия чемпионатының өткізілуіне функционалдық көпсайысты дамытуға елеулі үлес қосатын серіктестердің қолдауы мүмкіндік берді.',
      en: 'The holding of the 2026 Asian Championship became possible thanks to the support of partners who make a significant contribution to the development of functional fitness.'
    },
    news191_partner_kdl_badge: {
      ru: 'Генеральный спонсор',
      kz: 'Бас демеуші',
      en: 'General Sponsor'
    },
    news191_partner_kdl_text: {
      ru: 'Крупнейшая сеть клинико-диагностических лабораторий Казахстана. Компания предоставляет услуги лабораторной диагностики для пациентов, медицинских центров и корпоративных клиентов по всей стране.',
      kz: 'Қазақстанның ең ірі клиникалық-диагностикалық зертханалар желісі. Компания пациенттерге, медициналық орталықтарға және корпоративтік клиенттерге еліміз бойынша зертханалық диагностика қызметтерін ұсынады.',
      en: 'The largest network of clinical diagnostic laboratories in Kazakhstan. The company provides laboratory diagnostic services to patients, medical centers and corporate clients across the country.'
    },
    news191_partner_byd: {
      ru: '— официальный дистрибьютор бренда BYD в Казахстане. Компания занимается поставками, продажей и сервисным обслуживанием электромобилей и гибридных автомобилей BYD.',
      kz: '— BYD брендіне Қазақстандағы ресми дистрибьютор. Компания BYD электрлік және гибридті автомобильдарын жеткізіп, сатумен және қызмет көрсетуімен айналысады.',
      en: '— the official distributor of the BYD brand in Kazakhstan. The company handles the supply, sale and service of BYD electric and hybrid vehicles.'
    },
    news191_partner_astana_concert: {
      ru: '— государственная концертная организация акимата города Астаны. Организует городские концерты, фестивали, культурные и массовые мероприятия, а также обеспечивает их техническое и творческое сопровождение.',
      kz: '— Астана қаласының әкімдігіне қарасты мемлекеттік концерттік ұйым. Қала концерттерін, фестивальдерді, мәдени және көпшілік оқиғаларын ұйымдастырып, олардың техникалық және шығармашылық сүйемелдеуін қамтамасыз етеді.',
      en: '— the state concert organization of the Astana city akimat. It organizes city concerts, festivals, cultural and mass events, as well as providing their technical and creative support.'
    },
    news191_partner_wodfriends: {
      ru: '— казахстанская компания, специализирующаяся на экипировке, аксессуарах и товарах для функционального фитнеса, кроссфита и силовых видов спорта. Сотрудничает с соревнованиями и спортивными клубами Казахстана.',
      kz: '— функционалдық фитнес, кроссфит және күш спортына арналған құрал-жабдық, аксессуарлар және тауарлармен айналысатын қазақ компаниясы. Қазақстандағы жарыстар мен спорт клубтарымен ынтымақтасады.',
      en: '— a Kazakhstani company specializing in equipment, accessories and products for functional fitness, CrossFit and strength sports. It collaborates with competitions and sports clubs in Kazakhstan.'
    },
    news191_partner_region715: {
      ru: '— казахстанский производитель мебели полного цикла. Более 15 лет компания выпускает мебель для школ, спортивных, культурных и административных учреждений, работает по всему Казахстану и имеет собственные производственные мощности. Это не компания спортивного питания.',
      kz: '— Қазақстандағы толық циклды мебель шығарушы. Компания 15 жылдан астам уақыт бойы мектептерге, спорт, мәдени және әкімшілік орындарға арналған мебелін шығарады, бүкіл Қазақстанда жұмыс істейді және өз өндірістік қуаттары бар. Бұл спорттық тамақ компаниясы емес.',
      en: '— a Kazakhstani full-cycle furniture manufacturer. For more than 15 years, the company has been producing furniture for schools, sports, cultural and administrative institutions, operates throughout Kazakhstan and has its own production facilities. This is not a sports nutrition company.'
    },
    news191_partner_blackberi: {
      ru: '— республиканская сеть эспрессо-баров с собственной пекарней. Работает с 2016 года, имеет заведения в Петропавловске, Кокшетау, Астане и Караганде, продолжая развивать сеть по Казахстану.',
      kz: '— өзіндік пештеуі бар республикалық эспрессо-барлар желісі. 2016 жылдан бері жұмыс істейді, Петропавл, Көкшетау, Астана және Қарағанды қалаларында бөлімшелері бар және Қазақстан бойынша желісін дамытады.',
      en: '— a republican network of espresso bars with its own bakery. Operating since 2016, it has venues in Petropavlovsk, Kokshetau, Astana and Karaganda, continuing to expand its network across Kazakhstan.'
    },
    news191_partner_gradus: {
      ru: '— казахстанская компания, занимающаяся производством и дистрибуцией безалкогольных напитков и питьевой воды.',
      kz: '— безалкогольді сусындар мен су өндіру және дистрибуциялаумен айналысатын қазақ компаниясы.',
      en: '— a Kazakhstani company engaged in the production and distribution of soft drinks and drinking water.'
    },
    news191_partner_tyr: {
      ru: '— международный американский бренд, основанный в 1985 году. Производит профессиональную экипировку, одежду и аксессуары для плавания, триатлона, фитнеса и функциональных тренировок, продукция бренда представлена более чем в 50 странах мира.',
      kz: '— 1985 жылы негізі қаланған халықаралық американдық бренд. Батутқы, триатлон, фитнес және функционалдық жаттығулар үшін кәсіби жабдық, киім және аксессуарлар шығарады; бренд өнімдері 50-ден астам әлем елінде ұсынылған.',
      en: '— an international American brand founded in 1985. It manufactures professional equipment, clothing and accessories for swimming, triathlon, fitness and functional training, with products represented in more than 50 countries worldwide.'
    },
    news191_schedule_heading: {
      ru: 'Расписание на 14 августа',
      kz: '14 тамыздағы кесте',
      en: 'Schedule for August 14'
    },
    news191_schedule_text: {
      ru: 'Первый день Чемпионата Азии включает регистрацию участников сборной Казахстана и официальные мероприятия турнира.',
      kz: 'Азия чемпионатының бірінші күні Қазақстан құрамасының мүшелерін тіркеу және турнирдің ресми іс-шаралары кіреді.',
      en: 'The first day of the Asian Championship includes registration of Kazakhstan national team members and official tournament events.'
    },
    news191_schedule_1: {
      ru: 'Регистрация членов сборной Республики Казахстан.',
      kz: 'Қазақстан Республикасы құрамасының мүшелерін тіркеу.',
      en: 'Registration of members of the Republic of Kazakhstan national team.'
    },
    news191_schedule_label_place: {
      ru: 'Место проведения:',
      kz: 'Өтетін орны:',
      en: 'Venue:'
    },
    news191_schedule_place: {
      ru: 'ЛАСК Qazaqstan, конференц-зал.',
      kz: 'ЛАСК Qazaqstan, конференц-зал.',
      en: 'LASK Qazaqstan, conference hall.'
    },
    news191_schedule_2: {
      ru: 'Торжественная церемония открытия Чемпионата Азии.',
      kz: 'Азия чемпионатының ресми ашылу салтанаты.',
      en: 'Official opening ceremony of the Asian Championship.'
    },
    news191_schedule_3: {
      ru: 'Брифинг для участников соревнований.',
      kz: 'Жарысқа қатысушылар үшін брифинг.',
      en: 'Briefing for participants.'
    },
    news191_schedule_footer: {
      ru: 'Организаторы рекомендуют всем участникам заранее спланировать прибытие и принять участие во всех официальных мероприятиях чемпионата. Поздняя регистрация не предусмотрена.',
      kz: 'Ұйымдастырушылар барлық қатысушылардан алдын ала келуін жоспарлап, чемпионаттың барлық ресми іс-шараларына қатысуын ұсынымен. Кеш тіркеу көзделмеген.',
      en: 'Organizers recommend that all participants plan their arrival in advance and take part in all official championship events. Late registration is not provided.'
    },
    news191_farewell: {
      ru: 'Желаем всем спортсменам успешного старта, честной борьбы и ярких побед на Чемпионате Азии по функциональному многоборью 2026!',
      kz: 'Барлық спортшыларға 2026 жылғы Азия функционалдық көпсайыс чемпионатында сәтті старт, әділ күрес және жарқын жеңістер тілейміз!',
      en: 'We wish all athletes a successful start, fair competition and brilliant victories at the 2026 Asian Functional Fitness Championship!'
    },

    // Страница Чемпионат Азии 2026
    asia2026_title: {
      ru: 'Чемпионат Азии 2026',
      kz: '2026 Азия чемпионаты',
      en: 'Asia Championship 2026'
    },
    asia2026_subtitle: {
      ru: 'Описание индивидуальных и парных испытаний',
      kz: 'Жеке және жұптық сынақтардың сипаттамасы',
      en: 'Description of individual and pair tests'
    },
    asia2026_intro: {
      ru: 'Описание индивидуальных испытаний',
      kz: 'Жеке сынақтардың сипаттамасы',
      en: 'Description of individual tests'
    },
    asia2026_pairs_heading: {
      ru: 'Чемпионат Азии 2026. Тестовые задания для пар',
      kz: '2026 Азия чемпионы. Жұптар үшін тест тапсырмалары',
      en: 'Asia Championship 2026. Team tests for pairs'
    },
    asia2026_test1_individual: {
      ru: '<strong>Индивидуалы и Мастера</strong><br>8 раундов на время:<br>250 м SkiErg<br>200 м бег<br>Лимит времени: 20 минут',
      kz: '<strong>Жеке спортшылар мен мастерлар</strong><br>Уақыт бойынша 8 раунд:<br>250 м SkiErg<br>200 м жүгіру<br>Уақыт шегі: 20 минут',
      en: '<strong>Individuals and Masters</strong><br>8 rounds for time:<br>250 m SkiErg<br>200 m run<br>Time cap: 20 minutes'
    },
    asia2026_test1_juniors: {
      ru: '<strong>Юниоры (17–18 лет)</strong><br>8 раундов на время:<br>200 м SkiErg<br>200 м бег<br>Лимит времени: 20 минут',
      kz: '<strong>Жастар (17–18 жас)</strong><br>Уақыт бойынша 8 раунд:<br>200 м SkiErg<br>200 м жүгіру<br>Уақыт шегі: 20 минут',
      en: '<strong>Juniors (17–18 years)</strong><br>8 rounds for time:<br>200 m SkiErg<br>200 m run<br>Time cap: 20 minutes'
    },
    asia2026_test1_process: {
      ru: '<strong>Порядок выполнения</strong><br>По стартовому сигналу спортсмен выполняет 250 м на SkiErg (для юниоров — 200 м), затем пробегает 200 м по дорожке. Последовательность повторяется до завершения 8 раундов.<br>Время останавливается после пересечения финишной линии по окончании последнего 200-метрового забега.',
      kz: '<strong>Орындау тәртібі</strong><br>Старт сигналынан кейін спортшы SkiErg-та 250 м (жастар үшін — 200 м) орындап, содан кейін жолда 200 м жүгіреді. Осы тәртіп 8 раунд аяқталғанша қайталанады.<br>Соңғы 200 метрлік жүгіру аяқталғаннан кейін финиш сызығын кескенде уақыт тоқтайды.',
      en: '<strong>Execution order</strong><br>At the start signal, the athlete performs 250 m on the SkiErg (200 m for juniors), then runs 200 m on the track. The sequence is repeated until 8 rounds are complete.<br>The clock stops after crossing the finish line at the end of the last 200 m run.'
    },
    asia2026_test1_standards: {
      ru: '<strong>Стандарты движений</strong><br>Полные стандарты выполнения упражнений приведены в документе IFFF Movement Standards:<br>SkiErg ID 9.07<br>Run ID 9.01',
      kz: '<strong>Қозғалыс стандарттары</strong><br>Жаттығуларды орындаудың толық стандарттары IFFF Movement Standards құжатына енгізілген:<br>SkiErg ID 9.07<br>Run ID 9.01',
      en: '<strong>Movement standards</strong><br>Full movement standards are listed in the IFFF Movement Standards document:<br>SkiErg ID 9.07<br>Run ID 9.01'
    },
    asia2026_test1_rules: {
      ru: '<strong>Особые правила</strong><br>Спортсмен не имеет права покидать платформу SkiErg, пока не завершит необходимую дистанцию (250 м или 200 м для юниоров) в каждом раунде.',
      kz: '<strong>Арнайы ережелер</strong><br>Спортшы әр раундта қажетті қашықтықты (250 м немесе жастар үшін 200 м) аяқталғанша SkiErg платформада кетуге құқылы емес.',
      en: '<strong>Special rules</strong><br>The athlete may not leave the SkiErg platform until the required distance (250 m or 200 m for juniors) is completed in each round.'
    },
    asia2026_test2_details: {
      ru: '<strong>Все категории</strong><br>Лестница взятий на грудь (Clean Ladder)<br>1 взятие на грудь любым способом (Anyhow Clean).<br>30 секунд на выполнение попытки.<br>30 секунд на переход к следующей штанге.<br>Тай-брейк: максимальное количество становых тяг за оставшееся время.',
      kz: '<strong>Барлық санаттар</strong><br>Кеуде көтеру баспалдағы (Clean Ladder)<br>1 кез келген тәсілмен кеуде көтеру (Anyhow Clean).<br>Әрбір әрекетке 30 секунд.<br>Келесі штангаға өту үшін 30 секунд.<br>Тай-брейк: қалған уақытта жасалған ең көп deadlift.',
      en: '<strong>All categories</strong><br>Clean ladder<br>1 clean lift by any method (Anyhow Clean).<br>30 seconds per attempt.<br>30 seconds to move to the next bar.<br>Tie-break: maximum number of deadlifts in the remaining time.'
    },
    asia2026_test2_weights: {
      ru: '<strong>Вес штанги (кг)</strong><br>Мужчины (Индивидуалы и Мастера): 90 • 100 • 105 • 110 • 115 • 120 • 125 • 130 • 140 • 150<br>Женщины (Индивидуалы и Мастера): 40 • 50 • 60 • 70 • 75 • 80 • 85 • 90 • 95 • 100<br>Юниоры (мужчины): 60 • 65 • 70 • 75 • 80 • 85 • 90 • 95 • 100 • 105<br>Юниоры (женщины): 30 • 35 • 40 • 50 • 60 • 65 • 70 • 75 • 80 • 85',
      kz: '<strong>Штанга салмағы (кг)</strong><br>Ерлер (жеке спортшылар мен мастерлар): 90 • 100 • 105 • 110 • 115 • 120 • 125 • 130 • 140 • 150<br>Әйелдер (жеке спортшылар мен мастерлар): 40 • 50 • 60 • 70 • 75 • 80 • 85 • 90 • 95 • 100<br>Жастар (еркектер): 60 • 65 • 70 • 75 • 80 • 85 • 90 • 95 • 100 • 105<br>Жастар (әйелдер): 30 • 35 • 40 • 50 • 60 • 65 • 70 • 75 • 80 • 85',
      en: '<strong>Barbell weight (kg)</strong><br>Men (Individuals and Masters): 90 • 100 • 105 • 110 • 115 • 120 • 125 • 130 • 140 • 150<br>Women (Individuals and Masters): 40 • 50 • 60 • 70 • 75 • 80 • 85 • 90 • 95 • 100<br>Juniors (men): 60 • 65 • 70 • 75 • 80 • 85 • 90 • 95 • 100 • 105<br>Juniors (women): 30 • 35 • 40 • 50 • 60 • 65 • 70 • 75 • 80 • 85'
    },
    asia2026_test2_rules: {
      ru: '<strong>Порядок выполнения</strong><br>Испытание представляет собой лестницу взятий на грудь. Спортсмены последовательно переходят от одной штанги к другой, увеличивая вес, пока не перестанут справляться с очередным весом.<br>Старт проходит по принципу «водопада»: после перехода первого спортсмена к следующей штанге начинает следующий участник.<br>На каждую штангу даётся: 30 секунд на выполнение успешного подъёма; 30 секунд на переход к следующей.<br>Если спортсмен не смог выполнить взятие на грудь, он может использовать оставшееся время для выполнения становых тяг. Их количество будет использовано как тай-брейк при равенстве результата.<br><strong>Стандарты движений</strong><br>См. Clean, Anyhow ID 3.01 в документе IFFF Movement Standards.<br><strong>Особые правила</strong><br>За 30 секунд разрешено выполнять неограниченное количество попыток.<br>Если штанга упала за спину спортсмена, попытка не засчитывается («No Lift»), даже если подъём был выполнен.<br>Если во время подъёма колено коснулось пола — попытка не засчитывается.<br>Подъём должен быть полностью завершён до истечения 30 секунд.<br>После неудачного взятия спортсмен может выполнять становые тяги до конца своего временного окна. Их количество используется как тай-брейк.',
      kz: '<strong>Орындау тәртібі</strong><br>Сынақ кеуде көтеру баспалдағы болып табылады. Спортшылар бір штангадан екінші штангаға біртіндеп өтіп, келесі салмақты көтере алмайынша көтереді.<br>Старт «сарқырама» принципімен өтеді: бірінші спортшы келесі штангаға өткен соң келесі қатысушы бастайды.<br>Әр штангаға: 30 секунд табысты көтеруге; 30 секунд келесі штангаға өтуге беріледі.<br>Егер спортшы кеуде көтеруді орындамаған болса, қалған уақытта deadlift орындауға болады. Бұл нәтиже тең болған жағдайда тай-брейк ретінде есептеледі.<br><strong>Қозғалыс стандарттары</strong><br>Clean, Anyhow ID 3.01 IFFF Movement Standards құжатында қараңыз.<br><strong>Арнайы ережелер</strong><br>30 секунд ішінде шектеусіз көп әрекет жасауға рұқсат етіледі.<br>Егер штанга спортшының артқы жағына құлаған болса, әрекет есепке алынбайды («No Lift»), тіпті көтеру дұрыс орындалса да.<br>Көтеру кезінде тізе жерге тиген болса, әрекет есепке алынбайды.<br>Көтеру 30 секунд аяқталғанға дейін толық аяқталуы керек.<br>Сәтсіз көтеруден кейін спортшы өзінің уақыт терезесінің соңына дейін deadlift орындауға болады. Олардың саны тай-брейк ретінде пайдаланылады.',
      en: '<strong>Execution order</strong><br>The test is a clean ladder. Athletes move from one bar to the next, increasing the weight until they can no longer complete the next lift.<br>The start is a waterfall format: after the first athlete moves to the next bar, the next athlete begins.<br>Each bar has 30 seconds to complete a successful lift and 30 seconds to transition.<br>If the athlete cannot complete a clean lift, they may use the remaining time to perform deadlifts. The number will be used as a tie-break if needed.<br><strong>Movement standards</strong><br>See Clean, Anyhow ID 3.01 in the IFFF Movement Standards document.<br><strong>Special rules</strong><br>An unlimited number of attempts is allowed within 30 seconds.<br>If the bar falls behind the athlete, the attempt is not counted (“No Lift”), even if the lift was completed.<br>If the knee touches the floor during the lift, the attempt is not counted.<br>The lift must be fully completed before 30 seconds expire.<br>After a failed lift, the athlete may perform deadlifts until the end of their time window. The number is used as a tie-break.'
    },
    asia2026_test3_details: {
      ru: '<strong>Все категории</strong><br>Максимальное количество повторений за 15 минут<br>Схема:<br>10–20–30–40–50… — двойные прыжки на скакалке (Double Unders)<br>10–20–30–40–50 м… — выпады в ходьбе (Walking Lunges)<br>3–6–9–12–15… — отжимания в стойке на руках (Handstand Push-ups)<br><strong>Порядок выполнения</strong><br>По стартовому сигналу у спортсменов есть 15 минут, чтобы выполнить как можно больший объём работы.<br>Начало комплекса: 10 двойных прыжков на скакалке; 10 метров выпадов в ходьбе; 3 отжимания в стойке на руках.<br>Затем: 20 двойных прыжков; 20 метров выпадов; 6 отжиманий.<br>Далее каждую новую серию необходимо увеличивать на: +10 двойных прыжков; +10 метров выпадов; +3 отжимания в стойке на руках.<br>Работа продолжается до истечения лимита времени.<br>Результат — общее количество выполненных повторений.<br><strong>Стандарты движений</strong><br>Согласно документу IFFF Movement Standards:<br>Double Under ID 10.07<br>Walking Lunge ID 15.06<br>Handstand Push-up ID 12.01<br><strong>Особые правила</strong><br>Каждые 10 метров выпадов считаются за 1 повторение.<br>Во время двойных прыжков скакалка должна вращаться вперёд.',
      kz: '<strong>Барлық санаттар</strong><br>15 минут ішінде максимум қайталау саны<br>Схема:<br>10–20–30–40–50… — қосарланған секіріс (Double Unders)<br>10–20–30–40–50 м… — жүріп келетін лунгелер (Walking Lunges)<br>3–6–9–12–15… — қолдау күйіндегі отжимания (Handstand Push-ups)<br><strong>Орындау тәртібі</strong><br>Старт сигналынан кейін спортшылар 15 минут ішінде мүмкіндігінше көп жұмыс жасауы керек.<br>Комплекс басталуы: 10 қосарланған секіріс; 10 м жүріп келетін lunges; 3 қолдау күйіндегі отжимания.<br>Содан кейін: 20 қосарланған секіріс; 20 м lunges; 6 отжимания.<br>Әрі қарай әр жаңа серия +10 қосарланған секіріс; +10 м lunges; +3 қолдау күйіндегі отжимания арқылы өседі.<br>Жұмыс уақыт шегі аяқталғанша жалғасады.<br>Нәтиже — орындалған қайталаулардың жалпы саны.<br><strong>Қозғалыс стандарттары</strong><br>IFFF Movement Standards құжатына сәйкес:<br>Double Under ID 10.07<br>Walking Lunge ID 15.06<br>Handstand Push-up ID 12.01<br><strong>Арнайы ережелер</strong><br>Әр 10 м lunges 1 қайталау ретінде есептеледі.<br>Қосарланған секірісте скакалка алға айналуы керек.',
      en: '<strong>All categories</strong><br>Maximum number of reps in 15 minutes<br>Sequence:<br>10–20–30–40–50… double unders<br>10–20–30–40–50 m… walking lunges<br>3–6–9–12–15… handstand push-ups<br><strong>Execution order</strong><br>At the start signal, athletes have 15 minutes to complete as much work as possible.<br>The complex begins with 10 double unders, 10 m of walking lunges and 3 handstand push-ups.<br>Then: 20 double unders, 20 m of lunges and 6 push-ups.<br>Each new round increases by +10 double unders, +10 m of lunges and +3 handstand push-ups.<br>The work continues until the time cap expires.<br>Result: total number of completed reps.<br><strong>Movement standards</strong><br>According to the IFFF Movement Standards document:<br>Double Under ID 10.07<br>Walking Lunge ID 15.06<br>Handstand Push-up ID 12.01<br><strong>Special rules</strong><br>Every 10 m of lunges counts as 1 rep.<br>During double unders, the rope must rotate forward.'
    },
    asia2026_test4_details: {
      ru: '<strong>Индивидуалы и Мастера</strong><br>На время:<br>25 приседаний «пистолетиком» (чередуя ноги)<br>25 Toes-to-Bar<br>20 приседаний «пистолетиком»<br>20 подтягиваний грудью к перекладине (Chest-to-Bar)<br>15 приседаний «пистолетиком»<br>15 выходов силой на перекладине (Bar Muscle-Ups)<br>10 приседаний «пистолетиком»<br>10 метров ходьбы на руках<br>Лимит времени: 10 минут<br><strong>Юниоры</strong><br>На время:<br>25 приседаний «пистолетиком»<br>25 Toes-to-Bar<br>20 приседаний «пистолетиком»<br>20 обычных подтягиваний<br>15 приседаний «пистолетиком»<br>15 подтягиваний грудью к перекладине<br>10 приседаний «пистолетиком»<br>10 метров ходьбы на руках<br>Лимит времени: 10 минут<br><strong>Порядок выполнения</strong><br>После стартового сигнала спортсмен выполняет: 25 приседаний «пистолетиком» (поочерёдно меняя ноги); 25 Toes-to-Bar; 20 приседаний «пистолетиком»; 20 подтягиваний (Chest-to-Bar или обычных — в зависимости от категории); 15 приседаний «пистолетиком»; 15 выходов силой на перекладине (или 15 Chest-to-Bar у юниоров); 10 приседаний «пистолетиком»; 10 метров ходьбы на руках.<br>После завершения последнего упражнения спортсмен пересекает финишную линию, где фиксируется его время.<br><strong>Стандарты движений</strong><br>Согласно документу IFFF Movement Standards:<br>Pistol ID 1.06<br>Toes-to-Bar ID 7.01<br>Chest-to-Bar Pull-up ID 7.05<br>Pull-up ID 7.04<br>Bar Muscle-up ID 7.07<br>Handstand Walk ID 12.03<br><strong>Особые правила</strong><br>Если судья не засчитывает повторение в приседании «пистолетиком» (No Rep), спортсмен обязан повторить движение на той же ноге, прежде чем перейти к приседанию на другую ногу.',
      kz: '<strong>Жеке спортшылар мен мастерлар</strong><br>Уақыт бойынша:<br>25 «пистолет» типті отыру (аяқтарын кезекпен ауыстырып)<br>25 Toes-to-Bar<br>20 «пистолет» типті отыру<br>20 кеуде көтеру арқылы тартып алу (Chest-to-Bar)<br>15 «пистолет» типті отыру<br>15 силмен штангаға шығу (Bar Muscle-Ups)<br>10 «пистолет» типті отыру<br>10 м қолмен жүру<br>Уақыт шегі: 10 минут<br><strong>Жастар</strong><br>Уақыт бойынша:<br>25 «пистолет» типті отыру<br>25 Toes-to-Bar<br>20 «пистолет» типті отыру<br>20 қарапайым тартып алу<br>15 «пистолет» типті отыру<br>15 кеуде көтеру арқылы тартып алу<br>10 «пистолет» типті отыру<br>10 м қолмен жүру<br>Уақыт шегі: 10 минут<br><strong>Орындау тәртібі</strong><br>Старт сигналынан кейін спортшы: 25 «пистолет» типті отыру (аяқтарын кезекпен ауыстырып); 25 Toes-to-Bar; 20 «пистолет» типті отыру; 20 тартып алу (Chest-to-Bar немесе қарапайым — санатқа байланысты); 15 «пистолет» типті отыру; 15 силмен штангаға шығу (немесе жастар үшін 15 Chest-to-Bar); 10 «пистолет» типті отыру; 10 м қолмен жүру.<br>Соңғы жаттығу аяқталғаннан кейін спортшы финиш сызығын кесіп, уақыт тіркеледі.<br><strong>Қозғалыс стандарттары</strong><br>IFFF Movement Standards құжатына сәйкес:<br>Pistol ID 1.06<br>Toes-to-Bar ID 7.01<br>Chest-to-Bar Pull-up ID 7.05<br>Pull-up ID 7.04<br>Bar Muscle-up ID 7.07<br>Handstand Walk ID 12.03<br><strong>Арнайы ережелер</strong><br>Егер төреші «пистолет» отырудағы қайталауды есепке алмаса (No Rep), спортшы басқа аяққа өмі доған бұрын сол аяқпен қайталап орындауы керек.',
      en: '<strong>Individuals and Masters</strong><br>For time:<br>25 pistol squats (alternating legs)<br>25 toes-to-bar<br>20 pistol squats<br>20 chest-to-bar pull-ups<br>15 pistol squats<br>15 bar muscle-ups<br>10 pistol squats<br>10 m of handstand walking<br>Time cap: 10 minutes<br><strong>Juniors</strong><br>For time:<br>25 pistol squats<br>25 toes-to-bar<br>20 pistol squats<br>20 regular pull-ups<br>15 pistol squats<br>15 chest-to-bar pull-ups<br>10 pistol squats<br>10 m of handstand walking<br>Time cap: 10 minutes<br><strong>Execution order</strong><br>After the start signal, the athlete performs 25 pistol squats (alternating legs), 25 toes-to-bar, 20 pistol squats, 20 pull-ups (chest-to-bar or regular depending on category), 15 pistol squats, 15 bar muscle-ups (or 15 chest-to-bar for juniors), 10 pistol squats and 10 m of handstand walking.<br>After the last exercise, the athlete crosses the finish line and the time is recorded.<br><strong>Movement standards</strong><br>According to the IFFF Movement Standards document:<br>Pistol ID 1.06<br>Toes-to-Bar ID 7.01<br>Chest-to-Bar Pull-up ID 7.05<br>Pull-up ID 7.04<br>Bar Muscle-up ID 7.07<br>Handstand Walk ID 12.03<br><strong>Special rules</strong><br>If a judge does not count a pistol squat repetition (No Rep), the athlete must repeat the movement on the same leg before moving to the other leg.'
    },
    asia2026_test5_details: {
      ru: '<strong>Индивидуалы и Мастера</strong><br>5 раундов на время:<br>15 жимов двух гантелей над головой (Double Dumbbell Shoulder to Overhead) — 22,5 кг / 15 кг (мужчины / женщины)<br>10 перепрыгиваний через тумбу (Box Jump Over) — 60 см / 50 см<br>5 становых тяг — 120 кг / 80 кг<br>Лимит времени: 12 минут<br><strong>Юниоры</strong><br>5 раундов на время:<br>15 жимов двух гантелей над головой — 15 кг / 12,5 кг<br>10 перепрыгиваний через тумбу — 60 см / 50 см<br>5 становых тяг — 110 кг / 70 кг<br>Лимит времени: 12 минут<br><strong>Порядок выполнения</strong><br>По стартовому сигналу спортсмен выполняет: 15 жимов двух гантелей над головой; 10 перепрыгиваний через тумбу; 5 становых тяг. После этого возвращается к гантелям и начинает следующий раунд. Всего необходимо выполнить 5 раундов.<br><strong>Стандарты движений</strong><br>Согласно документу IFFF Movement Standards:<br>Shoulder to Overhead ID 5.05<br>Box Jump Over ID 10.05<br>Deadlift ID 2.01<br><strong>Особые правила</strong><br>При выполнении Box Jump Over разрешается: запрыгнуть на тумбу и спуститься с другой стороны; либо полностью перепрыгнуть через неё без касания.<br>Если спортсмен запрыгивает на тумбу: обе стопы должны одновременно оказаться на её верхней поверхности; спускаться необходимо шагом; отскок (rebound) запрещён.<br>Если спортсмен перепрыгивает тумбу без касания: обе стопы должны пройти выше верхнего края тумбы; нельзя обходить тумбу сбоку или пересекать её ниже уровня верхней поверхности.',
      kz: '<strong>Жеке спортшылар мен мастерлар</strong><br>Уақыт бойынша 5 раунд:<br>15 екі гантельмен бастан жоғары жейде (Double Dumbbell Shoulder to Overhead) — 22,5 кг / 15 кг (еркектер / әйелдер)<br>10 тақтайдан секіру (Box Jump Over) — 60 см / 50 см<br>5 deadlift — 120 кг / 80 кг<br>Уақыт шегі: 12 минут<br><strong>Жастар</strong><br>Уақыт бойынша 5 раунд:<br>15 екі гантельмен бастан жоғары жейде — 15 кг / 12,5 кг<br>10 тақтайдан секіру — 60 см / 50 см<br>5 deadlift — 110 кг / 70 кг<br>Уақыт шегі: 12 минут<br><strong>Орындау тәртібі</strong><br>Старт сигналынан кейін спортшы: 15 екі гантельмен бастан жоғары жейде; 10 тақтайдан секіру; 5 deadlift. Содан кейін гантельдерге қайта оралып, келесі раундты бастайды. Барлығы 5 раунд орындау қажет.<br><strong>Қозғалыс стандарттары</strong><br>IFFF Movement Standards құжатына сәйкес:<br>Shoulder to Overhead ID 5.05<br>Box Jump Over ID 10.05<br>Deadlift ID 2.01<br><strong>Арнайы ережелер</strong><br>Box Jump Over орындағанда рұқсат етіледі: тақтайға секіріп екінші жағынан түсіп өту; немесе тақтайды тиімей толық аттап өту.<br>Егер спортшы тақтайға секірсе: екі аяғы бір уақытта тақтайдың үстіне түседі; түсу тек қадаммен болуы керек; rebound тыйым.<br>Егер спортшы тақтайды тиімей аттап өтсе: екі аяғы тақтайдың жоғарғы шетінен жоғары өтуі керек; тақтайды бүйірден айналып өтуге немесе оның төмен деңгейінен кесіп өтуге болмайды.',
      en: '<strong>Individuals and Masters</strong><br>5 rounds for time:<br>15 double dumbbell shoulder-to-overhead presses — 22.5 kg / 15 kg (men / women)<br>10 box jump overs — 60 cm / 50 cm<br>5 deadlifts — 120 kg / 80 kg<br>Time cap: 12 minutes<br><strong>Juniors</strong><br>5 rounds for time:<br>15 double dumbbell shoulder-to-overhead presses — 15 kg / 12.5 kg<br>10 box jump overs — 60 cm / 50 cm<br>5 deadlifts — 110 kg / 70 kg<br>Time cap: 12 minutes<br><strong>Execution order</strong><br>At the start signal, the athlete performs 15 overhead presses, 10 box jump overs and 5 deadlifts. Then they return to the dumbbells and begin the next round. A total of 5 rounds are required.<br><strong>Movement standards</strong><br>According to the IFFF Movement Standards document:<br>Shoulder to Overhead ID 5.05<br>Box Jump Over ID 10.05<br>Deadlift ID 2.01<br><strong>Special rules</strong><br>For Box Jump Over, the athlete may jump onto the box and step down the other side, or jump fully over it without touching it.<br>If jumping onto the box, both feet must land on the top surface simultaneously; stepping down is required; rebound is not allowed.<br>If jumping over the box without touching it, both feet must pass above the top edge; the athlete may not go around the side or cross below the top surface.'
    },
    asia2026_test6_details: {
      ru: '<strong>Все категории</strong><br>На время:<br>20 берпи через штангу (Bar Facing Burpees)<br>20 калорий на Air Bike<br>Лимит времени: 4 минуты<br><strong>Порядок выполнения</strong><br>После стартового сигнала спортсмен выполняет: 20 берпи лицом к штанге с перепрыгиванием через неё. Затем переходит на Air Bike и набирает 20 калорий. После завершения работы на велосипеде пересекает финишную линию — время останавливается.<br><strong>Стандарты движений</strong><br>Согласно документу IFFF Movement Standards:<br>Air Bike ID 9.05<br>Object Facing Burpee Over Object ID 10.02<br><strong>Особые правила</strong><br>Спортсмен не имеет права покидать Air Bike, пока не наберёт все 20 калорий.',
      kz: '<strong>Барлық санаттар</strong><br>Уақыт бойынша:<br>20 штангадан аттап берпи (Bar Facing Burpees)<br>20 калория Air Bike-та<br>Уақыт шегі: 4 минут<br><strong>Орындау тәртібі</strong><br>Старт сигналынан кейін спортшы: 20 берпи штангаға қарама-қарсы тұрып аттап өтеді. Содан кейін Air Bike-қа өтеді және 20 калория жинайды. Велосипедтегі жұмыс аяқталғаннан кейін спортшы финиш сызығын кесіп, уақыт тоқтайды.<br><strong>Қозғалыс стандарттары</strong><br>IFFF Movement Standards құжатына сәйкес:<br>Air Bike ID 9.05<br>Object Facing Burpee Over Object ID 10.02<br><strong>Арнайы ережелер</strong><br>Спортшы барлық 20 калория жинағанша Air Bike-тан кетуге құқылы емес.',
      en: '<strong>All categories</strong><br>For time:<br>20 bar-facing burpees<br>20 calories on the Air Bike<br>Time cap: 4 minutes<br><strong>Execution order</strong><br>At the start signal, the athlete performs 20 burpees facing the bar and jumping over it. Then they move to the Air Bike and accumulate 20 calories. After finishing on the bike, they cross the finish line and the clock stops.<br><strong>Movement standards</strong><br>According to the IFFF Movement Standards document:<br>Air Bike ID 9.05<br>Object Facing Burpee Over Object ID 10.02<br><strong>Special rules</strong><br>The athlete may not leave the Air Bike until all 20 calories are completed.'
    },
    asia2026_pair1_details: {
      ru: '<strong>На время:</strong><br>10 раундов (партнёры выполняют раунды по очереди):<br>250 м SkiErg<br>200 м бег<br>Лимит времени: 22 минуты<br><strong>Выполнение</strong><br>По стартовому сигналу спортсмен 1 выполняет 250 м на SkiErg, затем пробегает 200 м по дорожке. После того как спортсмен 1 закончит бег, спортсмен 2 начинает свой раунд: 250 м SkiErg; 200 м бег. Партнёры продолжают чередоваться до выполнения 10 общих раундов.<br>Время останавливается, когда спортсмен 2 пересекает финишную линию после последнего 200-метрового отрезка десятого раунда.<br><strong>Стандарты движений</strong><br>Полные стандарты выполнения упражнений приведены в документе International Functional Fitness Federation Movement Standards:<br>SkiErg ID 9.07<br>Run ID 9.01<br><strong>Особые правила</strong><br>Запрещено сходить с платформы SkiErg до завершения всех 250 метров.<br>Правила передачи эстафеты будут разъяснены на месте проведения.<br>Каждый спортсмен обязан полностью завершить свой раунд перед сменой.<br>Раунды выполняются строго поочерёдно.',
      kz: '<strong>Уақыт бойынша:</strong><br>10 раунд (партнёралар раундтарды алмасып орындайды):<br>250 м SkiErg<br>200 м жүгіру<br>Уақыт шегі: 22 минут<br><strong>Орындау</strong><br>Старт сигналынан кейін 1-спортшы SkiErg-та 250 м орындап, содан кейін 200 м жолда жүгіріп шығуы керек. 1-спортшы жүгіруді аяқтаған соң 2-спортшы өзінің раундын бастайды: 250 м SkiErg; 200 м жүгіру. Партнёралар 10 жалпы раунд аяқталғанша кезекпен жалғаса береді.<br>10-раундтың соңғы 200 м бөлігін 2-спортшы финиш сызығын кескенде уақыт тоқтайды.<br><strong>Қозғалыс стандарттары</strong><br>Жаттығуларды орындаудың толық стандарттары International Functional Fitness Federation Movement Standards құжатына енгізілген:<br>SkiErg ID 9.07<br>Run ID 9.01<br><strong>Арнайы ережелер</strong><br>Барлық 250 метр аяқталғанша SkiErg платформасынан түсуге тыйым салынады.<br>Эстафетаны беру ережелері орынға келгенде түсіндіріледі.<br>Әрбір спортшы ауыстырғанға дейін өзінің раундын толық аяқтауы керек.<br>Раундар қатаң кезекпен орындалады.',
      en: '<strong>For time:</strong><br>10 rounds (partners alternate):<br>250 m SkiErg<br>200 m run<br>Time cap: 22 minutes<br><strong>Execution</strong><br>At the start signal, athlete 1 performs 250 m on the SkiErg and then runs 200 m. After athlete 1 finishes the run, athlete 2 starts their round: 250 m SkiErg and 200 m run. The partners continue alternating until 10 rounds are completed.<br>The clock stops when athlete 2 crosses the finish line after the final 200 m segment of the 10th round.<br><strong>Movement standards</strong><br>Full movement standards are listed in the International Functional Fitness Federation Movement Standards document:<br>SkiErg ID 9.07<br>Run ID 9.01<br><strong>Special rules</strong><br>Leaving the SkiErg platform before all 250 m are completed is not allowed.<br>Relay handoff rules will be explained on site.<br>Each athlete must fully complete their round before switching.<br>Rounds are performed strictly in alternation.'
    },
    asia2026_pair2_details: {
      ru: '<strong>На максимальный вес</strong><br>Спортсмен 1: за 5 минут найти максимум в становой тяге — 1 повторение (1RM).<br>Сразу после этого спортсмен 2: за 5 минут найти максимальный вес в комплексе: 1 Clean (любым способом) + 1 Front Squat.<br><strong>Результат</strong><br>Сумма: лучшая успешная становая тяга спортсмена 1; лучший успешный комплекс спортсмена 2.<br><strong>Выполнение</strong><br>После стартового сигнала спортсмен 1 получает 5 минут, чтобы установить максимальный вес в становой тяге на одно повторение. Количество попыток не ограничено. Вес можно как увеличивать, так и уменьшать.<br>По истечении пяти минут спортсмен 2 получает 5 минут на поиск максимального веса в комплексе: 1 взятие на грудь (любым способом); 1 фронтальный присед.<br><strong>Стандарты движений</strong><br>См. документ Movement Standards:<br>Deadlift ID 2.01<br>Clean, Anyhow ID 3.01<br>Front Squat ID 1.03<br><strong>Особые правила</strong><br>В течение своих пяти минут спортсмен может выполнять неограниченное количество попыток.<br>Перед каждой попыткой гриф должен быть зафиксирован замками.<br>Все лишние диски должны быть убраны за пределы помоста.<br>Для становой тяги штанга начинается пустой.<br>Для комплекса штанга может быть заранее загружена.<br>Спортсмены не имеют права помогать друг другу менять вес, кроме одного исключения: если спортсмен 1 закончил становую тягу раньше времени, он может помочь спортсмену 2 подготовить штангу только до первой попытки; после первой попытки помощь запрещена.<br>Если спортсмен бросает штангу за спину, попытка не засчитывается, даже если подъём был выполнен правильно.<br>Если колено касается пола — попытка не засчитывается.<br>Подъём должен быть полностью завершён до окончания пятиминутного лимита.<br>Если фронтальный присед не засчитан, но спортсмен удержал штангу, он может продолжать выполнять фронтальные приседы, пока не выполнит правильное повторение. Тогда весь комплекс будет засчитан.<br>Если спортсмен выполняет Squat Clean, этот присед не считается фронтальным приседом комплекса. После него необходимо выполнить ещё один полноценный Front Squat.<br>В смешанных парах (мужчина/женщина) используются две штанги: мужская — 20 кг; женская — 15 кг. Мужчина обязан использовать 20-килограммовую штангу.',
      kz: '<strong>Максимумға</strong><br>1-спортшы 5 минут ішінде 1RM deadlift максимумын табуы керек.<br>Содан кейін 2-спортшы 5 минут ішінде комплекс үшін максимумды табуы керек: 1 Clean (кез келген тәсілмен) + 1 Front Squat.<br><strong>Нәтиже</strong><br>Сома: 1-спортшының ең жақсы deadlift нәтижесі; 2-спортшының ең жақсы комплексі.<br><strong>Орындау</strong><br>Старт сигналынан кейін 1-спортшы 5 минут ішінде бір қайталау үшін deadlift максимумын белгілейді. Әрекет саны шектеусіз. Салмақ арттыруға да, азайтуға да болады.<br>5 минут өткен соң 2-спортшы 5 минут ішінде комплекс үшін максимумды іздейді: 1 кеуде көтеру (кез келген тәсілмен); 1 фронталь отыру.<br><strong>Қозғалыс стандарттары</strong><br>Movement Standards құжатына қараңыз:<br>Deadlift ID 2.01<br>Clean, Anyhow ID 3.01<br>Front Squat ID 1.03<br><strong>Арнайы ережелер</strong><br>Оның 5 минутында спортшы шектеусіз әрекет жасай алады.<br>Әр әрекеттен бұрын штанга замоктармен бекітілуі керек.<br>Барлық артық дискілер помосттан тыс болуы керек.<br>Deadlift үшін штанга бастапқыда бос болады.<br>Комплекс үшін штанга алдын ала жүктелуі мүмкін.<br>Спортшылардың бір-біріне салмақтарды ауыстыруға көмектесуіне рұқсат етілмейді, бір ғана ерекшелікпен: егер 1-спортшы deadlift-ті уақытынан бұрын аяқтаса, ол 2-спортшыға тек бірінші әрекетке дейін штанга дайындауға көмектесе алады; бірінші әрекеттен кейін көмектесу тыйым.<br>Егер спортшы штанганы артқа лақтырып тастаса, әрекет есепке алынбайды, тіпті көтеру дұрыс болса да.<br>Егер тізе жерге тиген болса — әрекет есепке алынбайды.<br>Көтеру 5 минуттық уақыт аяқталғанға дейін толық аяқталуы керек.<br>Егер фронталь отыру есепке алынбаса, бірақ спортшы штанганы ұстап тұрса, ол дұрыс қайталауды орындағанша фронталь отыруларды жалғастыра алады. Сонда бүкіл комплекс есепке алынады.<br>Егер спортшы Squat Clean орындаса, бұл отыру комплекстегі фронталь отыру ретінде есептелмейді. Одан кейін тағы бір толық Front Squat жасау қажет.<br>Аралас жұптарда (еркек/әйел) екі штанга қолданылады: еркек — 20 кг; әйел — 15 кг. Еркек 20-килограмдық штанганы пайдалану керек.',
      en: '<strong>For maximum weight</strong><br>Athlete 1 has 5 minutes to find a 1RM deadlift.<br>Immediately after that, athlete 2 has 5 minutes to find the maximum weight in the complex: 1 clean (any method) + 1 front squat.<br><strong>Result</strong><br>The sum of athlete 1’s best successful deadlift and athlete 2’s best successful complex.<br><strong>Execution</strong><br>After the start signal, athlete 1 has 5 minutes to establish the maximum single-rep deadlift. Attempts are unlimited. Weight may be increased or decreased.<br>After five minutes, athlete 2 has 5 minutes to find the maximum weight in the complex: 1 clean (any method) and 1 front squat.<br><strong>Movement standards</strong><br>See Movement Standards document:<br>Deadlift ID 2.01<br>Clean, Anyhow ID 3.01<br>Front Squat ID 1.03<br><strong>Special rules</strong><br>During their five minutes, athletes may perform unlimited attempts.<br>Before each attempt, the bar must be locked with collars.<br>All extra plates must be removed from the platform.<br>For the deadlift, the bar starts empty.<br>For the complex, the bar may be pre-loaded.<br>Athletes may not help each other change weight, except that if athlete 1 finishes the deadlift early, they may help athlete 2 set up the bar only before the first attempt; after the first attempt, this is prohibited.<br>If the athlete drops the bar behind them, the attempt does not count even if the lift was correct.<br>If the knee touches the floor, the attempt does not count.<br>The lift must be completed before the five-minute limit expires.<br>If the front squat is not counted but the athlete held the bar, they may continue doing front squats until they complete a valid rep. The full complex is then counted.<br>If the athlete performs a squat clean, that squat does not count as the front squat in the complex. They must then perform another full front squat.<br>In mixed pairs (male/female), two bars are used: male bar — 20 kg; female bar — 15 kg. The male athlete must use the 20 kg bar.'
    },
    asia2026_pair3_details: {
      ru: '<strong>Для всех дивизионов</strong><br>AMRAP 15 минут (максимальное количество повторений)<br>Схема повторений:<br>3–6–9–12–15–18–21…<br>Отжимания в стойке на руках (Handstand Push-ups)<br>Подтягивания (Pull-ups)<br>Перепрыгивания через тумбу (Box Jump Overs)<br><strong>Выполнение</strong><br>После стартового сигнала у пары есть 15 минут, чтобы выполнить как можно больше повторений.<br>Одновременно работает только один спортсмен. Партнёры могут меняться в любой момент и распределять работу по своему усмотрению.<br>Последовательность: 3 HSPU → 3 Pull-ups → 3 Box Jump Overs; затем 6–6–6; затем 9–9–9 и так далее, увеличивая каждое упражнение на 3 повторения в каждом раунде.<br>Итоговый результат — общее количество выполненных повторений.<br><strong>Особые правила</strong><br>На Box Jump Over можно: запрыгивать на тумбу и сходить с неё; либо перепрыгивать тумбу полностью.<br>При запрыгивании обе ноги должны коснуться верхней поверхности тумбы.<br>Прыжки с отскоком (rebound) запрещены.<br>При полном перепрыгивании ноги должны проходить выше верхнего края тумбы.<br>Правила передачи эстафеты объяснят на площадке.<br>Одновременно работает только один спортсмен.<br>Нет минимального объёма работы для каждого участника.<br>Не обязательно, чтобы оба спортсмена выполняли все упражнения.',
      kz: '<strong>Барлық дивизиондар үшін</strong><br>AMRAP 15 минут (максимум қайталау саны)<br>Қайталау схемасы:<br>3–6–9–12–15–18–21…<br>Қолдау күйіндегі отжимания (Handstand Push-ups)<br>Тартып алу (Pull-ups)<br>Тақтайдан секіру (Box Jump Overs)<br><strong>Орындау</strong><br>Старт сигналынан кейін жұп 15 минут ішінде мүмкіндігінше көп қайталау орындауы керек.<br>Бір уақытта тек бір спортшы жұмыс істейді. Партнёралар кез келген уақытта ауысып, жұмысты өздері бөліп алады.<br>Тәртіп: 3 HSPU → 3 Pull-ups → 3 Box Jump Overs; сонан кейін 6–6–6; сосын 9–9–9 және осылай әр раундта әр жаттығуға 3 қайталау қосылып отырады.<br>Қорытынды нәтиже — орындалған қайталаулардың жалпы саны.<br><strong>Арнайы ережелер</strong><br>Box Jump Over орындағанда: тақтайға секіріп екінші жағынан түсіп өтуге; немесе тақтайды толық аттап өтуге болады.<br>Секірген кезде екі аяқ та тақтайдың үстіне тиіп болуы керек.<br>Rebound тыйым.<br>Толық аттап өткенде аяқтар тақтайдың жоғарғы шетінен жоғары өтеді.<br>Эстафетаны беру ережелері алаңда түсіндіріледі.<br>Бір уақытта тек бір спортшы жұмыс істейді.<br>Әр қатысушының minimum жұмысы жоқ.<br>Екі спортшының да барлық жаттығуларды орындауы міндетті емес.',
      en: '<strong>For all divisions</strong><br>AMRAP 15 minutes (maximum number of reps)<br>Rep scheme:<br>3–6–9–12–15–18–21…<br>Handstand push-ups<br>Pull-ups<br>Box jump overs<br><strong>Execution</strong><br>After the start signal, the pair has 15 minutes to perform as many reps as possible.<br>Only one athlete works at a time. Partners may switch at any time and divide the workload as they wish.<br>Sequence: 3 HSPU → 3 pull-ups → 3 box jump overs; then 6–6–6; then 9–9–9 and so on, increasing each exercise by 3 reps each round.<br>The final result is the total number of reps completed.<br><strong>Special rules</strong><br>For Box Jump Over, the athlete may jump onto the box and step down on the other side, or jump fully over it.<br>When jumping onto the box, both feet must touch the top surface.<br>Rebound jumps are not allowed.<br>When jumping fully over, the feet must pass above the top edge.<br>Handoff rules will be explained on site.<br>Only one athlete works at a time.<br>There is no minimum workload for each athlete.<br>It is not necessary for both athletes to perform all exercises.'
    },
    asia2026_pair4_details: {
      ru: '<strong>На время</strong><br>40–30–20–10<br>Гребля на калории (Row) — работает один спортсмен.<br>Синхронные рывки гантели одной рукой (Single Arm Synchronized Dumbbell Snatch)<br>мужчины — 22,5 кг;<br>женщины — 15 кг.<br>Лимит времени: 15 минут.<br><strong>Выполнение</strong><br>Пара начинает с 40 калорий на гребном тренажёре. Работает только один спортсмен, смены возможны в любой момент. После набора 40 калорий оба спортсмена выполняют 40 синхронных рывков гантели. Далее: 30 калорий + 30 рывков; 20 калорий + 20 рывков; 10 калорий + 10 рывков. После завершения последнего раунда спортсмены пересекают финишную линию.<br><strong>Особые правила</strong><br>Менять руку при рывках необязательно.<br>Партнёры могут использовать разные руки.<br>Не обязательно, чтобы оба спортсмена работали на гребле.<br>Смена на гребле разрешена в любой момент.<br>Требования к синхронности выполняются согласно официальным стандартам движения.',
      kz: '<strong>Уақыт бойынша</strong><br>40–30–20–10<br>Калория үшін есу (Row) — тек бір спортшы жұмыс істейді.<br>Бір қолмен синхронды гантельді құлау (Single Arm Synchronized Dumbbell Snatch)<br>еркектер — 22,5 кг;<br>әйелдер — 15 кг.<br>Уақыт шегі: 15 минут.<br><strong>Орындау</strong><br>Жұп 40 калориямен гребной тренажерден бастайды. Бір уақытта тек бір спортшы жұмыс істейді, ауысулар кез келген уақытта болуы мүмкін. 40 калория жинағаннан кейін екі спортшы да 40 синхронды гантельді рывк жасайды. Әрі қарай: 30 калория + 30 рывк; 20 калория + 20 рывк; 10 калория + 10 рывк. Соңғы раунд аяқталғаннан кейін спортшылар финиш сызығын кеседі.<br><strong>Арнайы ережелер</strong><br>Рывк кезінде қолды ауыстыру міндетті емес.<br>Партнёралар әртүрлі қолдарды қолдана алады.<br>Екі спортшының да гребле жұмыс істеуі міндетті емес.<br>Гребледе ауысу кез келген уақытта рұқсат етіледі.<br>Синхронды талаптар ресми қозғалыс стандарттарына сәйкес орындалады.',
      en: '<strong>For time</strong><br>40–30–20–10<br>Calories on the rower — one athlete works at a time.<br>Single-arm synchronized dumbbell snatches<br>men — 22.5 kg;<br>women — 15 kg.<br>Time cap: 15 minutes.<br><strong>Execution</strong><br>The pair starts with 40 calories on the rower. Only one athlete works at a time, with changes allowed at any moment. After reaching 40 calories, both athletes perform 40 synchronized dumbbell snatches. Then: 30 calories + 30 snatches; 20 calories + 20 snatches; 10 calories + 10 snatches. After the last round, the athletes cross the finish line.<br><strong>Special rules</strong><br>Changing hands during snatches is not required.<br>Partners may use different arms.<br>It is not necessary for both athletes to row.<br>Switching on the rower is allowed at any time.<br>Synchronization requirements follow the official movement standards.'
    },
    asia2026_pair5_details: {
      ru: '<strong>100 Wall Balls попеременно между партнёрами</strong><br>мужчины — 9 кг в мишень 3 м;<br>женщины — 6 кг в мишень 2,75 м.<br>Сразу после этого:<br>12–10–8<br>Worm Thruster<br>Синхронные бурпи через Worm<br>После каждого раунда:<br>10 метров выпадов с Worm (Walking Lunges).<br>Лимит времени: 15 минут.<br><strong>Выполнение</strong><br>Пара начинает со 100 Wall Balls, чередуя каждое повторение. После 100-го броска: 12 Worm Thrusters; 12 синхронных бурпи через Worm; 10 метров выпадов с Worm. Затем: 10 + 10; 10 метров выпадов; После этого: 8 + 8; последние 10 метров выпадов; Затем пересекают финишную линию.<br><strong>Особые правила</strong><br>Wall Balls выполняются строго поочерёдно.<br>В смешанной паре мужчина бросает мяч в мишень 3 м, женщина — в мишень 2,75 м.<br>Во время выпадов спортсмены могут держать Worm любым удобным способом.',
      kz: '<strong>Партнёралар арасында кезекпен 100 Wall Balls</strong><br>еркектер — 3 м мішеньге 9 кг;<br>әйелдер — 2,75 м мішеньге 6 кг.<br>Содан кейін дереу:<br>12–10–8<br>Worm Thruster<br>Worm арқылы синхронды бурпи<br>Әр раундтан кейін:<br>Worm-мен 10 м lunges (Walking Lunges).<br>Уақыт шегі: 15 минут.<br><strong>Орындау</strong><br>Жұп 100 Wall Balls-тан бастайды, әр қайталауды кезекпен орындап. 100-ші лақтырудан кейін: 12 Worm Thrusters; 12 Worm арқылы синхронды бурпи; 10 м Worm-мен lunges. Содан кейін: 10 + 10; 10 м lunges; сосын: 8 + 8; соңғы 10 м lunges; содан кейін финиш сызығын кеседі.<br><strong>Арнайы ережелер</strong><br>Wall Balls қатаң кезекпен орындалады.<br>Аралас жұпта еркек 3 м мішеньге, әйел 2,75 м мішеньге допты лақтыра береді.<br>Лунгелер кезінде спортшылар Worm-ді өздері ыңғайлы түрде ұстай алады.',
      en: '<strong>100 Wall Balls alternately between partners</strong><br>men — 9 kg to a 3 m target;<br>women — 6 kg to a 2.75 m target.<br>Immediately after that:<br>12–10–8<br>Worm Thrusters<br>Synchronised burpees over the Worm<br>After each round:<br>10 m walking lunges with the Worm.<br>Time cap: 15 minutes.<br><strong>Execution</strong><br>The pair begins with 100 Wall Balls, alternating each rep. After the 100th throw: 12 Worm Thrusters; 12 synchronized burpees over the Worm; 10 m of lunges with the Worm. Then: 10 + 10; 10 m lunges; then: 8 + 8; final 10 m lunges; then they cross the finish line.<br><strong>Special rules</strong><br>Wall Balls are performed strictly alternately.<br>In a mixed pair, the male throws to the 3 m target and the female to the 2.75 m target.<br>During lunges, athletes may hold the Worm however is most convenient.'
    },
    asia2026_pair6_details: {
      ru: '<strong>На максимальное количество повторений</strong><br>По 90 секунд AMRAP:<br>Power Cleans (65/45 кг)<br>Bar Muscle-Ups<br>Toes to Rings<br>Handstand Walk<br>Каждый спортсмен обязан выполнить две станции.<br><strong>Выполнение</strong><br>Тест состоит из четырёх отрезков по 90 секунд. В каждый момент времени работает только один спортсмен, который выполняет всю 90-секундную станцию полностью. Каждый участник обязан выполнить две станции. Их можно выполнять подряд либо с перерывом.<br>Результат команды — сумма всех повторений, выполненных на четырёх станциях.<br><strong>Особые правила</strong><br>Минимальная непрерывная дистанция ходьбы на руках — 2,5 м.<br>Каждый полностью преодолённый метр в Handstand Walk считается за одно повторение.',
      kz: '<strong>Максимум қайталау санына</strong><br>Әр 90 секунд AMRAP:<br>Power Cleans (65/45 кг)<br>Bar Muscle-Ups<br>Toes to Rings<br>Handstand Walk<br>Әр спортшы екі станцияны орындауы керек.<br><strong>Орындау</strong><br>Тест төрт 90 секундтық бөліктен тұрады. Әр уақытта тек бір спортшы жұмыс істейді және толығымен 90 секундтық станцияны орындайды. Әр қатысушы екі станцияны орындауы керек. Оларды қатар да, үзіліспен де орындауға болады.<br>Команданың нәтижесі — төрт станцияда орындалған барлық қайталаулардың қосындысы.<br><strong>Арнайы ережелер</strong><br>Қолмен жүрудің минималды үздіксіз қашықтығы — 2,5 м.<br>Handstand Walk-та толық өткен әр метр бір қайталау ретінде есептеледі.',
      en: '<strong>For maximum reps</strong><br>90 seconds AMRAP each:<br>Power Cleans (65/45 kg)<br>Bar Muscle-Ups<br>Toes to Rings<br>Handstand Walk<br>Each athlete must complete two stations.<br><strong>Execution</strong><br>The test consists of four 90-second rounds. Only one athlete works at a time and completes the full 90-second station. Each participant must complete two stations. They can be done back-to-back or with a break.<br>The team result is the sum of all reps completed across the four stations.<br><strong>Special rules</strong><br>The minimum continuous distance for handstand walking is 2.5 m.<br>Each full meter completed in Handstand Walk counts as one rep.'
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
    media_asia_gallery_title: {
      ru: 'Фото с Чемпионата Азии',
      kz: 'Азия чемпионатының фотосуреттері',
      en: 'Photos from the Asian Championship'
    },
    media_more_photos: {
      ru: 'Больше фотографий тут...',
      kz: 'Көбірек фотосуреттер мұнда...',
      en: 'More photos here...'
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

    // Страница news18 - SmartFit Cup 2026
    news18_card_title: {
      ru: 'Победители и призеры Открытого Чемпионата Казахстана SmartFit 2026 🏆',
      kz: 'SmartFit 2026 Открытый чемпионатының жеңімпаздары мен жүлдегерлері 🏆',
      en: 'Winners and Prize Winners of the Open Kazakhstan Championship SmartFit 2026 🏆'
    },
    news18_card_excerpt: {
      ru: 'Официальные результаты чемпионата с победителями по всем категориям...',
      kz: 'Чемпионаттың ресми нәтижелері барлық санаттарда жеңімпаздарымен...',
      en: 'Official championship results with winners in all categories...'
    },
    news18_subtitle: {
      ru: 'Итоги соревнований функционального фитнеса',
      kz: 'Функционалдық фитнес жарысының қорытындысы',
      en: 'Results of the functional fitness competition'
    },
    news18_cat_scaled_women: {
      ru: 'Scaled Women (Женщины)',
      kz: 'Scaled Women (Әйелдер)',
      en: 'Scaled Women'
    },
    news18_cat_scaled_men: {
      ru: 'Scaled Men (Мужчины)',
      kz: 'Scaled Men (Ерлер)',
      en: 'Scaled Men'
    },
    news18_cat_intermediate_women: {
      ru: 'Intermediate Women (Женщины)',
      kz: 'Intermediate Women (Әйелдер)',
      en: 'Intermediate Women'
    },
    news18_cat_intermediate_men: {
      ru: 'Intermediate Men (Мужчины)',
      kz: 'Intermediate Men (Ерлер)',
      en: 'Intermediate Men'
    },
    news18_cat_team_mw: {
      ru: 'Команды М+Ж',
      kz: 'Командалар Е+Ә',
      en: 'Teams M+W'
    },
    news18_cat_team_mm: {
      ru: 'Команды М+М',
      kz: 'Командалар Е+Е',
      en: 'Teams M+M'
    },
    news18_gallery_title: {
      ru: 'Фотографии с чемпионата',
      kz: 'Чемпионаттан фотосуреттер',
      en: 'Photos from the championship'
    },
    news18_place_1: {
      ru: '1 место',
      kz: '1 орын',
      en: '1st place'
    },
    news18_place_2: {
      ru: '2 место',
      kz: '2 орын',
      en: '2nd place'
    },
    news18_place_3: {
      ru: '3 место',
      kz: '3 орын',
      en: '3rd place'
    },
    news18_name_sw1: {
      ru: 'Умида Джалилова',
      kz: 'Умида Джалилова',
      en: 'Umida Jalilova'
    },
    news18_name_sw2: {
      ru: 'Зухра Серикбаева',
      kz: 'Зухра Серикбаева',
      en: 'Zukhra Serikbayeva'
    },
    news18_name_sw3: {
      ru: 'Разия Кошенова',
      kz: 'Разия Кошенова',
      en: 'Raziya Koshenova'
    },
    news18_name_sm1: {
      ru: 'Бексултан Рыспай уулу',
      kz: 'Бексултан Рыспай уулу',
      en: 'Beksultan Ryspai uulu'
    },
    news18_name_sm2: {
      ru: 'Байыш Шаймурзаев',
      kz: 'Байыш Шаймурзаев',
      en: 'Baiysh Shaimurzaev'
    },
    news18_name_sm3: {
      ru: 'Чингиз Баймурзин',
      kz: 'Чингиз Баймурзин',
      en: 'Chingiz Baimurzin'
    },
    news18_name_iw1: {
      ru: 'Анастасия Лигай',
      kz: 'Анастасия Лигай',
      en: 'Anastasia Ligai'
    },
    news18_name_iw2: {
      ru: 'Марина Сытник',
      kz: 'Марина Сытник',
      en: 'Marina Sytnik'
    },
    news18_name_iw3: {
      ru: 'Дана Шапенова',
      kz: 'Дана Шапенова',
      en: 'Dana Shapenova'
    },
    news18_name_im1: {
      ru: 'Махмуд Азимов',
      kz: 'Махмуд Азимов',
      en: 'Makhmud Azimov'
    },
    news18_name_im2: {
      ru: 'Ермек Жанахметов',
      kz: 'Ермек Жанахметов',
      en: 'Yermek Zhanakhmetov'
    },
    news18_name_im3: {
      ru: 'Суннат Саипов',
      kz: 'Суннат Саипов',
      en: 'Sunnat Saipov'
    },
    news18_page_title: {
      ru: 'Победители и призеры Открытого Чемпионата Казахстана SmartFit 2026',
      kz: 'SmartFit 2026 Открытый чемпионатының жеңімпаздары мен жүлдегерлері',
      en: 'Winners and Prize Winners of the Open Kazakhstan Championship SmartFit 2026'
    },
    news18_date: {
      ru: '20-21 июня 2026 года',
      kz: '2026 жылғы 20-21 маусым',
      en: 'June 20-21, 2026'
    },
    news18_location: {
      ru: 'Актобе, Казахстан',
      kz: 'Актобе, Қазақстан',
      en: 'Aktobe, Kazakhstan'
    },
    news18_intro: {
      ru: 'Открытый Чемпионат Казахстана SmartFit 2026 собрал сильнейших спортсменов со всей страны. Соревнования прошли на высоком уровне, атлеты продемонстрировали отличную подготовку и спортивный дух.',
      kz: 'SmartFit 2026 Открытый чемпионаты бүкіл елден ең күшті спортшыларды жинады. Жарыстар жоғары деңгейде өтіп, спортшылар өте сапалы дайындық пен спорттық рухын көрсетті.',
      en: 'The Open Kazakhstan Championship SmartFit 2026 brought together the strongest athletes from across the country. The competition was held at a high level, with athletes demonstrating excellent preparation and sportsmanship.'
    },
    news18_category_title: {
      ru: 'Категории и результаты',
      kz: 'Санаттар және нәтижелер',
      en: 'Categories and Results'
    },
    news18_sponsor_title: {
      ru: 'Генеральный спонсор',
      kz: 'Бас демеуші',
      en: 'General Sponsor'
    },
    news18_sponsor_text: {
      ru: 'Генеральным спонсором чемпионата выступила компания КДЛ Олимп',
      kz: 'Чемпионаттың бас демеушісі КДЛ Олимп компаниясы болды',
      en: 'The general sponsor of the championship was KDL Olymp company'
    },
    news18_congratulations: {
      ru: 'Поздравляем всех победителей и призёров с достигнутыми результатами! Спасибо всем участникам, судьям и организаторам за яркое и напряженное соревнование. Функциональное многоборье в Казахстане продолжает активно развиваться!',
      kz: 'Барлық жеңімпаздар мен жүлдегерлерді олардың жетістіктерімен құттықтаймыз! Барлық қатысушыларға, төрешілерге және ұйымдастырушыларға жарқын және қарсақы жарысты ұйымдастырғаны үшін алғыс. Қазақстанда функционалдық көпсайыс белсенді дамып келе жатыр!',
      en: 'Congratulations to all winners and prize winners on their achievements! Thanks to all participants, judges and organizers for a brilliant and competitive competition. Functional fitness in Kazakhstan continues to develop actively!'
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
      ru: '1. Регистрация участников',
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
      ru: '2. Категории участников',
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
      ru: '3. Формат соревнований',
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
      ru: '4. Награждение',
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
      ru: '5. Цели соревнований',
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
      ru: '6. Спонсоры и партнёры соревнований',
      kz: '6. Жарыстың спонсорлары және серіктестері',
      en: '6. Competition Sponsors and Partners'
    },
    news10_videos_title: {
      ru: 'Видео',
      kz: 'Бейне',
      en: 'Videos'
    },
    news10_vid1_label: {
      ru: 'Комплекс 1',
      kz: 'Кешен 1',
      en: 'Complex 1'
    },
    news10_vid2_label: {
      ru: 'Комплекс 2,3',
      kz: 'Кешен 2,3',
      en: 'Complex 2,3'
    },
    news10_vid3_label: {
      ru: 'Комплекс 4',
      kz: 'Кешен 4',
      en: 'Complex 4'
    },
    news10_vid4_label: {
      ru: 'Комплекс 5',
      kz: 'Кешен 5',
      en: 'Complex 5'
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
      kz: 'WodFriends — функционалды көпсайыс және жаттығулар үшін жабдық өндіру және сату компаниясы.',
      en: 'WodFriends - a company for the production and sale of equipment for functional fitness and training.'
    },
    news10_team_title: {
      ru: '🇰🇿 СОСТАВ СБОРНОЙ РК на Чемпионат Азии 2026 в индивидуальных категориях',
      kz: '🇰🇿 2026 жылғы Азия чемпионатына жеке санаттар бойынша Қазақстан ұлттық құрамасы',
      en: '🇰🇿 KAZAKHSTAN NATIONAL TEAM ROSTER for the 2026 Asian Championship in individual categories'
    },
    news10_team_rx_men: {
      ru: 'RX MEN',
      kz: 'RX ерлер',
      en: 'RX MEN'
    },
    news10_team_rx_women: {
      ru: 'RX WOMEN',
      kz: 'RX әйелдер',
      en: 'RX WOMEN'
    },
    news10_team_35_39_men: {
      ru: '35–39 MEN',
      kz: '35–39 ерлер',
      en: '35–39 MEN'
    },
    news10_team_35_39_women: {
      ru: '35–39 WOMEN',
      kz: '35–39 әйелдер',
      en: '35–39 WOMEN'
    },
    news10_team_40_44_men: {
      ru: '40–44 MEN',
      kz: '40–44 ерлер',
      en: '40–44 MEN'
    },
    news10_team_40_44_women: {
      ru: '40–44 WOMEN',
      kz: '40–44 әйелдер',
      en: '40–44 WOMEN'
    },
    news10_team_footer: {
      ru: 'Казахстан на международной арене 🇰🇿 Asian Championship 2026',
      kz: 'Қазақстан халықаралық аренада 🇰🇿 Asian Championship 2026',
      en: 'Kazakhstan on the international stage 🇰🇿 Asian Championship 2026'
    },
    news10_partners_title: {
      ru: 'Партнёры',
      kz: 'Серіктестер',
      en: 'Partners'
    },
    news10_allur_desc: {
      ru: 'Allur Group — лидер автопрома Казахстана. Компания развивает собственное производство и сборку автомобилей, а также дилерскую сеть, сервис и экспортные продажи по стране.',
      kz: 'Allur Group — Қазақстан автомобиль өнеркәсібінің көшбасшысы. Компания өзінің автомобиль өндірісін және жиналысын, сондай-ақ дилерлік желіні, сервисті және елдегі экспорттық сатуды дамытады.',
      en: 'Allur Group is the leader of Kazakhstan\'s automotive industry. The company develops its own car production and assembly, as well as a dealer network, service and export sales across the country.'
    },
    news10_region_desc: {
      ru: 'Region 715 — это казахстанский производитель школьной и офисной мебели, работающий на рынке более 15 лет. Компания предлагает широкий ассортимент мебели, включая парты, шкафы и тумбы, и специализируется на производстве мебели для STEM образования. Юридический адрес компании: г. Петропавловск, ул. Лесная, дом 67.',
      kz: 'Region 715 — нарықта 15 жылдан астам жұмыс істейтін қазақстандық мектеп және кеңсе жиһазының өндірушісі. Компания парталар, шкафтар және тумбалар сияқты жиһаздардың кең ассортиментін ұсынады және STEM білімі үшін жиһаз өндіруге маманданады. Заңды мекенжайы: Петропавл қ., Орман к-сі, 67 үй.',
      en: 'Region 715 is a Kazakhstani manufacturer of school and office furniture with over 15 years of market experience. The company offers a wide range of furniture, including desks, cabinets and pedestals, and specializes in manufacturing furniture for STEM education. Legal address: Petropavlovsk, Lesnaya St., 67.'
    },
    news10_wodfriends_desc: {
      ru: 'Компания специализируется на оборудовании и аксессуарах для кроссфита, функциональных тренировок и силовых видов спорта.',
      kz: 'Компания кроссфит, функционалды жаттығулар және күш спорты үшін жабдықтар мен аксессуарларға маманданған.',
      en: 'The company specializes in equipment and accessories for CrossFit, functional training and strength sports.'
    },

    // Страница news11 - Чемпионат Азии 2026
    news11_title: {
      ru: 'Чемпионат Азии по функциональному многоборью 2026 в Казахстане',
      kz: 'Қазақстанда 2026 жылғы функционалдық көпсайыс бойынша Азия чемпионаты',
      en: 'Asian Functional Fitness Championship 2026 in Kazakhstan'
    },
    news11_date: {
      ru: '14 – 16 августа',
      kz: '14 – 16 тамыз',
      en: 'August 14 – 16'
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
    news191_card_title: {
      ru: 'Чемпионат Азии по функциональному многоборью 2026: всё, что важно знать!',
      kz: '2026 жылғы Азия функционалдық көпсайыс чемпионаты: білуге маңызды барлығы!',
      en: 'Asian Functional Fitness Championship 2026: everything you need to know!'
    },
    news191_card_excerpt: {
      ru: 'На этой странице собрана ключевая информация о Чемпионате Азии по функциональному многоборью 2026...',
      kz: 'Бұл бетте 2026 жылғы Азия функционалдық көпсайыс чемпионаты туралы негізгі ақпарат жинақталған...',
      en: 'This page brings together key information about the Asian Functional Fitness Championship 2026...'
    },
    news19_card_title: {
      ru: 'Официальное объявление тестов для Азиатского чемпионата iF3 2026!',
      kz: '2026 жылғы iF3 Азия чемпионатына арналған тесттердің ресми жарияланымы!',
      en: 'Official announcement of the test protocol for the iF3 Asian Championship 2026!'
    },
    news19_card_excerpt: {
      ru: 'Test 1 (Endurance)...',
      kz: 'Test 1 (Endurance)...',
      en: 'Test 1 (Endurance)...'
    },
    news19_kicker: {
      ru: 'Формат соревнований',
      kz: 'Жарыс форматы',
      en: 'Competition Format'
    },
    news19_title: {
      ru: 'ЧЕМПИОНАТ АЗИИ 2026',
      kz: '2026 ЖЫЛҒЫ АЗИЯ ЧЕМПИОНАТЫ',
      en: 'CHAMPIONSHIP ASIA 2026'
    },
    news19_subtitle: {
      ru: 'Описание индивидуальных и парных тестов',
      kz: 'Жеке және жұптық тесттердің сипаттамасы',
      en: 'Description of individual and paired tests'
    },
    news19_individuals: {
      ru: 'ИНДИВИДУАЛЬНЫЕ',
      kz: 'ЖЕКЕ',
      en: 'INDIVIDUALS'
    },
    news19_pairs: {
      ru: 'ПАРЫ',
      kz: 'ЖҰПТАР',
      en: 'PAIRS'
    },
    news19_test1: {
      ru: 'Тест 1 (Выносливость)',
      kz: 'Тест 1 (Төзімділік)',
      en: 'Test 1 (Endurance)'
    },
    news19_test2: {
      ru: 'Тест 2 (Сила)',
      kz: 'Тест 2 (Күш)',
      en: 'Test 2 (Strength)'
    },
    news19_test3: {
      ru: 'Тест 3 (Бодивейт)',
      kz: 'Тест 3 (Бодивейт)',
      en: 'Test 3 (Bodyweight)'
    },
    news19_test4: {
      ru: 'Тест 4 (Навык)',
      kz: 'Тест 4 (Дағды)',
      en: 'Test 4 (Skill)'
    },
    news19_test5: {
      ru: 'Тест 5 (Смешанный)',
      kz: 'Тест 5 (Аралас)',
      en: 'Test 5 (Mixed)'
    },
    news19_test6: {
      ru: 'Тест 6 (Сила / мощность)',
      kz: 'Тест 6 (Күш / қуат)',
      en: 'Test 6 (Power)'
    },

    // --- news19: общие подзаголовки ---
    news19_div_all: {
      ru: 'Все дивизионы',
      kz: 'Барлық дивизиондар',
      en: 'All divisions'
    },
    news19_div_ind_masters: {
      ru: 'Индивидуальные участники и мастера',
      kz: 'Жеке қатысушылар және мастерлер',
      en: 'Individuals and Masters'
    },
    news19_div_jr1718: {
      ru: 'Юниоры 17-18',
      kz: 'Жасөспірімдер 17-18',
      en: 'Juniors 17-18'
    },
    news19_div_juniors: {
      ru: 'Юниоры',
      kz: 'Жасөспірімдер',
      en: 'Juniors'
    },
    news19_flow_t1: {
      ru: 'Поток Теста 1',
      kz: '1-тесттің өту реті',
      en: 'Test 1 Flow'
    },
    news19_flow_t2: {
      ru: 'Поток Теста 2',
      kz: '2-тесттің өту реті',
      en: 'Test 2 Flow'
    },
    news19_flow_t3: {
      ru: 'Поток Теста 3',
      kz: '3-тесттің өту реті',
      en: 'Test 3 Flow'
    },
    news19_flow_t4: {
      ru: 'Поток Теста 4',
      kz: '4-тесттің өту реті',
      en: 'Test 4 Flow'
    },
    news19_flow_t5: {
      ru: 'Поток Теста 5',
      kz: '5-тесттің өту реті',
      en: 'Test 5 Flow'
    },
    news19_flow_t6: {
      ru: 'Поток Теста 6',
      kz: '6-тесттің өту реті',
      en: 'Test 6 Flow'
    },
    news19_std_t1: {
      ru: 'Стандарты движений Теста 1',
      kz: '1-тесттің қимыл стандарттары',
      en: 'Test 1 Movement Standards'
    },
    news19_std_t2: {
      ru: 'Стандарты движений Теста 2',
      kz: '2-тесттің қимыл стандарттары',
      en: 'Test 2 Movement Standards'
    },
    news19_std_t3: {
      ru: 'Стандарты движений Теста 3',
      kz: '3-тесттің қимыл стандарттары',
      en: 'Test 3 Movement Standards'
    },
    news19_std_t4: {
      ru: 'Стандарты движений Теста 4',
      kz: '4-тесттің қимыл стандарттары',
      en: 'Test 4 Movement Standards'
    },
    news19_std_t5: {
      ru: 'Стандарты движений Теста 5',
      kz: '5-тесттің қимыл стандарттары',
      en: 'Test 5 Movement Standards'
    },
    news19_std_t6: {
      ru: 'Стандарты движений Теста 6',
      kz: '6-тесттің қимыл стандарттары',
      en: 'Test 6 Movement Standards'
    },
    news19_rules_t1: {
      ru: 'Специальные правила Теста 1',
      kz: '1-тесттің арнайы ережелері',
      en: 'Test 1 Special Rules'
    },
    news19_rules_t2: {
      ru: 'Специальные правила Теста 2',
      kz: '2-тесттің арнайы ережелері',
      en: 'Test 2 Special Rules'
    },
    news19_rules_t3: {
      ru: 'Специальные правила Теста 3',
      kz: '3-тесттің арнайы ережелері',
      en: 'Test 3 Special Rules'
    },
    news19_rules_t4: {
      ru: 'Специальные правила Теста 4',
      kz: '4-тесттің арнайы ережелері',
      en: 'Test 4 Special Rules'
    },
    news19_rules_t5: {
      ru: 'Специальные правила Теста 5',
      kz: '5-тесттің арнайы ережелері',
      en: 'Test 5 Special Rules'
    },
    news19_rules_t6: {
      ru: 'Специальные правила Теста 6',
      kz: '6-тесттің арнайы ережелері',
      en: 'Test 6 Special Rules'
    },
    news19_t2_group: {
      ru: 'Поток, стандарты и специальные правила Теста 2',
      kz: '2-тесттің өту реті, стандарттары және арнайы ережелері',
      en: 'Test 2 Flow, Standards and Special Rules'
    },

    // --- news19: индивидуальные, Тест 1 ---
    news19_i_t1_box_a: {
      ru: '8 раундов на время:<br>200-метровый забег<br>50 двойных прыжков через скакалку<br>250 метров на ски-эрге<br>Лимит времени: 25 минут',
      kz: 'Уақытқа 8 раунд:<br>200 метр жүгіру<br>Арқанмен 50 қос секіру<br>Ски-эргте 250 метр<br>Уақыт шектеуі: 25 минут',
      en: '8 rounds for time:<br>200 m run<br>50 double unders<br>250 m ski erg<br>Time cap: 25 minutes'
    },
    news19_i_t1_box_b: {
      ru: '8 раундов на время:<br>200-метровый забег<br>30 двойных прыжков через скакалку<br>200 метров на ски-эрге<br>Лимит времени: 25 минут',
      kz: 'Уақытқа 8 раунд:<br>200 метр жүгіру<br>Арқанмен 30 қос секіру<br>Ски-эргте 200 метр<br>Уақыт шектеуі: 25 минут',
      en: '8 rounds for time:<br>200 m run<br>30 double unders<br>200 m ski erg<br>Time cap: 25 minutes'
    },
    news19_i_t1_flow: {
      ru: 'По сигналу старта спортсмены выполняют 200-метровый забег вокруг трека, затем необходимое количество двойных прыжков через скакалку и после этого 250 метров на ски-эрге (или 200 метров для юниоров). Спортсмены продолжают этот шаблон до завершения 8 раундов. Таймер останавливается, когда спортсмен завершает финальный отрезок на ски-эрге.',
      kz: 'Старт белгісімен спортшылар трек айналасында 200 метр жүгіреді, содан кейін қажетті мөлшерде арқанмен қос секіру орындайды, одан соң ски-эргте 250 метр (жасөспірімдер үшін 200 метр) өтеді. Спортшылар осы үлгіні 8 раунд аяқталғанша қайталайды. Таймер спортшы соңғы ски-эрг кезеңін аяқтағанда тоқтайды.',
      en: 'At the start signal athletes complete a 200 m run around the track, then the required number of double unders, followed by 250 m on the ski erg (or 200 m for juniors). Athletes continue this pattern until 8 rounds are completed. The clock stops when the athlete finishes the final ski erg.'
    },
    news19_i_t1_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Skierg ID 9.07”, “Double Under ID 10.07” и “Run ID 9.01” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Skierg ID 9.07”, “Double Under ID 10.07” және “Run ID 9.01” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Skierg ID 9.07”, “Double Under ID 10.07” and “Run ID 9.01” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_i_t1_r1: {
      ru: 'Спортсмен не может покидать платформу ски-эрга до завершения 250 метров (или 200 метров для юниоров) в каждом раунде.',
      kz: 'Спортшы әр раундта 250 метрді (жасөспірімдер үшін 200 метрді) аяқтамай тұрып ски-эрг алаңын тастап кете алмайды.',
      en: 'The athlete may not leave the ski erg platform until the 250 m (or 200 m for juniors) is completed in each round.'
    },
    news19_i_t1_r2: {
      ru: 'Если спортсмен не завершает тренировку, он получает зачёт за все пройденные метры на ски-эрге, но для зачёта забега должен быть выполнен весь 200-метровый забег. Частичный зачёт за незавершённый забег не начисляется.',
      kz: 'Егер спортшы кешенді аяқтамаса, ски-эргте өткен барлық метрлері есептеледі, бірақ жүгіру есепке алыну үшін 200 метр толық жүгірілуі тиіс. Аяқталмаған жүгіру үшін ішінара ұпай берілмейді.',
      en: 'If an athlete does not finish the workout, they receive credit for every metre completed on the ski erg, but the full 200 m run must be completed for the run to count. No partial credit is given for an unfinished run.'
    },
    news19_i_t1_r3: {
      ru: 'Скакалка должна вращаться вперёд при двойных прыжках.',
      kz: 'Қос секіру кезінде арқан алға қарай айналуы тиіс.',
      en: 'The rope must rotate forward during double unders.'
    },

    // --- news19: индивидуальные, Тест 2 ---
    news19_i_t2_box: {
      ru: 'Лестница взятий на грудь:<br>1 взятие штанги на грудь любым способом<br>:30 секунд на подъём, :30 на переход<br>Тай-брейк: максимальное количество становых тяг за оставшиеся 30 секунд<br><br>Вес для мужчин индивидуального зачёта и мастеров в килограммах: 90, 100, 110, 120, 125, 130, 135, 140, 145, 150<br><br>Вес для женщин индивидуального зачёта и мастеров в килограммах: 60, 65, 70, 75, 80, 85, 90, 95, 100, 105<br><br>Вес для юниоров-мужчин в килограммах: 60, 65, 70, 75, 80, 85, 90, 95, 100, 105<br><br>Вес для юниоров-женщин в килограммах: 40, 45, 50, 55, 60, 65, 70, 75, 80, 85',
      kz: 'Кеудеге көтеру сатысы:<br>1 рет штанганы кез келген тәсілмен кеудеге көтеру<br>:30 секунд көтеруге, :30 секунд ауысуға<br>Тай-брейк: қалған 30 секундта барынша көп өлі тарту<br><br>Жеке зачёт және мастер ер адамдарға арналған салмақ (кг): 90, 100, 110, 120, 125, 130, 135, 140, 145, 150<br><br>Жеке зачёт және мастер әйелдерге арналған салмақ (кг): 60, 65, 70, 75, 80, 85, 90, 95, 100, 105<br><br>Жасөспірім ер балаларға арналған салмақ (кг): 60, 65, 70, 75, 80, 85, 90, 95, 100, 105<br><br>Жасөспірім қыздарға арналған салмақ (кг): 40, 45, 50, 55, 60, 65, 70, 75, 80, 85',
      en: 'Clean ladder:<br>1 clean, anyhow<br>:30 seconds to lift, :30 to transition<br>Tiebreak: max deadlifts in the remaining 30 seconds<br><br>Weights for individual and masters men in kilograms: 90, 100, 110, 120, 125, 130, 135, 140, 145, 150<br><br>Weights for individual and masters women in kilograms: 60, 65, 70, 75, 80, 85, 90, 95, 100, 105<br><br>Weights for junior men in kilograms: 60, 65, 70, 75, 80, 85, 90, 95, 100, 105<br><br>Weights for junior women in kilograms: 40, 45, 50, 55, 60, 65, 70, 75, 80, 85'
    },
    news19_i_t2_flow: {
      ru: 'Этот тест представляет собой лестницу взятий на грудь, где спортсмены последовательно работают с заранее установленными штангами и выполняют одно взятие на грудь на каждой из них, пока не смогут поднять следующий вес. Спортсмены начинают тест каскадом: один поднимает штангу и переходит к следующей, после чего следующий спортсмен начинает лестницу. У каждого спортсмена есть 30 секунд на успешный подъём и 30 секунд на переход к следующей штанге. Если спортсмен не может выполнить взятие на грудь на определённом весе, он может использовать остаток 30 секунд для выполнения становых тяг на этом весе в качестве тай-брейка.',
      kz: 'Бұл тест — кеудеге көтеру сатысы, мұнда спортшылар алдын ала дайындалған штангалармен ретімен жұмыс істеп, әрқайсысында бір рет кеудеге көтеру орындайды, келесі салмақты көтере алмағанша жалғастырады. Спортшылар тестті каскадпен бастайды: біреуі штанганы көтеріп келесісіне ауысады, содан кейін келесі спортшы сатыны бастайды. Әр спортшыға сәтті көтеруге 30 секунд, келесі штангаға ауысуға 30 секунд беріледі. Егер спортшы белгілі бір салмақта кеудеге көтеруді орындай алмаса, ол 30 секундтың қалғанын тай-брейк ретінде сол салмақта өлі тарту орындауға пайдалана алады.',
      en: 'This test is a clean ladder in which athletes work through pre-loaded barbells in sequence, performing one clean on each until they can no longer lift the next weight. Athletes start the test in a cascade: one lifts a barbell and moves to the next, after which the following athlete begins the ladder. Each athlete has 30 seconds to complete a successful lift and 30 seconds to transition to the next barbell. If an athlete cannot complete a clean at a given weight, they may use the remainder of the 30 seconds to perform deadlifts at that weight as a tiebreak.'
    },
    news19_i_t2_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделе “Clean, Anyhow 3.01” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Clean, Anyhow 3.01” бөлімінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Clean, Anyhow 3.01” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_i_t2_r1: {
      ru: 'Спортсмен может пытаться выполнить взятие на грудь столько раз, сколько хочет, в течение 30-секундного окна.',
      kz: 'Спортшы 30 секундтық уақыт ішінде кеудеге көтеруді қалағанынша рет орындауға тырыса алады.',
      en: 'The athlete may attempt the clean as many times as they wish within the 30-second window.'
    },
    news19_i_t2_r2: {
      ru: 'Спортсмен получает “no lift”, если роняет штангу за собой, даже если подъём в остальном выполнен успешно.',
      kz: 'Егер спортшы штанганы артына тастаса, көтеру басқа жағынан сәтті болса да “no lift” алады.',
      en: 'The athlete receives a “no lift” if they drop the barbell behind them, even if the lift was otherwise successful.'
    },
    news19_i_t2_r3: {
      ru: 'Если колено спортсмена касается пола, это также считается “no lift”.',
      kz: 'Егер спортшының тізесі еденге тисе, бұл да “no lift” болып саналады.',
      en: 'If the athlete\'s knee touches the floor, this also counts as a “no lift”.'
    },
    news19_i_t2_r4: {
      ru: 'Подъём засчитывается только если он выполнен до истечения 30 секунд.',
      kz: 'Көтеру тек 30 секунд аяқталғанға дейін орындалса ғана есептеледі.',
      en: 'A lift only counts if it is completed before the 30 seconds expire.'
    },
    news19_i_t2_r5: {
      ru: 'Если спортсмен не смог выполнить взятие на грудь на заданном весе, он может использовать остаток 30 секунд для становых тяг на той же штанге. Количество выполненных становых тяг будет использоваться как тай-брейк для спортсменов, закончивших на одном и том же весе.',
      kz: 'Егер спортшы берілген салмақта кеудеге көтеруді орындай алмаса, ол 30 секундтың қалғанын сол штангада өлі тарту орындауға пайдалана алады. Орындалған өлі тартулар саны бірдей салмақта аяқтаған спортшылар үшін тай-брейк ретінде қолданылады.',
      en: 'If an athlete fails to complete a clean at a given weight, they may use the remainder of the 30 seconds for deadlifts on the same barbell. The number of deadlifts completed will be used as the tiebreak for athletes who finish at the same weight.'
    },

    // --- news19: индивидуальные, Тест 3 ---
    news19_i_t3_box: {
      ru: 'Максимум повторений за 12 минут<br><br>Прыжки через коробку (60 см/50 см)<br>10-15-20-25-30…<br><br>Подъёмы корпуса на GHD<br>10-15-20-25-30…<br><br>Отжимания в стойке на руках (строгие для мужчин в индивидуальном зачёте; в остальных дивизионах можно с кипом)<br>3-6-9-12-15…',
      kz: '12 минутта барынша көп қайталау<br><br>Тумбадан асып секіру (60 см/50 см)<br>10-15-20-25-30…<br><br>GHD-де дене көтеру<br>10-15-20-25-30…<br><br>Қолда тұрып итерілу (жеке зачёттегі ер адамдар үшін қатаң; басқа дивизиондарда кип қолдануға болады)<br>3-6-9-12-15…',
      en: 'Max reps in 12 minutes<br><br>Box jump overs (60 cm/50 cm)<br>10-15-20-25-30…<br><br>GHD sit-ups<br>10-15-20-25-30…<br><br>Handstand push-ups (strict for individual men; other divisions may kip)<br>3-6-9-12-15…'
    },
    news19_i_t3_flow: {
      ru: 'По сигналу старта у спортсменов есть 12 минут, чтобы максимально продвинуться в тесте. Они начинают с 10 прыжков через коробку, затем 10 подъёмов корпуса на GHD и 3 отжиманий в стойке на руках. Затем возвращаются к коробке и выполняют 15 прыжков, 15 подъёмов на GHD и 6 отжиманий в стойке на руках. Так продолжается по схеме, где каждая последующая серия добавляет 5 прыжков, 5 подъёмов на GHD и 3 отжимания в стойке на руках. Итоговый результат — общее количество выполненных повторений.',
      kz: 'Старт белгісімен спортшыларға тестте барынша алға жылжуға 12 минут беріледі. Олар 10 рет тумбадан асып секіруден бастайды, содан кейін GHD-де 10 дене көтеру және 3 рет қолда тұрып итеріледі. Одан кейін тумбаға оралып 15 секіру, GHD-де 15 көтеру және 6 итерілу орындайды. Осылайша әр келесі серияға 5 секіру, GHD-де 5 көтеру және 3 итерілу қосылып отырады. Қорытынды нәтиже — орындалған қайталаулардың жалпы саны.',
      en: 'At the start signal athletes have 12 minutes to get as far as possible through the test. They begin with 10 box jump overs, then 10 GHD sit-ups and 3 handstand push-ups. They then return to the box for 15 jumps, 15 GHD sit-ups and 6 handstand push-ups. The pattern continues with each subsequent set adding 5 jumps, 5 GHD sit-ups and 3 handstand push-ups. The final score is the total number of repetitions completed.'
    },
    news19_i_t3_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Box Jump Over ID 10.05”, “GHD Sit-up ID 13.02” и “Handstand Push-up ID 12.01” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Box Jump Over ID 10.05”, “GHD Sit-up ID 13.02” және “Handstand Push-up ID 12.01” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Box Jump Over ID 10.05”, “GHD Sit-up ID 13.02” and “Handstand Push-up ID 12.01” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_i_t3_r1: {
      ru: 'Спортсмены могут либо полностью перепрыгнуть через коробку, либо запрыгнуть на неё и затем спуститься. При полном перепрыгивании ноги должны пройти над верхом коробки, а не обходить её сбоку ниже уровня коробки. Если спортсмен касается верхней части коробки, он должен сделать это двумя ногами и затем сойти с другой стороны. Отталкивание назад и повторный прыжок не допускаются.',
      kz: 'Спортшылар тумбадан толық асып секіре алады немесе үстіне секіріп шығып, содан кейін түсе алады. Толық асып секіргенде аяқтар тумбаның үстінен өтуі керек, оны бүйірінен, тумба деңгейінен төмен айналып өтуге болмайды. Егер спортшы тумбаның үстіне тисе, оны екі аяқпен жасап, содан кейін екінші жағынан түсуі тиіс. Артқа серпіліп қайта секіруге рұқсат етілмейді.',
      en: 'Athletes may either jump completely over the box or jump onto it and then step or jump down. When going fully over, the feet must pass over the top of the box and may not travel around the side below box height. If the athlete touches the top of the box, they must do so with both feet and then come down on the other side. Rebounding backwards and jumping again is not permitted.'
    },
    news19_i_t3_r2: {
      ru: 'Мужчины в индивидуальном зачёте обязаны выполнять строгие отжимания в стойке на руках. Остальные дивизионы могут выполнять их с кипом.',
      kz: 'Жеке зачёттегі ер адамдар қолда тұрып итерілуді қатаң түрде орындауға міндетті. Басқа дивизиондар оны кип арқылы орындай алады.',
      en: 'Individual men must perform strict handstand push-ups. All other divisions may kip.'
    },

    // --- news19: индивидуальные, Тест 4 ---
    news19_i_t4_div_a: {
      ru: 'Индивидуальный зачёт и мастера 35-39, мужчины-мастера 40-44',
      kz: 'Жеке зачёт және мастерлер 35-39, ер мастерлер 40-44',
      en: 'Individuals and Masters 35-39, Masters Men 40-44'
    },
    news19_i_t4_div_b: {
      ru: 'Женщины-мастера 40-44',
      kz: 'Әйел мастерлер 40-44',
      en: 'Masters Women 40-44'
    },
    news19_i_t4_box_a: {
      ru: 'На время:<br>25 приседаний-пистолетиков попеременно<br>25 подъёмов носков к перекладине<br>20 приседаний-пистолетиков попеременно<br>20 подтягиваний до касания грудью перекладины<br>15 приседаний-пистолетиков попеременно<br>15 выходов силой на перекладине<br>10 приседаний-пистолетиков попеременно<br>10 метров ходьбы в стойке на руках с полным разворотом каждые 2.5 м (всего 4)<br>5 приседаний-пистолетиков попеременно<br>5 подъёмов переворотом<br>Лимит времени: 10 минут',
      kz: 'Уақытқа:<br>25 рет кезектесіп бір аяқпен отырып-тұру<br>25 рет аяқ ұшын турникке тигізу<br>20 рет кезектесіп бір аяқпен отырып-тұру<br>20 рет кеудемен турникке тиіп тартылу<br>15 рет кезектесіп бір аяқпен отырып-тұру<br>15 рет турникте күшпен шығу<br>10 рет кезектесіп бір аяқпен отырып-тұру<br>Қолда тұрып 10 метр жүру, әр 2.5 м сайын толық бұрылыспен (барлығы 4)<br>5 рет кезектесіп бір аяқпен отырып-тұру<br>5 рет аунап шығу<br>Уақыт шектеуі: 10 минут',
      en: 'For time:<br>25 alternating pistols<br>25 toes to bar<br>20 alternating pistols<br>20 chest to bar pull-ups<br>15 alternating pistols<br>15 bar muscle-ups<br>10 alternating pistols<br>10 m handstand walk with a full pirouette every 2.5 m (4 total)<br>5 alternating pistols<br>5 pull-overs<br>Time cap: 10 minutes'
    },
    news19_i_t4_box_b: {
      ru: 'На время:<br>25 приседаний-пистолетиков попеременно<br>25 подъёмов носков к перекладине<br>20 приседаний-пистолетиков попеременно<br>20 подтягиваний<br>15 приседаний-пистолетиков попеременно<br>15 подтягиваний до касания грудью перекладины<br>10 приседаний-пистолетиков попеременно<br>10 метров ходьбы в стойке на руках<br>5 приседаний-пистолетиков попеременно<br>5 подъёмов переворотом<br>Лимит времени: 10 минут',
      kz: 'Уақытқа:<br>25 рет кезектесіп бір аяқпен отырып-тұру<br>25 рет аяқ ұшын турникке тигізу<br>20 рет кезектесіп бір аяқпен отырып-тұру<br>20 рет тартылу<br>15 рет кезектесіп бір аяқпен отырып-тұру<br>15 рет кеудемен турникке тиіп тартылу<br>10 рет кезектесіп бір аяқпен отырып-тұру<br>Қолда тұрып 10 метр жүру<br>5 рет кезектесіп бір аяқпен отырып-тұру<br>5 рет аунап шығу<br>Уақыт шектеуі: 10 минут',
      en: 'For time:<br>25 alternating pistols<br>25 toes to bar<br>20 alternating pistols<br>20 pull-ups<br>15 alternating pistols<br>15 chest to bar pull-ups<br>10 alternating pistols<br>10 m handstand walk<br>5 alternating pistols<br>5 pull-overs<br>Time cap: 10 minutes'
    },
    news19_i_t4_box_c: {
      ru: 'На время:<br>25 приседаний-пистолетиков попеременно<br>25 подъёмов носков к перекладине<br>20 приседаний-пистолетиков попеременно<br>20 подтягиваний<br>15 приседаний-пистолетиков попеременно<br>15 подтягиваний до касания грудью перекладины<br>10 приседаний-пистолетиков попеременно<br>10 метров ходьбы в стойке на руках<br>5 приседаний-пистолетиков попеременно<br>5 выходов силой на перекладине<br>Лимит времени: 10 минут',
      kz: 'Уақытқа:<br>25 рет кезектесіп бір аяқпен отырып-тұру<br>25 рет аяқ ұшын турникке тигізу<br>20 рет кезектесіп бір аяқпен отырып-тұру<br>20 рет тартылу<br>15 рет кезектесіп бір аяқпен отырып-тұру<br>15 рет кеудемен турникке тиіп тартылу<br>10 рет кезектесіп бір аяқпен отырып-тұру<br>Қолда тұрып 10 метр жүру<br>5 рет кезектесіп бір аяқпен отырып-тұру<br>5 рет турникте күшпен шығу<br>Уақыт шектеуі: 10 минут',
      en: 'For time:<br>25 alternating pistols<br>25 toes to bar<br>20 alternating pistols<br>20 pull-ups<br>15 alternating pistols<br>15 chest to bar pull-ups<br>10 alternating pistols<br>10 m handstand walk<br>5 alternating pistols<br>5 bar muscle-ups<br>Time cap: 10 minutes'
    },
    news19_i_t4_flow: {
      ru: 'По сигналу старта спортсмены начинают с 25 приседаний-пистолетиков попеременно, затем выполняют 25 подъёмов носков к перекладине. Затем они возвращаются к станции приседаний и выполняют 20 приседаний, после чего возвращаются к перекладине и делают 20 подтягиваний до касания грудью. Затем возвращаются на дорожку ещё для 15 приседаний, после чего выполняют 15 выходов силой на перекладине. Далее следуют 10 приседаний, затем 10 метров ходьбы в стойке на руках (с разворотом, если применимо), и завершают финальной серией из 5 приседаний и 5 подъёмов переворотом, прежде чем пересечь линию финиша.',
      kz: 'Старт белгісімен спортшылар 25 рет кезектесіп бір аяқпен отырып-тұрудан бастайды, содан кейін 25 рет аяқ ұшын турникке тигізеді. Одан кейін отырып-тұру станциясына оралып 20 рет орындайды, содан соң турникке қайтып 20 рет кеудемен тиіп тартылады. Содан кейін тағы 15 отырып-тұру үшін жолаққа оралып, одан кейін 15 рет турникте күшпен шығады. Әрі қарай 10 отырып-тұру, содан кейін қолда тұрып 10 метр жүру (қажет болса бұрылыспен) орындалады, ал соңында 5 отырып-тұру мен 5 аунап шығудан тұратын қорытынды серия орындалып, мәре сызығы кесіп өтіледі.',
      en: 'At the start signal athletes begin with 25 alternating pistols, then perform 25 toes to bar. They return to the pistol station for 20 reps, then go back to the bar for 20 chest to bar pull-ups. They return to the lane for another 15 pistols, followed by 15 bar muscle-ups. Next come 10 pistols, then a 10 m handstand walk (with pirouettes where applicable), finishing with a final set of 5 pistols and 5 pull-overs before crossing the finish line.'
    },
    news19_i_t4_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Pistol ID 1.06”, “Toes to Bar ID 7.01”, “Chest to Bar Pull-up ID 7.05”, “Pull-up ID 7.04”, “Bar Muscle-up ID 7.07”, “Handstand Walk ID 12.03”, “Freestanding Handstand Push-up ID 12.02” и “Pull-over ID 7.06” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Pistol ID 1.06”, “Toes to Bar ID 7.01”, “Chest to Bar Pull-up ID 7.05”, “Pull-up ID 7.04”, “Bar Muscle-up ID 7.07”, “Handstand Walk ID 12.03”, “Freestanding Handstand Push-up ID 12.02” және “Pull-over ID 7.06” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Pistol ID 1.06”, “Toes to Bar ID 7.01”, “Chest to Bar Pull-up ID 7.05”, “Pull-up ID 7.04”, “Bar Muscle-up ID 7.07”, “Handstand Walk ID 12.03”, “Freestanding Handstand Push-up ID 12.02” and “Pull-over ID 7.06” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_i_t4_r1: {
      ru: 'Если спортсмен получает “no rep” в приседании-пистолетике, он должен повторить движение на той же ноге и получить засчитанный повтор до перехода на другую ногу.',
      kz: 'Егер спортшы бір аяқпен отырып-тұруда “no rep” алса, ол екінші аяққа ауыспас бұрын сол аяқта қимылды қайталап, есептелген қайталау алуы тиіс.',
      en: 'If an athlete receives a “no rep” on a pistol, they must repeat the movement on the same leg and complete a good rep before switching legs.'
    },
    news19_i_t4_r2: {
      ru: 'Подбородок спортсмена должен пересечь вертикальную плоскость перекладины перед началом каждого подъёма переворотом.',
      kz: 'Әр аунап шығуды бастар алдында спортшының иегі турниктің тік жазықтығынан өтуі тиіс.',
      en: 'The athlete\'s chin must cross the vertical plane of the bar before beginning each pull-over.'
    },
    news19_i_t4_r3: {
      ru: 'У спортсменов, выполняющих полный разворот в ходьбе на руках, разворот должен быть завершён в пределах обозначенной зоны, и спортсмен должен выйти из зоны до опускания на ноги; однако он может опускаться каждые 2.5 метра после успешного завершения разворота и выхода из зоны. Все остальные дивизионы могут прерывать ходьбу в стойке на руках каждые 2.5 метра.',
      kz: 'Қолда жүру кезінде толық бұрылыс орындайтын спортшылар үшін бұрылыс белгіленген аймақ шегінде аяқталуы тиіс және спортшы аяғына түспес бұрын аймақтан шығуы керек; алайда бұрылысты сәтті аяқтап, аймақтан шыққаннан кейін ол әр 2.5 метр сайын түсе алады. Қалған барлық дивизиондар қолда жүруді әр 2.5 метр сайын үзе алады.',
      en: 'For athletes performing a full pirouette during the handstand walk, the pirouette must be completed within the marked zone and the athlete must exit the zone before coming down; however they may come down every 2.5 m once the pirouette is successfully completed and they have exited the zone. All other divisions may break the handstand walk every 2.5 m.'
    },

    // --- news19: индивидуальные, Тест 5 ---
    news19_i_t5_box: {
      ru: '5 раундов на время:<br>15 подъёмов двух гантелей от плеч над головой<br>10 метров ходьбы выпадами с гантелями, удерживаемыми любым способом<br>5 становых тяг<br>Лимит времени: 10:00',
      kz: 'Уақытқа 5 раунд:<br>Екі гантельді иықтан бас үстіне 15 рет көтеру<br>Гантельдерді кез келген тәсілмен ұстап, 10 метр атылып жүру<br>5 өлі тарту<br>Уақыт шектеуі: 10:00',
      en: '5 rounds for time:<br>15 double dumbbell shoulder to overhead<br>10 m walking lunge holding the dumbbells any way<br>5 deadlifts<br>Time cap: 10:00'
    },
    news19_i_t5_weights_head: {
      ru: 'Вес по дивизионам',
      kz: 'Дивизиондар бойынша салмақ',
      en: 'Weights by division'
    },
    news19_i_t5_weights: {
      ru: 'Индивидуальный зачёт: гантели 22.5 кг/15 кг | становая тяга 150 кг/100 кг<br>Мастера 35-39: гантели 22.5 кг/15 кг | становая тяга 140 кг/90 кг<br>Мастера 40-44: гантели 22.5 кг/15 кг | становая тяга 130 кг/80 кг<br>Юниоры: гантели 15 кг/12.5 кг | становая тяга 90 кг/60 кг',
      kz: 'Жеке зачёт: гантель 22.5 кг/15 кг | өлі тарту 150 кг/100 кг<br>Мастерлер 35-39: гантель 22.5 кг/15 кг | өлі тарту 140 кг/90 кг<br>Мастерлер 40-44: гантель 22.5 кг/15 кг | өлі тарту 130 кг/80 кг<br>Жасөспірімдер: гантель 15 кг/12.5 кг | өлі тарту 90 кг/60 кг',
      en: 'Individuals: DB 22.5 kg/15 kg | DL 150 kg/100 kg<br>Masters 35-39: DB 22.5 kg/15 kg | DL 140 kg/90 kg<br>Masters 40-44: DB 22.5 kg/15 kg | DL 130 kg/80 kg<br>Juniors: DB 15 kg/12.5 kg | DL 90 kg/60 kg'
    },
    news19_i_t5_flow: {
      ru: 'По сигналу старта спортсмены выполняют 15 подъёмов двух гантелей от плеч над головой. Затем проходят 10 метров ходьбы выпадами, удерживая гантели любым способом, после чего делают 5 становых тяг со штангой. Затем возвращаются к гантелям и начинают следующий раунд. Так продолжается до завершения пяти раундов.',
      kz: 'Старт белгісімен спортшылар екі гантельді иықтан бас үстіне 15 рет көтереді. Содан кейін гантельдерді кез келген тәсілмен ұстап, 10 метр атылып жүреді, одан соң штангамен 5 өлі тарту орындайды. Содан кейін гантельдерге оралып, келесі раундты бастайды. Осылайша бес раунд аяқталғанша жалғасады.',
      en: 'At the start signal athletes perform 15 double dumbbell shoulder to overhead. They then cover 10 m of walking lunges holding the dumbbells any way, followed by 5 barbell deadlifts. They then return to the dumbbells and begin the next round. This continues until five rounds are completed.'
    },
    news19_i_t5_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Shoulder to Overhead ID 5.05”, “Walking Lunge ID 15.06” и “Deadlift ID 2.01” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Shoulder to Overhead ID 5.05”, “Walking Lunge ID 15.06” және “Deadlift ID 2.01” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Shoulder to Overhead ID 5.05”, “Walking Lunge ID 15.06” and “Deadlift ID 2.01” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_i_t5_r1: {
      ru: 'Спортсмены могут удерживать гантели любым способом, если те не касаются пола.',
      kz: 'Гантельдер еденге тимейтін болса, спортшылар оларды кез келген тәсілмен ұстай алады.',
      en: 'Athletes may hold the dumbbells any way as long as they do not touch the floor.'
    },

    // --- news19: индивидуальные, Тест 6 ---
    news19_i_t6_div_a: {
      ru: 'Индивидуальный зачёт и мастера 35-39',
      kz: 'Жеке зачёт және мастерлер 35-39',
      en: 'Individuals and Masters 35-39'
    },
    news19_i_t6_div_b: {
      ru: 'Индивидуальный зачёт и мастера 40-44',
      kz: 'Жеке зачёт және мастерлер 40-44',
      en: 'Individuals and Masters 40-44'
    },
    news19_i_t6_box_a: {
      ru: 'На время:<br>20 метров переноски мешка (68 кг/45 кг)<br>10 берпи с мешком<br>20 метров переноски мешка (68 кг/45 кг)<br>10 берпи с мешком<br>30/25 калорий на эйр-байке<br>Лимит времени: 4:00',
      kz: 'Уақытқа:<br>Қапты 20 метр тасу (68 кг/45 кг)<br>Қаппен 10 берпи<br>Қапты 20 метр тасу (68 кг/45 кг)<br>Қаппен 10 берпи<br>Эйр-байкте 30/25 калория<br>Уақыт шектеуі: 4:00',
      en: 'For time:<br>20 m sandbag carry (68 kg/45 kg)<br>10 sandbag burpees<br>20 m sandbag carry (68 kg/45 kg)<br>10 sandbag burpees<br>30/25 calories on the air bike<br>Time cap: 4:00'
    },
    news19_i_t6_box_b: {
      ru: 'На время:<br>20 метров переноски мешка (68 кг/45 кг)<br>10 берпи с мешком<br>20 метров переноски мешка (68 кг/45 кг)<br>10 берпи с мешком<br>25/20 калорий на эйр-байке<br>Лимит времени: 4:00',
      kz: 'Уақытқа:<br>Қапты 20 метр тасу (68 кг/45 кг)<br>Қаппен 10 берпи<br>Қапты 20 метр тасу (68 кг/45 кг)<br>Қаппен 10 берпи<br>Эйр-байкте 25/20 калория<br>Уақыт шектеуі: 4:00',
      en: 'For time:<br>20 m sandbag carry (68 kg/45 kg)<br>10 sandbag burpees<br>20 m sandbag carry (68 kg/45 kg)<br>10 sandbag burpees<br>25/20 calories on the air bike<br>Time cap: 4:00'
    },
    news19_i_t6_box_c: {
      ru: 'На время:<br>20 берпи лицом к штанге<br>20/15 калорий на эйр-байке<br>Лимит времени: 3:00',
      kz: 'Уақытқа:<br>Штангаға қарап 20 берпи<br>Эйр-байкте 20/15 калория<br>Уақыт шектеуі: 3:00',
      en: 'For time:<br>20 bar facing burpees<br>20/15 calories on the air bike<br>Time cap: 3:00'
    },
    news19_i_t6_flow1: {
      ru: 'По сигналу старта спортсмен выполняет 2 раунда по 20 метров переноски мешка и 10 берпи с мешком. Затем он переходит к эйр-байку и выполняет установленное число калорий. После этого спортсмен пересекает линию финиша.',
      kz: 'Старт белгісімен спортшы қапты 20 метр тасу және қаппен 10 берпиден тұратын 2 раунд орындайды. Содан кейін эйр-байкке ауысып, белгіленген калория санын орындайды. Одан кейін спортшы мәре сызығын кесіп өтеді.',
      en: 'At the start signal the athlete completes 2 rounds of a 20 m sandbag carry and 10 sandbag burpees. They then move to the air bike and complete the prescribed number of calories. After that the athlete crosses the finish line.'
    },
    news19_i_t6_flow2: {
      ru: 'Юниоры выполняют 20 берпи лицом к штанге, после чего — только калории на эйр-байке. Они не выполняют переноску мешка.',
      kz: 'Жасөспірімдер штангаға қарап 20 берпи орындайды, одан кейін тек эйр-байкте калория жинайды. Олар қап тасуды орындамайды.',
      en: 'Juniors perform 20 bar facing burpees followed only by calories on the air bike. They do not perform the sandbag carry.'
    },
    news19_i_t6_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Loaded Carry ID 14.07 Variation V.05 Bear Hug”, “Air Bike ID 9.05” и “Object Facing Burpee Over Object ID 10.02” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Loaded Carry ID 14.07 Variation V.05 Bear Hug”, “Air Bike ID 9.05” және “Object Facing Burpee Over Object ID 10.02” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Loaded Carry ID 14.07 Variation V.05 Bear Hug”, “Air Bike ID 9.05” and “Object Facing Burpee Over Object ID 10.02” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_i_t6_r1: {
      ru: 'Спортсмен не может покидать велотренажёр до завершения всех калорий.',
      kz: 'Спортшы барлық калорияны жинамай тұрып велотренажёрді тастап кете алмайды.',
      en: 'The athlete may not leave the bike until all calories are completed.'
    },

    // --- news19: пары, Тест 1 ---
    news19_p_t1_head: {
      ru: 'ТЕСТ 1: ВЫНОСЛИВОСТЬ',
      kz: 'ТЕСТ 1: ТӨЗІМДІЛІК',
      en: 'TEST 1: ENDURANCE'
    },
    news19_p_t1_box: {
      ru: '10 раундов на время:<br>(Партнёры чередуют раунды)<br>200-метровый забег<br>30 двойных прыжков через скакалку<br>250 метров на ски-эрге<br>Лимит времени: 25 минут',
      kz: 'Уақытқа 10 раунд:<br>(Серіктестер раундтарды кезектестіреді)<br>200 метр жүгіру<br>Арқанмен 30 қос секіру<br>Ски-эргте 250 метр<br>Уақыт шектеуі: 25 минут',
      en: '10 rounds for time:<br>(Partners alternate rounds)<br>200 m run<br>30 double unders<br>250 m ski erg<br>Time cap: 25 minutes'
    },
    news19_p_t1_flow: {
      ru: 'По сигналу старта спортсмен 1 выполняет 200-метровый забег вокруг трека, после чего 30 двойных прыжков через скакалку и 250 метров на ски-эрге. Когда спортсмен 1 завершает работу на ски-эрге, спортсмен 2 может начать свой забег. Спортсмен 2 выполняет 200-метровый забег, 30 двойных прыжков и 250 метров на ски-эрге, после чего спортсмен 1 может начать следующий раунд. Так продолжается до завершения 10 раундов. Таймер останавливается, когда спортсмен 2 пересекает финишную линию после финального отрезка на ски-эрге в 10-м раунде.',
      kz: 'Старт белгісімен 1-спортшы трек айналасында 200 метр жүгіреді, содан кейін арқанмен 30 қос секіру және ски-эргте 250 метр орындайды. 1-спортшы ски-эргтегі жұмысын аяқтағанда, 2-спортшы өз жүгірісін бастай алады. 2-спортшы 200 метр жүгіреді, 30 қос секіру және ски-эргте 250 метр орындайды, содан кейін 1-спортшы келесі раундты бастай алады. Осылайша 10 раунд аяқталғанша жалғасады. Таймер 2-спортшы 10-раундтағы соңғы ски-эрг кезеңінен кейін мәре сызығын кесіп өткенде тоқтайды.',
      en: 'At the start signal athlete 1 completes a 200 m run around the track, followed by 30 double unders and 250 m on the ski erg. When athlete 1 finishes the ski erg, athlete 2 may begin their run. Athlete 2 completes a 200 m run, 30 double unders and 250 m on the ski erg, after which athlete 1 may begin the next round. This continues until 10 rounds are completed. The clock stops when athlete 2 crosses the finish line after the final ski erg of round 10.'
    },
    news19_p_t1_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Skierg ID 9.07”, “Double Under ID 10.07” и “Run ID 9.01” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Skierg ID 9.07”, “Double Under ID 10.07” және “Run ID 9.01” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Skierg ID 9.07”, “Double Under ID 10.07” and “Run ID 9.01” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_p_t1_r1: {
      ru: 'Спортсмен не может покидать платформу ски-эрга, пока не завершён 250-метровый отрезок в каждом раунде.',
      kz: 'Спортшы әр раундтағы 250 метрлік кезең аяқталмайынша ски-эрг алаңын тастап кете алмайды.',
      en: 'The athlete may not leave the ski erg platform until the 250 m is completed in each round.'
    },
    news19_p_t1_r2: {
      ru: 'Скакалка должна вращаться вперёд при двойных прыжках.',
      kz: 'Қос секіру кезінде арқан алға қарай айналуы тиіс.',
      en: 'The rope must rotate forward during double unders.'
    },
    news19_p_t1_r3: {
      ru: 'Любые требования по передаче эстафеты будут уточнены на месте.',
      kz: 'Кезек ауыстыруға қатысты кез келген талаптар орнында нақтыланады.',
      en: 'Any handover requirements will be clarified on site.'
    },
    news19_p_t1_r4: {
      ru: 'Работающий спортсмен должен завершить полный раунд перед сменой. Спортсмены обязаны чередовать раунды.',
      kz: 'Жұмыс істеп жатқан спортшы ауыспас бұрын толық раундты аяқтауы тиіс. Спортшылар раундтарды кезектестіруге міндетті.',
      en: 'The working athlete must complete a full round before switching. Athletes must alternate rounds.'
    },

    // --- news19: пары, Тест 2 ---
    news19_p_t2_head: {
      ru: 'ТЕСТ 2: СИЛА',
      kz: 'ТЕСТ 2: КҮШ',
      en: 'TEST 2: STRENGTH'
    },
    news19_p_t2_box: {
      ru: 'На результат по весу:<br><br>Спортсмен 1:<br>5 минут на поиск максимума в комплексе: 1 взятие на грудь любым способом + 1 фронтальный присед<br><br>сразу после<br><br>Спортсмен 2:<br>5 минут на поиск максимума в становой тяге на 1 повторение<br><br>Результат: самый тяжёлый успешный комплекс спортсмена 1 + самый тяжёлый успешный подъём в становой тяге спортсмена 2',
      kz: 'Салмақ бойынша нәтижеге:<br><br>1-спортшы:<br>Кешендегі максимумды табуға 5 минут: 1 рет кез келген тәсілмен кеудеге көтеру + 1 алдыңғы отырып-тұру<br><br>бірден кейін<br><br>2-спортшы:<br>1 қайталаудағы өлі тартуда максимумды табуға 5 минут<br><br>Нәтиже: 1-спортшының ең ауыр сәтті кешені + 2-спортшының ең ауыр сәтті өлі тартуы',
      en: 'For load:<br><br>Athlete 1:<br>5 minutes to find a max complex: 1 clean, anyhow + 1 front squat<br><br>immediately followed by<br><br>Athlete 2:<br>5 minutes to find a 1-rep max deadlift<br><br>Score: athlete 1\'s heaviest successful complex + athlete 2\'s heaviest successful deadlift'
    },
    news19_p_t2_flow: {
      ru: 'По сигналу старта спортсмен 1 в течение 5 минут пытается установить максимальный вес в комплексе «1 взятие на грудь любым способом + 1 фронтальный присед». У него неограниченное количество попыток в течение 5 минут, он может увеличивать или уменьшать вес по своему усмотрению. По истечении 5 минут спортсмен 2 получает 5 минут на поиск максимума в становой тяге на 1 повторение.',
      kz: 'Старт белгісімен 1-спортшы 5 минут бойы «1 рет кез келген тәсілмен кеудеге көтеру + 1 алдыңғы отырып-тұру» кешенінде ең үлкен салмақты алуға тырысады. Оның 5 минут ішінде талпыныс саны шектелмейді, ол салмақты өз қалауынша арттыра немесе азайта алады. 5 минут өткен соң 2-спортшыға 1 қайталаудағы өлі тартуда максимумды табуға 5 минут беріледі.',
      en: 'At the start signal athlete 1 has 5 minutes to establish a max load on the complex “1 clean, anyhow + 1 front squat”. They have unlimited attempts within the 5 minutes and may increase or decrease the weight as they wish. After the 5 minutes, athlete 2 gets 5 minutes to find a 1-rep max deadlift.'
    },
    news19_p_t2_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Deadlift ID 2.01”, “Clean, Anyhow ID 3.01” и “Front Squat ID 1.03” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Deadlift ID 2.01”, “Clean, Anyhow ID 3.01” және “Front Squat ID 1.03” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Deadlift ID 2.01”, “Clean, Anyhow ID 3.01” and “Front Squat ID 1.03” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_p_t2_r1: {
      ru: 'Спортсмен может сделать столько попыток, сколько захочет, в течение 5 минут и менять вес по своему усмотрению.',
      kz: 'Спортшы 5 минут ішінде қалағанынша талпыныс жасай алады және салмақты өз қалауынша өзгерте алады.',
      en: 'The athlete may make as many attempts as they wish within the 5 minutes and may change the weight as they see fit.'
    },
    news19_p_t2_r2: {
      ru: 'Замки должны быть установлены снаружи всех дисков перед любой попыткой.',
      kz: 'Кез келген талпыныс алдында бекіткіштер барлық дискілердің сыртына орнатылуы тиіс.',
      en: 'Collars must be placed outside all plates before any attempt.'
    },
    news19_p_t2_r3: {
      ru: 'Все лишние диски должны находиться вне зоны подъёма перед любой попыткой.',
      kz: 'Кез келген талпыныс алдында барлық артық дискілер көтеру аймағынан тыс болуы тиіс.',
      en: 'All spare plates must be outside the lifting zone before any attempt.'
    },
    news19_p_t2_r4: {
      ru: 'Становая тяга начинается с пустого грифа, но взятия на грудь и фронтальные приседы могут начинаться с уже загруженной штанги.',
      kz: 'Өлі тарту бос гриптен басталады, ал кеудеге көтеру мен алдыңғы отырып-тұруды алдын ала жүктелген штангадан бастауға болады.',
      en: 'Deadlifts start from an empty barbell, but cleans and front squats may start from an already loaded barbell.'
    },
    news19_p_t2_r5: {
      ru: 'Спортсмены не могут помогать друг другу в смене веса, за исключением случая, описанного ниже.',
      kz: 'Спортшылар салмақ ауыстыруда бір-біріне көмектесе алмайды, төменде сипатталған жағдайдан басқа.',
      en: 'Athletes may not help each other change weights, except in the case described below.'
    },
    news19_p_t2_r6: {
      ru: 'Если спортсмен 1 закончил становую тягу раньше, он может помочь спортсмену 2 подготовить штангу для первого взятия на грудь. Но как только спортсмен 2 сделает первую попытку, спортсмен 1 больше не может помогать.',
      kz: 'Егер 1-спортшы өлі тартуды ерте аяқтаса, ол 2-спортшыға бірінші кеудеге көтеруге арналған штанганы дайындауға көмектесе алады. Бірақ 2-спортшы алғашқы талпынысын жасағаннан кейін 1-спортшы бұдан әрі көмектесе алмайды.',
      en: 'If athlete 1 finishes the deadlift early, they may help athlete 2 set up the barbell for the first clean. But once athlete 2 makes their first attempt, athlete 1 may no longer assist.'
    },
    news19_p_t2_r7: {
      ru: 'Спортсмен получает “no lift”, если роняет штангу за собой, даже если подъём в остальном выполнен успешно.',
      kz: 'Егер спортшы штанганы артына тастаса, көтеру басқа жағынан сәтті болса да “no lift” алады.',
      en: 'The athlete receives a “no lift” if they drop the barbell behind them, even if the lift was otherwise successful.'
    },
    news19_p_t2_r8: {
      ru: 'Если колено спортсмена касается пола, это считается “no lift”.',
      kz: 'Егер спортшының тізесі еденге тисе, бұл “no lift” болып саналады.',
      en: 'If the athlete\'s knee touches the floor, this counts as a “no lift”.'
    },
    news19_p_t2_r9: {
      ru: 'Подъём засчитывается только если выполнен в пределах 5 минут.',
      kz: 'Көтеру тек 5 минут шегінде орындалса ғана есептеледі.',
      en: 'A lift only counts if it is completed within the 5 minutes.'
    },
    news19_p_t2_r10: {
      ru: 'Если спортсмен получил “no rep” во фронтальном приседе, но не уронил штангу, он может продолжать выполнять фронтальные приседы, пока не выполнит засчитанный повтор, и получит зачёт за весь комплекс.',
      kz: 'Егер спортшы алдыңғы отырып-тұруда “no rep” алса, бірақ штанганы түсіріп алмаса, ол есептелген қайталауды орындағанша алдыңғы отырып-тұруды жалғастыра алады және бүкіл кешен үшін есеп алады.',
      en: 'If an athlete receives a “no rep” on the front squat but does not drop the barbell, they may continue performing front squats until they complete a good rep and receive credit for the whole complex.'
    },
    news19_p_t2_r11: {
      ru: 'Если спортсмен выполняет взятие на грудь в сед, после этого он должен выполнить дополнительный фронтальный присед. Сам сед во время взятия не засчитывается как повторение фронтального приседа.',
      kz: 'Егер спортшы кеудеге көтеруді отырып орындаса, одан кейін қосымша алдыңғы отырып-тұру жасауы тиіс. Көтеру кезіндегі отырудың өзі алдыңғы отырып-тұрудың қайталауы ретінде есептелмейді.',
      en: 'If an athlete performs a squat clean, they must then perform an additional front squat. The squat clean itself does not count as a front squat rep.'
    },
    news19_p_t2_r12: {
      ru: 'Пары «мужчина-женщина» будут использовать на станции штанги 20 кг и 15 кг. Мужчина должен использовать штангу 20 кг.',
      kz: '«Ер адам — әйел» жұптары станцияда 20 кг және 15 кг штангаларды пайдаланады. Ер адам 20 кг штанганы қолдануы тиіс.',
      en: 'Male-female pairs will use a 20 kg and a 15 kg barbell at the station. The man must use the 20 kg barbell.'
    },

    // --- news19: пары, Тест 3 ---
    news19_p_t3_box: {
      ru: 'Максимум повторений за 13 минут<br>3-6-9-12-15-18-21…<br><br>Отжимания в стойке на руках<br>Подтягивания<br>Прыжки через коробку',
      kz: '13 минутта барынша көп қайталау<br>3-6-9-12-15-18-21…<br><br>Қолда тұрып итерілу<br>Тартылу<br>Тумбадан асып секіру',
      en: 'Max reps in 13 minutes<br>3-6-9-12-15-18-21…<br><br>Handstand push-ups<br>Pull-ups<br>Box jump overs'
    },
    news19_p_t3_flow: {
      ru: 'По сигналу старта у спортсменов есть 13 минут, чтобы продвинуться в тесте как можно дальше. Работать может только один спортсмен за раз, но они могут меняться в любой момент и делить работу как угодно. Пара начинает с 3 отжиманий в стойке на руках, 3 подтягиваний и 3 прыжков через коробку. Затем возвращается к стене для отжиманий и выполняет 6 отжиманий, 6 подтягиваний и 6 прыжков через коробку. Так продолжается по схеме с добавлением 3 повторений каждого движения в каждом раунде до истечения времени. Результат пары — общее число выполненных повторений.',
      kz: 'Старт белгісімен спортшыларға тестте барынша алға жылжуға 13 минут беріледі. Бір уақытта тек бір спортшы жұмыс істей алады, бірақ олар кез келген сәтте ауыса алады және жұмысты қалауынша бөле алады. Жұп 3 рет қолда тұрып итерілуден, 3 тартылудан және 3 рет тумбадан асып секіруден бастайды. Содан кейін итерілу қабырғасына оралып, 6 итерілу, 6 тартылу және 6 секіру орындайды. Осылайша уақыт біткенше әр раундта әр қимылға 3 қайталаудан қосылып отырады. Жұптың нәтижесі — орындалған қайталаулардың жалпы саны.',
      en: 'At the start signal athletes have 13 minutes to get as far as possible through the test. Only one athlete may work at a time, but they may switch at any point and split the work however they like. The pair begins with 3 handstand push-ups, 3 pull-ups and 3 box jump overs. They then return to the wall for 6 handstand push-ups, 6 pull-ups and 6 box jump overs. The pattern continues, adding 3 reps of each movement every round until time expires. The pair\'s score is the total number of repetitions completed.'
    },
    news19_p_t3_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Handstand Push-up ID 12.01”, “Pull-up ID 7.04” и “Box Jump Over ID 10.05” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Handstand Push-up ID 12.01”, “Pull-up ID 7.04” және “Box Jump Over ID 10.05” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Handstand Push-up ID 12.01”, “Pull-up ID 7.04” and “Box Jump Over ID 10.05” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_p_t3_r1: {
      ru: 'Спортсмены могут либо запрыгивать на коробку, либо полностью перепрыгивать через неё. Если выбран первый вариант, обе ноги должны коснуться верхней части коробки на каждом повторении, после чего спортсмен должен сойти с другой стороны. Отталкивание назад не допускается. Если выбран второй вариант, ноги должны пройти над верхом коробки, а не обходить её сбоку ниже уровня коробки.',
      kz: 'Спортшылар тумбаның үстіне секіре алады немесе одан толық асып секіре алады. Бірінші нұсқа таңдалса, әр қайталауда екі аяқ та тумбаның үстіне тиюі керек, содан кейін спортшы екінші жағынан түсуі тиіс. Артқа серпілуге рұқсат етілмейді. Екінші нұсқа таңдалса, аяқтар тумбаның үстінен өтуі керек, оны бүйірінен, тумба деңгейінен төмен айналып өтуге болмайды.',
      en: 'Athletes may either jump onto the box or go completely over it. With the first option, both feet must touch the top of the box on every rep, after which the athlete must come down on the other side. Rebounding backwards is not permitted. With the second option, the feet must pass over the top of the box and may not travel around the side below box height.'
    },
    news19_p_t3_r2: {
      ru: 'Любые требования по передаче между спортсменами будут уточнены на месте.',
      kz: 'Спортшылар арасындағы ауысуға қатысты кез келген талаптар орнында нақтыланады.',
      en: 'Any requirements for the handover between athletes will be clarified on site.'
    },
    news19_p_t3_r3: {
      ru: 'Одновременно работает только 1 спортсмен.',
      kz: 'Бір уақытта тек 1 спортшы жұмыс істейді.',
      en: 'Only 1 athlete works at a time.'
    },
    news19_p_t3_r4: {
      ru: 'Спортсмены могут делить работу как угодно и меняться в любой момент.',
      kz: 'Спортшылар жұмысты қалауынша бөліп, кез келген сәтте ауыса алады.',
      en: 'Athletes may split the work however they like and switch at any point.'
    },
    news19_p_t3_r5: {
      ru: 'Нет минимального требования по объёму работы для каждого спортсмена, и не требуется, чтобы каждый спортсмен выполнял каждое движение.',
      kz: 'Әр спортшы үшін жұмыс көлемінің ең төменгі талабы жоқ және әр спортшының әр қимылды орындауы міндетті емес.',
      en: 'There is no minimum work requirement for each athlete, and each athlete is not required to perform every movement.'
    },

    // --- news19: пары, Тест 4 ---
    news19_p_test4: {
      ru: 'Тест 4 (Смешанная эстафета 1)',
      kz: 'Тест 4 (Аралас эстафета 1)',
      en: 'Test 4 (Mixed Relay 1)'
    },
    news19_p_t4_box: {
      ru: 'На время:<br>40-30-20-10<br><br>Калории на гребном тренажёре (работает один спортсмен за раз)<br>Синхронные рывки одной гантели над головой (22.5 кг/15 кг) (оба спортсмена работают одновременно)<br>Лимит времени: 12 минут',
      kz: 'Уақытқа:<br>40-30-20-10<br><br>Есу тренажёріндегі калория (бір уақытта бір спортшы жұмыс істейді)<br>Бір гантельді бас үстіне синхронды жұлқып көтеру (22.5 кг/15 кг) (екі спортшы бір уақытта жұмыс істейді)<br>Уақыт шектеуі: 12 минут',
      en: 'For time:<br>40-30-20-10<br><br>Calories on the rower (one athlete works at a time)<br>Synchronised single dumbbell snatches (22.5 kg/15 kg) (both athletes work at the same time)<br>Time cap: 12 minutes'
    },
    news19_p_t4_flow: {
      ru: 'По сигналу старта пара начинает гребной тренажёр на 40 калорий. Работает только один спортсмен за раз, они могут сменяться в любой момент. После завершения 40 калорий оба спортсмена переходят к гантелям и выполняют 40 синхронных рывков гантели. Затем они возвращаются к гребному тренажёру и как команда набирают 30 калорий, после чего выполняют ещё 30 синхронных рывков. Далее они проходят серии из 20 и 10 повторений, после чего пересекают линию финиша.',
      kz: 'Старт белгісімен жұп есу тренажёрінде 40 калориядан бастайды. Бір уақытта тек бір спортшы жұмыс істейді, олар кез келген сәтте ауыса алады. 40 калория аяқталған соң екі спортшы да гантельдерге ауысып, 40 синхронды жұлқып көтеру орындайды. Содан кейін олар есу тренажёріне оралып, команда ретінде 30 калория жинайды, одан кейін тағы 30 синхронды көтеру орындайды. Әрі қарай 20 және 10 қайталаудан тұратын серияларды өтіп, мәре сызығын кесіп өтеді.',
      en: 'At the start signal the pair begins with 40 calories on the rower. Only one athlete works at a time and they may switch at any point. After the 40 calories, both athletes move to the dumbbells and perform 40 synchronised dumbbell snatches. They then return to the rower and accumulate 30 calories as a team, followed by another 30 synchronised snatches. They then work through the sets of 20 and 10 before crossing the finish line.'
    },
    news19_p_t4_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Row ID 9.03” и “Snatch, Anyhow ID 4.01” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Row ID 9.03” және “Snatch, Anyhow ID 4.01” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Row ID 9.03” and “Snatch, Anyhow ID 4.01” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_p_t4_r1: {
      ru: 'Нет требования чередовать руки при рывках гантели, и спортсмены не обязаны использовать ту же руку, что и партнёр.',
      kz: 'Гантельді жұлқып көтеру кезінде қолды кезектестіру талабы жоқ, сондай-ақ спортшылар серіктесімен бірдей қолды пайдалануға міндетті емес.',
      en: 'There is no requirement to alternate arms on the dumbbell snatches, and athletes do not have to use the same arm as their partner.'
    },
    news19_p_t4_r2: {
      ru: 'Любые требования к смене на гребном тренажёре будут объяснены на месте.',
      kz: 'Есу тренажёріндегі ауысуға қатысты кез келген талаптар орнында түсіндіріледі.',
      en: 'Any requirements for switching on the rower will be explained on site.'
    },
    news19_p_t4_r3: {
      ru: 'Нет требования, чтобы гребли оба спортсмена, но они могут сменяться в любой момент.',
      kz: 'Екі спортшының да есуі міндетті емес, бірақ олар кез келген сәтте ауыса алады.',
      en: 'There is no requirement for both athletes to row, but they may switch at any point.'
    },
    news19_p_t4_r4: {
      ru: 'Пожалуйста, внимательно ознакомьтесь с документом по стандартам движений в части синхронности подъёма.',
      kz: 'Көтерудің синхрондылығына қатысты қимыл стандарттары құжатымен мұқият танысыңыз.',
      en: 'Please review the movement standards document carefully regarding the synchronisation of the lift.'
    },

    // --- news19: пары, Тест 5 ---
    news19_p_test5: {
      ru: 'Тест 5 (Смешанная эстафета 2)',
      kz: 'Тест 5 (Аралас эстафета 2)',
      en: 'Test 5 (Mixed Relay 2)'
    },
    news19_p_t5_head: {
      ru: 'ТЕСТ 5: Смешанная эстафета 2',
      kz: 'ТЕСТ 5: Аралас эстафета 2',
      en: 'TEST 5: Mixed Relay 2'
    },
    news19_p_t5_box: {
      ru: '100 бросков мяча в мишень (9 кг/6 кг на 3 м/2.75 м)<br>*Партнёры должны чередоваться каждые 10 повторений<br>сразу после<br>Трастеры с вормом<br>Синхронные берпи через ворм<br>(схема повторений ниже по дивизионам)<br>*10 метров ходьбы выпадами с вормом после каждого раунда<br>Лимит времени: 15 минут<br><br>Пары мужчина-мужчина: 16-14-12<br>Пары мужчина-женщина: 12-10-8<br>Пары женщина-женщина: 8-6-4',
      kz: 'Нысанаға 100 доп лақтыру (9 кг/6 кг, 3 м/2.75 м биіктікке)<br>*Серіктестер әр 10 қайталау сайын ауысуы тиіс<br>бірден кейін<br>Вормен трастер<br>Вормнан асып синхронды берпи<br>(қайталау схемасы төменде дивизиондар бойынша)<br>*Әр раундтан кейін вормен 10 метр атылып жүру<br>Уақыт шектеуі: 15 минут<br><br>Ер адам — ер адам жұптары: 16-14-12<br>Ер адам — әйел жұптары: 12-10-8<br>Әйел — әйел жұптары: 8-6-4',
      en: '100 wall balls (9 kg/6 kg to 3 m/2.75 m)<br>*Partners must alternate every 10 reps<br>immediately followed by<br>Worm thrusters<br>Synchronised burpees over the worm<br>(rep scheme by division below)<br>*10 m worm walking lunge after every round<br>Time cap: 15 minutes<br><br>Male-male pairs: 16-14-12<br>Male-female pairs: 12-10-8<br>Female-female pairs: 8-6-4'
    },
    news19_p_t5_flow: {
      ru: 'По сигналу старта спортсмены начинают 100 бросков мяча в мишень. Они используют одну и ту же мишень и мяч (кроме пар мужчина-женщина) и сменяют друг друга каждые 10 повторений. После 100-го броска пара переходит к ворму и начинает первый раунд трастеров с вормом и синхронных берпи через ворм. После последнего берпи они поднимают ворм и проходят 10 метров ходьбы выпадами. Затем начинается следующий раунд трастеров с вормом и синхронных берпи, после чего снова 10 метров выпадами. В конце они выполняют финальный раунд трастеров и берпи, после чего — финальные 10 метров выпадами, и затем пересекают линию финиша.',
      kz: 'Старт белгісімен спортшылар нысанаға 100 доп лақтыруды бастайды. Олар бір нысана мен бір допты пайдаланады (ер адам — әйел жұптарынан басқа) және әр 10 қайталау сайын ауысады. 100-ші лақтырудан кейін жұп вормға ауысып, вормен трастер мен вормнан асып синхронды берпидің бірінші раундын бастайды. Соңғы берпиден кейін олар вормды көтеріп, 10 метр атылып жүреді. Содан кейін вормен трастер мен синхронды берпидің келесі раунды басталады, одан кейін тағы 10 метр атылып жүру. Соңында олар трастер мен берпидің қорытынды раундын орындайды, одан кейін соңғы 10 метр атылып жүріп, мәре сызығын кесіп өтеді.',
      en: 'At the start signal athletes begin 100 wall balls. They use the same target and ball (except male-female pairs) and swap every 10 reps. After the 100th wall ball the pair moves to the worm and begins the first round of worm thrusters and synchronised burpees over the worm. After the last burpee they pick up the worm and cover 10 m of walking lunges. The next round of worm thrusters and synchronised burpees then begins, followed by another 10 m lunge. Finally they complete the last round of thrusters and burpees, followed by the final 10 m lunge, and then cross the finish line.'
    },
    news19_p_t5_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Wall Ball ID 15.04”, “Worm Thruster ID 16.05”, “Burpee Over Object ID 10.01” и “Walking Lunge ID 15.06” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Wall Ball ID 15.04”, “Worm Thruster ID 16.05”, “Burpee Over Object ID 10.01” және “Walking Lunge ID 15.06” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Wall Ball ID 15.04”, “Worm Thruster ID 16.05”, “Burpee Over Object ID 10.01” and “Walking Lunge ID 15.06” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_p_t5_r1: {
      ru: 'Спортсмены должны чередоваться каждые 10 повторений в бросках мяча в мишень.',
      kz: 'Спортшылар нысанаға доп лақтыруда әр 10 қайталау сайын ауысуы тиіс.',
      en: 'Athletes must alternate every 10 reps on the wall balls.'
    },
    news19_p_t5_r2: {
      ru: 'Мужчины бросают в мишень на высоте 3 метра, а женщины — на 2.75 метра.',
      kz: 'Ер адамдар 3 метр биіктіктегі нысанаға, ал әйелдер 2.75 метр биіктіктегі нысанаға лақтырады.',
      en: 'Men throw to a 3 m target and women to a 2.75 m target.'
    },
    news19_p_t5_r3: {
      ru: 'Пара может удерживать ворм любым способом во время ходьбы выпадами с вормом.',
      kz: 'Жұп вормен атылып жүру кезінде вормды кез келген тәсілмен ұстай алады.',
      en: 'The pair may hold the worm any way during the worm walking lunge.'
    },

    // --- news19: пары, Тест 6 ---
    news19_p_test6: {
      ru: 'Тест 6 (Командная стратегия)',
      kz: 'Тест 6 (Командалық стратегия)',
      en: 'Test 6 (Team Strategy)'
    },
    news19_p_t6_box: {
      ru: 'На максимум повторений:<br>90 секунд AMRAP:<br>Взятия штанги на грудь в стойку (65 кг/45 кг)<br>затем<br>90 секунд AMRAP:<br>Выходы силой на перекладине<br>затем<br>90 секунд AMRAP:<br>Носки к кольцам<br>затем<br>90 секунд AMRAP:<br>Ходьба в стойке на руках<br>*Каждый спортсмен должен отработать 2 станции',
      kz: 'Барынша көп қайталауға:<br>90 секунд AMRAP:<br>Штанганы тұрып кеудеге көтеру (65 кг/45 кг)<br>содан кейін<br>90 секунд AMRAP:<br>Турникте күшпен шығу<br>содан кейін<br>90 секунд AMRAP:<br>Аяқ ұшын сақиналарға тигізу<br>содан кейін<br>90 секунд AMRAP:<br>Қолда тұрып жүру<br>*Әр спортшы 2 станцияда жұмыс істеуі тиіс',
      en: 'For max reps:<br>90 second AMRAP:<br>Power cleans (65 kg/45 kg)<br>then<br>90 second AMRAP:<br>Bar muscle-ups<br>then<br>90 second AMRAP:<br>Toes through rings<br>then<br>90 second AMRAP:<br>Handstand walk<br>*Each athlete must work 2 stations'
    },
    news19_p_t6_flow: {
      ru: 'Этот тест состоит из 4 отрезков по 90 секунд. Работать может только 1 спортсмен за раз, и он должен работать все 90 секунд. Каждый спортсмен выполняет 2 AMRAP. Они могут идти подряд, но это не обязательно. Сумма всех повторений по всем AMRAP составляет командный результат.',
      kz: 'Бұл тест 90 секундтан тұратын 4 кезеңнен құралады. Бір уақытта тек 1 спортшы жұмыс істей алады және ол толық 90 секунд бойы жұмыс істеуі тиіс. Әр спортшы 2 AMRAP орындайды. Олар қатарынан жүруі мүмкін, бірақ бұл міндетті емес. Барлық AMRAP бойынша қайталаулардың қосындысы командалық нәтижені құрайды.',
      en: 'This test consists of 4 intervals of 90 seconds. Only 1 athlete may work at a time, and they must work for the full 90 seconds. Each athlete completes 2 AMRAPs. These may be back to back, but that is not required. The sum of all reps across all AMRAPs is the team score.'
    },
    news19_p_t6_std: {
      ru: 'Полные стандарты движений находятся в документации Международной федерации функционального фитнеса в разделах “Power Clean ID 3.02”, “Bar Muscle-up ID 7.07”, “Toes Through Rings ID 8.01” и “Handstand Walk ID 12.03” по ссылке <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      kz: 'Қимылдардың толық стандарттары Халықаралық функционалдық фитнес федерациясының құжаттамасында “Power Clean ID 3.02”, “Bar Muscle-up ID 7.07”, “Toes Through Rings ID 8.01” және “Handstand Walk ID 12.03” бөлімдерінде берілген, сілтеме: <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.',
      en: 'Full movement standards can be found in the International Functional Fitness Federation documentation under “Power Clean ID 3.02”, “Bar Muscle-up ID 7.07”, “Toes Through Rings ID 8.01” and “Handstand Walk ID 12.03” at <a class="movement-link" href="https://functionalfitness.sport/sport/movement-standards/" target="_blank" rel="noopener">[Movement standards]</a>.'
    },
    news19_p_t6_r1: {
      ru: 'Минимальная непрерывная дистанция для ходьбы в стойке на руках — 2.5 метра.',
      kz: 'Қолда тұрып жүрудің ең аз үзіліссіз қашықтығы — 2.5 метр.',
      en: 'The minimum unbroken distance for the handstand walk is 2.5 m.'
    },
    news19_p_t6_r2: {
      ru: 'Каждые 2.5 метра, пройденные в ходьбе на руках, засчитываются как 1 повторение.',
      kz: 'Қолда жүруде өтілген әр 2.5 метр 1 қайталау ретінде есептеледі.',
      en: 'Every 2.5 m covered in the handstand walk counts as 1 repetition.'
    },
    news17_card_title: {
      ru: 'iF3 получила жалобу от Финской организации функционального фитнеса (Fin2f)!',
      kz: 'iF3 Финляндиялық Functional Fitness ұйымынан шағым алды (Fin2f)!',
      en: 'iF3 received a complaint from Finnish Functional Fitness (Fin2f)!'
    },
    news17_card_excerpt: {
      ru: 'с обвинениями в нескольких нарушениях Кодекса этики iF3 со стороны тренера юниорской сборной Швеции...',
      kz: 'Швеция жасөспірім командасының бапкерінің iF3 әдеп кодексінің бірнеше талаптарын бұзғаны туралы айыптаулар...',
      en: 'with allegations of multiple breaches of the iF3 Code of Ethics by the coach of the Swedish junior national team...'
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
    },
    news16_card_title: {
      ru: 'iF3 провела выборы на должность вице-президента!',
      kz: 'iF3 вице-президенттік қызметке сайлау өткізді!',
      en: 'iF3 held elections for the vice-president position!'
    },
    news16_card_excerpt: {
      ru: 'После нескольких туров голосования ни один кандидат в вице-президенты не набрал явного большинства голосов...',
      kz: 'Бірнеше дауыс беру кезеңінен кейін ешбір кандидат вице-президенттікке айқын көпшілік дауыс жинамады...',
      en: 'After several rounds of voting, no candidate for vice-president gained a clear majority of votes...'
    },
    news17_heading: {
      ru: 'Отчёт Международной федерации функционального фитнеса по жалобе на этические нарушения от финской Functional Fitness',
      kz: 'iF3 халықаралық федерациясының Финляндиялық Functional Fitness ұйымының этикалық бұзушылық туралы шағымы бойынша есебі',
      en: 'iF3 report on complaint of ethical breaches from Finnish Functional Fitness'
    },
    news17_subtitle: {
      ru: 'Автор: iF3 — 24 февраля 2026 года — Вторник, 24 февраля 2026 года',
      kz: 'Автор: iF3 — 24 ақпан 2026 ж. — Сейсенбі, 24 ақпан 2026 ж.',
      en: 'Author: iF3 — 24 February 2026 — Tuesday, 24 February 2026'
    },
    news17_summary_heading: {
      ru: 'Краткое изложение фактов',
      kz: 'Жайыптама',
      en: 'Summary of facts'
    },
    news17_para_1: {
      ru: '31 декабря 2025 года iF3 получила жалобу от Финской организации функциональной фитнеса (Fin2f) с обвинениями в нескольких нарушениях Кодекса этики iF3 со стороны тренера юниорской сборной Швеции во время афтепати чемпионата мира iF3 2025. iF3 пришла к выводу, что в жалобе достаточно информации для начала расследования.',
      kz: '2025 жылғы 31 желтоқсанда iF3 Финляндиялық Functional Fitness ұйымынан (Fin2f) шағым қабылдады. Шағымда iF3 2025 жылғы әлем чемпионатына қатысты афтепати кезінде Швеция жасөспірім командасының бапкерінің бірнеше этикалық нормаларды бұзғаны айтылған. iF3 шағымда тергеуді бастауға жеткілікті мәлімет бар деп анықтады.',
      en: 'On 31 December 2025 iF3 received a complaint from Finnish Functional Fitness (Fin2f) alleging multiple breaches of the iF3 Code of Ethics by the coach of the Swedish junior national team during the after-party of the iF3 World Championship 2025. iF3 concluded there was sufficient information to open an investigation.'
    },
    news17_para_2: {
      ru: 'iF3 уведомила Шведскую федерацию функционального фитнеса (Swe3f) и провела с ней встречу для подтверждения статуса тренера и других деталей. Были взяты интервью у тренера и нескольких финских спортсменов. По итогам всех бесед стороны сходятся в том, что алкоголь был получен и употреблялся несовершеннолетними спортсменами из Финляндии и Швеции во время афтепати. Стороны расходятся в деталях приобретения алкоголя, но установлено, что тренер, присутствовавший и курировавший спортсменов, знал о факте употребления и не предпринял действий для предотвращения.',
      kz: 'iF3 Швеция федерациясын (Swe3f) хабардар етіп, бапкердің мәртебесін және оқиға барысын растау үшін кездесу өткізді. Бапкер мен бірнеше фин спортшылардан сұхбат алынды. Барлық тараптар жасөспірім фин және швед спортшылардың афтепати кезінде алкоголь алғаны және тұтынғаны туралы келіседі. Алкогольдің қалай алынғаны бойынша пікірлер әртүрлі, алайда бапкердің бұл жайдан хабары бар екені және оларды тоқтатпағаны анықталды.',
      en: 'iF3 informed the Swedish federation (Swe3f) and met to confirm the coach\'s status and role. Interviews were conducted with the coach and several Finnish athletes. All parties agreed that alcohol was obtained and consumed by underage athletes from Finland and Sweden during the after-party. Parties disagreed on how the alcohol was procured, but it was established that the coach — an adult supervising the athletes — was aware of the consumption and did not prevent it.'
    },
    news17_para_3: {
      ru: 'Раздел F.3 Кодекса этики iF3 запрещает одобрение употребления алкоголя несовершеннолетними лицами, официально связанными с национальными федерациями iF3. По результатам расследования iF3 посчитала, что поведение тренера подпадает под нарушение раздела F.3.',
      kz: 'iF3 этика кодексінің F.3 бөлімі кәмелетке толмағандардың алкоголь тұтынуын мақұлдауды тыйады. Тергеу нәтижесі бойынша бапкердің әрекеті F.3 бөлігін бұзады деп табылды.',
      en: 'Section F.3 of the iF3 Code of Ethics prohibits any person officially connected with a national federation from endorsing underage drinking. Based on the investigation iF3 found the coach\'s conduct to be a breach of Section F.3.'
    },
    news17_para_4: {
      ru: 'Также в жалобе было указано на возможное сексуальное домогательство (раздел H.3) в унисекс-туалете во время афтепати. iF3 установила, что на момент инцидента заявитель не был спортсменом, тренером, волонтёром или сотрудником мероприятия, и потому iF3 не имеет юрисдикции по этой части жалобы. Тем не менее iF3 довела факты до сведения Swe3f и Fin2f для возможного дальнейшего рассмотрения на национальном уровне.',
      kz: 'Шағымда сондай-ақ унисекс дәретханада сексуалдық қысым көрсету туралы айтылған. Алайда шағымданған адам сол уақытта жарысқа тікелей қатыспағандықтан, iF3 бұл бөлік бойынша юрисдикцияға ие емес. iF3 осы фактілерді Swe3f пен Fin2f-ге жеткізді.',
      en: 'The complaint also alleged sexual harassment in a unisex toilet during the after-party (Section H.3). iF3 determined it lacked jurisdiction over this part because the complainant was not an athlete, coach, volunteer or staff member at the event. iF3 shared the facts with Swe3f and Fin2f for any national-level consideration.'
    },
    news17_sanctions_heading: {
      ru: 'Санкции',
      kz: 'Жазалар',
      en: 'Sanctions'
    },
    news17_para_5: {
      ru: 'Тренер юниорской сборной Швеции отстраняется от участия в мероприятиях iF3 и любых мероприятиях, санкционированных членами национальных федераций iF3, на срок 3 года с 16 февраля 2026 по 16 февраля 2029. При успешном прохождении предписанного курса SafeSport срок санкции может быть сокращён до 2 лет.',
      kz: 'Швеция жасөспірім командасының бапкері 2026 жылғы 16 ақпандан 2029 жылғы 16 ақпанға дейін iF3 іс-шараларынан және ұлттық федерациялардың санкциялаған іс-шараларынан 3 жылға шеттетілді. SafeSport курсын өту арқылы жазаның мерзімі 2 жылға қысқаруы мүмкін.',
      en: 'The Swedish junior national team coach is suspended from iF3 events and any events sanctioned by iF3 member national federations for 3 years from 16 February 2026 until 16 February 2029. Completion of the iF3-prescribed SafeSport training may reduce the sanction to 2 years.'
    },
    news17_para_6: {
      ru: 'Несовершеннолетним спортсменам из Финляндии и Швеции будет вынесено предупреждение и предписано пройти обучение по влиянию алкоголя на спортивные результаты перед следующим участием в соревнованиях под эгидой iF3 или национальной федерации. iF3 будет сотрудничать с Fin2f и Swe3f для организации обучения.',
      kz: 'Кәмелетке толмаған фин және швед спортшыларына ескерту беріледі және олар болашақта iF3 немесе ұлттық федерация жарысына қатыспас бұрын алкогольдің спорттық нәтижелерге әсері туралы оқудан өтуі тиіс. iF3 Fin2f және Swe3f-пен ынтымақтастық жасайтын болады.',
      en: 'Underage athletes from Finland and Sweden will receive warnings and must complete education on the effects of alcohol on sporting performance before future participation in iF3 or national federation events. iF3 will work with Fin2f and Swe3f to ensure timely completion of the recommended education.'
    },
    news17_para_7: {
      ru: 'Имена несовершеннолетних участников не будут разглашаться. Личность тренера будет передана соответствующим национальным федерациям в объёме, необходимом для поддержания санкций.',
      kz: 'Кәмелетке толмағандардың жеке мәліметтері жарияланбайды. Бапкердің тұлғасы ұлттық федерацияларға санкцияларды орындауға қажетті дәрежеде беріледі.',
      en: 'Identities of underage participants will not be disclosed. The identity of the coach will be provided to the relevant national federations to the extent necessary to enforce the sanction.'
    },

    // Карточка news20 на странице новостей
    news20_card_title: {
      ru: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — ИТОГИ!',
      kz: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — ҚОРЫТЫНДЫЛАР!',
      en: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — RESULTS!'
    },
    news20_card_excerpt: {
      ru: 'Победители и призёры во всех дивизионах...',
      kz: 'Барлық дивизиондардағы жеңімпаздар мен жүлдегерлер...',
      en: 'Winners and medalists in every division...'
    },

    // Страница news20 — итоги ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026
    news20_meta_title: {
      ru: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — итоги и победители',
      kz: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — қорытындылар мен жеңімпаздар',
      en: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — Results and Winners'
    },
    news20_kicker: {
      ru: 'Итоги чемпионата',
      kz: 'Чемпионат қорытындысы',
      en: 'Championship results'
    },
    news20_title: {
      ru: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — ИТОГИ',
      kz: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — ҚОРЫТЫНДЫЛАР',
      en: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — RESULTS'
    },
    news20_subtitle: {
      ru: 'Победители и призёры во всех дивизионах',
      kz: 'Барлық дивизиондардағы жеңімпаздар мен жүлдегерлер',
      en: 'Winners and medalists in every division'
    },
    news20_intro_1: {
      ru: 'Поздравляем всех атлетов с завершением чемпионата! 🔥',
      kz: 'Барлық спортшыларды чемпионаттың аяқталуымен құттықтаймыз! 🔥',
      en: 'Congratulations to all the athletes on the completion of the championship! 🔥'
    },
    news20_intro_2: {
      ru: 'Спасибо за силу, характер и невероятную борьбу до самого конца! 💪',
      kz: 'Күш-қуатыңыз, мінезіңіз және соңына дейін жалғасқан керемет күресіңіз үшін рахмет! 💪',
      en: 'Thank you for your strength, determination, and incredible fight until the very end! 💪'
    },
    news20_label_gallery: {
      ru: 'Фотоотчёт',
      kz: 'Фотоесеп',
      en: 'Photo gallery'
    },
    news20_gallery_heading: {
      ru: 'Фото с Чемпионата Азии',
      kz: 'Азия чемпионатының фотосуреттері',
      en: 'Photos from the Asian Championship'
    },
    news20_more_photos: {
      ru: 'Больше фотографий тут...',
      kz: 'Көбірек фотосуреттер мұнда...',
      en: 'More photos here...'
    },
    news20_label_results: {
      ru: 'Результаты',
      kz: 'Нәтижелер',
      en: 'Results'
    },
    news20_place_1: {
      ru: '1 место',
      kz: '1-орын',
      en: '1st place'
    },
    news20_place_2: {
      ru: '2 место',
      kz: '2-орын',
      en: '2nd place'
    },
    news20_place_3: {
      ru: '3 место',
      kz: '3-орын',
      en: '3rd place'
    },
    news20_outro_1: {
      ru: '🔥 Поздравляем победителей и призёров!',
      kz: '🔥 Жеңімпаздар мен жүлдегерлерді құттықтаймыз!',
      en: '🔥 Congratulations to all the winners and medalists!'
    },
    news20_outro_2: {
      ru: 'Спасибо каждому атлету за эту невероятную борьбу! 🇰🇿🌏',
      kz: 'Осындай керемет күрес үшін әрбір спортшыға рахмет! 🇰🇿🌏',
      en: 'Thank you to every athlete for this incredible fight! 🇰🇿🌏'
    },
    news20_outro_3: {
      ru: 'Спасибо каждому, кто стал частью этого спортивного праздника!',
      kz: 'Осы спорт мерекесінің бір бөлігі болған әрбір адамға рахмет!',
      en: 'Thank you to everyone who became a part of this celebration of sport!'
    },
    news20_outro_4: {
      ru: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — это было мощно!',
      kz: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — бұл керемет болды!',
      en: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 — that was powerful!'
    },
    news20_label_team: {
      ru: 'Общекомандный зачёт',
      kz: 'Жалпыкомандалық есеп',
      en: 'Overall team standings'
    },
    news20_team_heading: {
      ru: 'Итоги общекомандного зачёта',
      kz: 'Жалпыкомандалық есеп қорытындысы',
      en: 'Overall team standings'
    },
    news20_team_p1: {
      ru: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 завершён.',
      kz: 'ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 аяқталды.',
      en: 'The ASIAN FUNCTIONAL FITNESS CHAMPIONSHIP 2026 has come to a close.'
    },
    news20_team_p2: {
      ru: 'По итогам чемпионата места в общекомандном зачёте распределились следующим образом:',
      kz: 'Чемпионат қорытындысы бойынша жалпыкомандалық есептегі орындар былайша бөлінді:',
      en: 'Based on the results of the championship, the overall team standings are as follows:'
    },
    news20_team_kz: {
      ru: 'Казахстан',
      kz: 'Қазақстан',
      en: 'Kazakhstan'
    },
    news20_team_ir: {
      ru: 'Иран',
      kz: 'Иран',
      en: 'Iran'
    },
    news20_team_jo: {
      ru: 'Иордания',
      kz: 'Иордания',
      en: 'Jordan'
    },
    news20_team_p3: {
      ru: 'Для нас, как организаторов чемпионата, особенно приятно, что сборная Казахстана заняла первое место в общекомандном зачёте.',
      kz: 'Чемпионат ұйымдастырушылары ретінде біз үшін Қазақстан құрамасының жалпыкомандалық есепте бірінші орын алғаны ерекше қуанышты.',
      en: 'As the organisers of the championship, we are especially proud that the national team of Kazakhstan took first place in the overall team standings.'
    },
    news20_team_p4: {
      ru: 'Благодарим все национальные сборные и каждого атлета за участие, достойную конкуренцию и спортивный дух.',
      kz: 'Барлық ұлттық құрамаларға және әрбір спортшыға қатысқаны, лайықты бәсекесі мен спорттық рухы үшін алғыс айтамыз.',
      en: 'We thank all the national teams and every athlete for their participation, worthy competition and sporting spirit.'
    },
    news20_team_p5: {
      ru: 'Отдельная благодарность судьям, волонтёрам и всей команде, которая работала над проведением чемпионата.',
      kz: 'Төрешілерге, еріктілерге және чемпионатты өткізу үстінде жұмыс істеген бүкіл командаға айрықша алғыс.',
      en: 'Special thanks to the judges, volunteers and the entire team who worked on running the championship.'
    },
    news20_team_p6: {
      ru: 'И, конечно, спасибо нашим спонсорам и партнёрам за поддержку и доверие. Благодаря совместной работе мы смогли провести этот чемпионат и принять участников из разных стран Азии. 🤝',
      kz: 'Әрине, демеушілеріміз бен серіктестерімізге қолдау мен сенім үшін рахмет. Бірлескен жұмыстың арқасында біз осы чемпионатты өткізіп, Азияның түрлі елдерінен қатысушыларды қабылдай алдық. 🤝',
      en: 'And, of course, thank you to our sponsors and partners for their support and trust. Thanks to our joint work we were able to host this championship and welcome participants from across Asia. 🤝'
    }
  };

  // Функция применения переводов
  function applyTranslations(lang) {
    document.querySelectorAll('[data-translate], [data-translate-html]').forEach(el => {
      const key = el.getAttribute('data-translate') || el.getAttribute('data-translate-html');
      if (translations[key] && translations[key][lang]) {
        if (el.hasAttribute('data-translate-html')) {
          el.innerHTML = translations[key][lang];
        } else {
          el.textContent = translations[key][lang];
        }
      }
    });
    if (document.documentElement) {
      document.documentElement.lang = lang;
    }
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
