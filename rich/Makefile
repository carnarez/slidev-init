build:
	docker build -t utils:rich .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/rich
	chmod +x ~/.local/bin/rich
