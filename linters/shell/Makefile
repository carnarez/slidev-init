build:
	docker build --tag utils:lint-shell .

build:
	-docker rmi --force utils:lint-shell
	-rm ~/.local/bin/shcheck

env: clean build
	@mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/shcheck
	chmod +x ~/.local/bin/shcheck
