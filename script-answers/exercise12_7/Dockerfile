FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY index.js .

EXPOSE 8080

CMD ["npm", "start"]