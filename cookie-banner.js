// PaperStack Cookie Consent Banner
(function() {
  // Don't show if already accepted
  if (localStorage.getItem('cookieAccepted')) return;

  // Create banner HTML
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1f2937;
    color: #f9fafb;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    z-index: 9999;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 13px;
    line-height: 1.5;
    flex-wrap: wrap;
    box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
  `;

  banner.innerHTML = `
    <div style="flex:1;min-width:200px;">
      🍪 We use cookies for analytics and advertising to keep PaperStack free.
      By continuing to use this site you agree to our
      <a href="privacy.html" style="color:#60a5fa;text-decoration:underline;">Privacy Policy</a>.
    </div>
    <div style="display:flex;gap:10px;flex-shrink:0;">
      <button id="cookie-decline" style="
        background:transparent;
        border:1.5px solid #6b7280;
        color:#9ca3af;
        padding:7px 16px;
        border-radius:7px;
        font-size:13px;
        cursor:pointer;
        font-family:inherit;
      ">Decline</button>
      <button id="cookie-accept" style="
        background:#4f6ef7;
        border:none;
        color:white;
        padding:7px 20px;
        border-radius:7px;
        font-size:13px;
        font-weight:600;
        cursor:pointer;
        font-family:inherit;
      ">Got it ✓</button>
    </div>
  `;

  // Add to page once DOM is ready
  function addBanner() {
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function() {
      localStorage.setItem('cookieAccepted', 'true');
      banner.style.display = 'none';
    });

    document.getElementById('cookie-decline').addEventListener('click', function() {
      localStorage.setItem('cookieAccepted', 'declined');
      banner.style.display = 'none';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addBanner);
  } else {
    addBanner();
  }
})();
