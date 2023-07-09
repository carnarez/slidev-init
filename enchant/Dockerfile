FROM alpine

ENV TERM=xterm-256color

COPY entrypoint.sh /usr/local/bin/enchant

RUN apk --update --no-cache add aspell \
                                aspell-en \
                                hunspell \
                                hunspell-en \
                                nuspell \
                                enchant2 \
                                enchant2-aspell \
                                enchant2-hunspell \
                                enchant2-nuspell \
                                ncurses \
 && chmod +x /usr/local/bin/enchant

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/enchant"]
