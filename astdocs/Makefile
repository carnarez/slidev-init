build:
	docker build --tag utils:astdocs .

clean:
	-docker rmi --force utils:astdocs
	-rm ~/.local/bin/astdocs

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/astdocs
	chmod +x ~/.local/bin/astdocs
