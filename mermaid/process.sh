#!/bin/bash

GID=$(id -g)

docker run --rm -u $UID:$GID -v $PWD:/usr/src utils:mermaid $@
