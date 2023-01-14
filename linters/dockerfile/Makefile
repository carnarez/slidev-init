build:
	docker build --tag utils/lint-dockerfile .

clean:
	-docker rmi --force utils/lint-dockerfile
	-rm ~/.local/bin/dkcheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/dkcheck
	chmod +x ~/.local/bin/dkcheck
