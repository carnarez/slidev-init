GID := $(getent group $UID | awk -F":" '{print$3}')

env:
	@docker run --entrypoint /bin/sh -i -p 3030:3030 --rm -t -u $(UID):$(GID) -v $(PWD):/usr/src -w /usr/src node:alpine

clean:
	-@rm -fr node_modules package-lock.json
