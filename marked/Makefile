build:
	docker build --tag utils/marked .

clean:
	-docker rmi --force utils/marked
	-rm ~/.local/bin/marked

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/marked
