build:
	docker build --tag utils:lint-sql .

env: build
	@mkdir -p ~/.local/bin
	cp process.sh ~/.local/bin/sqlcheck
	chmod +x ~/.local/bin/sqlcheck
