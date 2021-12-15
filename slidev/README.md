**[`Slidev`](https://sli.dev/) minimal starter pack** for my own use. Run `make env` to
get everything set up (some might need to be run as root). Then, from the folder holding
the Markdown content, simply run `slidev` (executable located in `~/.local/bin`)
followed by:

```shell
> slidev --remote
```

To install a new dependency simply `Ctrl`+`c` the process in the container and run the
usual:

```shell
> npm i -s <PACKAGE>
```

Users and groups are mounted (read-only) from the host system to avoid ownership issues.
