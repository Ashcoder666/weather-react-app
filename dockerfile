FROM node:16 as build

WORKDIR /app

COPY package*.json .

RUN npm install


COPY . .

RUN npm run build

FROM node:16-slim

WORKDIR /app

COPY --from=build /app/build ./build

RUN npm install -g serve

EXPOSE 80

CMD ["serve","-p","80","-s","build"]
