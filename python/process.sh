#!/bin/bash

if [ $# -gt 1 ]; then
  entrypoint=/usr/local/bin/pythonX.X
else
  entrypoint=/bin/bash
fi

docker run --entrypoint $entrypoint \
           --interactive \
           --name pythonX.X \
           --rm \
           --tty \
           --user "$(id -u)":"$(id -g)" \
           --volume /etc/group:/etc/group:ro \
           --volume /etc/passwd:/etc/passwd:ro \
           --volume /etc/shadow:/etc/shadow:ro \
           --volume "$PWD":/usr/src \
           --workdir /usr/src \
           python:X.X-slim \
           "$@"
