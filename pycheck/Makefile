GID := $(shell id -g)
UID := $(shell id -u)

build:
	docker build --build-arg GID=$(GID) --build-arg UID=$(UID) -t utils:pycheck .

env: build
	cp process.sh /usr/local/bin/pycheck
	chmod +x /usr/local/bin/pycheck
