#!/bin/sh

GID=$(id -g)

docker run --name prettier --rm -u $UID:$GID -v $PWD:/usr/src -w /usr/src utils:prettier $@
