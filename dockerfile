FROM NODE:16 as build

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

RUN npm run build

FROM NODE:16-slim

WORKDIR /app

COPY --from=build /app/build /app

EXPOSE 3000

CMD ["node","index.js"]




