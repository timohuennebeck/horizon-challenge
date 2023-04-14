# Horizon Application
This is a React-based web application named "Horizon". The current version is 0.1.0. This application is built using React and TypeScript, and uses Axios for making HTTP requests. It also uses Sass for styling and UUID for generating unique IDs. Moreover, it now uses Vite as the build tool and development server.

## Important

To fix the "Cannot find module 'node:path'" error, please make sure to have installed the latest version of Node: v18.15.0



<!-- README is not up to date -->
## Installation
To install this application, clone the repository from GitHub:

`git clone https://github.com/timohuennebeck/horizon.git`

Then, navigate to the project directory and install the dependencies using npm:

`cd horizon`
`npm install`


## Usage
To start the application, run the following command:

`npm run dev`

This will start the application using Vite and open it in your default browser at http://localhost:3000.

To build the application for production, run the following command:

`npm run build`

This will create a build directory with optimized production build files.

<!-- What is vite / what does it do, and why did you choose to use vite? -->

## Testing
To run the tests, use the following command:

`npm test`

This will run the tests using Jest, which is a JavaScript testing framework.


## Dependencies
This application has the following dependencies:

@mdx-js/react: A package for using MDX with React.

axios: A Promise-based HTTP client for making HTTP requests.

react: A JavaScript library for building user interfaces.

react-dom: A package for working with the DOM in React.

react-icons: A collection of icons for using in React applications.

react-router-dom: A package for adding routing to React applications.

react-scripts: A set of scripts for building and running React applications.

sass: A preprocessor for CSS that adds features like variables, nesting, and mixins.

uuid: A package for generating unique IDs.

vite-plugin-environment: A Vite plugin for managing environment variables.

web-vitals: A package that provides tools for measuring and reporting web vitals metrics.


## Development Dependencies

This application has the following development dependencies:

@babel/core, @babel/plugin-syntax-import-meta, @babel/preset-env, @babel/preset-react, @babel/preset-typescript: Babel-related packages for compiling and working with TypeScript and React.

@testing-library/dom: A set of utilities for testing DOM nodes.

@testing-library/jest-dom: A set of matchers for Jest that you can use to test DOM nodes.

@testing-library/react: A set of utilities for testing React components.

@testing-library/user-event: A library for simulating user events.

@types/jest: TypeScript definitions for Jest.

@types/node: TypeScript definitions for Node.js.

@types/react: TypeScript definitions for React.

@types/uuid: TypeScript definitions for UUID.

@typescript-eslint/eslint-plugin, @typescript-eslint/parser: ESLint plugins and parser for TypeScript.

@vitejs/plugin-react: A Vite plugin for working with React applications.

autoprefixer: A package for adding vendor prefixes to CSS rules.
babel-jest: A Jest transformer for Babel.

babel-plugin-transform-import-meta: A Babel plugin for transforming import.meta.

dotenv: A package for loading environment variables from a .env file.

eslint, eslint-plugin-react: ESLint and the React plugin for linting JavaScript and TypeScript code.

jest: A JavaScript testing framework.

jest-environment-jsdom: A custom Jest environment that uses jsdom.







## Challenge:

Dear candidate,

To help us evaluate your skills better, we would like to propose a little technical challenge for you.

Horizon Alpha Technical Test

Create a simple app using React and react-router.
Write it in Typescript (extra points for a strict ruleset).
Use your preferred state manager (Redux, Mobx, React Context etc…) and hold a central application state.
Choose the build tool you prefer.
Write a minimum of clean css or use styled-components.
Write at least two tests using JEST.
Create a README.md file with some documentation.
Use TheMovieDatabase API (https://developers.themoviedb.org/3) to get data.

The app should contain:
A home page listing movie categories
A category page listing movies of the category
A detail page of an item with more information about that movie

Nice-to-have features:
Pagination as infinite scrolling
Server Side Rendering
Live search

If you have any questions please ask.

The Horizon Alpha development team