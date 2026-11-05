const i18n = {
  en: {
    title: 'AI Lab Pro',
    heroKicker: 'Self-hosted AI stack',
    subtitle: 'Launch chat, agents, gateways, and ops tools from one control deck.',
    checking: 'Checking...',
    never: 'Never',
    searchPlaceholder: 'Jump to a service…',
    searchAria: 'Search services',
    searchClear: 'Clear search',
    statStatus: 'Fleet',
    statUptime: 'Session',
    statDate: 'Today',
    statSynced: 'Synced',
    noResults: 'No results found!',
    modelsTitle: 'Active Models',
    modelsSubtitle: 'Live inventory from LiteLLM for this environment.',
    loading: 'Loading...',
    healthCheck: 'Health',
    footerTagline: 'Self-hosted control deck',
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
    allOnlineShort: (n) => `All up · ${n}`,
    partialOnline: (a, b) => `${a} of ${b} active`,
    partialOnlineShort: (a, b) => `${a}/${b} up`,
    allOffline: 'Services unavailable',
    allOfflineShort: 'Offline',
    catChat: 'Chat & Interfaces',
    catGateways: 'Gateways & Proxies',
    catBuilders: 'AI Builders',
    catAgents: 'Agents & Assistants',
    catMedia: 'Creative Media',
    catKnowledge: 'Knowledge & Research',
    catAutomation: 'Automation',
    catData: 'Data & Storage',
    catObservability: 'Observability',
    catSecurity: 'Security & Identity',
    catPlatform: 'Platform & Ops',
    catGrowth: 'Marketing & Content',
    catSpecialty: 'Specialty Apps',
    statusOnline: '● Online',
    statusOffline: '○ Offline',
    statusChecking: '...',
    statusError: '○ Error',
    allUp: 'All up',
    envLocal: 'Local',
    envServer: 'Server',
    envLocalDesc: 'localhost ports',
    envServerDesc: 'subdomains',
    envBadgeLocal: 'Local',
    envBadgeServer: 'Server',
    settingsTitle: 'Settings',
    environment: 'Environment',
    baseDomain: 'Base Domain',
    baseDomainHelp: 'Used for subdomain access in server mode (e.g. chat.lab.example.com)',
    litellmApiKey: 'LiteLLM API Key',
    litellmApiKeyHelp: 'Virtual key for this environment (local and server keys are stored separately)',
    litellmApiKeyPlaceholder: 'sk-…',
    showApiKey: 'Show API key',
    hideApiKey: 'Hide API key',
    modelsNeedKey: 'Add a LiteLLM API key in Settings to show models',
    featuredTitle: 'Featured',
    featuredPrev: 'Previous featured',
    featuredNext: 'Next featured',
    cancel: 'Cancel',
    save: 'Save',
  },
  fa: {
    title: 'مرکز کنترل AI Lab Pro',
    heroKicker: 'پشته هوش مصنوعی خودمیزبان',
    subtitle: 'چت، عامل‌ها، درگاه‌ها و ابزارهای عملیات را از یک داشبورد کنترل باز کنید.',
    checking: 'در حال بررسی...',
    never: 'هرگز',
    searchPlaceholder: 'پرش به سرویس…',
    searchAria: 'جستجوی سرویس‌ها',
    searchClear: 'پاک کردن جستجو',
    statStatus: 'ناوگان',
    statUptime: 'نشست',
    statDate: 'امروز',
    statSynced: 'همگام',
    noResults: 'نتیجه‌ای یافت نشد!',
    modelsTitle: 'مدل‌های فعال',
    modelsSubtitle: 'فهرست زنده از LiteLLM برای همین محیط.',
    loading: 'در حال بارگذاری...',
    healthCheck: 'سلامت',
    footerTagline: 'داشبورد کنترل خودمیزبان',
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
    allOnlineShort: (n) => `همه فعال · ${n}`,
    partialOnline: (a, b) => `${a} از ${b} فعال`,
    partialOnlineShort: (a, b) => `${a}/${b} فعال`,
    allOffline: 'سرویس‌ها در دسترس نیستند',
    allOfflineShort: 'آفلاین',
    catChat: 'چت و رابط‌ها',
    catGateways: 'درگاه‌ها و پروکسی‌ها',
    catBuilders: 'سازندگان هوش مصنوعی',
    catAgents: 'عامل‌ها و دستیارها',
    catMedia: 'رسانه خلاق',
    catKnowledge: 'دانش و پژوهش',
    catAutomation: 'اتوماسیون',
    catData: 'داده و ذخیره‌سازی',
    catObservability: 'مشاهده‌پذیری',
    catSecurity: 'امنیت و هویت',
    catPlatform: 'پلتفرم و عملیات',
    catGrowth: 'مارکتینگ و محتوا',
    catSpecialty: 'اپ‌های تخصصی',
    statusOnline: '● آنلاین',
    statusOffline: '○ آفلاین',
    statusChecking: '...',
    statusError: '○ خطا',
    allUp: 'همه فعال',
    envLocal: 'محلی',
    envServer: 'سرور',
    envLocalDesc: 'پورت‌های محلی',
    envServerDesc: 'ساب‌دامین',
    envBadgeLocal: 'محلی',
    envBadgeServer: 'سرور',
    settingsTitle: 'تنظیمات',
    environment: 'محیط',
    baseDomain: 'دامنه پایه',
    baseDomainHelp: 'برای دسترسی ساب‌دامین در حالت سرور (مثلاً chat.lab.example.com)',
    litellmApiKey: 'کلید API لایت‌ال‌ال‌ام',
    litellmApiKeyHelp: 'کلید مجازی برای همین محیط (کلیدهای محلی و سرور جداگانه ذخیره می‌شوند)',
    litellmApiKeyPlaceholder: 'sk-…',
    showApiKey: 'نمایش کلید',
    hideApiKey: 'مخفی کردن کلید',
    modelsNeedKey: 'برای نمایش مدل‌ها، کلید LiteLLM را در تنظیمات وارد کنید',
    featuredTitle: 'ویژه',
    featuredPrev: 'قبلی',
    featuredNext: 'بعدی',
    cancel: 'انصراف',
    save: 'ذخیره',
  },
};

