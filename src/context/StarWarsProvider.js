import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import fetchPlanetsInfo from '../services/apiFetch';

function StarWarsProvider(props) {
  const [ data, setData ] = useState([]);

  const contextValue = {};
  return (
    <StarWarsContext.Provider value={ contextValue }>
      { props.children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
