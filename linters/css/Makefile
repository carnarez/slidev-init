TAG=linters/css

build:
	docker build --tag $(TAG) .

clean:
	-docker rmi --force $(TAG)
	-rm ~/.local/bin/csscheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/
	chmod +x ~/.local/bin/csscheck
