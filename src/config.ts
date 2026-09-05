export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    badge: string;
    description: string;
    foundedYear: number;
    statusText: string;
  };
  links: {
    shopUrl: string;
    contactUrl: string;
    channelUrl: string;
    repoName: string;
    customDomain: string;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
    keywords: string[];
    geo: {
      region: string;
      placename: string;
      position: string;
      icbm: string;
      areaServed: string[];
    };
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    pipelineSteps: Array<{
      id: string;
      number: string;
      name: string;
      description: string;
      deliverable: string;
      icon: string;
      preview: {
        title: string;
        tag: string;
        codeSnippet?: string;
        stats: string;
      };
    }>;
  };
  services: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
    price?: string;
    timeline?: string;
    priceNum?: number;
    highlights: string[];
    techBadge: string;
    ctaText: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    category: string;
    description: string;
    statusBadge: string;
    features: string[];
    targetUrl?: string;
    actionLabel?: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
    outcome: string;
  }>;
  shop: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    highlights: string[];
    catalogPreview: Array<{
      category: string;
      items: string;
    }>;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Tropoklad Lab",
    tagline: "Цифровая студия для бизнеса и авторов",
    badge: "PRODUCT STUDIO",
    description: "Запускаем сайты, ботов и AI-системы, которые работают. От идеи до публичной ссылки без лишней бюрократии.",
    foundedYear: 2025,
    statusText: "Студия принимает новые проекты",
  },
  links: {
    shopUrl: "https://t.me/abuz_ai",
    contactUrl: "https://t.me/abuz_ai",
    channelUrl: "https://t.me/abuz_ai",
    repoName: "tropoklad-lab",
    customDomain: "",
  },
  seo: {
    title: "Tropoklad Lab — Цифровая студия: сайты, боты и AI-системы под ключ",
    description: "Запускаем сайты, Telegram-боты и AI-системы, которые работают. От идеи до публичной ссылки без раздутых команд и бесконечных созвонов. Доступы к AI-инструментам.",
    siteUrl: "https://b24039971.github.io/tropoklad-lab",
    ogImage: "/og-image.png",
    keywords: [
      "Tropoklad Lab",
      "цифровая студия",
      "разработка сайтов",
      "telegram боты",
      "mini apps",
      "AI автоматизация",
      "ai агенты",
      "магазин нейросетей",
      "продуктовая разработка"
    ],
    geo: {
      region: "RU",
      placename: "Москва, Санкт-Петербург, Remote Worldwide",
      position: "55.7558;37.6176",
      icbm: "55.7558, 37.6176",
      areaServed: [
        "Россия",
        "СНГ",
        "Worldwide (Remote)",
        "Global"
      ]
    }
  },
  nav: [
    { label: "Услуги", href: "#services" },
    { label: "Проекты", href: "#projects" },
    { label: "Процесс", href: "#process" },
    { label: "Инструменты", href: "#tools" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    badge: "ЦИФРОВАЯ СТУДИЯ ДЛЯ БИЗНЕСА И АВТОРОВ",
    title: "Запускаем сайты, ботов и AI-системы, которые работают",
    description: "От идеи до публичной ссылки. Без раздутых команд, бесконечных созвонов и разработки, которая никогда не заканчивается.",
    primaryCta: {
      label: "Обсудить проект",
      href: "https://t.me/abuz_ai",
    },
    secondaryCta: {
      label: "Посмотреть инструменты",
      href: "#tools",
    },
    pipelineSteps: [
      {
        id: "idea",
        number: "01",
        name: "Идея",
        description: "Анализируем бизнес-цель, отсекаем лишнее и формируем четкий продуктовый скоуп.",
        deliverable: "Продуктовая спецификация и архитектурная карта",
        icon: "idea",
        preview: {
          title: "Product Scope Matrix",
          tag: "INITIATED",
          codeSnippet: "// Архитектурный фокус\nconst scope = {\n  goal: 'Turnkey Launch',\n  overhead: 0,\n  timeline: 'Fast Track'\n};",
          stats: "1-2 дня на декомпозицию",
        }
      },
      {
        id: "proto",
        number: "02",
        name: "Прототип",
        description: "Проектируем логику сценариев, UX-поток и интерактивный макет до написания кода.",
        deliverable: "Кликабельный прототип и пользовательские сценарии",
        icon: "proto",
        preview: {
          title: "Interactive Flow Model",
          tag: "WIREFRAMED",
          codeSnippet: "interface UXFlow {\n  entry: 'User / Lead';\n  action: 'Telegram Bot / Web Page';\n  conversion: 'Target Outcome';\n}",
          stats: "Полная визуальная ясность",
        }
      },
      {
        id: "build",
        number: "03",
        name: "Сборка",
        description: "Чистая разработка: быстрый фронтенд, отказоустойчивые боты, интеграция AI API.",
        deliverable: "Production-ready кодовая база и проверенная инфраструктура",
        icon: "build",
        preview: {
          title: "Core Build Pipeline",
          tag: "COMPILED",
          codeSnippet: "astro build && test --e2e\n✓ Static HTML rendered\n✓ Telegram API integrated\n✓ AI pipeline active",
          stats: "0 лишних зависимостей",
        }
      },
      {
        id: "launch",
        number: "04",
        name: "Запуск",
        description: "Публикация на надежном хостинге, настройка домена, подключение телеметрии и мониторинга.",
        deliverable: "Работающий сервис с публичным URL и поддержкой",
        icon: "launch",
        preview: {
          title: "Public Release & Telemetry",
          tag: "100% LIVE",
          codeSnippet: "DEPLOYED: https://vibecoder.help\nStatus: 200 OK (38ms)\nAll Systems Operational",
          stats: "Готово к масштабированию",
        }
      }
    ]
  },
  services: [
    {
      id: "sites",
      number: "01",
      title: "Сайты",
      description: "Лендинги, каталоги, портфолио и продуктовые страницы. Адаптивные, быстрые и готовые к публикации.",
      price: "от 45 000 ₽",
      timeline: "3–7 дней",
      priceNum: 45000,
      highlights: [
        "Скорость загрузки <0.5 сек",
        "Адаптивность 390px — 1920px",
        "Чистый HTML без перегруза",
        "Готовая поисковая оптимизация"
      ],
      techBadge: "WEB & LANDINGS",
      ctaText: "Заказать сайт"
    },
    {
      id: "telegram",
      number: "02",
      title: "Telegram",
      description: "Боты, мини-приложения, инструменты для сообществ и автоматизация рабочих процессов.",
      price: "от 35 000 ₽",
      timeline: "4–10 дней",
      priceNum: 35000,
      highlights: [
        "Telegram Mini Apps (TMA)",
        "Сценарии оплаты и заявок",
        "Модерация и клубный доступ",
        "Интеграция с внешними CRM"
      ],
      techBadge: "BOTS & MINI APPS",
      ctaText: "Заказать бота"
    },
    {
      id: "ai",
      number: "03",
      title: "AI-автоматизация",
      description: "Агенты и сценарии для исследований, контента, поддержки и повторяющихся задач.",
      price: "от 50 000 ₽",
      timeline: "5–14 дней",
      priceNum: 50000,
      highlights: [
        "Автономные сценарии обработки",
        "Умные ассистенты поддержки",
        "Парсинг и генерация отчетов",
        "Интеграция передовых моделей"
      ],
      techBadge: "AGENTS & PIPELINES",
      ctaText: "Обсудить автоматизацию"
    },
    {
      id: "content",
      number: "04",
      title: "Контент и инструменты",
      description: "Визуалы, видео, упаковка проектов, подбор и подключение необходимых AI-сервисов.",
      price: "от 25 000 ₽",
      timeline: "2–5 дней",
      priceNum: 25000,
      highlights: [
        "Визуальная упаковка продуктов",
        "Промпт-инжиниринг и пайплайны",
        "Подключение доступов к нейросетям",
        "Обучение команды работе с AI"
      ],
      techBadge: "PACKAGING & TOOLS",
      ctaText: "Подобрать инструменты"
    }
  ],
  projects: [
    {
      id: "subdomains",
      title: "Бесплатные поддомены",
      category: "Инфраструктура & Telegram",
      description: "Telegram-бот выдаёт пользователям персональные адреса в зоне vibecoder.help и помогает подключать сайты.",
      statusBadge: "ДЕЙСТВУЮЩИЙ СЕРВИС",
      features: [
        "Автоматическая выдача поддоменов .vibecoder.help",
        "Управление DNS и привязка к GitHub Pages / Vercel",
        "Пошаговый ассистент для новичков прямо в Telegram"
      ],
      actionLabel: "Открыть проект",
      targetUrl: "https://t.me/abuz_ai"
    },
    {
      id: "community-assistant",
      title: "AI-ассистент сообщества",
      category: "AI & Модерация",
      description: "Интеллектуальный помощник и модератор для большого технологического Telegram-сообщества.",
      statusBadge: "РАБОТАЕТ В СООБЩЕСТВЕ",
      features: [
        "Мгновенные ответы на технические вопросы участников",
        "Фильтрация спама и смысловая модерация диалогов",
        "Суммаризация длинных обсуждений и дайджесты"
      ],
      actionLabel: "Узнать детали",
      targetUrl: "https://t.me/abuz_ai"
    },
    {
      id: "tool-shop",
      title: "Магазин цифровых инструментов",
      category: "Доступы & AI-экосистема",
      description: "Подписки и доступы к AI-сервисам для работы, создания контента и разработки.",
      statusBadge: "КАТАЛОГ СЕРВИСОВ",
      features: [
        "Доступы к топовым языковым моделям и генераторам",
        "Инструменты для кодинга, дизайна и монтажа видео",
        "Быстрая выдача и русскоязычная поддержка"
      ],
      actionLabel: "Перейти в каталог",
      targetUrl: "https://t.me/abuz_ai"
    }
  ],
  process: [
    {
      step: "01",
      title: "Разбираем задачу",
      description: "Фиксируем конкретную цель проекта, целевую аудиторию и функциональные требования без раздувания сроков.",
      outcome: "Понятный план действий и согласованный скоуп работ"
    },
    {
      step: "02",
      title: "Собираем прототип",
      description: "Создаем рабочий черновик, проектируем структуру интерфейса и выстраиваем логику взаимодействия.",
      outcome: "Кликабельный макет или тестовый бот для проверки идеи"
    },
    {
      step: "03",
      title: "Тестируем результат",
      description: "Проверяем адаптивность на мобильных и десктопных устройствах, отказоустойчивость API и производительность.",
      outcome: "Стабильный продукт без багов и просадок скорости"
    },
    {
      step: "04",
      title: "Публикуем и улучшаем",
      description: "Передаем проект на ваш хостинг или домен, передаем доступы и сопровождаем первые этапы работы.",
      outcome: "Действующий публичный адрес и готовый к клиентам продукт"
    }
  ],
  shop: {
    badge: "AI-МАРКЕТПЛЕЙС И ДОСТУПЫ",
    title: "Нужны инструменты, а не разработка?",
    description: "В магазине собраны подписки и доступы к AI-сервисам для работы с текстом, кодом, изображениями и видео.",
    buttonText: "Перейти в магазин",
    highlights: [
      "Проверенные доступы без сложных зарубежных оплат",
      "Фокус на рабочих инструментах для специалистов и авторов",
      "Прямая поддержка и инструкции по подключению"
    ],
    catalogPreview: [
      { category: "Текст и исследования", items: "ChatGPT Plus, Claude Pro, Perplexity" },
      { category: "Генерация кода", items: "GitHub Copilot, Cursor, v0" },
      { category: "Визуал и дизайн", items: "Midjourney, Figma, Recraft" },
      { category: "Видео и аудио", items: "Runway, Kling, ElevenLabs" }
    ]
  },
  faq: [
    {
      question: "Что можно заказать?",
      answer: "Мы специализируемся на быстрых и надежных цифровых решениях: посадочные страницы и сайты, боты и мини-приложения в Telegram, скрипты и агенты для AI-автоматизации, а также комплексная цифровая упаковка проектов под ключ."
    },
    {
      question: "Обязательно ли иметь готовое техническое задание?",
      answer: "Нет, готовое ТЗ не требуется. Достаточно описать идею своими словами: какую задачу должен решать продукт и кто его пользователи. Мы сами структурируем скоуп, предложим архитектуру и согласуем шаги."
    },
    {
      question: "Можно ли заказать только Telegram-бота или сайт?",
      answer: "Да. Вы можете обратиться за любой отдельной услугой: только сайт, только бот или подключение конкретного сценария автоматизации. Мы не навязываем ненужные дополнительные модули."
    },
    {
      question: "Как проходит обсуждение проекта?",
      answer: "Обсуждение проходит напрямую в Telegram без бесконечных созвонов. Мы быстро погружаемся в задачу, задаем уточняющие вопросы и формируем короткий прозрачный план реализации."
    },
    {
      question: "Где подключить необходимые AI-сервисы?",
      answer: "Для самостоятельной работы вы можете подключить доступы к популярным нейросетям в нашем магазине цифровых инструментов. Если же вам нужна комплексная интеграция в ваши рабочие процессы, мы настроим всё под ключ."
    }
  ],
  cta: {
    badge: "СТАРТ ПРОЕКТА",
    title: "Есть идея? Давайте превратим её в работающий продукт.",
    subtitle: "Напишите в Telegram: разберем задачу, сориентируем по шагам и предложим оптимальное техническое решение.",
    buttonText: "Обсудить запуск"
  }
};
