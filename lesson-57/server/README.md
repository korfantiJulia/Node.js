HTTP Server — Node.js
Базовий HTTP сервер на вбудованих модулях Node.js без сторонніх бібліотек.

Встановлення та запуск

````bash

# Запустити сервер
node server.js


Сервер запуститься на `http://localhost:3000`

## Маршрути

### GET запити


Маршрут `/` , Статус - 200 , Відповідь - Home page
Маршрут `/about`, Статус - 200, Відповідь - About page
Маршрут `/contact`, Статус - 200, Відповідь - Contact page
Маршрут `/anything-else`, Статус - 404, Відповідь - Page Not Found

### POST запити


Маршрут `/submit`, Статус - 200, Умова- name і email валідні
Маршрут `/submit`, Статус - 400, Умова- name або email порожні
Маршрут `/submit`, Статус - 413, Умова- тіло запиту > 1МБ


## Приклади запитів

### GET запит
```bash
curl http://localhost:3000/about
````

### POST запит (валідний)

```bash
curl -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Yuliia&email=test@gmail.com"
```

### POST запит (невалідний)

```bash
curl -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=&email="
```

## Обмеження

- Максимальний розмір POST запиту: 1МБ
- Тільки вбудовані модулі Node.js (без Express)
- Підтримується лише `application/x-www-form-urlencoded` для POST
