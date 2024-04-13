build:
	docker build --tag linters/prettier .

clean:
	-docker rmi --force linters/prettier
	-rm ~/.local/bin/prettier

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/prettier
