FROM node:13 as k2-workspace

WORKDIR /app

COPY .npmrc ./

COPY lerna.json ./

COPY tsconfig.json ./
COPY tsconfig.settings.json ./

COPY babel.config.js ./

RUN npm install lerna -g
RUN npm install typescript -g
RUN npm install jest -g
RUN npm install npm-run-all -g
