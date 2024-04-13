#!/bin/sh

enchant-2 -L -a -l $@ | grep -e "^@" -e "^$" -e "^*" -e "^-" -v | while read line; do
  output=""

  # format issue identifier
  if [ $(echo $line | awk '{print$1}') == "#" ]; then
    output="$output $(tput setaf 11)U$(tput sgr0)"
  elif [ $(echo $line | awk '{print$1}') == "&" ]; then
    output="$output $(tput setaf 3)M$(tput sgr0)"
  else
    output="$output $(tput setaf 11)G$(tput sgr0)"
  fi

  # format line number
  output="$output $(tput setaf 8)$(echo $line | awk '{print$2}')$(tput sgr0)"

  # format position
  if [ $(echo $line | awk '{print$1}') == "#" ]; then
    output="$output $(tput setaf 8)$(echo $line | awk '{print$4}')"
  else
    output="$output $(tput setaf 8)$(echo $line | awk '{print$5}' | sed s/://g)$(tput sgr0)"
  fi

  # format incriminated word
  output="$output $(tput setaf 1)$(echo $line | awk '{print$3}')$(tput sgr0)"

  # format suggestions
  output="$output $(echo $line | cut -d ' ' -f 6-15 | sed s/,$//g)"

  echo $output
done
