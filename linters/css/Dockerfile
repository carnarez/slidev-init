FROM node:alpine

RUN echo "update-notifier=false" > /root/.npmrc \
 && npm init -g --no-audit --no-fund stylelint \
 && npm cache clean --force

WORKDIR /usr/src

ENTRYPOINT ["npx", "stylelint"]
CMD ["--help"]
