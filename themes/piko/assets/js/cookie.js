(function () {
  'use strict';

  var STORAGE_KEY = 'cookie_consent';

  function getBanner() {
    return document.getElementById('cookie-consent-banner');
  }

  function showBanner() {
    var banner = getBanner();
    if (banner) {
      banner.style.display = 'block';
    }
  }

  function hideBanner() {
    var banner = getBanner();
    if (banner) {
      banner.style.display = 'none';
    }
  }

  function updateConsent(granted) {
    var status = granted ? 'granted' : 'denied';
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': status
      });
    }
    try {
      localStorage.setItem(STORAGE_KEY, status);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    hideBanner();
  }

  window.openCookieBanner = function () {
    showBanner();
  };

  function init() {
    var banner = getBanner();
    if (!banner) return;

    var acceptBtn = document.getElementById('cookie-btn-accept');
    var rejectBtn = document.getElementById('cookie-btn-reject');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        updateConsent(true);
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', function () {
        updateConsent(false);
      });
    }

    var savedConsent = null;
    try {
      savedConsent = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}

    if (savedConsent !== 'granted' && savedConsent !== 'denied') {
      showBanner();
    } else {
      hideBanner();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
