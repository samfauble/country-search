import React, { useState, useEffect } from 'react';
import Results from './Results';
import Summary from './Summary';
import API from '../api/api';

export default function SearchBar (props) {
    const [value, setValue] = useState('');
    const [countries, setCountries] = useState([]);

    const onSubmit = async (e) => {
        //setValue
    }

    useEffect(() => {
        const setCountryState = (list) => {
            setCountries(list);
        }

        (async () => {
            if(value === '') {
                await API.getCountriesByCode(value, setCountryState);
            } else if(value === '1') {
                await API.getCountriesByName(value, setCountryState);
            } else {    
                await API.getCountriesByFullName(value, setCountryState);
            }
        })();

    }, [value]);



    return (
        <div>
            <Results countries={countries}></Results>
            <Summary countries={countries}></Summary>
        </div>
    )
}