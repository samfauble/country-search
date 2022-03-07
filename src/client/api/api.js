export default class API {
    static port = 4000;
    static baseURL = `http://localhost:${API.port}/country`

    static async getCountriesByCode (query, setCountries, setError) {
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
            setCountries(results);
            return results;
        } catch (e) {
            console.error(e);
            setCountries([]);
            setError(true);
        }
    }

    static async getCountriesByName (query, setCountries, setError) {
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
            await setCountries(results);
            return results;
        } catch (e) {
            console.error(e);
            setCountries([]);
            setError(true);
        }
    }

    static async getCountriesByFullName (query, setCountries, setError) {
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
            setCountries(results);
            return results;
        } catch (e) {
            console.error(e);
            setCountries([]);
            setError(true);
        }
    }
}