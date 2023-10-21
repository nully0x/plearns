FROM node:18.17.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --no-cache

COPY . .

RUN chmod 777 node_modules

RUN yarn run build

RUN yarn run db:generate

EXPOSE 3000/tcp

CMD ["node", "./dist/server.js"]