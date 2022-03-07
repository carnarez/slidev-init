build:
	docker build --tag utils:slidev .

clean:
	-docker rmi --force utils:slidev
	-rm ~/.local/bin/slidev

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/slidev
	chmod +x ~/.local/bin/slidev
