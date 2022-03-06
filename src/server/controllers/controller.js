const { processResponse, returnFetch } = require("../helpers/processResponse");
const baseURL = 'https://restcountries.com/v3.1/';

const getCountriesByCode = async (req, res) => {
    const { code } = req.params;
    const fetch = await returnFetch();
    const url = `${baseURL}alpha/${code}`;
    const options = {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
    
    try {
        const results = await fetch(url, options);
        
        if(!results.ok) {
            throw new Error("No countries found");
        }

        const payload = await processResponse(results);
        if(payload.countries.length === 0) {
            res.status(204).send("No Content");
        } else {
            res.status(200).send(payload);
        }

    } catch (e) {
        console.error(e);
        res.status(404).send();
    }

}

const getCountriesByName = async (req, res) => {
    const { name } = req.params;
    const fetch = await returnFetch();
    const url = `${baseURL}name/${name}`;
    const options = {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
    
    try {
        const results = await fetch(url, options);
        
        if(!results.ok) {
            throw new Error("No countries found");
        }

        const payload = await processResponse(results);
        if(payload.countries.length === 0) {
            res.status(204).send("No Content");
        } else {
            res.status(200).send(payload);
        }

    } catch (e) {
        console.error(e);
        res.status(404).send();
    }

}

const getCountriesByFullName = async (req, res) => {
    const { fullName } = req.params;
    const fetch = await returnFetch();
    const url = `${baseURL}name/${fullName}?fullName=true`;
    const options = {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
    
    try {
        const results = await fetch(url, options);
        
        if(!results.ok) {
            throw new Error("No countries found");
        }

        const payload = await processResponse(results);
        if(payload.countries.length === 0) {
            res.status(204).send("No Content");
        } else {
            res.status(200).send(payload);
        }

    } catch (e) {
        console.error(e);
        res.status(404).send();
    }
}

module.exports = {
    getCountriesByCode,
    getCountriesByName,
    getCountriesByFullName
}