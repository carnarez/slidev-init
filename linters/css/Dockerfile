FROM node:alpine

ARG username
ARG uid
ARG gid

RUN mkdir /home/$username \
 && chown -R $uid:$gid /home/$username \
 && echo "update-notifier=false" > /home/$username/.npmrc \
 && echo '{"extends":["stylelint-config-standard","stylelint-config-recess-order"]}' > /etc/stylelint.json \
 && npm install --global --no-audit --no-fund stylelint \
                                              stylelint-config-standard \
                                              stylelint-config-recess-order \
 && npm cache clean --force

WORKDIR /usr/src

ENTRYPOINT ["stylelint", "--config", "/etc/stylelint.json"]
CMD ["--help"]
