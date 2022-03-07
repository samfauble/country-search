import React, { useState } from 'react';
import { Button, TextField, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel }  from '@mui/material';
import API from '../api/api';

const SearchBar = (props) => {
    const {countries, setCountries, error, setError} = props;
    const [inputValue, setInputValue] = useState('');
    const [radioValue, setRadioValue] = useState('');

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

    const returnTextInput = () => {
        if(error && !inputValue) {
           return ( 
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined"
                value={inputValue}
                onChange={onInputChange} 
                className='horizontal-center'
                error
                helperText="Please enter a value into the space provided"
                /> 
            )  
        } else if (error && countries.length === 0) {
            return ( 
                <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    value={inputValue}
                    onChange={onInputChange} 
                    className='horizontal-center'
                    error
                    helperText="Search found no matching countries"
                    /> 
                )  
        } else {
            return ( 
                <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    value={inputValue}
                    className='horizontal-center'
                    onChange={onInputChange} 
                    /> 
                )  
        }
    }

    return (
        <div className='vertical-spacing'>
            <form>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Search By:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="name"
                        name="radio-buttons-group"
                        className='horizontal-spacing'
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
        </div>
    )
}

export default SearchBar;