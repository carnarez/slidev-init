#!/bin/sh

docker run --name dkcheck --rm -v "$PWD":/src utils:dockerfile-linter "$@"
