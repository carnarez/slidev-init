build:
	docker build -t utils:shcheck .

env: build
	cp process.sh /usr/local/bin/shcheck
	chmod +x /usr/local/bin/shcheck
