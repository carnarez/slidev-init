#!/bin/sh

if [ "$#" -eq 0 ]; then
  echo "Usage: marked file.md [path/file.md [file.md]]"
  exit 1
fi

if [ "$#" -gt 1 ]; then
  /usr/local/bin/marked-process-recursively "$@"
else
  /usr/local/bin/marked-process $@
fi
