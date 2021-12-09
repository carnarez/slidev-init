**[`Mermaid`](https://github.com/mermaid-js/mermaid) helper tool to render diagrams from
the command line.** Run `make env' to get everything set up (some might need to be run
as root).

Note the `Node` `Docker` images carry a default `node` user with UID:GID 1000:1000; if
they do not correspond to your own, the script will try to fix it when building the
container.
