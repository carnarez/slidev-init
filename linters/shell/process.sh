#!/bin/sh

docker run --name shcheck --rm --volume "$PWD":/src linters/shell "$@"
