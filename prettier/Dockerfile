FROM node:alpine

ARG GID=1000
ARG UID=1000

RUN if [ `grep -c ":$GID:" /etc/group` == "0" ]; then addgroup -S -g $GID prettier; fi \
 && if [ `grep -c ":$UID:" /etc/group` == "0" ]; then adduser -D -G prettier -H -S -s /bin/sh -u $UID prettier; fi \
 && echo "update-notifier=false" > /home/node/.npmrc \
 && npm config set update-notifier false \
 && npm install -g --no-audit --no-fund prettier

WORKDIR /usr/src

USER $UID

ENTRYPOINT ["prettier"]
