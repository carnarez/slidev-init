build:
	docker build --build-arg username=$(shell whoami) -t utils:pycheck .

env: build
	cp process.sh /usr/local/bin/pycheck
	chmod +x /usr/local/bin/pycheck
