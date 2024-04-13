TAG=linters/dockerfile

build:
	docker build --tag $(TAG) .

clean:
	-docker rmi --force $(TAG)
	-rm ~/.local/bin/dkcheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/dkcheck
