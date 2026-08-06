const i18n = {
  en: {
    title: 'Service Temporarily Unavailable',
    message:
      'The server is currently undergoing maintenance or temporarily overloaded. Please wait a moment while we restore the service.',
    autoRetry: 'Auto-retry in',
    retryHint: "We'll automatically try to reconnect",
    statusLabel: 'Server Status:',
    statusValue: 'Maintenance Mode',
    retryNow: 'Retry Now',
    goHome: 'Back to Home',
    checkStatus: 'Check Status',
    footerHelp: 'Press <kbd>R</kbd> to retry • <kbd>T</kbd> theme • <kbd>?</kbd> help',
    footerMade: 'Made with ❤️',
    helpTitle: 'Keyboard Shortcuts',
    helpRetry: 'Retry now',
    helpTheme: 'Toggle theme',
    helpHelp: 'Show this help',
    helpHome: 'Go to home',
    toastLight: '☀️ Light mode',
    toastDark: '🌙 Dark mode',
    toastRetrying: '🔄 Retrying...',
    toastOnline: '✅ Service is back!',
    toastStillOffline: '⚠️ Still unavailable, retrying in a moment...',
  },
  fa: {
    title: 'سرویس موقتاً در دسترس نیست',
    message:
      'سرور در حال تعمیر و نگهداری است یا به طور موقت overloaded شده است. لطفاً لحظاتی صبر کنید تا سرویس را بازیابی کنیم.',
    autoRetry: 'تلاش مجدد خودکار در',
    retryHint: 'ما به طور خودکار تلاش برای اتصال مجدد می‌کنیم',
    statusLabel: 'وضعیت سرور:',
    statusValue: 'حالت تعمیر و نگهداری',
    retryNow: 'تلاش مجدد',
    goHome: 'بازگشت به خانه',
    checkStatus: 'بررسی وضعیت',
    footerHelp: '<kbd>R</kbd> تلاش مجدد • <kbd>T</kbd> تغییر تم • <kbd>?</kbd> راهنما',
    footerMade: 'ساخته شده با ❤️',
    helpTitle: 'میانبرهای کیبورد',
    helpRetry: 'تلاش مجدد',
    helpTheme: 'تغییر تم',
    helpHelp: 'نمایش این راهنما',
    helpHome: 'رفتن به خانه',
    toastLight: '☀️ حالت روشن',
    toastDark: '🌙 حالت تاریک',
    toastRetrying: '🔄 در حال تلاش مجدد...',
    toastOnline: '✅ سرویس بازگشت!',
    toastStillOffline: '⚠️ همچنان در دسترس نیست، لحظاتی دیگر تلاش می‌شود...',
  },
};

/* ============================================
State
============================================ */
const state = {
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'dark',
  retryCount: parseInt(localStorage.getItem('retryCount') || '0'),
  countdown: 10,
  timer: null,
};

const BASE_URL = window.location.origin;
const t = () => i18n[state.lang];

/* ============================================
Theme Management
============================================ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', state.theme === 'light' ? '#f1f5f9' : '#05050f');
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

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (tr[key]) el.innerHTML = tr[key];
  });

  document.getElementById('lang-flag').textContent = state.lang === 'fa' ? '🇬🇧' : '🇮🇷';
  document.title = `🔧 ${tr.title} - AI Lab Pro`;
  localStorage.setItem('lang', state.lang);
}

function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'fa' : 'en';
  applyLanguage();
  resetTimer();
}

/* ============================================
Retry Logic
============================================ */
async function tryReconnect() {
  showToast(t().toastRetrying);
  state.retryCount++;
  localStorage.setItem('retryCount', state.retryCount.toString());

  try {
    const res = await fetch(BASE_URL + '/health', {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });
    if (res.ok) {
      showToast(t().toastOnline);
      setTimeout(() => {
        window.location.href = BASE_URL + '/';
      }, 1000);
      return true;
    }
  } catch (e) {
    // Still offline
  }
  showToast(t().toastStillOffline);
  resetTimer();
  return false;
}

function resetTimer() {
  state.countdown = 10;
  updateTimerDisplay();
  if (state.timer) clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.countdown--;
    updateTimerDisplay();
    if (state.countdown <= 0) {
      clearInterval(state.timer);
      tryReconnect();
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById('retry-timer').textContent = state.countdown + 's';
  document.getElementById('progress-text').textContent = state.countdown;

  const circle = document.getElementById('progress-circle');
  const totalLength = 326.7;
  const offset = totalLength * (1 - state.countdown / 10);
  circle.style.strokeDashoffset = offset;
}

/* ============================================
Toast
============================================ */
function showToast(msg) {
  document.querySelectorAll('.toast').forEach((el) => el.remove());
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
  document.addEventListener('keydown', (e) => {
    const inInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
    if (inInput) return;

    if (e.key.toLowerCase() === 'r') {
      e.preventDefault();
      tryReconnect();
    }
    if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      toggleTheme();
    }
    if (e.key === '?') {
      e.preventDefault();
      openHelp();
    }
    if (e.key === 'Escape') {
      document.getElementById('help-modal').classList.remove('show');
    }
    if (e.key.toLowerCase() === 'h') {
      e.preventDefault();
      window.location.href = BASE_URL + '/';
    }
  });
}

/* ============================================
Init
============================================ */
function init() {
  applyTheme();
  applyLanguage();
  setupKeyboard();

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('retry-btn').addEventListener('click', tryReconnect);
  document.getElementById('status-btn').addEventListener('click', () => {
    window.open(BASE_URL + '/health', '_blank');
  });

  resetTimer();

  console.log(
    '%c🔧 Service Unavailable',
    'color: #fbbf24; font-size: 14px; font-weight: bold;',
  );
}

document.addEventListener('DOMContentLoaded', init);
