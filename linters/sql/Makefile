build:
	docker build --tag utils:lint-sql .

clean:
	-docker rmi --force utils:lint-sql
	-rm ~/.local/bin/sqlcheck

env: clean build
	@mkdir --parents ~/.local/bin
	cp process.sh ~/.local/bin/sqlcheck
	chmod +x ~/.local/bin/sqlcheck
