const express = require('express');
const countryRouter = express.Router();

const { 
    getCountriesByCode, 
    getCountriesByName, 
    getCountriesByFullName 
} = require('../controllers/controller');

countryRouter
    .get('/code/:code', getCountriesByCode)
    .get('/name/:name', getCountriesByName)
    .get('/fullName/:fullName', getCountriesByFullName)

module.exports = countryRouter;