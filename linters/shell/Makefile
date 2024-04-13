TAG=linters/shell

build:
	docker build --tag $(TAG) .

build:
	-docker rmi --force $(TAG)
	-rm ~/.local/bin/shcheck

env: clean build
	@mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/shcheck
