FROM node:alpine

RUN echo "update-notifier=false" > /root/.npmrc \
 && npm install --global --no-audit --no-fund sass \
 && npm cache clean --force

WORKDIR /usr/src

ENTRYPOINT ["sass"]
CMD ["--help"]
