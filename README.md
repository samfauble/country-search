# Getting Started with Country Search

## Requirements

This project came with a set of requirements to build for. The following are the requirements against which I built the apps:

1. Use the REST Countries third party API
2. User should fill out an HTML form for searches
3. Emit error message if user submits the form without input OR the search yields no results
4. The client submits input to the backend app
5. The client displays the search results from the backend app on an HTML page
6. The backend app can be in Node, PHP, or another backend technology
7. The backend app should query the third party API
8. The backend app should return a JSON object with all necessary data
9. The backend app should process the results and sort the countries in decsending order
10. The user should be able to search by the country's full name, name, or its country code
11. Each country displayed should include the following information:
    - The full, official name
    - alpha code 2
    - alpha code 3
    - flag image
    - region
    - subregion
    - population
    - languages
12. The bottom of the page should include a summary of the search results, including:
    - Each region included in the results
    - Each subregion included in the results
    - The number of times a given region appears in the results
    - The number of times a given subregion appears in the results
    - The total number of countries present in the results

## Assumptions

Given time constraints, I made a couple assumptions with regards to the requirements while building the app. The assumptions are as follows:
- I assumed "results sorted in descending order" to refer to "results sorted in descending order by official name"
- I assumed that Material UI components would conform to the HTML element requirement since the base of those components are HTML elements

## Tooling

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the frontend app with Material UI components used in the search form. The backend app was made as a standard Node/Express server.

## Setup

To set up the app:
1. Clone the repo
2. Navigate to the root directory
3. run `npm install`
4. Make sure ports 3000 and 4000 are free
5. run `npm run startServer` to spin up the backend app server
6. run `npm run start` to spin up the frontend dev server

### `npm test`

Launches the test runner in the interactive watch mode.

### Debugging

There is a `launch.json` file that contains debugging scripts that can be run for both the frontend and the backend app

