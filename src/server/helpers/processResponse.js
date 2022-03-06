/**
 * Verifies that all data has a value
 * Fills in missing data
 * @param {Object} country 
 * @returns 
 */
const validateData = (country) => {
    Object.keys(country).forEach((attr) => {
       if(attr === 'languages' && country[attr].length === 0) {
        country[attr].push('No languages available');
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
    res.sort((a, b) => {return b.code - a.code});
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



module.exports = {
    validateData,
    sortCountries,
    calculateSummaryData
}
