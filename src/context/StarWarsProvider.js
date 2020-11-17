import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchData from '../services/starWarsService';

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
  children: propTypes.func.isRequired,
};

export default StarWarsProvider;
