FROM node:18
WORKDIR /app
COPY . .
RUN npm install --production
ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "index.js"]
