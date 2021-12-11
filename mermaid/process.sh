#!/bin/bash

GID=$(id -g)

docker run --name mermaid --rm -u $UID:$GID -v $PWD:/usr/src utils:mermaid $@
