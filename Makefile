.PHONY: build-web

build-web:
	cd web/; \
	yarn; \
	yarn build
