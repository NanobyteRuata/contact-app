# Contact App

## Install Angular and Packages

- This project is created using Angular version 11. If you don't have Angular installed in your local machine, please follow instructions [here](https://angular.io/guide/setup-local)
- Navigate into the project root directory after cloning or downloading and run `npm install`.

## Install JSON-Server

- Install this package globally by running ` npm install -g json-server`.
- Run `json-server db.json --middlewares middleware.js` or `npx json-server db.json --middlewares middleware.js` to start the server using `db.json` as it's database.
- By default, it will be running on `http://localhost:3000`.
- If you want to change where the fake server runs, you will need to run using `json-server db.json --middlewares middleware.js --port [port-number-of-your-choice]` and change the `BASE_URL` value in `api-constants.ts` file.

## Run the Angular app

- You can run the project in development mode using `ng serve`.
- To build the project, run `ng build` and you will see the compiled project inside `/dist` folder.
