FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -D typescript tailwindcss postcss autoprefixer eslint

CMD ["npm", "start"]