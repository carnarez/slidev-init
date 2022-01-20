build:
	docker build -t utils:dkcheck .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/dkcheck
	chmod +x ~/.local/bin/dkcheck
