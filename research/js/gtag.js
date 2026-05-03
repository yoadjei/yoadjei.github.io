var GA4_MEASUREMENT_ID = 'G-97VP18FYRQ';

(function () {
  var id = typeof GA4_MEASUREMENT_ID === 'string' ? GA4_MEASUREMENT_ID.trim() : '';
  if (!id || !/^G-[A-Z0-9]+$/i.test(id)) return;

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
})();
