const i18n = {
  en: {
    title: 'AI Lab Pro',
    subtitle: 'Quick access to all your self-hosted services',
    checking: 'Checking...',
    never: 'Never',
    searchPlaceholder: 'Search services... (e.g. grafana)',
    noResults: 'No results found!',
    modelsTitle: 'Active Models',
    loading: 'Loading...',
    actionsTitle: 'Quick Actions',
    copyUrl: 'Copy API URL',
    refresh: 'Refresh Status',
    healthCheck: 'Health Check',
    apiDocs: 'API Docs',
    footerHelp:
      'Click or use keyboard • Press <kbd>/</kbd> to search • <kbd>Esc</kbd> to clear • <kbd>?</kbd> for help',
    footerMade: 'AI Lab Pro · Made with ❤️',
    version: 'Version',
    helpTitle: 'Keyboard Shortcuts',
    helpSearch: 'Focus search',
    helpClear: 'Clear search',
    helpHelp: 'Show this help',
    helpRefresh: 'Refresh status',
    helpTheme: 'Toggle theme',
    helpSettings: 'Open settings',
    helpEnv: 'Switch environment',
    toastCopied: '✅ URL copied!',
    toastCopyFail: '❌ Copy failed',
    toastRefreshed: '🔄 Status refreshed!',
    toastSettingsSaved: '⚙️ Settings saved',
    toastInvalidDomain: '❌ Invalid domain',
    toastDomainRequired: '❌ Base domain required for server mode',
    toastSwitchedLocal: '🖥️ Switched to Local',
    toastSwitchedServer: '🌐 Switched to Server',
    allOnline: (n) => `All services active (${n}/${n})`,
    partialOnline: (a, b) => `${a} of ${b} active`,
    allOffline: 'Services unavailable',
    catAi: 'AI & Machine Learning',
    catAutomation: 'Automation',
    catStorage: 'Storage & Data',
    catMonitoring: 'Monitoring',
    statusOnline: '● Online',
    statusOffline: '○ Offline',
    statusChecking: '...',
    statusError: '○ Error',
    allUp: 'All up',
    envLocal: 'Local',
    envServer: 'Server',
    envLocalDesc: 'localhost ports',
    envServerDesc: 'subdomains',
    envBadgeLocal: '🖥️ Local',
    envBadgeServer: '🌐 Server',
    settingsTitle: 'Settings',
    environment: 'Environment',
    baseDomain: 'Base Domain',
    baseDomainHelp: 'Used for subdomain access in server mode (e.g. chat.lab.example.com)',
    cancel: 'Cancel',
    save: 'Save',
  },
  fa: {
    title: 'مرکز کنترل AI Lab Pro',
    subtitle: 'دسترسی سریع به تمام سرویس‌های خود-میزبان',
    checking: 'در حال بررسی...',
    never: 'هرگز',
    searchPlaceholder: 'جستجوی سرویس‌ها... (مثلاً grafana)',
    noResults: 'نتیجه‌ای یافت نشد!',
    modelsTitle: 'مدل‌های فعال',
    loading: 'در حال بارگذاری...',
    actionsTitle: 'اقدامات سریع',
    copyUrl: 'کپی آدرس API',
    refresh: 'بروزرسانی وضعیت',
    healthCheck: 'بررسی سلامت',
    apiDocs: 'مستندات API',
    footerHelp:
      'کلیک کنید یا از کیبورد استفاده کنید • <kbd>/</kbd> جستجو • <kbd>Esc</kbd> پاک کردن • <kbd>?</kbd> راهنما',
    footerMade: 'AI Lab Pro · ساخته شده با ❤️',
    version: 'نسخه',
    helpTitle: 'میانبرهای کیبورد',
    helpSearch: 'فوکوس روی جستجو',
    helpClear: 'پاک کردن جستجو',
    helpHelp: 'نمایش این راهنما',
    helpRefresh: 'بروزرسانی وضعیت',
    helpTheme: 'تغییر تم',
    helpSettings: 'تنظیمات',
    helpEnv: 'تغییر محیط',
    toastCopied: '✅ آدرس کپی شد!',
    toastCopyFail: '❌ خطا در کپی',
    toastRefreshed: '🔄 وضعیت بروزرسانی شد!',
    toastSettingsSaved: '⚙️ تنظیمات ذخیره شد',
    toastInvalidDomain: '❌ دامنه نامعتبر',
    toastDomainRequired: '❌ برای حالت سرور، دامنه پایه الزامی است',
    toastSwitchedLocal: '🖥️ تغییر به حالت محلی',
    toastSwitchedServer: '🌐 تغییر به حالت سرور',
    allOnline: (n) => `همه سرویس‌ها فعال (${n}/${n})`,
    partialOnline: (a, b) => `${a} از ${b} فعال`,
    allOffline: 'سرویس‌ها در دسترس نیستند',
    catAi: 'هوش مصنوعی و یادگیری ماشین',
    catAutomation: 'اتوماسیون',
    catStorage: 'ذخیره‌سازی و داده',
    catMonitoring: 'مانیتورینگ',
    statusOnline: '● آنلاین',
    statusOffline: '○ آفلاین',
    statusChecking: '...',
    statusError: '○ خطا',
    allUp: 'همه فعال',
    envLocal: 'محلی',
    envServer: 'سرور',
    envLocalDesc: 'پورت‌های محلی',
    envServerDesc: 'ساب‌دامین',
    envBadgeLocal: '🖥️ محلی',
    envBadgeServer: '🌐 سرور',
    settingsTitle: 'تنظیمات',
    environment: 'محیط',
    baseDomain: 'دامنه پایه',
    baseDomainHelp: 'برای دسترسی ساب‌دامین در حالت سرور (مثلاً chat.lab.example.com)',
    cancel: 'انصراف',
    save: 'ذخیره',
  },
};

