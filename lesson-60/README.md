# Lesson 60 — Express server (MVC)

Навчальний REST-сервер на **Node.js** та **Express**, побудований за патерном **MVC**.
Сервер обробляє маршрути для користувачів (`/users`) та статей (`/articles`) і повертає
текстові відповіді — це спрощує інтеграцію та відлагодження.

## Технології

- Node.js
- Express 5
- ES-модулі

## Встановлення

```bash
git clone https://github.com/korfantiJulia/Node.js.git
cd Node.js/lesson-60
npm install
```

## Запуск

```bash
npm start     # звичайний запуск
npm run dev   # запуск з автоперезавантаженням (node --watch)
```

Сервер стартує на `http://localhost:3000`.

## Маршрути

| Метод | Шлях | Відповідь |

| GET | `/` | `Get root route` |
| GET | `/users` | `Get users route` |
| POST | `/users` | `Post users route` |
| GET | `/users/:userId` | `Get user by Id route: {userId}` |
| PUT | `/users/:userId` | `Put user by Id route: {userId}` |
| DELETE | `/users/:userId` | `Delete user by Id route: {userId}` |
| GET | `/articles` | `Get articles route` |
| POST | `/articles` | `Post articles route` |
| GET | `/articles/:articleId` | `Get article by Id route: {articleId}` |
| PUT | `/articles/:articleId` | `Put article by Id route: {articleId}` |
| DELETE | `/articles/:articleId` | `Delete article by Id route: {articleId}` |

Будь-який інший маршрут повертає статус **404** і текст `Page is not found`.
