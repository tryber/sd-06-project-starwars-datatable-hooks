import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../services';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
    setData,
    fetchAPI,
  };
  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default Provider;
