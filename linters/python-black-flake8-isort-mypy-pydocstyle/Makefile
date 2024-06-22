TAG=linters/python

build:
	docker build --build-arg username=$(shell id -nu) --tag $(TAG) .

clean:
	-docker rmi --force utils/lint-python
	-rm ~/.local/bin/pycheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/pycheck
