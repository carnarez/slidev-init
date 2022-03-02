#!/bin/bash

docker run --name sqlcheck \
           --rm \
           -u $(id -u):$(id -g) \
           -v "$PWD":/usr/src \
           -v /etc/group:/etc/group:ro \
           -v /etc/passwd:/etc/passwd:ro \
           -v /etc/shadow:/etc/shadow:ro \
           utils:lint-sql \
           "$@"