/* Featured service names (order = carousel order). Add more anytime. */
const FEATURED_SERVICE_NAMES = ['Open WebUI', 'LiteLLM', 'Grafana', 'Mattermost', 'Portainer'];
const FEATURED_VISIBLE = 3;
const FEATURED_ROTATE_MS = 5000;

/* ============================================
Service Data
Categories (display order):
  chat → gateways → builders → agents → media → knowledge →
  automation → data → observability → security → platform → growth → specialty
============================================ */
const services = [
  /* —— Chat & Interfaces —— */
  {
    name: 'Open WebUI',
    icon: '🏠',
    category: 'chat',
    desc: {en: 'Chat interface for AI models', fa: 'رابط چت برای مدل‌های هوش مصنوعی'},
    localPort: 3000,
    subdomain: 'chat',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'LibreChat',
    icon: '💬',
    category: 'chat',
    desc: {
      en: 'Open-source AI chat app with multi-model support',
      fa: 'اپلیکیشن چت هوش مصنوعی متن‌باز با پشتیبانی از چند مدل',
    },
    localPort: 3080,
    subdomain: 'librechat',
    urlPath: '/',
    healthPath: '/',
  },

  /* —— Gateways & Proxies —— */
  {
    name: 'LiteLLM',
    icon: '🤖',
    category: 'gateways',
    desc: {en: 'LLM proxy with debug tools', fa: 'پروکسی LLM با ابزارهای دیباگ'},
    localPort: 4000,
    subdomain: 'litellm',
    urlPath: '/ui',
    healthPath: '/health/liveliness',
  },
  {
    name: 'OmniRoute',
    icon: '🛣️',
    category: 'gateways',
    desc: {en: 'Unified AI proxy and dashboard', fa: 'پروکسی و داشبورد یکپارچه هوش مصنوعی'},
    localPort: 20130,
    subdomain: 'omniroute',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: '9Router',
    icon: '🧭',
    category: 'gateways',
    desc: {
      en: 'Quota/cost router for coding agents (Claude Code, Cursor, Codex, Cline)',
      fa: 'مسیریاب quota/cost برای ابزارهای coding agent',
    },
    localPort: 20128,
    subdomain: '9router',
    urlPath: '/',
    healthPath: '/',
  },

  /* —— AI Builders —— */
  {
    name: 'Flowise',
    icon: '🎨',
    category: 'builders',
    desc: {en: 'Build AI workflows with drag & drop', fa: 'ساخت workflow هوش مصنوعی با drag & drop'},
    localPort: 3001,
    subdomain: 'flowise',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'Langflow',
    icon: '🔗',
    category: 'builders',
    desc: {en: 'Build agents and flows with LangChain', fa: 'ساخت Agent و فلو با LangChain'},
    localPort: 7860,
    subdomain: 'langflow',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'Dify',
    icon: '🧱',
    category: 'builders',
    desc: {en: 'Build AI applications and agents', fa: 'ساخت اپلیکیشن‌ها و عامل‌های هوش مصنوعی'},
    localPort: 8080,
    subdomain: 'dify',
    urlPath: '/',
    healthPath: '/',
  },

  /* —— Agents & Assistants —— */
  {
    name: 'Hermes Agent',
    icon: '☤',
    category: 'agents',
    desc: {
      en: 'Agent dashboard, memory, and messaging gateway',
      fa: 'داشبورد عامل، حافظه و درگاه پیام‌رسانی',
    },
    localPort: 9119,
    subdomain: 'hermes',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'OpenClaw',
    icon: '🦞',
    category: 'agents',
    desc: {en: 'Assistant gateway and control UI', fa: 'درگاه دستیار و رابط کنترل'},
    localPort: 18789,
    subdomain: 'openclaw',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'Moyai',
    icon: '🗿',
    category: 'agents',
    desc: {
      en: 'PydanticAI agent workspace with durable sessions',
      fa: 'فضای کار عامل PydanticAI با نشست‌های پایدار',
    },
    localPort: 8787,
    subdomain: 'moyai',
    urlPath: '/',
    healthPath: '/health',
  },
  // {
  //   name: 'OpenBot',
  //   icon: '🤖',
  //   category: 'agents',
  //   desc: {
  //     en: 'AI coworker platform with browser automation',
  //     fa: 'پلتفرم هم‌کار هوش مصنوعی با اتوماسیون مرورگر',
  //   },
  //   localPort: 3012,
  //   subdomain: 'openbot',
  //   urlPath: '/',
  //   healthPath: '/',
  // },
  // {
  //   name: 'Multica',
  //   icon: '🧩',
  //   category: 'agents',
  //   desc: {en: 'AI agent workspace and task board', fa: 'فضای کار عامل هوش مصنوعی و تابلو کار'},
  //   localPort: 3004,
  //   subdomain: 'multica',
  //   urlPath: '/',
  //   healthPath: '/',
  // },
  {
    name: 'MemWal',
    icon: '🧠',
    category: 'agents',
    desc: {
      en: 'Portable agent memory with cross-session recall',
      fa: 'حافظه قابل‌حمل عامل با بازیابی بین نشست‌ها',
    },
    localPort: 3020,
    subdomain: 'memwal',
    urlPath: '/',
    healthPath: '/',
  },

  /* —— Creative Media —— */
  {
    name: 'Open Generative AI',
    icon: '🎬',
    category: 'media',
    desc: {
      en: 'Creative image and video generation studio',
      fa: 'استودیو تولید تصویر و ویدیو خلاقانه',
    },
    localPort: 3011,
    subdomain: 'open-generative-ai',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'Voicebox',
    icon: '🔊',
    category: 'media',
    desc: {en: 'Local text-to-speech studio', fa: 'استودیوی تبدیل متن به گفتار محلی'},
    localPort: 17600,
    subdomain: 'voicebox',
    urlPath: '/',
    healthPath: '/health',
  },

  /* —— Knowledge & Research —— */
  {
    name: 'Open Notebook',
    icon: '📓',
    category: 'knowledge',
    desc: {
      en: 'Private research notebook and knowledge workspace',
      fa: 'دفترچه تحقیقاتی خصوصی و فضای دانش',
    },
    localPort: 8502,
    subdomain: 'open-notebook',
    urlPath: '/',
    healthPath: '/',
  },

  /* —— Automation —— */
  {
    name: 'n8n',
    icon: '🔄',
    category: 'automation',
    desc: {en: 'Workflow automation platform', fa: 'پلتفرم اتوماسیون workflow'},
    localPort: 5678,
    subdomain: 'n8n',
    urlPath: '/',
    healthPath: '/healthz',
  },
  {
    name: 'Home Assistant',
    icon: '🏡',
    category: 'automation',
    desc: {en: 'Open home automation platform', fa: 'پلتفرم متن‌باز اتوماسیون خانه'},
    localPort: 8123,
    subdomain: 'home-assistant',
    urlPath: '/',
    healthPath: '/manifest.json',
  },

  /* —— Data & Storage —— */
  {
    name: 'Qdrant',
    icon: '📦',
    category: 'data',
    desc: {en: 'Vector database for RAG', fa: 'پایگاه داده برداری برای RAG'},
    localPort: 6333,
    subdomain: 'qdrant',
    urlPath: '/dashboard',
    healthPath: '/readyz',
  },
  {
    name: 'MinIO Console',
    icon: '🪣',
    category: 'data',
    desc: {en: 'S3 storage management panel', fa: 'پنل مدیریت ذخیره‌سازی S3'},
    localPort: 9001,
    subdomain: 'minio-console',
    urlPath: '/',
    healthPath: '/minio/health/live',
  },
  {
    name: 'MinIO API',
    icon: '🗄️',
    category: 'data',
    desc: {en: 'S3-compatible object storage API', fa: 'API ذخیره‌سازی آبجکت سازگار با S3'},
    localPort: 9000,
    subdomain: 'minio',
    urlPath: '/',
    healthPath: '/minio/health/live',
  },

  /* —— Observability —— */
  {
    name: 'Langfuse',
    icon: '🧪',
    category: 'observability',
    desc: {
      en: 'LLM tracing, evals, and observability',
      fa: 'ردیابی، ارزیابی و مشاهده‌پذیری برای LLM',
    },
    localPort: 3010,
    subdomain: 'langfuse',
    urlPath: '/',
    healthPath: '/',
  },
  {
    name: 'Prometheus',
    icon: '📊',
    category: 'observability',
    desc: {en: 'Metrics collection and alerting', fa: 'جمع‌آوری متریک‌ها و هشدار'},
    localPort: 9090,
    subdomain: 'prometheus',
    urlPath: '/',
    healthPath: '/-/healthy',
  },
  {
    name: 'Grafana',
    icon: '📈',
    category: 'observability',
    desc: {en: 'Dashboards and visualization', fa: 'داشبورد و visualization'},
    localPort: 3002,
    subdomain: 'grafana',
    urlPath: '/',
    healthPath: '/api/health',
  },
  {
    name: 'Mattermost',
    icon: '🔔',
    category: 'observability',
    desc: {
      en: 'Team chat and Grafana alert notifications',
      fa: 'چت تیمی و اعلان‌های هشدار Grafana',
    },
    localPort: 8065,
    subdomain: 'mattermost',
    urlPath: '/',
    healthPath: '/api/v4/system/ping',
  },
  {
    name: 'OpenPanel',
    icon: '📉',
    category: 'observability',
    desc: {en: 'Open-source product analytics dashboard', fa: 'داشبورد متن‌باز تحلیل محصول'},
    localPort: 8090,
    subdomain: 'openpanel',
    urlPath: '/',
    healthPath: '/api/healthcheck',
  },

  /* —— Security & Identity —— */
  {
    name: 'Authentik',
    icon: '🔐',
    category: 'security',
    desc: {en: 'Identity provider and SSO portal', fa: 'ارائه‌دهنده هویت و پورتال SSO'},
    localPort: 9005,
    subdomain: 'authentik',
    urlPath: '/',
    healthPath: '/-/health/live/',
  },
  {
    name: 'Infisical',
    icon: '🗝️',
    category: 'security',
    desc: {en: 'Secrets and access management', fa: 'مدیریت رازها و دسترسی'},
    localPort: 8085,
    subdomain: 'infisical',
    urlPath: '/',
    healthPath: '/api/status',
  },

  /* —— Platform & Ops —— */
  {
    name: 'Portainer',
    icon: '🐳',
    category: 'platform',
    desc: {en: 'Docker container management UI', fa: 'رابط مدیریت کانتینرهای داکر'},
    localPort: 9003,
    subdomain: 'portainer',
    urlPath: '/',
    healthPath: '/api/system/status',
  },

  /* —— Marketing & Content —— */
  {
    name: 'OpenSEO',
    icon: '📣',
    category: 'growth',
    desc: {
      en: 'Open-source SEO workspace and agent tools',
      fa: 'فضای کار سئو متن‌باز و ابزارهای عامل',
    },
    localPort: 3003,
    subdomain: 'openseo',
    urlPath: '/',
    healthPath: '/api/health',
  },
  {
    name: 'Instatic',
    icon: '📝',
    category: 'growth',
    desc: {en: 'Self-hosted visual CMS', fa: 'سیستم مدیریت محتوای بصری خودمیزبان'},
    localPort: 8093,
    subdomain: 'instatic',
    urlPath: '/',
    healthPath: '/',
  },

  /* —— Specialty Apps —— */
  {
    name: 'OpenTerminal',
    icon: '💹',
    category: 'specialty',
    desc: {en: 'Open market data terminal', fa: 'ترمینال متن‌باز داده‌های بازار'},
    localPort: 8092,
    subdomain: 'openterminal',
    urlPath: '/',
    healthPath: '/',
  },
];

