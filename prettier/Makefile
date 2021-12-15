build:
	docker build -t utils:prettier .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/prettier
	chmod +x ~/.local/bin/prettier
