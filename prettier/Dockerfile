FROM node:alpine

RUN echo "update-notifier=false" > /root/.npmrc \
 && npm install -g --no-audit --no-fund prettier \
 && npm cache clean --force

WORKDIR /usr/src

ENTRYPOINT ["prettier"]
CMD ["--help"]