const categoryConfig = {
  chat: {icon: '💬', key: 'catChat'},
  gateways: {icon: '🛂', key: 'catGateways'},
  builders: {icon: '🛠️', key: 'catBuilders'},
  agents: {icon: '🤝', key: 'catAgents'},
  media: {icon: '🎬', key: 'catMedia'},
  knowledge: {icon: '📚', key: 'catKnowledge'},
  automation: {icon: '⚡', key: 'catAutomation'},
  data: {icon: '💾', key: 'catData'},
  observability: {icon: '📡', key: 'catObservability'},
  security: {icon: '🔐', key: 'catSecurity'},
  platform: {icon: '🖥️', key: 'catPlatform'},
  growth: {icon: '📣', key: 'catGrowth'},
  specialty: {icon: '🧩', key: 'catSpecialty'},
};

/* ============================================
State
============================================ */
// Auto-detect environment based on hostname
const _isLocalhost = ['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname);

function apiKeyStorageKey(env) {
  return env === 'server' ? 'litellmApiKeyServer' : 'litellmApiKeyLocal';
}

function getLitellmApiKey(env) {
  const resolved =
    env ||
    (typeof state !== 'undefined' && state.env) ||
    localStorage.getItem('env') ||
    (_isLocalhost ? 'local' : 'server');
  return localStorage.getItem(apiKeyStorageKey(resolved)) || '';
}

function setLitellmApiKey(key, env) {
  const resolved = env || state.env;
  const storageKey = apiKeyStorageKey(resolved);
  if (key) localStorage.setItem(storageKey, key);
  else localStorage.removeItem(storageKey);
}

function migrateLegacyApiKey() {
  const legacy = localStorage.getItem('litellmApiKey');
  if (!legacy) return;
  const env = localStorage.getItem('env') || (_isLocalhost ? 'local' : 'server');
  if (!getLitellmApiKey(env)) setLitellmApiKey(legacy, env);
  localStorage.removeItem('litellmApiKey');
}

migrateLegacyApiKey();

const state = {
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'dark',
  env: localStorage.getItem('env') || (_isLocalhost ? 'local' : 'server'),
  baseDomain: localStorage.getItem('baseDomain') || 'lab.example.com',
  startTime: Date.now(),
};

const settingsDraftKeys = {
  local: getLitellmApiKey('local'),
  server: getLitellmApiKey('server'),
};

const featuredCarousel = {
  index: 0,
  timer: null,
  paused: false,
  dragging: false,
  dragMoved: false,
  suppressClick: false,
  startX: 0,
  lastX: 0,
  baseTranslate: 0,
  pointerId: null,
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

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (tr[key]) {
      el.setAttribute('aria-label', tr[key]);
      el.title = tr[key];
    }
  });

  // Update flag
  document.getElementById('lang-flag').textContent = state.lang === 'fa' ? '🇬🇧' : '🇮🇷';

  // Update page title
  document.title = tr.title;

  const featuredPrev = document.getElementById('featured-prev');
  const featuredNext = document.getElementById('featured-next');
  if (featuredPrev) {
    featuredPrev.setAttribute('aria-label', tr.featuredPrev);
    featuredPrev.title = tr.featuredPrev;
  }
  if (featuredNext) {
    featuredNext.setAttribute('aria-label', tr.featuredNext);
    featuredNext.title = tr.featuredNext;
  }

  localStorage.setItem('lang', state.lang);

  updateEnvBadge();
  renderServices();
  updateGlobalStatus();
  updateMeta();
}

