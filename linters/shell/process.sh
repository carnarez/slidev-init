#!/bin/sh

docker run --name shcheck --rm -v "$PWD":/src utils:lint-shell "$@"
