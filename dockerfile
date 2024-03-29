FROM node:alpine3.16 as first

WORKDIR /appdir

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

FROM nginx:1.23-alpine 
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=first /appdir/build .
ENTRYPOINT ["nginx","-g","daemon off;"]

