**[`Hadolint`](https://github.com/hadolint/hadolint) helper tool to check
`Dockerfile`s.** See [repo](https://github.com/hadolint/hadolint). Run `make env` to
get everything set up (in `~/.local/bin`).

Note the final image does *not* write anything back, and as such does not need any kind
of user/group. The container runs as root, but nothing else than the executable
(`/bin/hadolint`) lives in there (and the current directory mounted in `/src`).
