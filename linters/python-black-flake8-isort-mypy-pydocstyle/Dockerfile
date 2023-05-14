FROM python:slim

ARG username

RUN mkdir -p /home/$username \
 && chmod -R 777 /home/$username

COPY hooks.sh /usr/local/bin/pycheck
COPY hooks.yaml /usr/share/pycheck/hooks.yaml

RUN pip install -U pip \
 && pip install --no-cache-dir black flake8 isort mypy pydocstyle pytest-stub \
 && chmod +x /usr/local/bin/pycheck

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/pycheck"]
CMD ["."]
