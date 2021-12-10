#!/bin/bash

GID=$(id -g)

docker run --rm -u $UID:$GID -v $PWD:/usr/src -v /tmp/pycheck/${PWD##*/}/mypy_cache:/tmp/mypy_cache utils:pycheck $@
