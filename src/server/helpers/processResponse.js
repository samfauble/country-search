const processResponse = async (countries) => {
    let payload;
    try {
        let parsed = await countries.json();
        const sortedResults = sortCountries(parsed);
        const summary = calculateSummaryData(sortedResults);
        payload = {
        countries: sortedResults,
        summary
    };
    } catch (e) {
        console.log(e);
    }
    

    return payload;
}

/**
 * Verifies that all data has a value
 * Fills in missing data
 * @param {Object} country 
 * @returns 
 */
const validateData = (country) => {
    Object.keys(country).forEach((attr) => {
       if(attr === 'languages' && Object.keys(country[attr]).length === 0) {
        country[attr]['none'] = 'No languages available';
       } 

       if(!country[attr]) {
            country[attr] = `No ${attr} available`;
       }
    });

    return country;
}

/**
 * Sorts all countries in descending order by code
 * @param {Array<Object>} countries 
 * @returns 
 */
const sortCountries = (countries) => {
    let res = countries;
    res.sort((a, b) => {return b.name.official.localeCompare(a.name.official)});
    return res;
}

/**
 * Calculates all the data to be used in the summary
 * @param {Array<Object>} countries 
 * @returns 
 */
const calculateSummaryData = (countries) => {
    let summary = {
        regions: {},
        subregions: {},
        total: countries.length
    };

    countries.forEach((country) => {
        let {region, subregion} = country;

        //gets summary for regions
        if(summary.regions[region]) {
            summary.regions[region].push(country.name); 
        } else {
            summary.regions[region] = [country.name]; 
        }

        //gets summary for subregions
        if(summary.subregions[subregion]) {
            summary.subregions[subregion].push(country.name); 
        } else {
            summary.subregions[subregion] = [country.name]; 
        }
    });

    return summary;
}

const returnFetch = async function () {
	return await (await import('node-fetch')).default;
};




module.exports = {
    validateData,
    sortCountries,
    calculateSummaryData,
    processResponse,
    returnFetch
}
