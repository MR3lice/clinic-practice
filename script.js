/* =========================================================
   Noor Skin Clinic — language system
   - All page text lives in the `translations` object below.
   - Elements with data-i18n="key" get their text from it.
   - The visitor's choice is saved in localStorage (the
     browser's small built-in storage) so it is remembered.
   ========================================================= */
(function () {
  'use strict';

  var STORAGE_KEY = 'noor-lang';
  var WHATSAPP_NUMBER = '97300000000'; // dummy number — this is a fictional clinic

  var translations = {
    en: {
      metaTitle: 'Noor Skin Clinic | Bahrain',
      metaDescription: 'Noor Skin Clinic — a fictional skin and beauty clinic in Bahrain. Demo website.',
      brand: 'Noor Skin Clinic',
      switchLabel: 'العربية',
      switchAria: 'التبديل إلى العربية',
      heroEyebrow: 'Skin & Beauty Clinic · Bahrain',
      // Headline is split in three so the middle word can be coloured.
      heroTitleBefore: 'Healthy, ',
      heroTitleHighlight: 'glowing',
      heroTitleAfter: ' skin starts here',
      heroText: 'Expert skin care by licensed specialists, in a calm and modern clinic.',
      heroBook: 'Book now',
      heroPrices: 'View prices',
      waMessage: 'Hello Noor Skin Clinic, I would like to book an appointment.',
      waFloatLabel: 'Book on WhatsApp',
      servicesTitle: 'Services & Prices',
      svc1Name: 'Dermatologist consultation',
      svc1Desc: 'A full skin assessment and a personal treatment plan.',
      svc1Price: 'BHD 20',
      svc1Time: '30 min',
      svc2Name: 'Deep hydrating facial',
      svc2Desc: 'Cleanses, exfoliates and hydrates for fresh, glowing skin.',
      svc2Price: 'BHD 35',
      svc2Time: '60 min',
      svc3Name: 'Chemical peel',
      svc3Desc: 'Helps with acne, dark spots and uneven skin tone.',
      svc3Price: 'BHD 45',
      svc3Time: '45 min',
      svc4Name: 'Microneedling',
      svc4Desc: 'Improves acne scars, fine lines and skin texture.',
      svc4Price: 'BHD 70',
      svc4Time: '60 min',
      svc5Name: 'Laser hair removal',
      svc5Desc: 'Long-lasting hair reduction with a modern, gentle laser.',
      svc5Price: 'from BHD 25 / area',
      svc5Time: '15–60 min',
      svc6Name: 'Anti-wrinkle injections',
      svc6Desc: 'Softens expression lines for a natural, refreshed look.',
      svc6Price: 'from BHD 85 / area',
      svc6Time: '30 min',
      servicesNote: 'Prices are a guide and are confirmed at your consultation.',
      contactTitle: 'Hours & Location',
      contactPlaceholder: 'Opening hours and address — coming in Module 7',
      footer: '© Noor Skin Clinic — fictional demo website.'
    },
    ar: {
      metaTitle: 'عيادة نور للبشرة | البحرين',
      metaDescription: 'عيادة نور للبشرة — عيادة خيالية للعناية بالبشرة والتجميل في البحرين. موقع تجريبي.',
      brand: 'عيادة نور للبشرة',
      switchLabel: 'English',
      switchAria: 'Switch to English',
      heroEyebrow: 'عيادة البشرة والتجميل · البحرين',
      // "و" stays uncoloured; it never joins the next letter, so splitting is safe.
      heroTitleBefore: 'بشرة صحية و',
      heroTitleHighlight: 'مشرقة',
      heroTitleAfter: ' تبدأ من هنا',
      heroText: 'عناية متخصصة بالبشرة على أيدي أطباء مرخّصين، في عيادة هادئة وحديثة.',
      heroBook: 'احجز موعدك',
      heroPrices: 'عرض الأسعار',
      waMessage: 'مرحبًا عيادة نور للبشرة، أود حجز موعد.',
      waFloatLabel: 'احجز عبر واتساب',
      servicesTitle: 'الخدمات والأسعار',
      svc1Name: 'استشارة طبيب جلدية',
      svc1Desc: 'تقييم شامل للبشرة وخطة علاج مناسبة لك.',
      svc1Price: '20 د.ب',
      svc1Time: '30 دقيقة',
      svc2Name: 'تنظيف وترطيب عميق للبشرة',
      svc2Desc: 'تنظيف وتقشير وترطيب لبشرة منتعشة ومشرقة.',
      svc2Price: '35 د.ب',
      svc2Time: '60 دقيقة',
      svc3Name: 'التقشير الكيميائي',
      svc3Desc: 'يساعد في علاج حب الشباب والبقع الداكنة وتوحيد لون البشرة.',
      svc3Price: '45 د.ب',
      svc3Time: '45 دقيقة',
      svc4Name: 'الوخز بالإبر الدقيقة (مايكرونيدلنغ)',
      svc4Desc: 'يحسّن آثار حب الشباب والخطوط الدقيقة وملمس البشرة.',
      svc4Price: '70 د.ب',
      svc4Time: '60 دقيقة',
      svc5Name: 'إزالة الشعر بالليزر',
      svc5Desc: 'تقليل الشعر لفترة طويلة بجهاز ليزر حديث ولطيف.',
      svc5Price: 'ابتداءً من 25 د.ب للمنطقة',
      svc5Time: 'من 15 إلى 60 دقيقة',
      svc6Name: 'حقن مضادة للتجاعيد',
      svc6Desc: 'تخفف خطوط التعبير لمظهر طبيعي ومنتعش.',
      svc6Price: 'ابتداءً من 85 د.ب للمنطقة',
      svc6Time: '30 دقيقة',
      servicesNote: 'الأسعار إرشادية، ويتم تأكيدها خلال الاستشارة.',
      contactTitle: 'ساعات العمل والموقع',
      contactPlaceholder: 'ساعات العمل والعنوان — قريبًا في الوحدة 7',
      footer: '© عيادة نور للبشرة — موقع تجريبي خيالي.'
    }
  };

  var currentLang = 'en';

  /* --- Saving / reading the choice (wrapped in try/catch because
         some private-browsing modes block storage) --- */
  function getSavedLang() {
    try {
      var lang = localStorage.getItem(STORAGE_KEY);
      return translations[lang] ? lang : null;
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* Storage blocked: the site still works, it just won't remember. */
    }
  }

  /* --- Put the chosen language on the page --- */
  function applyLanguage(lang) {
    var t = translations[lang];
    var root = document.documentElement;

    currentLang = lang;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // WhatsApp links: add the ready-made message in the current language.
    // encodeURIComponent makes spaces and Arabic letters safe inside a web address.
    var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(t.waMessage);
    document.querySelectorAll('[data-whatsapp]').forEach(function (link) {
      link.href = waUrl;
    });
    var waFloat = document.getElementById('wa-float');
    if (waFloat) {
      waFloat.setAttribute('aria-label', t.waFloatLabel);
    }

    document.title = t.metaTitle;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', t.metaDescription);
    }

    // The header button always shows the OTHER language.
    var switchBtn = document.getElementById('lang-switch');
    if (switchBtn) {
      switchBtn.textContent = t.switchLabel;
      switchBtn.setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
      switchBtn.setAttribute('aria-label', t.switchAria);
    }
  }

  function setLanguage(lang) {
    applyLanguage(lang);
    saveLang(lang);
  }

  /* --- First-visit language screen --- */
  var picker = document.getElementById('lang-picker');
  var pageParts = document.querySelectorAll('.site-header, main, .site-footer, .wa-float');

  function openPicker() {
    picker.hidden = false;
    document.body.classList.add('no-scroll');
    // `inert` stops keyboard focus from reaching the page behind the screen.
    pageParts.forEach(function (el) { el.inert = true; });
    // Focus the card (not a button) so screen readers start inside the
    // screen, without a ring that makes one language look pre-selected.
    picker.querySelector('.lang-picker-box').focus();
  }

  function closePicker() {
    picker.hidden = true;
    document.body.classList.remove('no-scroll');
    pageParts.forEach(function (el) { el.inert = false; });
  }

  picker.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      setLanguage(btn.getAttribute('data-lang'));
      closePicker();
      // Keyboard users (event.detail === 0) get focus moved to the header switch
      // so they don't lose their place; tap/mouse users get no leftover focus ring.
      if (event.detail === 0) {
        document.getElementById('lang-switch').focus();
      }
    });
  });

  /* --- Header switch --- */
  document.getElementById('lang-switch').addEventListener('click', function () {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });

  /* --- Start-up --- */
  var saved = getSavedLang();
  if (saved) {
    applyLanguage(saved);
  } else {
    applyLanguage('en');
    openPicker();
  }
})();
