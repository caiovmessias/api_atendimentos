FROM node:12-alpine AS dev

WORKDIR "/application"

RUN apk update
RUN apk add git openssh bash sudo vim 

CMD ["npm", "start"]
