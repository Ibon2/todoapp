# Specify the parent image from which we build
FROM node:alpine 

# Set the working directory
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./
COPY ./ ./


RUN npm install --legacy-peer-deps

#USER node
#COPY --chown=node:node package.json .
#RUN npm install --legacy-peer-deps
#RUN chmod 777 /app/node_modules
#
#COPY --chown=node:node . .
#USER node

CMD [ "npm","start" ]