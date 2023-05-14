FROM python:slim

ARG username

RUN mkdir -p /home/$username \
 && chmod -R 777 /home/$username

COPY hooks.sh /usr/local/bin/pycheck
COPY hooks.yaml /usr/share/pycheck/hooks.yaml

RUN pip install -U pip \
 && pip install --no-cache-dir black mypy pytest-stub ruff \
 && chmod +x /usr/local/bin/pycheck

COPY ruff.toml /usr/share/pycheck/ruff.toml

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/pycheck"]
CMD ["."]
