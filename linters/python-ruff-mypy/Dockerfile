FROM python:3.10-slim

ARG username

RUN mkdir -p /home/$username \
 && chmod -R 777 /home/$username

COPY hooks.sh /usr/local/bin/pycheck
COPY hooks.yaml /usr/share/pycheck/hooks.yaml

RUN pip install -U pip \
 && pip install --no-cache-dir mypy pytest-stub ruff \
 && chmod +x /usr/local/bin/pycheck

COPY ruff.toml /usr/share/pycheck/ruff.toml

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/pycheck"]
CMD ["."]
