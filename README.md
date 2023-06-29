# Shipment Aid Tracker

A web-app that facilitates the tracking of aid shipments around the world!

Built as a React frontend backed by Supabase. Supabase is an open source Firebase alternative for building secure and performant Postgres backends with minimal configuration. Read more about it at https://supabase.com/docs/guides/getting-started.

## Deployments
CI and deployments are handled via GitHub actions.

For CI, we verify that the types are up-to-date against the production schema.

On deployment we ensure that all database migrations are run against the production schema. The Heroku project will then deploy the app at https://shipment-aid-tracker.herokuapp.com/.
## Quick Start
To get up and running quickly follow the steps below 👇

### 1. Install the `supabase` CLI
The CLI allows us to configure a local supabase installation and develop against it, as well as to link to and udpate our production supabase instance.


```sh
# installs the CLI locally (recommended)
npm install --dev

# installs the CLI globally
npm install -g supabase
```

If installing locally then all `supabase` CLI commands must be prefixed with `npx` e.g. `npx supabase init`; if installed globally then the `npx` prefix is not required and just `supabase init` will suffice.

### 2. Start supabase locally

This will pull down all of the various docker images required to run supabase locally and runs them. It might take a few minutes the first time you run it!

```sh
npx supabase start
```

At the end of this process it will print out a number of useful endpoints, which you can see at any time by running

```sh
npx supabase status
```

If you visit the Studio URL (`http://localhost:54323/projects`) then you will be able to interact with the Supabase UI for your local project.

### 3. Run the database migrations
Everything is now up and running, but our database is empty. To run the migrations (and seed the tables with data) run

```sh
npx supabase db reset
```

### 4. Install and run the application
Run

```sh
npm install && npm start
```

to start the app and open it in your web browser at [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits. You will also see any lint errors in the console.

### 5. Go forth and explore

In general the Supabase docs are really good. For more in-depth instructions or troubleshooting, consult the docs at https://supabase.com/docs/guides/getting-started/local-development. They cover things like creating/running DB migrations locally and then pushing them to production.

## Advanced Supabase CLI options

You may want to link up to the production supabase instance for a number of reasons:
- To perform a diff between local schema and production schema.
- To migrate schemas in production.
- To install edge functions.

To do this, you will need to do a couple of things:

### 1. Create a Supabase account and create a personal access token
This will enable you to create things like personal API tokens, which are needed to hit Supabase APIs locally.

Visit https://supabase.com/dashboard/sign-in to create an account (you can OAuth with your GitHub account) before then navigating to https://supabase.com/dashboard/account/tokens to create a personal access token.

**Note: once you have created a personal access token, you will need to keep a record of it as it will only be shown once!**

### 2. Login locally

Run

```sh
npx supabase login
```

and provide your personal access token when prompted to do so.

### 3. Linking to the production instance

Run

```sh
npx supabase link --project-ref <project-id>
```

where `<project-id>` is the ID of the supabase project, which you can find by looking at the GithubAction variables.

It may prompt you for the root password - if this is skipped then you will not be able to make changes to the production database, but you will be able to make changes to other things via the CLI.

### 4. Run commands

For example, to generate TypeScript types for all of the tables in the production DB you can run the following command:

```sh
 npx supabase gen types typescript --project-id "<project-id>" --schema public > ./database.types.ts
```

this is also possible to run against your local DB.

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
