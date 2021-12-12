#!/bin/sh

if [ ! -d "$PWD/node_modules" ]; then
  echo "$(tput bold)Installing dependencies$(tput sgr0)"
  docker run --rm -u $(id -u):$(id -g) -v "$PWD":/usr/src utils:slidev -c 'npm install --no-audit --no-fund -s @slidev/cli @slidev/theme-default'
else
  echo "$(tput bold)Checking dependencies$(tput sgr0)"
  docker run --rm -u $(id -u):$(id -g) -v "$PWD":/usr/src utils:slidev -c 'npm install --no-audit --no-fund | grep -v ^$'
fi

echo "$(tput bold)slidev --remote to start the presentation$(tput sgr0)"

docker run -i \
           --name slidev \
           -p 3030:3030 \
           --rm \
           -t \
           -u $(id -u):$(id -g) \
           -v "$PWD":/usr/src \
           -v /etc/group:/etc/group:ro \
           -v /etc/passwd:/etc/passwd:ro \
           -v /etc/shadow:/etc/shadow:ro \
           utils:slidev \
           "$@"