/* ============================================
Service Data
============================================ */
const services = [
  {
    name: 'Open WebUI',
    icon: '🏠',
    category: 'ai',
    desc: {en: 'Chat interface for AI models', fa: 'رابط چت برای مدل‌های هوش مصنوعی'},
    localPort: 3000,
    subdomain: 'chat',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'LiteLLM',
    icon: '🤖',
    category: 'ai',
    desc: {en: 'LLM proxy with debug tools', fa: 'پروکسی LLM با ابزارهای دیباگ'},
    localPort: 4000,
    subdomain: 'litellm',
    urlPath: '/',
    healthPath: '/ui',
  },
  {
    name: 'Flowise',
    icon: '🎨',
    category: 'ai',
    desc: {en: 'Build workflows with drag & drop', fa: 'ساخت workflow با drag & drop'},
    localPort: 3001,
    subdomain: 'flowise',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'Langflow',
    icon: '🔗',
    category: 'ai',
    desc: {en: 'Build agents with LangChain', fa: 'ساخت Agent با LangChain'},
    localPort: 7860,
    subdomain: 'langflow',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: '9Router',
    icon: '🧭',
    category: 'ai',
    desc: {en: 'Quota/cost router for coding agents (Claude Code, Cursor, Codex, Cline)', fa: 'مسیریاب quota/cost برای ابزارهای coding agent (Claude Code، Cursor، Codex، Cline)'},
    localPort: 20128,
    subdomain: '9router',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'OmniRoute',
    icon: '🛣️',
    category: 'ai',
    desc: {en: 'Unified AI proxy and dashboard', fa: 'پروکسی و داشبورد یکپارچه هوش مصنوعی'},
    localPort: 20130,
    subdomain: 'omniroute',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'n8n',
    icon: '🔄',
    category: 'automation',
    desc: {en: 'Workflow automation platform', fa: 'پلتفرم اتوماسیون workflow'},
    localPort: 5678,
    subdomain: 'n8n',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'Qdrant',
    icon: '📦',
    category: 'storage',
    desc: {en: 'Vector Database for RAG', fa: 'پایگاه داده برداری برای RAG'},
    localPort: 6333,
    subdomain: 'qdrant',
    urlPath: '/dashboard',
    healthPath: '/',
  },
  {
    name: 'MinIO Console',
    icon: '🪣',
    category: 'storage',
    desc: {en: 'S3 Storage Management Panel', fa: 'پنل مدیریت ذخیره‌سازی S3'},
    localPort: 9001,
    subdomain: 'minio-console',
    urlPath: '/',
    healthPath: '/minio/health/live',
  },
  {
    name: 'Portainer',
    icon: '🐳',
    category: 'monitoring',
    desc: {en: 'Docker container management UI', fa: 'رابط مدیریت کانتینرهای داکر'},
    localPort: 9443,
    subdomain: 'portainer',
    urlPath: '/',
    healthPath: '/api/system/status',
  },
  // {
  //   name: 'MinIO API',
  //   icon: '🪣',
  //   category: 'storage',
  //   desc: { en: 'S3 Storage API', fa: 'API ذخیره‌سازی S3' },
  //   localPort: 9000,
  //   subdomain: 'minio',
  //   urlPath: '/',
  //   healthPath: '/minio/health/live',
  // },
  {
    name: 'Prometheus',
    icon: '📊',
    category: 'monitoring',
    desc: {en: 'Metric Collection', fa: 'جمع‌آوری متریک‌ها'},
    localPort: 9090,
    subdomain: 'prometheus',
    urlPath: '/',
    healthPath: '/-/healthy',
  },
  {
    name: 'Grafana',
    icon: '📈',
    category: 'monitoring',
    desc: {en: 'Dashboard and Visualization', fa: 'داشبورد و visualization'},
    localPort: 3002,
    subdomain: 'grafana',
    urlPath: '/',
    healthPath: '/api/health',
  },
];

