export default class API {
    static port = 4000;
    static baseURL = `http://localhost:${API.port}/country`

    static async getCountriesByCode (query, setCountries) {
        const url = `${API.baseURL}/code/${query}`;
        const options = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        };

        let results;
        try {
            let response = await fetch(url, options);
            results = await response.json();
        } catch (e) {
            console.error(e);
        }

        setCountries(results);
    }

    static async getCountriesByName (query, setCountries) {
        const url = `${API.baseURL}/name/${query}`;
        const options = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        };

        let results;
        try {
            let response = await fetch(url, options);
            results = await response.json();
        } catch (e) {
            console.error(e);
        }

        setCountries(results);
    }

    static async getCountriesByFullName (query, setCountries) {
        const url = `${API.baseURL}/fullName/${query}`;
        const options = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        };

        let results;
        try {
            let response = await fetch(url, options);
            results = await response.json();
        } catch (e) {
            console.error(e);
        }

        setCountries(results);
    }
}