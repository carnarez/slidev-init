build:
	docker build --tag utils/mermaid .

clean:
	-docker rmi --force utils/mermaid
	-rm ~/.local/bin/mermaid

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/mermaid
	chmod +x ~/.local/bin/mermaid
