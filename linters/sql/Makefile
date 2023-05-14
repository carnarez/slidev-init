TAG=linters/sql

build:
	docker build --tag $(TAG) .

clean:
	-docker rmi --force $(TAG)
	-rm ~/.local/bin/sqlcheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/sqlcheck
	chmod +x ~/.local/bin/sqlcheck
