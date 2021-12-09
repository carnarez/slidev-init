FROM node:alpine

ARG GID=1000
ARG UID=1000

RUN if [ `grep -c ":$GID:" /etc/group` == "0" ]; then addgroup -S -g $GID slidev; fi \
 && if [ `grep -c ":$UID:" /etc/group` == "0" ]; then adduser -D -G slidev -H -S -s /bin/sh -u $UID slidev; fi \
 && echo "update-notifier=false" > /home/node/.npmrc \
 && npm config set update-notifier false

WORKDIR /usr/src

USER $UID

ENTRYPOINT ["/bin/sh"]
