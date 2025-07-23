# Stage 0: run tests
FROM node:18 as tester
WORKDIR /app
COPY . .
RUN npm install
RUN npm test

# Stage 1: build the production frontend
FROM node:18 as builder
WORKDIR /app
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
COPY . .
RUN npm install
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
