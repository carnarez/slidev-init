FROM node:alpine

ENV PATH=$PATH:node_modules/.bin

RUN echo "update-notifier=false" > /home/node/.npmrc \
 && npm config set update-notifier false

WORKDIR /usr/src

ENTRYPOINT ["/bin/sh"]
