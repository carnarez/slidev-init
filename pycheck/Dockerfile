FROM python:slim

ARG username

RUN mkdir -p /home/$username \
 && chmod -R 777 /home/$username

COPY hooks.sh /usr/local/bin/pycheck
COPY hooks.yaml /usr/share/pycheck/hooks.yaml
COPY requirements.txt /tmp/requirements.txt

RUN pip install -U pip \
 && pip install --no-cache-dir -r /tmp/requirements.txt \
 && chmod +x /usr/local/bin/pycheck

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/pycheck"]
CMD ["."]
