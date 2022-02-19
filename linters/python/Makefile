build:
	docker build --build-arg username=$(shell whoami) -t utils:python-linter .

env: build
	@mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/pylint
	chmod +x ~/.local/bin/pylint
