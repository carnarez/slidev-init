build:
	docker build -t utils:shell-linter .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/shlint
	chmod +x ~/.local/bin/shlint
