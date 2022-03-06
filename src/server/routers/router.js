const express = require('express');
const countryRouter = express.Router();

const { 
    getCountriesByCode, 
    getCountriesByName, 
    getCountriesByFullName 
} = require('../controllers/controller');

countryRouter
    .get('/code', getCountriesByCode)
    .get('/name', getCountriesByName)
    .get('/fullName', getCountriesByFullName)

module.exports = countryRouter;