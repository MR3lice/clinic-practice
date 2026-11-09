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
      servicesTitle: 'Services & Prices',
      servicesPlaceholder: 'Treatment cards — coming in Module 4',
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
      servicesTitle: 'الخدمات والأسعار',
      servicesPlaceholder: 'بطاقات العلاجات — قريبًا في الوحدة 4',
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
  var pageParts = document.querySelectorAll('.site-header, main, .site-footer');

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
