FROM alpine:latest AS fetch

ARG tag=latest
ARG tar=https://github.com/koalaman/shellcheck/releases/download/$tag/shellcheck-$tag.linux.x86_64.tar.xz

WORKDIR /usr/local/bin

RUN wget -qq -O shellcheck.tar.xz $tar \
 && tar -xJf shellcheck.tar.xz \
 && mv shellcheck-$tag/shellcheck . \
 && chmod +x shellcheck \
 && rm -fr shellcheck-$tag


FROM scratch

COPY --from=fetch /usr/local/bin/shellcheck /bin/shellcheck

WORKDIR /src

ENTRYPOINT ["/bin/shellcheck", "--color=always"]
