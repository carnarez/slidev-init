build:
	docker build --tag utils/sass .

clean:
	-docker rmi --force utils/sass
	-rm ~/.local/bin/sass

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/sass
