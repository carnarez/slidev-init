build:
	docker build --tag utils/prettier .

clean:
	-docker rmi --force utils/prettier
	-rm ~/.local/bin/prettier

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/prettier
