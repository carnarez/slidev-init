build:
	docker build -t utils:astdocs .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/astdocs
	chmod +x ~/.local/bin/astdocs
