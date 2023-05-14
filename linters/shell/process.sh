#!/bin/sh

docker run --name shcheck --rm -v "$PWD":/src linters/shell "$@"