const categoryConfig = {
  ai: {icon: '🧠', key: 'catAi'},
  automation: {icon: '⚡', key: 'catAutomation'},
  storage: {icon: '💾', key: 'catStorage'},
  monitoring: {icon: '📡', key: 'catMonitoring'},
};

/* ============================================
State
============================================ */
// Auto-detect environment based on hostname
const _isLocalhost = ['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname);

const state = {
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'dark',
  env: localStorage.getItem('env') || (_isLocalhost ? 'local' : 'server'),
  baseDomain: localStorage.getItem('baseDomain') || 'lab.example.com',
  startTime: Date.now(),
};

const t = () => i18n[state.lang];

/* ============================================
URL Builders (the core of the routing logic)
============================================ */
function getServiceUrl(svc) {
  if (state.env === 'local') {
    return `http://localhost:${svc.localPort}${svc.urlPath || ''}`;
  }
  return `https://${svc.subdomain}.${state.baseDomain}${svc.urlPath || ''}`;
}

function getServiceHealth(svc) {
  if (state.env === 'local') {
    return `http://localhost:${svc.localPort}${svc.healthPath || '/'}`;
  }
  return `https://${svc.subdomain}.${state.baseDomain}${svc.healthPath || '/'}`;
}

function getServiceDisplay(svc) {
  if (state.env === 'local') {
    return `localhost:${svc.localPort}${svc.urlPath || ''}`;
  }
  return `${svc.subdomain}.${state.baseDomain}${svc.urlPath || ''}`;
}

// LiteLLM's API base (used for fetching models)
function getApiBaseUrl() {
  const litellm = services.find((s) => s.name === 'LiteLLM');
  if (!litellm) return window.location.origin;
  if (state.env === 'local') {
    return `http://localhost:${litellm.localPort}`;
  }
  return `https://${litellm.subdomain}.${state.baseDomain}`;
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
  showToast(state.theme === 'light' ? '☀️ Light mode' : '🌙 Dark mode');
}

/* ============================================
Environment Indicator
============================================ */
function updateEnvBadge() {
  const dot = document.getElementById('env-dot');
  const label = document.getElementById('env-label');
  const tr = t();
  if (state.env === 'local') {
    label.textContent = tr.envBadgeLocal;
    dot.classList.remove('server');
    dot.classList.add('local');
  } else {
    label.textContent = tr.envBadgeServer;
    dot.classList.remove('local');
    dot.classList.add('server');
  }
}

function switchEnvironment() {
  const newEnv = state.env === 'local' ? 'server' : 'local';
  state.env = newEnv;
  localStorage.setItem('env', state.env);
  updateEnvBadge();
  renderServices();
  refreshStatus();
  showToast(newEnv === 'local' ? t().toastSwitchedLocal : t().toastSwitchedServer);
}

/* ============================================
Language Management
============================================ */
function applyLanguage() {
  const tr = t();
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'fa' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-fa', state.lang === 'fa');

  // Update text
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (tr[key]) el.innerHTML = tr[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (tr[key]) el.placeholder = tr[key];
  });

  // Update flag
  document.getElementById('lang-flag').textContent = state.lang === 'fa' ? '🇬🇧' : '🇮🇷';

  // Update page title
  document.title = `🚀 ${tr.title}`;

  localStorage.setItem('lang', state.lang);

  updateEnvBadge();
  renderServices();
  updateGlobalStatus();
}

