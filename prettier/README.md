**[`Prettier`](https://github.com/prettier/prettier) helper tool to prettify files.**
Various formats supported, see [docs](https://prettier.io/docs/en/index.html). Run
`make env` to get everything set up (some might need to be run as root).

Note the `Node` `Docker` images carry a default `node` user with UID:GID 1000:1000; if
they do not correspond to your own, the script will try to fix it when building the
container.
