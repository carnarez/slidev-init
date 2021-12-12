FROM node:slim

ENV PATH=$PATH:/home/node/node_modules/.bin

RUN apt-get update \
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
      xdg-utils

USER node

WORKDIR /home/node

RUN echo "update-notifier=false" > /home/node/.npmrc \
 && npm install --no-audit --no-fund -s @mermaid-js/mermaid-cli \
 && npm cache clean --force \
 && echo '{"args": ["--no-sandbox"]}' > puppeteer-config.json

WORKDIR /usr/src

ENTRYPOINT ["mmdc", "-p", "/home/node/puppeteer-config.json"]
CMD ["--help"]
