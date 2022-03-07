import React, { useState, useEffect, Fragment } from 'react';
import { Button, TextField, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel }  from '@mui/material';
import Results from './Results';
import Summary from './Summary';
import API from '../api/api';

const SearchBar = () => {
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
            setError(false);
            const setCountryState = (list) => {
                setCountries(list);
            }
    
            let res;
            if(radioValue === 'code') {
                res = await API.getCountriesByCode(inputValue, setCountryState, setError);
            } else if(radioValue === 'name') {
                res = await API.getCountriesByName(inputValue, setCountryState, setError);
            } else {    
                res = await API.getCountriesByFullName(inputValue, setCountryState, setError);
            }

            if(!res || res.countries.length === 0) {
                setError(true)
            }
        }   
    }

    const returnResults = () => {
        if(!error && countries.countries?.length > 0) {
            return (
                <Fragment>
                    <Results info={countries}></Results>
                    <Summary info={countries}></Summary>
                </Fragment>    
            )
        }
    }

    const returnTextInput = () => {
        if(error && !inputValue) {
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
                    {returnTextInput()}
                </FormControl>
            </form>
            <Button onClick={onSubmit} variant="contained">Submit</Button>
            {returnResults()}
        </div>
    )
}

export default SearchBar;