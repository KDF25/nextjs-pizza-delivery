# Техническая архитектура проекта PizzaRush

## Фреймворк и основные технологии

- **Фреймворк:** Next.js (App Router, React 18)
- **Язык:** TypeScript
- **Стилизация:** Tailwind CSS, Shadcn, Sass
- **Управление состоянием:** Zustand
- **Формы и валидация:** React Hook Form, Zod
- **API:** REST API через Next.js API Routes, Axios
- **ORM/БД:** Prisma (PostgreSQL, хостинг на Neon)
- **Аутентификация:** NextAuth (Google, GitHub, Email)
- **Уведомления:** React Hot Toast
- **Email:** Nodemailer
- **PWA:** Service Worker, manifest.json, оффлайн-режим
- **Прочее:** React Insta Stories, Lucide React, Clsx

---

## Архитектура проекта

Проект использует подход **Feature-Sliced Design (FSD)**, который организует код по слоям и фичам для удобства масштабирования и поддержки.

- **app/** — Точка входа приложения: маршрутизация, layouts, провайдеры и API endpoints.
- **entities/** — Бизнес-сущности (пицца, заказ, пользователь и т.д.) с их логикой, API, хуками и UI.
- **features/** — Изолированные пользовательские сценарии (например, оформление заказа, авторизация).
- **shared/** — Общие модули: UI-компоненты, хуки, конфигурации, утилиты, база данных, стили.
- **widgets/** — Составные UI-блоки, объединяющие несколько сущностей/фич для страниц.
- **pages/** — Компоненты и логика на уровне страниц (включая разделение по ролям).

---

## Навигация и маршрутизация

- **Маршрутизация:** Next.js App Router (`app/` директория)
- **Динамические маршруты:** Поддерживаются через `[param]` директории (например, `[slug]`, `[locale]`)
- **Вложенные layouts:** Используются для разделения по ролям и локалям
- **API Routes:** Реализованы в `app/api/`

---

## Управление состоянием и API

- **Server State:** Управляется с помощью Zustand и React Query (или SWR при необходимости)
- **API-взаимодействие:** Через REST API (Next.js API Routes, Axios)
- **Аутентификация:** NextAuth (OAuth через Google, GitHub, email-подтверждение через Nodemailer)

---

## Формы и валидация

- **Формы:** React Hook Form (контролируемые компоненты)
- **Валидация:** Zod (строгая проверка данных)
- **Интерфейсы форм:** Хранятся в `features/*` и `entities/*/ui`

---

## SSR / SSG / CSR

- **SSR (Server-Side Rendering):** Для страниц заказов и авторизации
- **SSG (Static Site Generation):** Для публичных страниц (например, главная, меню)
- **CSR (Client-Side Rendering):** Для интерактивных интерфейсов (личный кабинет, админ-панель)

---

## Хранение данных и кеширование

- **База данных:** PostgreSQL (через Prisma ORM, хостинг Neon)
- **Кеширование:** 
  - Клиентское — Zustand + React Query/SWR
  - Серверное — встроенные механизмы Next.js для SSR/SSG
- **Local Storage:** Хранение пользовательских настроек (тема, язык, корзина)
- **Сессии:** Через cookies/JWT (см. `middleware.ts` и API routes)

---

## PWA-функциональность

- **Установка на устройство:** Возможность установки приложения на мобильные и десктопные устройства
- **Оффлайн-режим:** Работает с помощью Service Worker и кэширования
- **Манифест:** Поддержка через `manifest.json`

---

## Полезные ссылки

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Next.js документация](https://nextjs.org/docs)
- [Prisma ORM](https://www.prisma.io/docs)
- [Neon Database Hosting](https://neon.tech)
- [NextAuth.js](https://next-auth.js.org/)
