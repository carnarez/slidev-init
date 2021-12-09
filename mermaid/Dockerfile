FROM node:slim

ARG GID=1000
ARG UID=1000

ENV PATH=/home/node/node_modules/.bin/:$PATH

WORKDIR /home/node

RUN if [ `grep -c ":$GID:" /etc/group` -eq "0" ]; then addgroup -S -g $GID mermaid; fi \
 && if [ `grep -c ":$UID:" /etc/group` -eq "0" ]; then adduser -D -G mermaid -H -S -s /bin/sh -u $UID mermaid; fi \
 && apt-get update \
 && apt-get install --no-install-recommends --no-install-suggests --yes \
      ca-certificates \
      fonts-liberation2 \
      fonts-noto-color-emoji \
      fonts-takao \
      gconf-service \
      libasound2 \
      libatk1.0-0 \
      libc6 \
      libcairo2 \
      libcups2 \
      libdbus-1-3 \
      libexpat1 \
      libfontconfig1 \
      libgbm-dev \
      libgcc1 \
      libgconf-2-4 \
      libgdk-pixbuf2.0-0 \
      libglib2.0-0 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libpango-1.0-0 \
      libpangocairo-1.0-0 \
      libxshmfence-dev \
      libstdc++6 \
      libx11-6 \
      libx11-xcb1 \
      libxcb1 \
      libxcomposite1 \
      libxcursor1 \
      libxdamage1 \
      libxext6 \
      libxfixes3 \
      libxi6 \
      libxrandr2 \
      libxrender1 \
      libxss1 \
      libxtst6 \
      lsb-release \
      xdg-utils \
 && echo "update-notifier=false" > /home/node/.npmrc \
 && npm config set update-notifier false \
 && npm install --no-audit --no-fund -s @mermaid-js/mermaid-cli \
 && npm cache clean --force \
 && echo '{"args": ["--no-sandbox"]}' > puppeteer-config.json

WORKDIR /usr/src

USER $UID

ENTRYPOINT ["mmdc", "-p", "/home/node/puppeteer-config.json"]
CMD ["--help"]
