**`Python` linter/checker helper tool.** Run `make env` to get everything set up (some
might need to be run as root).

Code in the current directory will be checked by:
* [`black`](https://github.com/psf/black) to lint code,
* [`flake8`](https://github.com/PyCQA/flake8) to check source files for known errors,
* [`isort`](https://github.com/PyCQA/isort) to sort `import`s,
* [`mypy`](https://github.com/python/mypy) to check static typing,
* [`pydocstyle`](https://github.com/PyCQA/pydocstyle) to check docstrings (already
  included in `flake8` but better to have it in clear).

Users and groups are mounted (read-only) from the host system to avoid ownership issues.
