FROM node:12

WORKDIR /src

COPY package.json /src

RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install react

COPY . .


EXPOSE 3000 
