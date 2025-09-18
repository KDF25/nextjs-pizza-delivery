# Руководство по развертыванию
Данный документ описывает как развернуть проект PizzaRush с авторизацией через OAuth и настройкой переменных окружения.

---

## Шаги развертывания

1. **Клонирование репозитория**
   ```bash
   git clone https://github.com/KDF25/nextjs-pizza-delivery.git
   cd nextjs-pizza-delivery
   ```

2. **Установка зависимостей**
   ```bash
   npm install
   ```

3. **Настройка переменных окружения**
   - Скопируйте шаблон файла `.env` (или создайте новый файл `.env`) в корне проекта.
   - Заполните все необходимые секреты и строки подключения (см. [Переменные окружения](#переменные-окружения) ниже).

4. **Настройка базы данных**
   ```bash
   npm run prisma:generate
   npm run prisma:push
   npm run prisma:seed
   ```

5. **Сборка проекта**
   ```bash
   npm run build
   ```

6. **Запуск приложения**
   ```bash
   npm start
   ```
   Приложение будет доступно по URL, указанному в `NEXT_PUBLIC_API_URL`.

---

## Переменные окружения

Все конфиденциальные данные и конфигурация управляются через файл `.env` в корне проекта.  
**Никогда не коммитьте ваш файл `.env` в систему контроля версий!**

| Название переменной                       | Описание                                                 |
|------------------------------------------|----------------------------------------------------------|
| POSTGRES_URL                             | Строка подключения к PostgreSQL (используется Prisma)   |
| POSTGRES_URL_NON_POOLING                 | Строка подключения к PostgreSQL без пулинга             |
| NEXT_PUBLIC_API_URL                      | Публичный URL API приложения                            |
| NEXT_BASE_URL                            | Базовый URL приложения                                   |
| MAIL_NAME                                | Имя отправителя для электронной почты                    |
| MAIL_HOST                                | SMTP хост для отправки писем                            |
| MAIL_USER                                | Пользователь SMTP для авторизации                        |
| MAIL_PASS                                | Пароль SMTP для авторизации                             |
| NEXTAUTH_SECRET                          | Секретный ключ для NextAuth.js                          |
| GOOGLE_CLIENT_ID                         | Google OAuth Client ID                                   |
| GOOGLE_CLIENT_SECRET                     | Google OAuth Client Secret                               |
| GITHUB_ID                                | GitHub OAuth App ID                                      |
| GITHUB_SECRET                            | GitHub OAuth App Secret                                  |

**Пример конфигурации `.env`:**

```env
# База данных (Neon PostgreSQL)
POSTGRES_URL="postgresql://username:password@host:port/database?sslmode=require"
POSTGRES_URL_NON_POOLING="postgresql://username:password@host:port/database?sslmode=require"

# URL приложения
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_BASE_URL=http://localhost:3000

# Настройки электронной почты
MAIL_NAME="PizzaRush"
MAIL_HOST=smtp.gmail.com
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password

# Авторизация
NEXTAUTH_SECRET=your-nextauth-secret-key

# OAuth Google
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# OAuth GitHub
GITHUB_ID=your-github-app-id
GITHUB_SECRET=your-github-app-secret
```

---

## Примечания по безопасности

- **Ключи для разработки**: Текущая конфигурация использует тестовые/разработческие ключи
- **Продакшен развертывание**: Замените все тестовые ключи на продакшен ключи перед развертыванием
- **Безопасность базы данных**: Подключение использует SSL режим для безопасной связи
- **OAuth безопасность**: Google и GitHub секреты обеспечивают аутентификацию пользователей

---

## Рекомендации для продакшена

- Замените все тестовые OAuth ключи на продакшен ключи
- Используйте продакшен экземпляр базы данных Neon
- Настройте правильные CORS настройки
- Установите мониторинг и логирование
- Включите HTTPS для всех endpoints
- Настройте правильные redirect URLs для OAuth

---

## Полезные скрипты

- `npm run dev` - 🚀 Запуск в режиме разработки
- `npm run build` - 🏗️ Сборка приложения
- `npm run start` - 🌐 Запуск собранного приложения
- `npm run lint` - 🔍 Линтинг кода
- `npm run format` - 🧹 Форматирование кода с помощью Prettier
- `npm run prisma:generate` - 🔄 Генерация Prisma-клиента
- `npm run prisma:push` - 📥 Применение изменений в базу данных
- `npm run prisma:migrate` - 📜 Создание миграций
- `npm run prisma:studio` - 🖥️ Запуск интерфейса Prisma Studio
- `npm run prisma:seed` - 🌱 Выполнение файла для начального заполнения базы данных

---

## Примечания

- **Продакшен:**  
  - Всегда используйте безопасные, уникальные секреты и продакшен учетные данные базы данных.
  - Установите `NEXT_PUBLIC_API_URL` на ваш реальный продакшен домен.
  - Убедитесь, что ваша база данных и все сторонние сервисы доступны из среды развертывания.

- **PWA и HTTPS:**  
  - Для работы PWA функций и service workers ваше приложение должно обслуживаться через HTTPS (кроме localhost).

- **Миграции:**  
  - Запускайте миграции после каждого изменения схемы, чтобы поддерживать базу данных в актуальном состоянии.

- **Хостинг базы данных:**  
  - Проект использует Neon для хостинга PostgreSQL. Управление базой данных осуществляется через [Neon Console](https://console.neon.tech/app/projects).

---

## Полезные ссылки

- [Next.js документация по развертыванию](https://nextjs.org/docs/deployment)
- [NextAuth.js документация](https://next-auth.js.org/)
- [Prisma руководство по развертыванию](https://www.prisma.io/docs/guides/deployment)
- [Neon документация](https://neon.tech/docs)
- [Google OAuth настройка](https://developers.google.com/identity/oauth2/web/guides/overview)
- [GitHub OAuth Apps](https://docs.github.com/en/apps/oauth-apps)