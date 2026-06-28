/**
 * main.js — Language switching, smooth scrolling, nav highlight, mobile menu
 * Liang Wu — Academic Website
 */
(function () {
  'use strict';

  // ----- Language (default: English) -----
  const langToggle = document.getElementById('langToggle');
  const html = document.documentElement;
  let currentLang = 'en';

  function setLanguage(lang) {
    currentLang = lang;
    html.lang = lang === 'zh' ? 'zh-CN' : 'en';
    langToggle.textContent = lang === 'en' ? '中' : 'EN';

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        el.textContent = i18n[lang][key];
      }
    });

    document.title = lang === 'zh'
      ? '吴亮 — 天体物理 | 池州学院'
      : 'Liang Wu — Astrophysics | Chizhou University';

    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
  }

  // Restore saved language, default to English
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'zh' || saved === 'en') currentLang = saved;
  } catch (e) { /* ignore */ }
  setLanguage(currentLang);

  langToggle.addEventListener('click', function () {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
  });

  // ----- Smooth Scroll -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('open');
      }
    });
  });

  // ----- Nav Highlight on Scroll -----
  const sections = [];
  document.querySelectorAll('section[id], header[id]').forEach(function (s) {
    sections.push(s);
  });

  const navLinksItems = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollPos = window.scrollY + 100;
    let currentId = '';
    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        currentId = section.getAttribute('id');
      }
    });
    navLinksItems.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  // ----- Back to Top -----
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ----- Mobile Menu -----
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#navLinks') && !e.target.closest('#menuToggle')) {
      navLinks.classList.remove('open');
    }
  });

})();
