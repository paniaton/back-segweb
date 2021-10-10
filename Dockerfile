FROM node:12

WORKDIR /back-segweb
COPY package.json .
RUN npm install
COPY . .
