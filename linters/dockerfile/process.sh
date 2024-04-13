#!/bin/sh

docker run --name dkcheck --rm --volume "$PWD":/src linters/dockerfile "$@"
