build:
	docker build --tag utils/rich .

clean:
	-docker rmi --force utils/rich
	-rm ~/.local/bin/rich

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/rich
	chmod +x ~/.local/bin/rich
