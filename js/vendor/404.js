/* ============================================
i18n (Translations)
============================================ */
const i18n = {
  en: {
    title: "Lost in Cyberspace",
    message: "The page you're looking for has drifted into the void. It might have been moved, deleted, or perhaps never existed in this dimension.",
    searchPlaceholder: "Search for services... (e.g. grafana)",
    orVisit: "Or visit one of these",
    home: "Home",
    api: "API",
    health: "Health",
    goBack: "Go Back",
    backHome: "Beam Me Home",
    reload: "Reload Page",
    statPaths: "Available Routes",
    statUptime: "Uptime",
    statStatus: "All Services",
    footerHelp: "Press <kbd>/</kbd> to search • <kbd>Esc</kbd> back • <kbd>?</kbd> help",
    easterEgg: "💡 Pro tip: Try pressing <kbd>G</kbd> then <kbd>H</kbd> for a secret animation!",
    helpTitle: "Keyboard Shortcuts",
    helpSearch: "Focus search",
    helpBack: "Go back",
    helpHome: "Back to home",
    helpReload: "Reload page",
    helpTheme: "Toggle theme",
    helpHelp: "Show this help",
    helpSecret: "Secret animation",
    toastLight: "☀️ Light mode",
    toastDark: "🌙 Dark mode",
    toastGoingBack: "⬅️ Going back...",
    toastReloading: "🔄 Reloading...",
    toastSecret: "🎉 You found the secret! 🎊",
    toastNoHistory: "⚠️ No previous page in history",
    statusOnline: "🟢 Online",
    statusOffline: "🔴 Offline"
  },
  fa: {
    title: "گم شده در فضای سایبری",
    message: "صفحه‌ای که به دنبال آن می‌گردید به درون پوچی سرگردان شده است. ممکن است جابجا شده، حذف شده یا شاید هرگز در این بُعد وجود نداشته است.",
    searchPlaceholder: "جستجوی سرویس‌ها... (مثلاً grafana)",
    orVisit: "یا از اینها بازدید کنید",
    home: "خانه",
    api: "API",
    health: "سلامت",
    goBack: "بازگشت",
    backHome: "بازگشت به خانه",
    reload: "بارگذاری مجدد",
    statPaths: "مسیرهای موجود",
    statUptime: "آپتایم",
    statStatus: "وضعیت سرویس‌ها",
    footerHelp: "<kbd>/</kbd> جستجو • <kbd>Esc</kbd> بازگشت • <kbd>?</kbd> راهنما",
    easterEgg: "💡 نکته: کلیدهای <kbd>G</kbd> و سپس <kbd>H</kbd> را فشار دهید!",
    helpTitle: "میانبرهای کیبورد",
    helpSearch: "فوکوس روی جستجو",
    helpBack: "بازگشت",
    helpHome: "بازگشت به خانه",
    helpReload: "بارگذاری مجدد صفحه",
    helpTheme: "تغییر تم",
    helpHelp: "نمایش این راهنما",
    helpSecret: "انیمیشن مخفی",
    toastLight: "☀️ حالت روشن",
    toastDark: "🌙 حالت تاریک",
    toastGoingBack: "⬅️ در حال بازگشت...",
    toastReloading: "🔄 در حال بارگذاری مجدد...",
    toastSecret: "🎉 شما راز را پیدا کردید! 🎊",
    toastNoHistory: "⚠️ صفحه قبلی در تاریخچه وجود ندارد",
    statusOnline: "🟢 آنلاین",
    statusOffline: "🔴 آفلاین"
  }
};

/* ============================================
State
============================================ */
const state = {
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'dark',
  gPressed: false,
  gPressTime: 0
};

const BASE_URL = window.location.origin;
const t = () => i18n[state.lang];

/* ============================================
Floating Particles
============================================ */
function createParticles() {
  const container = document.getElementById('particles');
  const emojis = ['⭐', '✨', '💫', '🌟', '⚡', '🔮', '🌌'];
  const particleCount = 12;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particle.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    container.appendChild(particle);
  }
}

/* ============================================
Theme Management
============================================ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  document.querySelector('meta[name="theme-color"]').setAttribute('content',
    state.theme === 'light' ? '#f1f5f9' : '#05050f');
  localStorage.setItem('theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  showToast(state.theme === 'light' ? t().toastLight : t().toastDark);
}

/* ============================================
Language Management
============================================ */
function applyLanguage() {
  const tr = t();
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'fa' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-fa', state.lang === 'fa');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (tr[key]) el.innerHTML = tr[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (tr[key]) el.placeholder = tr[key];
  });

  document.getElementById('lang-flag').textContent = state.lang === 'fa' ? '🇬🇧' : '🇮🇷';
  document.title = `🔍 ${tr.title} - AI Lab Pro`;
  localStorage.setItem('lang', state.lang);
}

function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'fa' : 'en';
  applyLanguage();
}

/* ============================================
Breadcrumb
============================================ */
function updateBreadcrumb() {
  const path = window.location.pathname;
  const display = path.length > 40 ? path.substring(0, 37) + '...' : path;
  document.getElementById('breadcrumb-path').textContent = display || '/';
}

