# https://hub.docker.com/_/python
version ?= 3.10

env:
	@mkdir -p ~/.local/bin
	sed "s/X.X/$(version)/g" process.sh > ~/.local/bin/python$(version)
	chmod +x ~/.local/bin/python$(version)
