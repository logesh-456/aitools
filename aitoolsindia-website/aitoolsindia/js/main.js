// ============================================
// AIToolsIndia — Shared JS
// Replace 'ca-pub-XXXXXXXXXXXXXXXX' with your real AdSense Publisher ID
// ============================================

const ADSENSE_PUB_ID = 'ca-pub-XXXXXXXXXXXXXXXX'; // <-- PASTE YOUR ID HERE

// Inject AdSense script once (call on every page)
function loadAdSense() {
  if (document.querySelector('script[data-adsense]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`;
  s.setAttribute('crossorigin', 'anonymous');
  s.setAttribute('data-adsense', 'true');
  document.head.appendChild(s);
}

// Replace ad placeholder divs with real AdSense units
// Usage: renderAd('ad-top', 'XXXXXXXXXX', 'auto', 'auto')
function renderAd(containerId, adSlot, width = 'auto', height = 'auto') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <ins class="adsbygoogle"
      style="display:block;width:${width};height:${height}"
      data-ad-client="${ADSENSE_PUB_ID}"
      data-ad-slot="${adSlot}"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  `;
  try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
}

// ---- NAV active link ----
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// ---- Newsletter form ----
function initNewsletter() {
  document.querySelectorAll('.email-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#00a878';
      form.querySelector('input').value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
    });
  });
  // Also handle button click (not just submit)
  document.querySelectorAll('.email-form button').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.email-form').querySelector('input');
      if (!input.value.includes('@')) { input.focus(); return; }
      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#00a878';
      input.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
    });
  });
}

// ---- Smooth scroll for anchor links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// ---- Init all on DOMContentLoaded ----
document.addEventListener('DOMContentLoaded', () => {
  loadAdSense();
  setActiveNav();
  initNewsletter();
  initSmoothScroll();
});
