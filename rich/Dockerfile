FROM python:slim

RUN pip install -U pip \
 && pip install --no-cache-dir rich-cli

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/rich"]
