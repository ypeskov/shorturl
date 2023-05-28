start-local:
	docker-compose -f docker-compose.yaml up 

start-hosting:
	sudo docker-compose -f docker-compose.yaml --env-file=.env.hosting up 

start-production:
	sudo docker-compose -f docker-compose.prod.yaml --env-file=.env.prod up 