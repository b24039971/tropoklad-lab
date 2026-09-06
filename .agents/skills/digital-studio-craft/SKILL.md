---
name: digital-studio-craft
description: >-
  Руководство и автономный пайплайн для создания премиальных сайтов цифровых студий, 
  продуктовых лендингов и AI-витрин на Astro с эстетикой iOS Liquid Glass, 
  интерактивной телеметрией, AI TXT слоем (llms.txt) и автоматическим деплоем на GitHub Pages.
---

# Digital Studio Craft — Инженерный стандарт создания веб-студий

Этот навык содержит концентрированный опыт разработки коммерческого сайта цифровой студии нового поколения. Используйте его для генерации, прототипирования и запуска автономных веб-продуктов с конверсией выше рыночной.

---

## 1. Архитектурный манифест

1. **Zero Client Bloat**: 
   - Никаких тяжелых клиентских фреймворков (React, Vue) ради статического текста. 
   - Использовать **Astro SSG** + **TypeScript** + **Vanilla CSS** (собственный Design System).
   - Скорость отдачи HTML < 300 мс, 100/100 по Google PageSpeed.

2. **Единый источник правды (`src/config.ts`)**:
   - Все коммерческие параметры, цены, сроки, ссылки на Telegram/магазин, тексты секций и метаданные хранятся в одном строго типизированном объекте `siteConfig`.
   - Компоненты никогда не содержат захардкоженных бизнес-ссылок или цен.

3. **iOS Liquid Glass Aesthetics**:
   - Фон: Глубокий обсидиановый `#06080d` с многослойными радиальными свечениями.
   - Панели: `backdrop-filter: blur(30px) saturate(190%)`, фон `rgba(13, 19, 31, 0.55)`, зеркальная верхняя кромка `1px solid rgba(255, 255, 255, 0.15)`.
   - Тактильность: Плавный отклик при нажатии `:active { transform: scale(0.975); }`.
   - Навигация: Стеклянная плавающая капсула с `IntersectionObserver` scrollspy.
   - Акцентные оттенки Bento (Bento Accent Tinting): индивидуальное фоновое неоновое свечение для каждой категории услуг при ховере.

4. **Продуктовая интерактивность (No Boring Placeholders)**:
   - Вместо скучных картинок или фейковых мокапов — интерактивный виджет запуска (Product Launch Pipeline).
   - SVG-граф с пульсирующим нодом активного этапа (`animation: pulseRing`).
   - Динамический инспектор кода и телеметрии этапа с управлением клавиатурой и Segmented Control на смартфонах.

5. **AI Search & LLM-Native Layer**:
   - Фактологический файл `/llms.txt` и расширенный `/llms-full.txt` для нейросетевых поисковиков (Perplexity, GPTBot, ClaudeBot).
   - Выдача эндпоинтами Astro с `Content-Type: text/plain; charset=utf-8` и BOM `\uFEFF` для идеального отображения в браузерах Windows.
   - Полная разметка Schema.org (JSON-LD): `ProfessionalService`, `OfferCatalog` с валютой и сроками, `FAQPage`, `WebSite`.

6. **Честное позиционирование (Zero Fake Proof)**:
   - Никаких выдуманных клиентов («Google, Apple, Microsoft»), фальшивых отзывов «Иван из Москвы» и нарисованных счетчиков «999+ проектов».
   - Демонстрация только собственных продуктов студии (боты, бесплатные поддомены, магазин инструментов).

---

## 2. Структура проекта

```
/
├── .github/workflows/deploy.yml   # Автодеплой на GitHub Pages
├── public/
│   ├── favicon.svg                # Векторная монограмма
│   ├── robots.txt                 # Права для поисковиков и AI-ботов
├── src/
│   ├── components/
│   │   ├── Header.astro           # Стеклянный навбар со Scrollspy
│   │   ├── Hero.astro             # УТП + интерактивный пайплайн запуска
│   │   ├── Services.astro         # Bento-карточки с ценами и сроками
│   │   ├── Projects.astro         # Собственные продукты студии
│   │   ├── Process.astro          # 4 этапа работы и результаты
│   │   ├── ShopBanner.astro       # Витрина магазина цифровых инструментов
│   │   ├── FAQ.astro              # Аккордеон с микроразметкой FAQPage
│   │   ├── CTA.astro              # Финальный призыв к действию
│   │   ├── Footer.astro           # Подвал со статусом и ссылками
│   │   └── SEO.astro              # Метатеги, GEO, Open Graph, JSON-LD
│   ├── layouts/
│   │   └── Layout.astro           # Базовая разметка, шрифты, skip-link
│   ├── pages/
│   │   ├── index.astro            # Главная страница
│   │   ├── llms.txt.ts            # Эндпоинт для AI поисковиков
│   │   ├── llms-full.txt.ts       # Полный технический справочник для LLM
│   │   └── sitemap.xml.ts         # Динамический XML-sitemap
│   ├── styles/
│   │   └── global.css             # Liquid Glass Design System
│   └── config.ts                  # Единый конфигуратор проекта
├── astro.config.mjs               # Настройки base и site
└── README.md                      # Документация без персональных IP-адресов
```

---

## 3. Пошаговый алгоритм развёртывания для ИИ-агента

### Шаг 1: Инициализация и конфиг
1. Сгенерировать чистый проект Astro: `npx -y create-astro@latest ./ --template minimal --no-install --no-git --typescript strict`.
2. Установить зависимости: `npm install`.
3. Создать `src/config.ts` с заполненными переменными бренда, цен, ссылок.

### Шаг 2: Вёрстка дизайн-системы и компонентов
1. Создать `src/styles/global.css` с переменными стекла, градиентами, неоновыми оттенками и тактильными состояниями `:active`.
2. Реализовать интерактивные компоненты с прогрессивным улучшением (чистый JS без внешних фреймворков).
3. Проверить доступность: `skip-link`, `aria-expanded`, `role="tab"`, контрастность шрифтов.

### Шаг 3: AI-слой и SEO
1. Настроить Schema.org JSON-LD в `SEO.astro` (включая `hasOfferCatalog` с ценами в рублях).
2. Написать эндпоинты `llms.txt.ts` и `llms-full.txt.ts` со спецификацией услуг и инструкциями для LLM-ассистентов.
3. Добавить `robots.txt` с прямым указанием на `llms.txt`.

### Шаг 4: Тестирование и валидация
1. Запустить `npm run check` (0 ошибок TypeScript).
2. Запустить `npm run build` (чистый статический билд).
3. Открыть в браузере на разрешениях 1440px и 390px, протестировать переключение вкладок и работу меню.

### Шаг 5: Публикация на GitHub Pages
1. Настроить в `astro.config.mjs`:
   ```javascript
   site: 'https://<username>.github.io',
   base: '/<repo-name>'
   ```
2. Создать `.github/workflows/deploy.yml` со сборкой и деплоем артефактов Pages.
3. Выполнить коммит и пуш:
   ```bash
   git init && git branch -M main
   git add . && git commit -m "feat: launch digital studio website"
   gh repo create <repo-name> --public --source=. --remote=origin --push
   gh api -X POST repos/<username>/<repo-name>/pages -f build_type=workflow
   ```
4. **Критическое правило безопасности**: Никогда не публиковать локальные IP-адреса (например, LAN-адреса dev-серверов) в `README.md` или описании репозитория.