function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'fa' : 'en';
  applyLanguage();
}

/* ============================================
Settings Management
============================================ */
function syncApiKeyField(env) {
  const apiKeyInput = document.getElementById('litellm-api-key');
  if (!apiKeyInput) return;
  apiKeyInput.dataset.envBound = env;
  apiKeyInput.value = settingsDraftKeys[env] || '';
  apiKeyInput.type = 'password';
  const toggle = document.getElementById('toggle-api-key');
  if (toggle) {
    toggle.setAttribute('aria-pressed', 'false');
    toggle.setAttribute('aria-label', t().showApiKey);
    toggle.title = t().showApiKey;
    toggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
}

function stashApiKeyDraftFromInput() {
  const apiKeyInput = document.getElementById('litellm-api-key');
  if (!apiKeyInput) return;
  const bound = apiKeyInput.dataset.envBound || state.env;
  settingsDraftKeys[bound] = apiKeyInput.value;
}

function openSettings() {
  const modal = document.getElementById('settings-modal');
  const baseDomainInput = document.getElementById('base-domain');
  settingsDraftKeys.local = getLitellmApiKey('local');
  settingsDraftKeys.server = getLitellmApiKey('server');
  document.getElementById('env-local').checked = state.env === 'local';
  document.getElementById('env-server').checked = state.env === 'server';
  baseDomainInput.value = state.baseDomain;
  baseDomainInput.disabled = state.env === 'local';
  syncApiKeyField(state.env);
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

  stashApiKeyDraftFromInput();

  const prevLocal = getLitellmApiKey('local');
  const prevServer = getLitellmApiKey('server');
  const nextLocal = (settingsDraftKeys.local || '').trim();
  const nextServer = (settingsDraftKeys.server || '').trim();

  const envChanged = newEnv !== state.env;
  const domainChanged = newDomain && newDomain !== state.baseDomain;
  const keyChanged = nextLocal !== prevLocal || nextServer !== prevServer;

  state.env = newEnv;
  if (newDomain) state.baseDomain = newDomain;

  localStorage.setItem('env', state.env);
  localStorage.setItem('baseDomain', state.baseDomain);
  setLitellmApiKey(nextLocal, 'local');
  setLitellmApiKey(nextServer, 'server');
  settingsDraftKeys.local = nextLocal;
  settingsDraftKeys.server = nextServer;

  updateEnvBadge();
  closeSettingsDirect();
  showToast(tr.toastSettingsSaved);

  if (envChanged || domainChanged) {
    renderServices();
    refreshStatus();
  } else if (keyChanged) {
    loadModels();
  }
}

function setupSettingsListeners() {
  document.querySelectorAll('input[name="env"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
      stashApiKeyDraftFromInput();
      document.getElementById('base-domain').disabled = e.target.value === 'local';
      syncApiKeyField(e.target.value);
    });
  });

  const toggle = document.getElementById('toggle-api-key');
  const apiKeyInput = document.getElementById('litellm-api-key');
  if (toggle && apiKeyInput) {
    toggle.addEventListener('click', () => {
      const showing = apiKeyInput.type === 'text';
      apiKeyInput.type = showing ? 'password' : 'text';
      toggle.setAttribute('aria-pressed', showing ? 'false' : 'true');
      const label = showing ? t().showApiKey : t().hideApiKey;
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
      toggle.innerHTML = showing
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.8 21.8 0 0 1 5.06-5.94"/><path d="M9.9 4.24A10.94 10.94 0 0 1 12 5c7 0 11 7 11 7a21.9 21.9 0 0 1-2.16 3.19"/><path d="M14.12 14.12a3 3 0 0 1-4.24-4.24"/><path d="M1 1l22 22"/></svg>`;
    });
  }
}

