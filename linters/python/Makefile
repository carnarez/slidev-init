build:
	docker build --build-arg username=$(shell whoami) -t utils:lint-python .

env: build
	@mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/pycheck
	chmod +x ~/.local/bin/pycheck
