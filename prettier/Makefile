build:
	docker build -t utils:prettier .

env: build
	cp process.sh /usr/local/bin/prettier
	chmod +x /usr/local/bin/prettier
