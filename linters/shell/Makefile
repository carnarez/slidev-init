build:
	docker build -t utils:shcheck .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/shcheck
	chmod +x ~/.local/bin/shcheck
