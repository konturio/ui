FROM node:latest as k2-front-end

WORKDIR /app
COPY package.json ./
COPY lerna.json ./

COPY tsconfig.json ./
COPY tsconfig.settings.json ./
COPY tsconfig.lint.json ./

COPY babel.config.js ./
COPY jest.config.js ./

RUN npm install -g yarn
RUN npm install -g lerna
RUN npm install -g typescript
