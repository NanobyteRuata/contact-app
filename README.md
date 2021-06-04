# Contact App

## Initialize

- This project is created using Angular version 11. If you don't have Angular installed in your local machine, please follow instructions [here](https://angular.io/guide/setup-local)
- Navigate into the project root directory after cloning or downloading and run `npm install`.

## Install JSON-Server

- Install this package globally by running ` npm install -g json-server`.
- Run `json-server db.json --middlewares middleware.js` to start the server using `db.json` as it's database.
- By default, it will be running on `http://localhost:3000`.
- If you want to change where the fake server runs, you will need to run using `json-server db.json --middlewares middleware.js --port [port-number-of-your-choice]` and change the `BASE_URL` value in `api-constants.ts` file.

## Run the Angular app

- You can run the project in development mode using `ng serve`.
- To build the project, run `ng build` and you will see the compiled project inside `/dist` folder.

## The Application

- This is a very basic contacts management application.
  <img src="/src/assets/home-new.png" alt="Contacts Home Page"/>
- You can see all your contacts if you have some.
- If you don't have any contacts yet, you can add new contact by clicking the `Create New` button at the top right corner of the page to navigate to a seperate page where you can fill up necessary data and save new contact.
  <img src="/src/assets/new.png" alt="Create New Contact Page"/>
  <img src="/src/assets/home.png" alt="Contacts Home Page"/>
- You can delete existing contact by clicking the `Delete` button on each contacts on the contacts home page.
- You can also edit existing contact by clicking the `Edit` button on each contacts to edit page.
  <img src="/src/assets/detail.png" alt="Edit Contacts Page"/>
