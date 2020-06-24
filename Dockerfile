FROM node:13 as k2-workspace

WORKDIR /app

COPY lerna.json ./

COPY tsconfig.json ./
COPY tsconfig.settings.json ./

COPY babel.config.js ./

RUN yarn add lerna typescript jest npm-run-all
