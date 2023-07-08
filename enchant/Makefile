build:
	docker build --tag utils/enchant .

clean:
	-docker rmi --force utils/enchant
	-rm ~/.local/bin/enchant

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/enchant
	chmod +x ~/.local/bin/enchant
