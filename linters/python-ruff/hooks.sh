#!/bin/bash

export TERM=xterm-256color

if [ $# -eq 0 ]; then
  files="$(find . -name "*.py" | grep -v venv)"
else
  files="$*"
fi

echo "$files" | while read -r f; do
  grep "^[a-z]" /usr/share/pycheck/hooks.yaml | sed 's/://g' | while read -r h; do
    echo -e "\n$(tput bold)$h:$(tput sgr0)"

    opt=$(grep -v "^\s*#" /usr/share/pycheck/hooks.y*ml | grep --after-context=3 "^$h:")
    cmd=$(awk '$1=="cmd:" {$1="";print$0}' <<< "$opt" | xargs)
    flags=$(awk '$1=="flags:" {$1="";print$0}' <<< "$opt")
    check=$(awk '$1=="check:" {$1="";print$0}' <<< "$opt")

    if ! eval "$cmd $check $flags $f" &>/dev/null; then
      eval "$cmd $flags $f" 2>&1 | sed 's/^/ /g'
      echo -e "$(tput setab 1)$cmd$flags$(tput sgr0)"
    else
      echo -e "$(tput setab 2)$cmd$flags$(tput sgr0)"
    fi

  done
done

echo
