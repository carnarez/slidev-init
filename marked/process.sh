#!/bin/bash

docker run --name marked \
           --rm \
           --user $(id -u):$(id -g) \
           --volume "$PWD":/usr/src \
           --volume /etc/group:/etc/group:ro \
           --volume /etc/passwd:/etc/passwd:ro \
           --volume /etc/shadow:/etc/shadow:ro \
           utils/marked \
           "$@"
