build:
	docker build -t utils:mermaid .

env: build
	mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/mermaid
	chmod +x ~/.local/bin/mermaid
