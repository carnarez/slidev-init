GID := $(shell id -g)
UID := $(shell id -u)

build:
	docker build --build-arg GID=$(GID) --build-arg UID=$(UID) -t utils:prettier .

env: build
	cp process.sh /usr/local/bin/prettier
	chmod +x /usr/local/bin/prettier
