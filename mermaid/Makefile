build:
	docker build -t utils:mermaid .

env: build
	cp process.sh /usr/local/bin/mermaid
	chmod +x /usr/local/bin/mermaid
