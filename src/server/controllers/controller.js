import { processResponse } from "../helpers/processResponse";
const baseURL = 'ttps://restcountries.com/v3.1/';

const getCountriesByCode = async (req, res) => {
    const { code } = req.params;
    const url = `${baseURL}alpha/${code}`;
    const options = {
        method: 'GET'
    }
    
    try {
        const results = await fetch(url, options);
        const payload = processResponse(results);
        res.send(payload);
    } catch (e) {
        console.error(e);
    }

}

const getCountriesByName = async (req, res) => {
    const { name } = req.params;
    const url = `${baseURL}name/${name}`;
    const options = {
        method: 'GET'
    }
    
    try {
        const results = await fetch(url, options);
        const payload = processResponse(results);
        res.send(payload);

    } catch (e) {
        console.error(e);
    }

}

const getCountriesByFullName = async (req, res) => {
    const { fullName } = req.params;
    const url = `${baseURL}name/${fullName}?fullName=true`;
    const options = {
        method: 'GET'
    }
    
    try {
        const results = await fetch(url, options);
        const payload = processResponse(results);
        res.send(payload);

    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    getCountriesByCode,
    getCountriesByName,
    getCountriesByFullName
}