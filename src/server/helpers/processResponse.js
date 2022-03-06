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

const sortCountries = (countries) => {
    let res = countries;
    res.sort((a, b) => {return b.code - a.code});
    return res;
}

const calculateSummaryData = (countries) => {
    let summary = {
        regions: {},
        subregions: {},
        total: countries.length
    };

    countries.forEach((country) => {
        let {region, subregion} = country;
        if(summary.regions[region]) {
            summary.regions[region].push(country.name); 
        } else {
            summary.regions[region] = [country.name]; 
        }

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
