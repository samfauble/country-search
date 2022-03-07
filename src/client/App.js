import React, { useState, Fragment } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Summary from './components/Summary';
import './App.css';

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
      <h1>Country Search</h1>
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
