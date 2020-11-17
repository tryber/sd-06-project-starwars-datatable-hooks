import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import fetchData from '../services/starWarsService';
import propTypes from 'prop-types';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const returnApi = await fetchData();
    setData(returnApi);
  };

  return (
    <StarWarsContext.Provider value={ { data, getData } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  childen: propTypes.arrayOf.isRequired,
}

export default StarWarsProvider;
