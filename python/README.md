**Make available whatever Python version via `Docker`.** Install a shell script in
`~/.local/bin/pythonX.X`; to be tuned if specific volumes or system dependencies are
needed. Check the [Docker Hub](https://hub.docker.com/_/python) for available versions
(_e.g._, tags).

Users and groups are mounted (read-only) from the host system to avoid ownership issues.

```shell
$ make version=3.10
$ python3.10 -m venv .venv  # accepts simple execution logic
$ python3.10  # bash interpreter inside the container
> .venv/bin/pip install ...
> python ...
```
