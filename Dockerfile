FROM node:latest as k2-front-end

ADD . /app
WORKDIR /app
COPY . .

RUN npm install --only=dev