/* ============================================
Category Tabs
============================================ */
function renderCategoryTabs() {
  const tabs = document.getElementById('category-tabs');
  if (!tabs) return;
  const tr = t();
  const parts = [];

  Object.keys(categoryConfig).forEach((catKey) => {
    const count = services.filter((s) => s.category === catKey).length;
    if (count === 0) return;
    const cat = categoryConfig[catKey];
    parts.push(`
      <button type="button" class="category-tab" data-tab="${catKey}" aria-controls="category-${catKey}">
        <span class="category-tab-icon">${cat.icon}</span>
        <span class="category-tab-label">${tr[cat.key]}</span>
        <span class="category-tab-count">${count}</span>
      </button>`);
  });

  tabs.innerHTML = parts.join('');
}

function setupCategoryTabs() {
  const tabs = document.getElementById('category-tabs');
  if (!tabs || tabs.dataset.bound) return;
  tabs.dataset.bound = '1';

  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-tab');
    if (!btn) return;
    const catKey = btn.dataset.tab;
    const section = document.getElementById(`category-${catKey}`);
    if (!section || section.classList.contains('hidden')) return;

    document.querySelectorAll('.category-tab').forEach((el) => el.classList.remove('active'));
    btn.classList.add('active');

    const offset = 72;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({top, behavior: 'smooth'});
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((en) => en.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const catKey = visible.target.dataset.category;
      document.querySelectorAll('.category-tab').forEach((el) => {
        el.classList.toggle('active', el.dataset.tab === catKey);
      });
    },
    {rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4, 0.7]},
  );

  const observeCategories = () => {
    document.querySelectorAll('.category').forEach((section) => observer.observe(section));
  };
  setupCategoryTabs._observe = observeCategories;
}

/* ============================================
Render Services
============================================ */
function getFeaturedServices() {
  return FEATURED_SERVICE_NAMES.map((name) => services.find((s) => s.name === name)).filter(
    Boolean,
  );
}

function getFeaturedVisibleCount(total) {
  if (window.matchMedia('(max-width: 640px)').matches) return 1;
  if (window.matchMedia('(max-width: 900px)').matches) return Math.min(2, total);
  return Math.min(FEATURED_VISIBLE, total);
}

function getFeaturedMaxIndex(total, visible) {
  return Math.max(0, total - visible);
}

function getFeaturedDir() {
  return document.documentElement.dir === 'rtl' ? 1 : -1;
}

function getFeaturedStep(track, slides) {
  if (!track || !slides?.length) return 0;
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  return slides[0].getBoundingClientRect().width + gap;
}

function getFeaturedTranslate(index, step) {
  return getFeaturedDir() * index * step;
}

function stopFeaturedCarousel() {
  if (featuredCarousel.timer) {
    clearInterval(featuredCarousel.timer);
    featuredCarousel.timer = null;
  }
}

function startFeaturedCarousel() {
  stopFeaturedCarousel();
  const slides = document.querySelectorAll('.featured-slide');
  const visible = getFeaturedVisibleCount(slides.length);
  if (getFeaturedMaxIndex(slides.length, visible) <= 0) return;
  featuredCarousel.timer = setInterval(() => {
    if (featuredCarousel.paused || featuredCarousel.dragging) return;
    showFeaturedSlide(featuredCarousel.index + 1);
  }, FEATURED_ROTATE_MS);
}

function showFeaturedSlide(nextIndex) {
  const track = document.getElementById('featured-track');
  const carousel = document.querySelector('.featured-carousel');
  const controls = document.querySelector('.featured-controls');
  const slides = Array.from(document.querySelectorAll('.featured-slide'));
  const dots = Array.from(document.querySelectorAll('.featured-dot'));
  if (!track || !slides.length) return;

  const total = slides.length;
  const visible = getFeaturedVisibleCount(total);
  const maxIndex = getFeaturedMaxIndex(total, visible);

  track.style.setProperty('--featured-visible', String(visible));
  track.style.transition = '';

  let idx = nextIndex;
  if (idx > maxIndex) idx = 0;
  if (idx < 0) idx = maxIndex;
  featuredCarousel.index = idx;

  // Move by one card (+ gap) in px so 3-up layout stays aligned
  const step = getFeaturedStep(track, slides);
  track.style.transform = `translateX(${getFeaturedTranslate(featuredCarousel.index, step)}px)`;

  slides.forEach((slide, i) => {
    const inView = i >= featuredCarousel.index && i < featuredCarousel.index + visible;
    slide.classList.toggle('active', inView);
    slide.setAttribute('aria-hidden', inView ? 'false' : 'true');
  });
  dots.forEach((dot, i) => {
    const active = i === featuredCarousel.index;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-current', active ? 'true' : 'false');
  });

  const showControls = maxIndex > 0;
  if (controls) controls.hidden = !showControls;
  const dotsWrap = document.getElementById('featured-dots');
  if (dotsWrap) dotsWrap.hidden = !showControls;
  if (carousel) carousel.classList.toggle('is-static', !showControls);
}

