whoami := $(shell whoami)

build:
	docker build --build-arg username=$(whoami) -t utils:pycheck .

env: build
	cp process.sh /usr/local/bin/pycheck
	chmod +x /usr/local/bin/pycheck
