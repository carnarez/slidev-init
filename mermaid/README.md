**[`Mermaid`](https://github.com/mermaid-js/mermaid) helper tool to render diagrams from
the command line.** Run `bash process.sh <input.mmd> <output.svg>`, the _former_
argument being the diagram in plain text (`.mmd` format), and the _latter_ the output
(`.png` or `.svg` format).

Note the image is the [official](https://hub.docker.com/r/minlag/mermaid-cli)
[`mermaid-cli`](https://github.com/mermaid-js/mermaid-cli) image, and is VERY large as
it requires `chromium` and other libraries to run...

Another way to use this script:

```bash
$ wget https://raw.githubusercontent.com/carnarez/utils/master/mermaid/process.sh -O /usr/local/bin/mermaid
$ chmod +x /usr/local/bin/mermaid
$ mermaid <input.mmd> <output.svg>
```

The first two might need to be run as root (using `sudo` or so). Note the `Node`
`Docker` images carry a default `node` user with uid:gid 1000:1000; if they do not
correspond to your own, some `chown` might need to be performed to fix ownership.
