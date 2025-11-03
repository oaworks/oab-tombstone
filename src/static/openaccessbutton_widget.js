/* Open Access Button Widget: Retired as of 18th November 2025
   This script stays online so embedded pages don’t break.
*/

(function () {
  var learnUrl = "https://blog.oa.works/sunsetting-the-open-access-button-instantill/"
               + "?utm_source=embedoa&utm_medium=widget&utm_campaign=shutdown_notice"
               + "&utm_content=" + encodeURIComponent(location.hostname || '');

  var message = ''
    + '<div role="status" aria-live="polite"'
    + '     style="margin:8px 0; padding:12px 14px;'
    + '            border:1px solid #e5e7eb; background:#fff; color:#111827;'
    + '            border-radius:4px; font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;'
    + '            max-width:640px;">'
    + '  <span style="display:block;margin:0 0 4px 0;"><strong>This search tool is no longer available.</strong></span>'
    + '  <span style="display:block;margin:0;">Please contact your library or this site’s administrator. '
    + '    <a href="' + learnUrl + '" target="_blank" rel="noopener"'
    + '       style="color:#2563eb; text-decoration:underline;">Learn more</a>.'
    + '  </span>'
    + '</div>';

  window.openaccessbutton_widget = function (opts) {
    opts = opts || {};
    var selector = opts.element || '#openaccessbutton_widget';
    var mount = document.querySelector(selector);

    if (!mount) {
      mount = document.createElement('div');
      mount.id = (selector && selector[0] === '#') ? selector.slice(1) : 'openaccessbutton_widget';
      document.body.appendChild(mount);
    }

    mount.innerHTML = message;
  };

  // Auto-render if a common mount point exists
  if (document.querySelector('#openaccessbutton_widget')) {
    try { window.openaccessbutton_widget(); } catch (e) { /* no-op */ }
  }
})();
