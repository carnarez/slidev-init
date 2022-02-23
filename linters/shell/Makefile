build:
	docker build -t utils:lint-shell .

env: build
	@mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/shcheck
	chmod +x ~/.local/bin/shcheck
