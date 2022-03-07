import React, { useState, Fragment } from 'react';
import { Button, TextField, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel }  from '@mui/material';
import API from './api/api';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Summary from './components/Summary';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

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
  return (
    <div className="App">
      <SearchBar 
        setCountries={setCountries} 
        countries={countries}
        error={error}
        setError={setError}
        />
      {returnResults()}
    </div>
  );
}

export default App;
