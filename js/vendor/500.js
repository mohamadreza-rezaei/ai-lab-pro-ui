const i18n = {
  en: {
    title: 'Something Went Wrong',
    message:
      'An unexpected error occurred on our server. Our team has been notified and is working to fix the issue. Please try again in a few moments.',
    errorIdLabel: 'Error ID',
    timestampLabel: 'Timestamp',
    pathLabel: 'Path',
    methodLabel: 'Method',
    copyBtn: 'Copy',
    showDetails: 'Show Technical Details',
    hideDetails: 'Hide Technical Details',
    retry: 'Try Again',
    goHome: 'Back to Home',
    report: 'Report Issue',
    footerHelp: 'Press <kbd>R</kbd> to retry • <kbd>T</kbd> theme • <kbd>?</kbd> help',
    needHelp: 'Need help?',
    contactSupport: 'Contact Support',
    helpTitle: 'Keyboard Shortcuts',
    helpRetry: 'Try again',
    helpTheme: 'Toggle theme',
    helpHelp: 'Show this help',
    helpHome: 'Go to home',
    helpCopy: 'Copy error ID',
    toastLight: '☀️ Light mode',
    toastDark: '🌙 Dark mode',
    toastCopied: '✅ Error ID copied!',
    toastCopyFail: '❌ Copy failed',
    toastRetrying: '🔄 Reloading...',
  },
  fa: {
    title: 'خطایی رخ داده است',
    message:
      'یک خطای غیرمنتظره در سرور ما رخ داده است. تیم ما مطلع شده و در حال رفع مشکل است. لطفاً چند لحظه دیگر دوباره تلاش کنید.',
    errorIdLabel: 'شناسه خطا',
    timestampLabel: 'زمان',
    pathLabel: 'مسیر',
    methodLabel: 'متد',
    copyBtn: 'کپی',
    showDetails: 'نمایش جزئیات فنی',
    hideDetails: 'پنهان کردن جزئیات فنی',
    retry: 'تلاش مجدد',
    goHome: 'بازگشت به خانه',
    report: 'گزارش مشکل',
    footerHelp: '<kbd>R</kbd> تلاش مجدد • <kbd>T</kbd> تغییر تم • <kbd>?</kbd> راهنما',
    needHelp: 'نیاز به کمک دارید؟',
    contactSupport: 'تماس با پشتیبانی',
    helpTitle: 'میانبرهای کیبورد',
    helpRetry: 'تلاش مجدد',
    helpTheme: 'تغییر تم',
    helpHelp: 'نمایش این راهنما',
    helpHome: 'رفتن به خانه',
    helpCopy: 'کپی شناسه خطا',
    toastLight: '☀️ حالت روشن',
    toastDark: '🌙 حالت تاریک',
    toastCopied: '✅ شناسه خطا کپی شد!',
    toastCopyFail: '❌ خطا در کپی',
    toastRetrying: '🔄 در حال بارگذاری مجدد...',
  },
};

/* ============================================
State
============================================ */
const state = {
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'dark',
};

const BASE_URL = window.location.origin;
const t = () => i18n[state.lang];

// Generate unique error ID
function generateErrorId() {
  const ts = new Date();
  const year = ts.getFullYear();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ERR-${year}-${random}`;
}

// Fill error details from page context
function fillErrorDetails() {
  const errorId = generateErrorId();
  document.getElementById('error-id').textContent = errorId;

  const now = new Date();
  const tsStr = now.toLocaleString(state.lang === 'fa' ? 'fa-IR' : 'en-US');
  document.getElementById('timestamp').textContent = tsStr;

  document.getElementById('path').textContent = window.location.pathname || '/';
  document.getElementById('method').textContent = 'GET';

  // Set report link with error ID
  document.getElementById('report-btn').href =
    `mailto:support@example.com?subject=Error Report: ${errorId}&body=Error ID: ${errorId}%0D%0APath: ${window.location.pathname}%0D%0ATime: ${tsStr}`;
}

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
  document.title = `💥 ${tr.title} - AI Lab Pro`;
  localStorage.setItem('lang', state.lang);

  // Refresh timestamp with new locale
  fillErrorDetails();
}

function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'fa' : 'en';
  applyLanguage();
}

/* ============================================
Copy Error ID
============================================ */
async function copyErrorId() {
  const id = document.getElementById('error-id').textContent;
  try {
    await navigator.clipboard.writeText(id);
    showToast(t().toastCopied);
  } catch (e) {
    showToast(t().toastCopyFail);
  }
}

/* ============================================
Stack Trace Toggle
============================================ */
function setupStackToggle() {
  const toggle = document.getElementById('stack-toggle');
  const trace = document.getElementById('stack-trace');
  const showText = t().showDetails;
  const hideText = t().hideDetails;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    trace.classList.toggle('show');
    const labelEl = toggle.querySelector('[data-i18n]');
    labelEl.textContent = toggle.classList.contains('open') ? hideText : showText;
  });
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
      showToast(t().toastRetrying);
      setTimeout(() => window.location.reload(), 800);
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
    if (e.key.toLowerCase() === 'c') {
      e.preventDefault();
      copyErrorId();
    }
  });
}

/* ============================================
Init
============================================ */
function init() {
  applyTheme();
  applyLanguage();
  fillErrorDetails();
  setupStackToggle();
  setupKeyboard();

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('retry-btn').addEventListener('click', () => {
    showToast(t().toastRetrying);
    setTimeout(() => window.location.reload(), 800);
  });
  document.getElementById('copy-error-id').addEventListener('click', copyErrorId);
  document.getElementById('contact-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'mailto:support@example.com';
  });

  console.log('%c💥 Server Error', 'color: #ef4444; font-size: 14px; font-weight: bold;');
  console.log(
    '%cError ID:',
    'color: #b026ff;',
    document.getElementById('error-id').textContent,
  );
}

document.addEventListener('DOMContentLoaded', init);
