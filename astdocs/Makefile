build:
	docker build --tag utils/astdocs .
	# docker run --rm --volume /var/run/docker.sock:/var/run/docker.sock dslim/docker-slim build --http-probe=false utils/astdocs
	# docker tag utils/astdocs.slim utils/astdocs
	# docker rmi utils/astdocs.slim

clean:
	-docker rmi --force utils/astdocs
	-rm ~/.local/bin/astdocs

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/astdocs
	chmod +x ~/.local/bin/astdocs
