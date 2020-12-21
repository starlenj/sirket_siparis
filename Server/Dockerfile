FROM node:14.7.0-alpine3.12
WORKDIR /usr/app
COPY package.json .
COPY . .
RUN npm install
EXPOSE 4000
CMD ["node" ,"app.js"]
