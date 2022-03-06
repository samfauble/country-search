import React, { useState, useEffect } from 'react';
import { Button, TextField, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel }  from '@mui/material';
import Results from './Results';
import Summary from './Summary';
import API from '../api/api';

export default function SearchBar (props) {
    const [submitValue, setSubmitValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [error, setError] = useState(false);
    const [countries, setCountries] = useState([]);

    const onRadioChange = (e) => {
        e.stopPropagation();
        setRadioValue(e.target.value);
    }    
    
    const onInputChange = (e) => {
        e.stopPropagation();
        if(error) {
            setError(false);
        }
        setInputValue(e.target.value)
    }
    
    const onSubmit = async (e) => {
        e.stopPropagation();
        if(!inputValue) {
            setError(true);
        } else {
            setSubmitValue(inputValue);
        }
        
    }

    const returnTextInput = () => {
        if(error && !submitValue) {
           return ( 
            <TextField 
                id="outlined-basic" 
                label="Query" 
                variant="outlined"
                value={inputValue}
                onChange={onInputChange} 
                error
                helperText="Please enter a value into the space provided"
                /> 
            )  
        } else if (error && countries.length === 0) {
            return ( 
                <TextField 
                    id="outlined-basic" 
                    label="Query" 
                    variant="outlined" 
                    value={inputValue}
                    onChange={onInputChange} 
                    error
                    helperText="Query found no matching countries"
                    /> 
                )  
        } else {
            return ( 
                <TextField 
                    id="outlined-basic" 
                    label="Query" 
                    variant="outlined" 
                    value={inputValue}
                    onChange={onInputChange} 
                    /> 
                )  
        }
    }

    useEffect(() => {
        const setCountryState = (list) => {
            setCountries(list);
        }

        (async () => {
            if(radioValue === 'code') {
                await API.getCountriesByCode(submitValue, setCountryState);
            } else if(radioValue === 'name') {
                await API.getCountriesByName(submitValue, setCountryState);
            } else {    
                await API.getCountriesByFullName(submitValue, setCountryState);
            }

            if(countries.length === 0) {
                setError(true);
            }
        })();

    }, [submitValue]);



    return (
        <div>
            <form>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Search By:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="name"
                        name="radio-buttons-group"
                        value={radioValue}
                        onChange={onRadioChange}
                        >
                        <FormControlLabel value="name" control={<Radio />} label="Name" />
                        <FormControlLabel value="fullName" control={<Radio />} label="Full Name" />
                        <FormControlLabel value="code" control={<Radio />} label="Country Code" />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    {returnTextInput}
                </FormControl>
                    
                
                <Button onClick={onSubmit} variant="contained">Submit</Button>
            </form>
            <Results countries={countries}></Results>
            <Summary countries={countries}></Summary>
        </div>
    )
}