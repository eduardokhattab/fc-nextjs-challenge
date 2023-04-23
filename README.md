# fc-nextjs-challenge
just creating a simple nextjs app

## Running

```sh
# install the dependencies (generate node_modules)
npm install

# generate the prisma files (node_modules/.prisma)
npx prisma generate

# initiate the node app
npm run dev
```

## Running with Docker

```sh
docker-compose up -d
```

It will create the container and exec the node.
Then you just need to request the HTTP routes declared on `api.http`