function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'fa' : 'en';
  applyLanguage();
}

/* ============================================
Settings Management
============================================ */
function openSettings() {
  const modal = document.getElementById('settings-modal');
  const baseDomainInput = document.getElementById('base-domain');
  document.getElementById('env-local').checked = state.env === 'local';
  document.getElementById('env-server').checked = state.env === 'server';
  baseDomainInput.value = state.baseDomain;
  baseDomainInput.disabled = state.env === 'local';
  modal.classList.add('show');
}

function closeSettings(e) {
  if (e.target === e.currentTarget) {
    document.getElementById('settings-modal').classList.remove('show');
  }
}

function closeSettingsDirect() {
  document.getElementById('settings-modal').classList.remove('show');
}

function saveSettings() {
  const newEnv = document.querySelector('input[name="env"]:checked').value;
  const newDomain = document.getElementById('base-domain').value.trim();
  const tr = t();

  if (newEnv === 'server' && !newDomain) {
    showToast(tr.toastDomainRequired);
    return;
  }

  // if (newDomain && !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(newDomain)) {
  //   showToast(tr.toastInvalidDomain);
  //   return;
  // }

  const envChanged = newEnv !== state.env;
  const domainChanged = newDomain && newDomain !== state.baseDomain;

  state.env = newEnv;
  if (newDomain) state.baseDomain = newDomain;

  localStorage.setItem('env', state.env);
  localStorage.setItem('baseDomain', state.baseDomain);

  updateEnvBadge();
  closeSettingsDirect();
  showToast(tr.toastSettingsSaved);

  if (envChanged || domainChanged) {
    renderServices();
    refreshStatus();
  }
}

function setupSettingsListeners() {
  document.querySelectorAll('input[name="env"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
      document.getElementById('base-domain').disabled = e.target.value === 'local';
    });
  });
}

/* ============================================
Render Services
============================================ */
function renderServices() {
  const main = document.getElementById('main-content');
  main.querySelectorAll('.category').forEach((el) => el.remove());
  const tr = t();
  let html = '';
  let cardIndex = 0;

  Object.keys(categoryConfig).forEach((catKey) => {
    const catServices = services.filter((s) => s.category === catKey);
    if (catServices.length === 0) return;
    const cat = categoryConfig[catKey];

    html += `
            <section class="category" data-category="${catKey}">
              <div class="category-header">
                <span class="category-icon">${cat.icon}</span>
                <h2 class="category-title">${tr[cat.key]}</h2>
                <span class="category-count">${catServices.length}</span>
              </div>
              <div class="services-grid">`;

    catServices.forEach((svc) => {
      const fullUrl = getServiceUrl(svc);
      const healthUrl = getServiceHealth(svc);
      const displayUrl = getServiceDisplay(svc);
      const delay = cardIndex * 40;
      html += `
              <a href="${fullUrl}" target="_blank" rel="noopener noreferrer"
                 class="service-card"
                 data-name="${svc.name.toLowerCase()}"
                 data-desc="${(svc.desc.en + ' ' + svc.desc.fa).toLowerCase()}"
                 data-tech="${svc.localPort}"
                 data-service-name="${svc.name}"
                 style="animation-delay: ${delay}ms">
                <div class="card-top">
                  <span class="service-icon">${svc.icon}</span>
                  <span class="status-badge checking" data-health="${healthUrl}">${tr.statusChecking}</span>
                </div>
                <h3 class="service-name">${svc.name}</h3>
                <p class="service-desc">${svc.desc[state.lang]}</p>
                <div class="service-url">${displayUrl}</div>
                <div class="card-footer">
                  <span class="port-badge">:${svc.localPort}</span>
                  <span class="arrow">${state.lang === 'fa' ? '←' : '→'}</span>
                </div>
              </a>`;
      cardIndex++;
    });

    html += `</div></section>`;
  });

  main.insertAdjacentHTML('beforeend', html);

  // Re-apply current search filter
  const searchInput = document.getElementById('search');
  if (searchInput.value) searchInput.dispatchEvent(new Event('input'));

  // Check statuses for newly rendered cards
  document.querySelectorAll('.status-badge[data-health]').forEach(checkStatus);
}

