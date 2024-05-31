FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn run dev