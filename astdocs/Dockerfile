FROM python:slim

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive \
    apt-get install --no-install-recommends -y git \
 && pip install -U pip \
 && pip install --no-cache-dir git+https://github.com/carnarez/astdocs@master mdformat

COPY entrypoint.sh /usr/local/bin

WORKDIR /usr/src

ENTRYPOINT ["bash", "/usr/local/bin/entrypoint.sh"]
CMD ["."]
