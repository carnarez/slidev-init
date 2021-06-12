env:
	@docker run --entrypoint /bin/sh -i -p 3030:3030 --rm -t -u 1000:1000 -v $(PWD):/usr/src -w /usr/src node:alpine

clean:
	-@rm -fr node_modules package-lock.json
