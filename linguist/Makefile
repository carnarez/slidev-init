build:
	docker build --tag utils/linguist .

clean:
	-docker rmi --force utils/linguist
	-rm ~/.local/bin/linguist

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/linguist
	chmod +x ~/.local/bin/linguist
