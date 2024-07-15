FROM node:22-alpine

WORKDIR /btc-tracker/

COPY public/ /btc-tracker/public
COPY src/ /btc-tracker/src
COPY package.json /btc-tracker/

RUN npm install

RUN npm install axios

CMD ["npm", "start"]
