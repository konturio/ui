FROM node:latest as k2-workspace

WORKDIR /app
COPY package.json ./
COPY lerna.json ./

COPY tsconfig.json ./
COPY tsconfig.settings.json ./
COPY tsconfig.lint.json ./

COPY babel.config.js ./
COPY jest.config.js ./

RUN npm install -g lerna
RUN npm install -g typescript
RUN npm install -g jest
