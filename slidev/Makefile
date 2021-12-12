build:
	docker build -t utils:slidev .

env: build
	cp process.sh /usr/local/bin/slidev
	chmod +x /usr/local/bin/slidev

clean:
	-@rm -fr node_modules package-lock.json