/* ============================================
Status Checking
============================================ */
async function checkStatus(el) {
  const endpoint = el.dataset.health;
  if (!endpoint) return;
  const tr = t();

  // Try CORS first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(endpoint, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-store',
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok || res.status === 302 || res.status === 301) {
      el.className = 'status-badge online';
      el.textContent = tr.statusOnline;
      return;
    }
    el.className = 'status-badge offline';
    el.textContent = tr.statusOffline;
  } catch (e) {
    // CORS blocked or network error - try no-cors as fallback
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      await fetch(endpoint, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-store',
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      el.className = 'status-badge online';
      el.textContent = tr.statusOnline;
    } catch (e2) {
      el.className = 'status-badge offline';
      el.textContent = tr.statusError;
    }
  }
}

async function refreshStatus() {
  document.querySelectorAll('.status-badge[data-health]').forEach((el) => {
    el.className = 'status-badge checking';
    el.textContent = t().statusChecking;
  });
  const promises = Array.from(document.querySelectorAll('.status-badge[data-health]')).map(
    (el) => checkStatus(el),
  );
  await Promise.all(promises);
  await loadModels();
  updateGlobalStatus();
  updateLastRefresh();
  showToast(t().toastRefreshed);
}

/* ============================================
Models Loader
============================================ */
async function loadModels() {
  const box = document.getElementById('models-box');
  const countEl = document.getElementById('models-count');
  const tr = t();
  try {
    // const url = getApiBaseUrl() + '/api/models';
    const res = await fetch('/api/models');
    if (!res.ok) throw new Error('Failed');
    const data = await res.json();
    const models = data.data || [];
    countEl.textContent = models.length;

    if (models.length === 0) {
      box.innerHTML = `<span class="models-empty">${tr.noResults.replace('found!', 'available')}</span>`;
      return;
    }
    box.innerHTML = models
      .map((m) => {
        const id = m.id || '';
        const isLocal = ['qwen', 'llama', 'deepseek', 'openhermes', 'mistral', 'gemma'].some(
          (x) => id.toLowerCase().includes(x),
        );
        return `<span class="model-tag ${isLocal ? 'local' : 'cloud'}">${id}</span>`;
      })
      .join('');
  } catch (e) {
    countEl.textContent = '!';
    box.innerHTML = `<span class="models-empty" style="color: var(--accent-red)">${tr.statusError}</span>`;
  }
}

/* ============================================
Meta Info (Clock, Uptime, Date)
============================================ */
function updateMeta() {
  const now = new Date();
  if (state.lang === 'fa') {
    document.getElementById('date').textContent = now.toLocaleDateString('fa-IR');
  } else {
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  const h = Math.floor(elapsed / 3600);
  const m = Math.floor((elapsed % 3600) / 60);
  const s = elapsed % 60;
  document.getElementById('uptime').textContent =
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateLastRefresh() {
  const now = new Date();
  document.getElementById('last-refresh').textContent = now.toLocaleTimeString(
    state.lang === 'fa' ? 'fa-IR' : 'en-US',
    {hour12: false},
  );
}

/* ============================================
Global Status
============================================ */
function updateGlobalStatus() {
  const statuses = document.querySelectorAll('.status-badge[data-health]');
  const online = document.querySelectorAll('.status-badge.online').length;
  const total = statuses.length;
  const dot = document.getElementById('global-dot');
  const txt = document.getElementById('global-status');
  const tr = t();

  dot.classList.remove('live', 'warn', 'error');

  if (total === 0) {
    txt.textContent = tr.checking;
    return;
  }

  if (online === total) {
    txt.textContent = tr.allOnline(total);
    dot.classList.add('live');
  } else if (online === 0) {
    txt.textContent = tr.allOffline;
    dot.classList.add('error');
  } else {
    txt.textContent = tr.partialOnline(online, total);
    dot.classList.add('warn');
  }
}

/* ============================================
Search
============================================ */
function setupSearch() {
  const searchInput = document.getElementById('search');
  const noResults = document.getElementById('no-results');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.service-card');
    const categorySections = document.querySelectorAll('.category');
    let totalVisible = 0;

    cards.forEach((card) => {
      const match =
        !query ||
        card.dataset.name.includes(query) ||
        card.dataset.desc.includes(query) ||
        card.dataset.tech.toLowerCase().includes(query);
      card.classList.toggle('hidden', !match);
      if (match) totalVisible++;
    });

    categorySections.forEach((section) => {
      const visibleCards = section.querySelectorAll('.service-card:not(.hidden)').length;
      section.classList.toggle('hidden', visibleCards === 0);
    });

    noResults.classList.toggle('show', totalVisible === 0 && query !== '');
  });
}

