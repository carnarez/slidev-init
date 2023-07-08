FROM alpine

RUN apk --update --no-cache add aspell \
                                aspell-en \
                                hunspell \
                                hunspell-en \
                                nuspell \
                                enchant2 \
                                enchant2-aspell \
                                enchant2-hunspell \
                                enchant2-nuspell

WORKDIR /usr/src

ENTRYPOINT ["enchant-2", "-L", "-a", "-l"]
