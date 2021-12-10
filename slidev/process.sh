#!/bin/sh

GID=$(id -g)

if [ ! -d $PWD/node_modules ]; then
  echo "$(tput bold)Installing dependencies$(tput sgr0)"
  docker run --rm -u $UID:$GID -v $PWD:/usr/src utils:slidev -c 'npm install --no-audit --no-fund -s @slidev/cli @slidev/theme-default'
else
  echo "$(tput bold)Checking dependencies$(tput sgr0)"
  docker run --rm -u $UID:$GID -v $PWD:/usr/src utils:slidev -c 'npm install --no-audit --no-fund | grep -v ^$'
fi

docker run -i -p 3030:3030 --rm -t -u $UID:$GID -v $PWD:/usr/src utils:slidev