/* ============================================
Quick Actions
============================================ */
function copyBaseUrl() {
  const url = getApiBaseUrl();
  navigator.clipboard
    .writeText(url)
    .then(() => showToast(t().toastCopied))
    .catch(() => showToast(t().toastCopyFail));
}

/* ============================================
Toast
============================================ */
function showToast(msg) {
  document.querySelectorAll('.toast').forEach((tt) => tt.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
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
Ripple Effect
============================================ */
function setupRipple() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.service-card');
    if (!card) return;
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.cssText = `
            position: absolute; width: ${size}px; height: ${size}px;
            left: ${x}px; top: ${y}px;
            background: radial-gradient(circle, rgba(0, 229, 255, 0.4), transparent 70%);
            border-radius: 50%; pointer-events: none;
            transform: scale(0); animation: rippleEffect 0.6s ease-out; z-index: 0;`;
    card.style.position = 'relative';
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  const style = document.createElement('style');
  style.textContent = `@keyframes rippleEffect { to { transform: scale(2.5); opacity: 0; } }`;
  document.head.appendChild(style);
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
    // Esc : clear search or close modal
    if (e.key === 'Escape') {
      const helpModal = document.getElementById('help-modal');
      const settingsModal = document.getElementById('settings-modal');
      if (helpModal.classList.contains('show')) {
        helpModal.classList.remove('show');
        return;
      }
      if (settingsModal.classList.contains('show')) {
        settingsModal.classList.remove('show');
        return;
      }
      if (document.activeElement === searchInput) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
      }
    }
    // ? : help
    if (e.key === '?' && !inInput) {
      e.preventDefault();
      openHelp();
    }
    // R : refresh (avoid when typing)
    if (e.key.toLowerCase() === 'r' && !inInput && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      refreshStatus();
    }
    // T : theme toggle
    if (e.key.toLowerCase() === 't' && !inInput && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      toggleTheme();
    }
    if (e.key.toLowerCase() === 's' && !inInput && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      openSettings();
    }
    if (e.key.toLowerCase() === 'e' && !inInput && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      switchEnvironment();
    }
  });
}

/* ============================================
Init
============================================ */
function init() {
  applyTheme();
  applyLanguage();
  updateEnvBadge();
  setupSearch();
  setupRipple();
  setupKeyboard();
  setupSettingsListeners();
  updateMeta();
  setInterval(updateMeta, 1000);

  // Bind buttons
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('settings-toggle').addEventListener('click', openSettings);

  // First render
  refreshStatus().then(updateGlobalStatus);

  setInterval(refreshStatus, 30000);

  // Console greeting
  console.log(
    '%c🚀 Service Hub Loaded',
    'color: #00e5ff; font-size: 16px; font-weight: bold;',
  );
  console.log(
    '%cEnvironment: ' + state.env + ' (' + state.baseDomain + ')',
    'color: #b026ff; font-size: 12px;',
  );
}

Object.assign(window, {
  closeHelp,
  closeSettings,
  closeSettingsDirect,
  copyBaseUrl,
  openSettings,
  refreshStatus,
  saveSettings,
});

document.addEventListener('DOMContentLoaded', init);
