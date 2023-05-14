#!/bin/bash

CACHE="/tmp/pycheck/${PWD##*/}/mypy_cache"

if [ ! -d "$CACHE" ]; then mkdir --parents "$CACHE"; fi

docker run --name pycheck \
           --rm \
           --tty \
           --user $(id -u):$(id -g) \
           --volume "$CACHE":/tmp/mypy_cache \
           --volume "$PWD":/usr/src \
           --volume /etc/group:/etc/group:ro \
           --volume /etc/passwd:/etc/passwd:ro \
           --volume /etc/shadow:/etc/shadow:ro \
           linters/python \
           "$@"
