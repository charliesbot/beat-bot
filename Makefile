.PHONY: build-web build-lambda

build-web:
	cd web/; \
	yarn; \
	yarn build

build-lambda:
	cd functions/; \
	yarn; \
	yarn build

