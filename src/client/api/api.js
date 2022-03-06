export default class API {
    static port = 4000;
    static baseURL = `http://localhost:${API.port}`

    static async getCountriesByCode (query, setCountries) {
        const url = `${API.baseURL}/code/${query}`;
        const options = {
            method: 'GET'
        };

        let results;
        try {
            let response = await fetch(url, options);
            results = await JSON.parse(response);
        } catch (e) {
            console.error(e);
        }

        return results;
    }

    static async getCountriesByName (query, setCountries) {
        const url = `${API.baseURL}/name/${query}`;
        const options = {
            method: 'GET'
        };

        let results;
        try {
            let response = await fetch(url, options);
            results = await JSON.parse(response);
        } catch (e) {
            console.error(e);
        }

        return results;
    }

    static async getCountriesByFullName (query, setCountries) {
        const url = `${API.baseURL}/fullName/${query}`;
        const options = {
            method: 'GET'
        };

        let results;
        try {
            let response = await fetch(url, options);
            results = await JSON.parse(response);
        } catch (e) {
            console.error(e);
        }

        return results;
    }
}