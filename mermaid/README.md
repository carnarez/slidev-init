**[`Mermaid`](https://github.com/mermaid-js/mermaid) helper tool to render diagrams.**
Run `bash convert.sh <input.mmd> <output.svg>` with the former argument the diagram in
plain text (`.mmd` format) and the latter the output (`.png` or `.svg`).

Note the image is the [official](https://hub.docker.com/r/minlag/mermaid-cli)
[`mermaid-cli`](https://github.com/mermaid-js/mermaid-cli) image, and is VERY large as
this latter requires `chromium` and other libraries to run...

Another way to use this script:

```bash
$ wget https://raw.githubusercontent.com/carnarez/utils/master/mermaid/convert.sh -O /usr/local/bin/mermaid
$ chmod +x /usr/local/bin/mermaid
$ mermaid <input.mmd> <output.svg>
```

The first two might need to be run as root (using `sudo` or so).
