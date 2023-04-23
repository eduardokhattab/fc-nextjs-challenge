FROM node:19-slim

WORKDIR /home/node/app

COPY package*.json .npmrc ./

RUN npm install

COPY . ./

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]
