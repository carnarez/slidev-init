**[`ShellCheck`](https://github.com/koalaman/shellcheck) helper tool to check shell
scripts.** See [repo](https://github.com/koalaman/shellcheck). Run `make env` to get
everything set up (in `~/.local/bin`).

Note the final image does *not* write anything back, and as such does not need any kind
of user/group. The container runs as root, but nothing else than the executable
(`/bin/shellcheck`) lives in there (and the current directory mounted in `/src`).
