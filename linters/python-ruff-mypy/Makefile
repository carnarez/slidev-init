TAG=linters/python

build:
	docker build --build-arg username=$(shell id -nu) --tag $(TAG) .

clean:
	-docker rmi --force $(TAG)
	-rm ~/.local/bin/pycheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/pycheck

compare: 
	@docker run --entrypoint /usr/local/bin/ruff --interactive --rm $(TAG) \
	    rule --all | grep -E '^# .* \([A-Z]*[0-9]*\)' | sed -E 's/.*\(([A-Z]*)[0-9]*\)/\1/g' | sort | uniq > 1
	@sed -n '/^lint.select/,/^]/p' ruff.toml | grep -e '\[' -e '\]' -v | sed -E 's/.*"([A-Z]*)[0-9]*",.*/\1/g' | sort | uniq > 2
	@diff ? || exit 0
	@rm ?
