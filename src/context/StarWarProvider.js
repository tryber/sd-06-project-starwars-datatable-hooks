import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsAPI from '../service/StarWarsAPI';
import StarWarsContext from './StarWarsContext';

function StarWarProvider({ children }) {
  const [data, setData] = useState([]);

  const dataApi = async () => {
    const dataResponse = await StarWarsAPI();
    setData(dataResponse);
  };

  const value = { // Todos children terão acesso ao data/dataApi
    data,
    dataApi,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarProvider;
