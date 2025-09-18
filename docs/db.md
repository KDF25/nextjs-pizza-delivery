# Структура базы данных и ORM

Этот документ описывает структуру базы данных приложения **PizzaRush**.  
Схема реализована с использованием **Prisma ORM** и PostgreSQL.

---

## Обзор

База данных предназначена для управления платформой доставки пиццы.  
Поддерживает следующие возможности:

- Пользователи с ролями и верификацией  
- Категории продуктов и сами продукты  
- Позиции продуктов с вариантами размеров и типов пиццы  
- Ингредиенты и возможность добавления их к продуктам  
- Корзины пользователей с позициями и ингредиентами  
- Заказы с различными статусами и платежными данными  
- Верификационные коды пользователей  
- Истории и элементы историй  

---

## Модели

### 1. User
Пользователь приложения.

| Поле          | Тип        | Атрибуты                        | Описание                               |
|---------------|-----------|---------------------------------|---------------------------------------|
| id            | Int       | @id, @default(autoincrement())  | Уникальный идентификатор пользователя |
| fullName      | String    |                                 | Полное имя                             |
| email         | String    | @unique                         | Электронная почта                      |
| password      | String    |                                 | Пароль                                 |
| role          | UserRole  | @default(USER)                  | Роль пользователя (USER / ADMIN)      |
| verified      | DateTime? |                                 | Дата подтверждения email               |
| provider      | String?   |                                 | Провайдер OAuth                        |
| providerId    | String?   |                                 | ID пользователя в провайдере           |
| createdAt     | DateTime  | @default(now())                 | Дата создания                          |
| updatedAt     | DateTime  | @updatedAt                      | Дата обновления                        |