/* ============================================
Search Redirect
============================================ */
function setupSearch() {
  const input = document.getElementById('search');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = input.value.trim().toLowerCase();
      if (query) {
        // Try to navigate to common service paths
        const services = {
          'chat': '/chat/',
          'webui': '/chat/',
          'openwebui': '/chat/',
          'litellm': '/litellm/',
          'flowise': '/flowise/',
          'langflow': '/langflow/',
          'n8n': '/n8n/',
          'qdrant': '/qdrant/dashboard',
          'minio': '/minio-console/',
          'prometheus': '/prometheus/',
          'grafana': '/grafana/',
          'api': '/api/v1/',
          'health': '/health'
        };

        for (const [key, path] of Object.entries(services)) {
          if (query.includes(key)) {
            window.location.href = BASE_URL + path;
            return;
          }
        }

        // If no match, go to home with query
        window.location.href = BASE_URL + '/?search=' + encodeURIComponent(query);
      }
    }
  });
}

/* ============================================
Stats (real-time)
============================================ */
async function loadStats() {
  try {
    // Try to fetch health
    const res = await fetch(BASE_URL + '/health', {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) {
      document.getElementById('stat-status').textContent = t().statusOnline;
    } else {
      document.getElementById('stat-status').textContent = t().statusOffline;
    }
  } catch (e) {
    document.getElementById('stat-status').textContent = t().statusOffline;
  }
}

/* ============================================
Navigation
============================================ */
function goBack() {
  if (window.history.length > 1) {
    showToast(t().toastGoingBack);
    setTimeout(() => window.history.back(), 400);
  } else {
    showToast(t().toastNoHistory);
    setTimeout(() => window.location.href = BASE_URL + '/', 800);
  }
}

function reload() {
  showToast(t().toastReloading);
  setTimeout(() => window.location.reload(), 400);
}

/* ============================================
Easter Egg (G + H = Confetti)
============================================ */
function triggerSecretAnimation() {
  showToast(t().toastSecret);
  createConfetti();
}

function createConfetti() {
  const colors = ['#00e5ff', '#b026ff', '#ff006e', '#fbbf24', '#00ff88'];
  const confettiCount = 60;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    const size = 6 + Math.random() * 8;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * window.innerWidth;
    const startY = -20;
    const endY = window.innerHeight + 20;
    const endX = startX + (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 720;
    const duration = 2 + Math.random() * 2;

    confetti.style.cssText = `
                position: fixed;
                top: ${startY}px;
                left: ${startX}px;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                pointer-events: none;
                z-index: 9998;
                animation: confettiFall ${duration}s ease-out forwards;
                --end-x: ${endX}px;
                --rotation: ${rotation}deg;
            `;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), duration * 1000);
  }

  // Add the keyframes once
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
                @keyframes confettiFall {
                    to {
                        transform: translate(var(--end-x), 100vh) rotate(var(--rotation));
                        opacity: 0;
                    }
                }
            `;
    document.head.appendChild(style);
  }
}

/* ============================================
Toast
============================================ */
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(el => el.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* ============================================
Help Modal
============================================ */
function openHelp() {
  document.getElementById('help-modal').classList.add('show');
}

function closeHelp(e) {
  if (e.target === e.currentTarget) {
    document.getElementById('help-modal').classList.remove('show');
  }
}

/* ============================================
Keyboard Shortcuts
============================================ */
function setupKeyboard() {
  const searchInput = document.getElementById('search');

  document.addEventListener('keydown', (e) => {
    const inInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

    // / : focus search
    if (e.key === '/' && !inInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }

    // Esc : go back or clear search
    if (e.key === 'Escape') {
      const modal = document.getElementById('help-modal');
      if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        return;
      }
      if (document.activeElement === searchInput) {
        searchInput.value = '';
        searchInput.blur();
      } else {
        goBack();
      }
    }

    // ? : help
    if (e.key === '?' && !inInput) {
      e.preventDefault();
      openHelp();
    }

    // R : reload
    if (e.key.toLowerCase() === 'r' && !inInput && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      reload();
    }

    // T : theme
    if (e.key.toLowerCase() === 't' && !inInput && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      toggleTheme();
    }

    // H : home
    if (e.key.toLowerCase() === 'h' && !inInput && !e.ctrlKey && !e.metaKey) {
      if (state.gPressed && (Date.now() - state.gPressTime) < 1000) {
        // Easter egg: G + H
        e.preventDefault();
        triggerSecretAnimation();
        state.gPressed = false;
        return;
      }
      e.preventDefault();
      window.location.href = BASE_URL + '/';
    }

    // G : (for easter egg)
    if (e.key.toLowerCase() === 'g' && !inInput && !e.ctrlKey && !e.metaKey) {
      state.gPressed = true;
      state.gPressTime = Date.now();
    }
  });

  // Reset G press after delay
  document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() !== 'g') {
      setTimeout(() => {
        if (Date.now() - state.gPressTime > 1000) {
          state.gPressed = false;
        }
      }, 1100);
    }
  });
}

/* ============================================
Init
============================================ */
function init() {
  applyTheme();
  applyLanguage();
  createParticles();
  updateBreadcrumb();
  setupSearch();
  setupKeyboard();

  // Bind buttons
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('home-btn').addEventListener('click', () => {
    window.location.href = BASE_URL + '/';
  });
  document.getElementById('back-btn').addEventListener('click', goBack);
  document.getElementById('reload-btn').addEventListener('click', reload);
  document.getElementById('go-back-card').addEventListener('click', (e) => {
    e.preventDefault();
    goBack();
  });

  // Load stats (non-blocking)
  loadStats();

  console.log('%c🔍 404 - Lost in Cyberspace', 'color: #b026ff; font-size: 14px; font-weight: bold;');
  console.log('%c💡 Hint: Try pressing G then H...', 'color: #00e5ff; font-style: italic;');
}

document.addEventListener('DOMContentLoaded', init);
