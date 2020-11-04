FROM node:buster

RUN mkdir /src
WORKDIR /src

COPY ./app/app.js /src/app.js
COPY ./app/package.json /src/package.json

RUN npm install

EXPOSE 3000
ENV HOST 0.0.0.0
ENV PORT 3000

CMD npm start