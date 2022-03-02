FROM python:slim

RUN pip install --upgrade pip \
 && pip install --no-cache-dir pglast sqlfluff sqlparse

WORKDIR /usr/src

ENTRYPOINT ["sqlfluff"]
CMD ["lint", "."]