function renderFeatured() {
  const section = document.getElementById('featured-section');
  const track = document.getElementById('featured-track');
  const dots = document.getElementById('featured-dots');
  if (!section || !track || !dots) return;

  const featured = getFeaturedServices();
  const tr = t();

  if (!featured.length) {
    section.hidden = true;
    stopFeaturedCarousel();
    return;
  }

  section.hidden = false;
  const visible = getFeaturedVisibleCount(featured.length);
  track.style.setProperty('--featured-visible', String(visible));
  track.style.transform = 'translateX(0)';
  track.innerHTML = featured
    .map((svc, i) => {
      const fullUrl = getServiceUrl(svc);
      const healthUrl = getServiceHealth(svc);
      const displayUrl = getServiceDisplay(svc);
      const inView = i < visible;
      return `
        <a href="${fullUrl}" target="_blank" rel="noopener noreferrer" draggable="false"
           class="featured-slide service-card ${inView ? 'active' : ''}"
           data-name="${svc.name.toLowerCase()}"
           data-desc="${(svc.desc.en + ' ' + svc.desc.fa).toLowerCase()}"
           data-tech="${svc.localPort}"
           data-subdomain="${(svc.subdomain || '').toLowerCase()}"
           data-category="${svc.category}"
           data-service-name="${svc.name}"
           aria-hidden="${inView ? 'false' : 'true'}">
          <div class="card-top">
            <span class="service-icon">${svc.icon}</span>
            <span class="status-badge checking" data-health="${healthUrl}">${tr.statusChecking}</span>
          </div>
          <h3 class="service-name">${svc.name}</h3>
          <p class="service-desc">${svc.desc[state.lang]}</p>
          <div class="service-url" dir="ltr">${displayUrl}</div>
          <div class="card-footer">
            <span class="port-badge" dir="ltr">:${svc.localPort}</span>
            <span class="arrow">${state.lang === 'fa' ? '←' : '→'}</span>
          </div>
        </a>`;
    })
    .join('');

  const pageCount = getFeaturedMaxIndex(featured.length, visible) + 1;
  dots.innerHTML = Array.from({length: pageCount}, (_, i) => {
    return `<button type="button" class="featured-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`;
  }).join('');

  featuredCarousel.index = 0;
  showFeaturedSlide(0);
  track.querySelectorAll('.status-badge[data-health]').forEach(checkStatus);
  startFeaturedCarousel();
}

function wrapFeaturedIndex(index, maxIndex) {
  if (maxIndex <= 0) return 0;
  const span = maxIndex + 1;
  return ((index % span) + span) % span;
}

function isFeaturedSectionHovered() {
  const section = document.getElementById('featured-section');
  return Boolean(section?.matches(':hover'));
}

