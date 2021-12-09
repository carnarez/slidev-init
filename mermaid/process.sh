GID=$(id -g)

docker run --rm -u $UID:$GID -v $PWD:/usr/src -w /usr/src utils:mermaid $@
