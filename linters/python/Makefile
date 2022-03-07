build:
	docker build --build-arg username=$(shell id -u) --tag utils:lint-python .

clean:
	-docker rmi --force utils:lint-python
	-rm ~/.local/bin/pycheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/pycheck
	chmod +x ~/.local/bin/pycheck
