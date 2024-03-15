**`Python` linter/checker helper tool.** Run `make env` to get everything set up (in
`~/.local/bin`).

Code in the current directory will be checked by:
* [`ruff`](https://github.com/astral-sh/ruff) as a formatter (replacing `black`) and a
  linter (`flake8`, `isort`, `pydocstyle` and similar),
* [`mypy`](https://github.com/python/mypy) to check static typing.

Users and groups are mounted (read-only) from the host system to avoid ownership issues.
