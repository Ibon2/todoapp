# Specify the parent image from which we build
FROM node:alpine 

# Set the working directory
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./
COPY ./ ./


RUN npm install --legacy-peer-deps

CMD [ "node","index.js" ]