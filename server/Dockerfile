FROM node:18.17.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --immutable --immutable-cache --check-cache

COPY . .

RUN chmod 777 node_modules

RUN yarn run build

EXPOSE 8080/tcp

CMD ["node", "./dist/server.js"]