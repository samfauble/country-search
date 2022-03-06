const processResponse = () => {

}

const validateData = (country) => {
    Object.keys(country).forEach((attr) => {
        let val = country[attr];

       if(attr === 'languages' && val.length === 0) {
           val.push('No languages available');
       } 

       if(!val) val = `No ${attr} available`;
    });


    return country;
}

const sortCountries = () => {

}

const calculateSummaryData = () => {

}



module.exports = {
    processResponse,
    validateData,
    sortCountries,
    calculateSummaryData
}
