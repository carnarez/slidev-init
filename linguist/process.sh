#!/bin/bash

docker run --name linguist \
           --rm \
           --volume "$PWD":/usr/src \
           utils/linguist \
           "$@"
