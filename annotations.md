## Annotations

- node v18.16.0
- npm 9.5.1
- npx 9.5.1
- docker 23.0.4
- docker-compose v2.17.2

```sh
# creating the project
npx create-next-app --typescript

# installing the prisma client
npm install @prisma/client

# prisma
npx prisma init # creates the .env and prisma/schema.prisma

npx prisma migrate dev --name init # migrate to database
```

