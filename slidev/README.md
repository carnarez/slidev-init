**[`Slidev`](https://sli.dev/) minimal starter pack** for my own use. Run `make env` to
get everything set up (some might need to be run as root). Then, from the folder holding
the Markdown content, simply run `slidev` (executable located in `/usr/local/bin`)
followed by:

```shell
> npx slidev --remote
```

To install a new dependency simply `Ctrl`+`c` the process in the container and run the
usual:

```shell
> npm i -s <PACKAGE>
```

Note the `Node` `Docker` images carry a default `node` user with UID:GID 1000:1000; if
they do not correspond to your own, the script will try to fix it when building the
container.
