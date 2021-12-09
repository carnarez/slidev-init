GID := $(shell id -g)
UID := $(shell id -u)

build:
	docker build --build-arg GID=$(GID) --build-arg UID=$(UID) -t utils:mermaid .

env: build
	cp process.sh /usr/local/bin/mermaid
	chmod +x /usr/local/bin/mermaid
