# Build docker container with app,
# you must pass env vars as described in readme to make it work
FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./ ./

EXPOSE 80
CMD [ "npm", "start" ]
