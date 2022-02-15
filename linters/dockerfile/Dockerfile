FROM alpine:latest AS fetch

ARG exe=https://github.com/hadolint/hadolint/releases/download/v2.8.0/hadolint-Linux-x86_64

WORKDIR /usr/local/bin

RUN wget -qq -O hadolint $exe \
 && chmod +x hadolint


FROM scratch

COPY --from=fetch /usr/local/bin/hadolint /bin/hadolint

WORKDIR /src

ENTRYPOINT ["/bin/hadolint"]
CMD ["Dockerfile"]