**Связи:**
- `cart` → [Cart](#8-cart)  
- `orders` → [Order](#9-order)  
- `verificationCode` → [VerificationCode](#10-verificationcode)  

---

### 2. Category
Категория продуктов.

| Поле      | Тип     | Атрибуты                        | Описание               |
|-----------|--------|---------------------------------|-----------------------|
| id        | Int    | @id, @default(autoincrement())  | Уникальный идентификатор |
| name      | String | @unique                         | Название категории     |
| createdAt | DateTime | @default(now())               | Дата создания          |
| updatedAt | DateTime | @updatedAt                     | Дата обновления        |

**Связи:**
- `products` → [Product](#3-product)  

---

### 3. Product
Продукт (пицца).

| Поле        | Тип        | Атрибуты                        | Описание                     |
|-------------|-----------|---------------------------------|-------------------------------|
| id          | Int       | @id, @default(autoincrement())  | Уникальный идентификатор      |
| name        | String    |                                 | Название продукта             |
| imageUrl    | String    |                                 | Ссылка на изображение         |
| categoryId  | Int       |                                 | Ссылка на категорию           |
| createdAt   | DateTime  | @default(now())                 | Дата создания                 |
| updatedAt   | DateTime  | @updatedAt                      | Дата обновления               |

**Связи:**
- `category` → [Category](#2-category)  
- `ingredients` → [Ingredient](#4-ingredient)  
- `items` → [ProductItem](#5-productitem)  

---

### 4. Ingredient
Ингредиент для продукта.

| Поле        | Тип      | Атрибуты                        | Описание             |
|-------------|---------|---------------------------------|---------------------|
| id          | Int     | @id, @default(autoincrement())  | Уникальный идентификатор |
| name        | String  |                                 | Название ингредиента |
| price       | Int     |                                 | Цена                 |
| imageUrl    | String  |                                 | Ссылка на изображение |
| createdAt   | DateTime| @default(now())                 | Дата создания        |
| updatedAt   | DateTime| @updatedAt                      | Дата обновления      |

**Связи:**
- `products` → [Product](#3-product)  
- `cartItems` → [CartItem](#7-cartitem)  

---

### 5. ProductItem
Вариант продукта (размер, тип пиццы).

| Поле        | Тип   | Атрибуты                        | Описание                        |
|-------------|------|---------------------------------|---------------------------------|
| id          | Int  | @id, @default(autoincrement())  | Уникальный идентификатор        |
| price       | Int  |                                 | Цена                            |
| size        | Int? |                                 | Размер                          |
| pizzaType   | Int? |                                 | Тип пиццы                        |
| productId   | Int  |                                 | Связанный продукт               |

**Связи:**
- `product` → [Product](#3-product)  
- `cartItems` → [CartItem](#7-cartitem)  

---

### 6. Size
Размер пиццы.

| Поле | Тип    | Атрибуты | Описание           |
|------|--------|----------|-------------------|
| id   | Int    | @id, @default(autoincrement()) | Уникальный идентификатор |
| name | String |          | Название размера   |

---

### 7. PizzaType
Тип пиццы.

| Поле | Тип    | Атрибуты | Описание           |
|------|--------|----------|-------------------|
| id   | Int    | @id, @default(autoincrement()) | Уникальный идентификатор |
| name | String |          | Название типа      |

---

### 8. Cart
Корзина пользователя.

| Поле        | Тип      | Атрибуты                        | Описание               |
|-------------|---------|---------------------------------|-----------------------|
| id          | Int     | @id, @default(autoincrement())  | Уникальный идентификатор |
| userId      | Int?    | @unique                         | Пользователь           |
| token       | String  |                                 | Токен корзины          |
| totalAmount | Int     | @default(0)                     | Общая сумма            |
| createdAt   | DateTime| @default(now())                 | Дата создания          |
| updatedAt   | DateTime| @updatedAt                      | Дата обновления        |

**Связи:**
- `user` → [User](#1-user)  
- `items` → [CartItem](#7-cartitem)  

---

### 9. CartItem
Позиция в корзине.

| Поле           | Тип      | Атрибуты                        | Описание                     |
|----------------|---------|---------------------------------|-------------------------------|
| id             | Int     | @id, @default(autoincrement())  | Уникальный идентификатор      |
| cartId         | Int     |                                 | Связь с корзиной             |
| productItemId  | Int     |                                 | Связь с вариантом продукта   |
| quantity       | Int     | @default(1)                     | Количество                   |
| createdAt      | DateTime| @default(now())                 | Дата создания                |
| updatedAt      | DateTime| @updatedAt                      | Дата обновления              |

**Связи:**
- `cart` → [Cart](#8-cart)  
- `productItem` → [ProductItem](#5-productitem)  
- `ingredients` → [Ingredient](#4-ingredient)  

---

### 10. Order
Заказ пользователя.

| Поле        | Тип       | Атрибуты                        | Описание                     |
|-------------|----------|---------------------------------|-------------------------------|
| id          | Int      | @id, @default(autoincrement())  | Уникальный идентификатор      |
| userId      | Int?     |                                 | Пользователь                  |
| token       | String   |                                 | Токен заказа                  |
| totalAmount | Int      |                                 | Общая сумма                   |
| status      | OrderStatus |                               | Статус заказа (PENDING / SUCCEEDED / CANCELLED) |
| paymentId   | String?  |                                 | ID платежа                     |
| items       | Json     |                                 | JSON с позициями заказа        |
| fullName    | String   |                                 | Имя получателя                |
| email       | String   |                                 | Email                         |
| phone       | String   |                                 | Телефон                       |
| address     | String   |                                 | Адрес                          |
| comment     | String?  |                                 | Комментарий                   |
| createdAt   | DateTime | @default(now())                 | Дата создания                 |
| updatedAt   | DateTime | @updatedAt                      | Дата обновления               |

**Связи:**
- `user` → [User](#1-user)  

---

### 11. VerificationCode
Верификационный код пользователя.

| Поле       | Тип     | Атрибуты                        | Описание                     |
|------------|--------|---------------------------------|-------------------------------|
| id         | Int    | @id, @default(autoincrement())  | Уникальный идентификатор      |
| userId     | Int    | @unique                         | Пользователь                  |
| code       | String |                                 | Код для верификации           |
| createdAt  | DateTime | @default(now())               | Дата создания                 |

**Связи:**
- `user` → [User](#1-user)  

---

### 12. Story
История (аналог Instagram Stories).

| Поле           | Тип      | Атрибуты                        | Описание                     |
|----------------|---------|---------------------------------|-------------------------------|
| id             | Int     | @id, @default(autoincrement())  | Уникальный идентификатор      |
| previewImageUrl| String  |                                 | Превью истории               |
| createdAt      | DateTime| @default(now())                 | Дата создания                |

**Связи:**
- `items` → [StoryItem](#13-storyitem)  

---

### 13. StoryItem
Представляет элемент истории, принадлежащий конкретной истории.

| Поле       | Тип       | Атрибуты                                | Описание                     |
|------------|-----------|-----------------------------------------|-------------------------------|
| id         | Int       | @id, @default(autoincrement())          | Уникальный идентификатор      |
| storyId    | Int       |                                         | Связь с историей              |
| story      | Story     | @relation(fields: [storyId], references: [id]) | Родительская история |
| sourceUrl  | String    |                                         | Ссылка на контент             |
| createdAt  | DateTime  | @default(now())                         | Дата создания                 |

**Связи:**
- `story` → [Story](#12-story)  

---

## Enum типы

### OrderStatus
Статус заказа.

| Значение     | Описание                       |
|--------------|--------------------------------|
| PENDING      | В ожидании                     |
| SUCCEEDED    | Успешно завершен               |
| CANCELLED    | Отменен                        |

### UserRole
Роль пользователя.

| Значение | Описание        |
|----------|----------------|
| USER     | Обычный пользователь |
| ADMIN    | Администратор   |

---

## ER диаграмма

```mermaid
erDiagram
    User ||--o{ Cart : "имеет"
    User ||--o{ Order : "оформляет"
    User ||--o{ VerificationCode : "получает"
    
    Category ||--o{ Product : "содержит"
    Product ||--o{ ProductItem : "имеет"
    Product ||--o{ Ingredient : "содержит"
    
    Cart ||--o{ CartItem : "содержит"
    ProductItem ||--o{ CartItem : "может содержать"
    Ingredient ||--o{ CartItem : "используется в"
    
    Story ||--o{ StoryItem : "содержит"

    CartItem }o--|| Cart : "принадлежит"
    CartItem }o--|| ProductItem : "связан с"
    CartItem }o--|| Ingredient : "может включать"

    Order }o--|| User : "принадлежит"
    Cart }o--|| User : "принадлежит"
    VerificationCode }o--|| User : "связан с"