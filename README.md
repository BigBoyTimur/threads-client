# threads-client
Клиентская часть социальной сети, в которой можно выкладывать посты, комментировать их, ставить лайки и подписываться на других пользователей.

## Особенности
- RTK Query для запросов.
- Авторизация через Bearer token, который передается в заголовке.
- Токен хранится в пользовательском слое, а также в localStorage. При загрузке страницы делается запрос, который определяет пользователя при наличии токена в localStorage и сохраняет его в пользовательский слой.
- Для постов, комментариев, лайков и подписок состояние не хранится; при мутациях происходит refetch.

## Список технологий, использованных при разработке клиентской части проекта
- React
- Redux Toolkit / RTK Query
- TypeScript
- React Hook Form
- react-router-dom v6
- Next UI
- Tailwind CSS
- Docker

## Запуск проекта
1. Склонировать репозиторий с api:
```
git clone https://github.com/BigBoyTimur/threads-api
```
2. Склонировать репозиторий с клиентом:
```
git clone https://github.com/BigBoyTimur/threads-client
```
3. В директорию сервера добавить .env файл, ниже пример:
```
PORT = 3000

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mongodb://monty:pass@localhost:27017/mydatabase?authSource=admin&directConnection=true"

SECRET_KEY='123'
```
4. Запустить docker compose up внутри сервера
```
docker copmose up
```
Сервер будет допступен по адресу http://localhost:80

