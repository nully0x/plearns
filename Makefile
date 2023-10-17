server-start:
	@echo "Starting server..."
	# run the server frint the server folder
	@cd server && yarn dev

start-db:
	@echo "Starting database..."
	# run the database from the docker-compose file
	@docker pull mongo && docker run -d -p 27017:27017 -e  --name plaern-db mongo