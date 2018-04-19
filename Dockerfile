FROM node:carbon

WORKDIR /app

COPY package.json /app

RUN npm install

COPY controllers /app/controllers/
COPY dao /app/dao/
COPY services /app/services/
COPY utils /app/utils/
COPY app.js /app/
COPY config.js /app/
COPY wsServer.js /app/


EXPOSE 8080

CMD ["npm", "start"]