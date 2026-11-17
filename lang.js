// One URL per document, two languages inside it — the App Store takes a single
// privacy policy link, so the Korean version cannot live at a separate address.
(function () {
  var KEY = 'pixiediary.site.lang';
  function apply(lang) {
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('on', el.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.langbar button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.set === lang));
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  // Fall back to the browser's own language rather than assuming English.
  var start = saved || ((navigator.language || 'en').slice(0, 2) === 'ko' ? 'ko' : 'en');
  document.addEventListener('DOMContentLoaded', function () {
    apply(start);
    document.querySelectorAll('.langbar button').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.set); });
    });
  });
})();
