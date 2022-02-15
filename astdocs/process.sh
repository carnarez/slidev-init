#!/bin/bash

docker run --name astdocs \
           --rm \
           --volume "$PWD":/usr/src \
           utils:astdocs \
           "$@"
