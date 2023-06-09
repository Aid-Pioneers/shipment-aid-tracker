# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using Supabase
This application uses Supabase as its backend; Supabase is an open source Firebase alternative for building secure and performant Postgres backends with minimal configuration. Read more about it at https://supabase.com/docs/guides/getting-started.


To spin up a supabase instance locally (required for local development) have a read of https://supabase.com/docs/guides/getting-started/local-development. It's easy to read and splits everything up into simple steps. If you want to get started ASAP then a few of the more important commands are extracted below:

### Supabase CLI (cheat sheet)
The `supabase` CLI can be used to develop against `supabase` locally. Run `npm install --dev` and then execute `supabase` functions via `npx supabase <cmd>`.

You will need to create a supabase account in order to create things like supabase personal tokens to use the various APIs. You can create an account via your GitHub account at https://supabase.com/dashboard/sign-in.

To begin with you will want to run
- `npx supabase login` - to authenticate against our supabase account; requires a token, which can be created by logging into your supabase account and going to https://supabase.com/dashboard/account/tokens.
- `npx supabase start` - this will pull down the necessary docker containers and start a locally running instance.
- `npx supabase db reset` - this will reset your local DB and run all the migrations in `/supabase/migrations` as well as populating seed data defined in `/supabase/seed.sql`.
- `npx supabase status` - to show the status of the local database, including connection details.

If you want to make changes to the production supabase project (e.g. to run a diff of your local DB or push migrations) then you will need to link the projects via
`npx supabase link`.

Once you have run `npx supabase start`, you should now be able to access the local supabase dashboard at http://localhost:54323/project/default/editor.

### Connecting to the DB
Once supabase has been set up locally, to connect to the database either use the dashboard UI, or use `psql`:
```sh
psql postgresql://postgres:postgres@localhost:54322/postgres
```

## Available Scripts

In the project directory, you can run:

### `npm install`
This installs all of the production dependencies required to run the app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