function setupFeaturedCarousel() {
  const section = document.getElementById('featured-section');
  const carousel = document.querySelector('.featured-carousel');
  if (!section || section.dataset.bound) return;
  section.dataset.bound = '1';

  section.addEventListener('mouseenter', () => {
    featuredCarousel.paused = true;
  });
  section.addEventListener('mouseleave', () => {
    if (!featuredCarousel.dragging) featuredCarousel.paused = false;
  });
  section.addEventListener('focusin', () => {
    featuredCarousel.paused = true;
  });
  section.addEventListener('focusout', () => {
    if (!featuredCarousel.dragging) featuredCarousel.paused = false;
  });

  document.getElementById('featured-prev')?.addEventListener('click', () => {
    showFeaturedSlide(featuredCarousel.index - 1);
    startFeaturedCarousel();
  });
  document.getElementById('featured-next')?.addEventListener('click', () => {
    showFeaturedSlide(featuredCarousel.index + 1);
    startFeaturedCarousel();
  });
  document.getElementById('featured-dots')?.addEventListener('click', (e) => {
    const dot = e.target.closest('.featured-dot');
    if (!dot) return;
    showFeaturedSlide(Number(dot.dataset.index));
    startFeaturedCarousel();
  });

  if (carousel) {
    const DRAG_THRESHOLD_PX = 10;

    const onPointerMove = (e) => {
      if (featuredCarousel.pointerId == null) return;
      if (e.pointerId !== featuredCarousel.pointerId) return;
      const track = document.getElementById('featured-track');
      if (!track) return;

      const dx = e.clientX - featuredCarousel.startX;
      featuredCarousel.lastX = e.clientX;

      // Defer drag until real movement so taps still activate <a href>
      if (!featuredCarousel.dragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD_PX) return;
        featuredCarousel.dragging = true;
        featuredCarousel.dragMoved = true;
        featuredCarousel.paused = true;
        carousel.classList.add('is-dragging');
        try {
          carousel.setPointerCapture(e.pointerId);
        } catch (_) {
          /* capture optional */
        }
      }

      e.preventDefault();
      track.style.transition = 'none';
      track.style.transform = `translateX(${featuredCarousel.baseTranslate + dx}px)`;
    };

    const endDrag = (e) => {
      if (featuredCarousel.pointerId == null) return;
      if (
        e.pointerId != null &&
        featuredCarousel.pointerId != null &&
        e.pointerId !== featuredCarousel.pointerId
      ) {
        return;
      }

      const track = document.getElementById('featured-track');
      const slides = Array.from(document.querySelectorAll('.featured-slide'));
      const step = getFeaturedStep(track, slides);
      const maxIndex = getFeaturedMaxIndex(
        slides.length,
        getFeaturedVisibleCount(slides.length),
      );
      const clientX = e.clientX ?? featuredCarousel.lastX;
      const dx = clientX - featuredCarousel.startX;
      const moved = featuredCarousel.dragMoved;

      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);

      try {
        carousel.releasePointerCapture?.(featuredCarousel.pointerId);
      } catch (_) {
        /* already released */
      }

      carousel.classList.remove('is-dragging');
      featuredCarousel.dragging = false;
      featuredCarousel.pointerId = null;
      featuredCarousel.paused = isFeaturedSectionHovered();

      // Tap / no real drag — do not touch transform or swallow the click
      if (!moved || !step || maxIndex <= 0) {
        featuredCarousel.dragMoved = false;
        featuredCarousel.suppressClick = false;
        startFeaturedCarousel();
        return;
      }

      // Snap to nearest card; wrap so the sequence never dead-ends
      const dir = getFeaturedDir();
      const raw = (featuredCarousel.baseTranslate + dx) / (dir * step);
      let next = Math.round(raw);
      if (Math.abs(dx) >= Math.max(36, step * 0.18)) {
        const dirStep = Math.sign(dx / (dir * step)) || (dx * dir < 0 ? 1 : -1);
        if (next === featuredCarousel.index) next = featuredCarousel.index + dirStep;
      }
      next = wrapFeaturedIndex(next, maxIndex);
      showFeaturedSlide(next);
      featuredCarousel.suppressClick = true;
      featuredCarousel.dragMoved = false;
      window.setTimeout(() => {
        featuredCarousel.suppressClick = false;
      }, 120);
      startFeaturedCarousel();
    };

    carousel.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });

    carousel.addEventListener('pointerdown', (e) => {
      if (e.button != null && e.button !== 0) return;
      if (e.target.closest('.featured-controls, .featured-dot, .icon-btn')) return;
      const track = document.getElementById('featured-track');
      const slides = Array.from(document.querySelectorAll('.featured-slide'));
      const maxIndex = getFeaturedMaxIndex(
        slides.length,
        getFeaturedVisibleCount(slides.length),
      );
      // Static carousel (all cards visible): never hijack pointers — let links work
      if (!track || maxIndex <= 0) return;

      const step = getFeaturedStep(track, slides);
      featuredCarousel.dragging = false;
      featuredCarousel.dragMoved = false;
      featuredCarousel.suppressClick = false;
      featuredCarousel.startX = e.clientX;
      featuredCarousel.lastX = e.clientX;
      featuredCarousel.baseTranslate = getFeaturedTranslate(featuredCarousel.index, step);
      featuredCarousel.pointerId = e.pointerId;
      featuredCarousel.paused = true;

      window.addEventListener('pointermove', onPointerMove, {passive: false});
      window.addEventListener('pointerup', endDrag);
      window.addEventListener('pointercancel', endDrag);
    });

    carousel.addEventListener('lostpointercapture', () => {
      if (!featuredCarousel.dragging && featuredCarousel.pointerId == null) return;
      endDrag({
        pointerId: featuredCarousel.pointerId,
        clientX: featuredCarousel.lastX,
      });
    });

    // Swallow only the click that follows a real swipe
    carousel.addEventListener(
      'click',
      (e) => {
        if (!featuredCarousel.suppressClick) return;
        e.preventDefault();
        e.stopPropagation();
        featuredCarousel.suppressClick = false;
        featuredCarousel.dragMoved = false;
      },
      true,
    );
  }

  window.addEventListener('resize', () => {
    updateGlobalStatus();
    if (!document.querySelector('.featured-slide')) return;
    showFeaturedSlide(featuredCarousel.index);
    startFeaturedCarousel();
  });
}

