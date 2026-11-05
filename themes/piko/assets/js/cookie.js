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
        'analytics_storage': status,
        'ad_storage': status,
        'ad_user_data': status,
        'ad_personalization': status
      });
      gtag('event', granted ? 'cookie_consent_accept' : 'cookie_consent_reject', {
        'transport_type': 'beacon'
      });
      gtag('event', 'cookie_consent_decision', {
        'decision': granted ? 'accept' : 'reject',
        'transport_type': 'beacon'
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
