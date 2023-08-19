FROM node:16

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

RUN npm i serve

EXPOSE 3000

CMD ["npx","serve","-s","build"]


