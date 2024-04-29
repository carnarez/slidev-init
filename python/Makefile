# https://hub.docker.com/_/python
version ?= 3.10

clean:
	-docker rmi --force python:$(version)-slim
	-rm ~/.local/bin/python$(version)

env:
	@mkdir --parents ~/.local/bin
	sed "s/X.X/$(version)/g" process.sh > ~/.local/bin/python$(version)
	chmod +x ~/.local/bin/python$(version)
