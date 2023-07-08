FROM alpine

ENV RUBYOPT="-W0"

RUN apk --update --no-cache add git \
                                ruby \
                                ruby-charlock_holmes \
                                ruby-json \
                                ruby-rugged \
  && apk --update --no-cache add --virtual build-dependencies build-base \
                                                              cmake \
                                                              icu-dev \
                                                              ruby-dev \
  && gem install --no-document github-linguist \
  && apk del build-dependencies \
  && git config --global --add safe.directory /usr/src

WORKDIR /usr/src

ENTRYPOINT ["github-linguist"]
