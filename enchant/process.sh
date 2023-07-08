#!/bin/bash

docker run --name enchant \
           --rm \
           --volume "$PWD":/usr/src \
           utils/enchant \
           "$@" | grep -e "^@" -e "^*" -e "^$" -v
