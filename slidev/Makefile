GID := $(shell id -g)
UID := $(shell id -u)

build:
	docker build --build-arg GID=$(GID) --build-arg UID=$(UID) -t utils:slidev .

env: build
	cp process.sh /usr/local/bin/slidev
	chmod +x /usr/local/bin/slidev

clean:
	-@rm -fr node_modules package-lock.json
