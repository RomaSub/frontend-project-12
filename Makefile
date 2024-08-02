setup:
	npm ci & make -C frontend install
	npm run build

start-frontend:
	make -C frontend start

start-backend:
	npx start-server -s 'frontend/dist'

start:
	make start-backend & make start-frontend

build:
	npm run build