function renderServices() {
  const main = document.getElementById('main-content');
  main.querySelectorAll('.category').forEach((el) => el.remove());
  const tr = t();
  let html = '';
  let cardIndex = 0;

  renderFeatured();
  renderCategoryTabs();

  Object.keys(categoryConfig).forEach((catKey) => {
    const catServices = services.filter((s) => s.category === catKey);
    if (catServices.length === 0) return;
    const cat = categoryConfig[catKey];

    html += `
            <section class="category" id="category-${catKey}" data-category="${catKey}">
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
                 data-subdomain="${(svc.subdomain || '').toLowerCase()}"
                 data-category="${catKey}"
                 data-service-name="${svc.name}"
                 style="animation-delay: ${delay}ms">
                <div class="card-top">
                  <span class="service-icon">${svc.icon}</span>
                  <span class="status-badge checking" data-health="${healthUrl}">${tr.statusChecking}</span>
                </div>
                <h3 class="service-name">${svc.name}</h3>
                <p class="service-desc">${svc.desc[state.lang]}</p>
                <div class="service-url" dir="ltr">${displayUrl}</div>
                <div class="card-footer">
                  <span class="port-badge" dir="ltr">:${svc.localPort}</span>
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

  setupCategoryTabs._observe?.();
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
function getModelsEndpoints() {
  const base = getApiBaseUrl();
  return [...new Set([`${base}/v1/models`, `${base}/api/models`, '/api/models'])];
}

async function fetchModelsFrom(url, apiKey) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-store',
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data)) return data;
    return [];
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

function modelProvider(id) {
  const name = String(id || '').toLowerCase();
  if (name.includes('claude') || name.includes('anthropic')) return 'anthropic';
  if (name.includes('gpt') || name.includes('openai') || /(^|[^a-z])o[1-9]([^a-z]|$)/.test(name))
    return 'openai';
  if (name.includes('gemini') || name.includes('google')) return 'google';
  if (name.includes('qwen') || name.includes('dashscope')) return 'qwen';
  if (name.includes('deepseek')) return 'deepseek';
  if (name.includes('mistral') || name.includes('mixtral')) return 'mistral';
  if (name.includes('llama') || name.includes('meta')) return 'meta';
  if (name.includes('grok') || name.includes('xai')) return 'xai';
  return 'other';
}

async function loadModels() {
  const box = document.getElementById('models-box');
  const countEl = document.getElementById('models-count');
  const tr = t();
  const apiKey = getLitellmApiKey(state.env).trim();

  if (!apiKey) {
    countEl.textContent = '0';
    box.innerHTML = `<span class="models-empty">${tr.modelsNeedKey}</span>`;
    return;
  }

  box.innerHTML = `<span class="models-empty">${tr.loading}</span>`;

  for (const url of getModelsEndpoints()) {
    try {
      const models = await fetchModelsFrom(url, apiKey);
      countEl.textContent = models.length;

      if (models.length === 0) {
        box.innerHTML = `<span class="models-empty">${tr.noResults.replace('found!', 'available')}</span>`;
        return;
      }
      const tags = models
        .map((m) => {
          const id = typeof m === 'string' ? m : m.id || m.model || '';
          if (!id) return null;
          const provider = modelProvider(id);
          return {id, provider};
        })
        .filter(Boolean)
        .sort((a, b) => a.id.localeCompare(b.id));

      box.innerHTML = tags
        .map(
          ({id, provider}) =>
            `<span class="model-tag" data-provider="${provider}" title="${id}"><span class="model-tag-dot" aria-hidden="true"></span>${id}</span>`,
        )
        .join('');
      return;
    } catch (_) {
      /* try next endpoint */
    }
  }

  countEl.textContent = '!';
  box.innerHTML = `<span class="models-empty" style="color: var(--accent-red)">${tr.statusError}</span>`;
}

/* ============================================
Meta Info (Clock, Uptime, Date)
============================================ */
/* Latin digits always; FA dates use Solar Hijri (Shamsi) month names */
function formatStatDate(now) {
  if (state.lang !== 'fa') {
    return now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  const parts = new Intl.DateTimeFormat('fa-IR-u-ca-persian-nu-latn', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).formatToParts(now);
  const get = (type) => parts.find((p) => p.type === type)?.value || '';
  // e.g. "جمعه، 15 آبان 1405" (Shamsi labels, Latin digits)
  return `${get('weekday')}، ${get('day')} ${get('month')} ${get('year')}`;
}

function formatStatTime(now) {
  return now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

function updateMeta() {
  const now = new Date();
  document.getElementById('date').textContent = formatStatDate(now);

  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  const h = Math.floor(elapsed / 3600);
  const m = Math.floor((elapsed % 3600) / 60);
  const s = elapsed % 60;
  document.getElementById('uptime').textContent =
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateLastRefresh() {
  document.getElementById('last-refresh').textContent = formatStatTime(new Date());
}

/* ============================================
Global Status
============================================ */
function isCompactStatus() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function updateGlobalStatus() {
  const statuses = document.querySelectorAll('.status-badge[data-health]');
  const online = document.querySelectorAll('.status-badge.online').length;
  const total = statuses.length;
  const dot = document.getElementById('global-dot');
  const txt = document.getElementById('global-status');
  const tr = t();
  const compact = isCompactStatus();

  dot.classList.remove('live', 'warn', 'error');

  if (total === 0) {
    txt.textContent = tr.checking;
    return;
  }

  if (online === total) {
    txt.textContent = compact ? tr.allOnlineShort(total) : tr.allOnline(total);
    dot.classList.add('live');
  } else if (online === 0) {
    txt.textContent = compact ? tr.allOfflineShort : tr.allOffline;
    dot.classList.add('error');
  } else {
    txt.textContent = compact
      ? tr.partialOnlineShort(online, total)
      : tr.partialOnline(online, total);
    dot.classList.add('warn');
  }
}

/* ============================================
Search
============================================ */
function setupSearch() {
  const searchInput = document.getElementById('search');
  const searchClear = document.getElementById('search-clear');
  const searchShell = searchInput?.closest('.search-container');
  const noResults = document.getElementById('no-results');
  if (!searchInput) return;

  const syncSearchChrome = () => {
    const hasQuery = searchInput.value.length > 0;
    searchShell?.classList.toggle('has-query', hasQuery);
    if (searchClear) searchClear.hidden = !hasQuery;
  };

  const runFilter = () => {
    const query = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.service-card');
    const categorySections = document.querySelectorAll('.category');
    let totalVisible = 0;

    cards.forEach((card) => {
      const match =
        !query ||
        card.dataset.name.includes(query) ||
        card.dataset.desc.includes(query) ||
        card.dataset.tech.toLowerCase().includes(query) ||
        (card.dataset.subdomain || '').includes(query) ||
        (card.dataset.category || '').includes(query);
      card.classList.toggle('hidden', !match);
      if (match) totalVisible++;
    });

    categorySections.forEach((section) => {
      const visibleCards = section.querySelectorAll('.service-card:not(.hidden)').length;
      section.classList.toggle('hidden', visibleCards === 0);
    });

    document.querySelectorAll('.category-tab').forEach((tab) => {
      const section = document.getElementById(`category-${tab.dataset.tab}`);
      tab.classList.toggle('hidden', !section || section.classList.contains('hidden'));
    });

    noResults.classList.toggle('show', totalVisible === 0 && query !== '');
    syncSearchChrome();
  };

  searchInput.addEventListener('input', runFilter);
  searchClear?.addEventListener('click', () => {
    searchInput.value = '';
    runFilter();
    searchInput.focus();
  });
  syncSearchChrome();
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
  setupCategoryTabs();
  setupFeaturedCarousel();
  updateMeta();
  setInterval(updateMeta, 1000);

  // Bind buttons
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('settings-toggle').addEventListener('click', openSettings);

  // First render
  refreshStatus().then(updateGlobalStatus);

  setInterval(refreshStatus, 30000);

  registerServiceWorker();

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

/* ============================================
PWA
============================================ */
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  const swUrl = new URL('sw.js', window.location.href);
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(swUrl.href).catch(() => {
      /* ignore path / offline failures */
    });
  });
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
