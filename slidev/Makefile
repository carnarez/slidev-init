build:
	docker build -t utils:slidev .

env: build
	@mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/slidev
	chmod +x ~/.local/bin/slidev

clean:
	-rm -fr node_modules package-lock.json
