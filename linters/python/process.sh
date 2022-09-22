#!/bin/bash

mypy_cache="/tmp/pycheck/${PWD##*/}/mypy_cache"

if [ ! -d "$mypy_cache" ]; then mkdir --parents "$mypy_cache"; fi

docker run --name pycheck \
           --rm \
           -u $(id -u):$(id -g) \
           -v "$PWD":/usr/src \
           -v "$mypy_cache":/tmp/mypy_cache \
           -v /etc/group:/etc/group:ro \
           -v /etc/passwd:/etc/passwd:ro \
           -v /etc/shadow:/etc/shadow:ro \
           utils/lint-python \
           "$@"
