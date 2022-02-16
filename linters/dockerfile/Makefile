build:
	docker build -t utils:dockerfile-linter .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/dklint
	chmod +x ~/.local/bin/dklint
