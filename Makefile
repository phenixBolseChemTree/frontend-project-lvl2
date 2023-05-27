install:
	npm install

lint:
	npx eslint .

test:
	npx jest

coverage:
	npm test -- --coverage --coverageProvider=v8