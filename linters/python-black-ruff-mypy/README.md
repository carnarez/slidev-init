**`Python` linter/checker helper tool.** Run `make env` to get everything set up (in
`~/.local/bin`).

Code in the current directory will be checked by:
* [`black`](https://github.com/psf/black) to lint code,
* [`ruff`](https://github.com/charliermarsh/ruff) to check source files for known
  errors, `import`s, docstrings, _etc._ (effectively replacing `flake8`, `isort`,
  `pydocstyle` and similar),
* [`mypy`](https://github.com/python/mypy) to check static typing.

Users and groups are mounted (read-only) from the host system to avoid ownership issues.
