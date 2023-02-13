# build environment
FROM node:18.14.0-alpine AS build
ARG REACT_APP_API

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API=$REACT_APP_API

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

 #production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
