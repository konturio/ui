FROM node:13 as k2-workspace

WORKDIR /app

COPY lerna.json ./

COPY tsconfig.json ./
COPY tsconfig.settings.json ./
COPY tsconfig.lint.json ./

COPY babel.config.js ./

RUN npm install -g lerna
RUN npm install -g typescript
RUN npm install -g jest
RUN npm install -g npm-run-all
