import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dados from '../service/StarWarsApi';
import StarWarsContext from './StarWarsContext';

function StarWarProvider({ children }) {
  const [data, setData] = useState([]);
  const [byValue, setByValue] = useState([]);
  const [searchTerm, setSearchTerm] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  });
  const dataApi = async () => {
    const api = await dados();
    setData(api);
  };

  const value = {
    data,
    dataApi,
    searchTerm,
    setSearchTerm,
    byValue,
    setByValue,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { children}
    </StarWarsContext.Provider>
  );
}

StarWarProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarProvider;
