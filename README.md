# OrangeDigital React Challenge

This the submission for the OrangeDigital React Challenge. This project is a responsive web application with two pages, as per the provided layout image. The hamburger menu has one link for the gallery page and one link for the detail page.

Built with Typescript.

## Installation

To install and run the project, follow these steps:

1. Clone this repository.
2. Run `yarn install` to install the dependencies.
3. Run yarn `start-app` to start the project.
4. Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

The yarn `start-app` command will start both the frontend and backend servers concurrently. The frontend server will be available on port 3000, and the backend server will be available on port 4000.

### Backend API

The project includes a simple NodeJS server that serves a RESTful API endpoint with a JSON structure data to populate the pages with information. The JSON includes the following information:

* Page Name
* User Details
* Video Details
* Pictures Details

The project includes a simple NodeJS server that serves a RESTful API with the following three endpoints:
1. `/api/test` : Returns a simple test message to verify that the API is running.
2. `/api/gallery` : Returns an object of picture details, including the picture URL and caption.
3. `/api/detail` : Returns an object with details for the Details Page.

The API is located in the backend directory. The server uses the Express.js framework and the cors package to enable cross-origin resource sharing.

### Styling
The project uses the Material UI library for styling the React components. Custom styles are implemented using Emotion, a CSS-in-JS library.

### Coding Guidelines

* The code follows the eslint guidelines for JavaScript linting.
* The code follows the stylelint guidelines for SCSS linting.
* The editor is configured using the editorconfig file.
* The code is written functionally and is testable.

