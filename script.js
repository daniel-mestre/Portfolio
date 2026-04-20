function setLang(lang) {
      document.querySelectorAll('[data-' + lang + ']').forEach(el => {
        el.textContent = el.getAttribute('data-' + lang);
      });
      document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelector('.lang-btn[onclick="setLang(\'' + lang + '\')"]').classList.add('active');
      document.documentElement.lang = lang;
    }
