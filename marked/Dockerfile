FROM node:alpine

RUN echo "update-notifier=false" > /root/.npmrc \
 && npm install --global --no-audit --no-fund --global \
      fast-html-parser \
      front-matter \
      highlight.js \
      html-minifier \
      katex \
      lunr \
      marked \
      marked-alert \
      marked-footnote \
      marked-gfm-heading-id \
      marked-highlight \
      marked-katex-extension \
 && npm cache clean --force

COPY entrypoint.sh /usr/local/bin
COPY process.js /usr/local/lib/node_modules/marked-process.js
COPY process-recursively.js /usr/local/lib/node_modules/marked-process-recursively.js

RUN ln -s /usr/local/lib/node_modules/marked-process.js /usr/local/bin/marked-process \
 && ln -s /usr/local/lib/node_modules/marked-process-recursively.js /usr/local/bin/marked-process-recursively \
 && chmod +x /usr/local/bin/marked-process \
 && chmod +x /usr/local/bin/marked-process-recursively

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
