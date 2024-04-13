TAG=linters/css

build:
	docker build --build-arg username=$(shell id -nu) \
	             --build-arg uid=$(shell id -u) \
	             --build-arg gid=$(shell id -g) \
	             --tag $(TAG) \
	             .

clean:
	-docker rmi --force $(TAG)
	-rm ~/.local/bin/csscheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/csscheck
