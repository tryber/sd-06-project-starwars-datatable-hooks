import React, { useState } from 'react';
import propTypes from 'prop-types';
import getAPI from '../services/api';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState('');
  const getData = async () => {
    const getFetch = await getAPI();
    setData(getFetch);
  };

  const contextValue = {
    data,
    setData,
    getData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.string.isRequired,
};

export default Provider;
