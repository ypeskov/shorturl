build:
	docker buildx build --platform=linux/amd64,linux/arm64 --file=../dockerfiles/Dockerfile.fastapi.prod --tag=fastapi-url-back .