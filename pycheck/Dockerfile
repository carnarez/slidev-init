FROM python:slim

ARG GID=1000
ARG UID=1000

COPY requirements.txt /tmp/requirements.txt
COPY hooks.sh /usr/local/bin/pycheck

RUN if [ `grep -c ":$GID:" /etc/group` -eq "0" ]; then groupadd -g $GID -r pre-commmit; fi \
 && if [ `grep -c ":$UID:" /etc/group` -eq "0" ]; then useradd -d /home/mermaid -g $GID -m -s /bin/bash -u $UID mermaid; fi \
 && pip install -U pip \
 && pip install --no-cache-dir -r /tmp/requirements.txt \
 && chmod +x /usr/local/bin/pycheck

COPY hooks.yaml /usr/share/hooks/

USER $UID

WORKDIR /usr/src

ENTRYPOINT ["/usr/local/bin/pycheck"]
