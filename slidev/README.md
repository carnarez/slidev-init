**[`Slidev`](https://sli.dev/) minimal starter pack** for my own use. Run `make env` or,
manually:

```shell
$ docker run --entrypoint /bin/sh \
>            --interactive \
>            --publish 3030:3030 \
>            --rm \
>            --tty \
>            --user 1000:1000 \
>            --volume "$PWD":/usr/src \
>            --workdir /usr/src \
>            node:alpine
```

followed by:

```shell
> npm install
> npx slidev --remote
```

Note the `Node` `Docker` images carry a default `node` user with uid:gid 1000:1000.
