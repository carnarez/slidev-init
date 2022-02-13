**`Python` [`rich-cli`](https://github.com/Textualize/rich-cli) formatter helper tool
for the command line.** Check the backend rendering library,
[`rich`](https://github.com/Textualize/rich), for more details.

Users and groups are mounted (read-only) from the host system to avoid ownership issues.

### Useful commands

Syntax highlighting:

```shell
$ rich -d 1,0 -gn *.py
```

Render `Markdown` files (the line length takes into account the 88 characters limit from
`black`, as most of my stuff is in `Python`):

```shell
$ rich -d 1 -lmy -W 93 *.md
```
