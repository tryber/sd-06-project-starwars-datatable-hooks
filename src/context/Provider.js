import React, { useState } from 'react';
import propTypes from 'prop-types';
import getAPI from '../services/api';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filters:
      {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          {
            column: '',
            comparison: '',
            value: '1',
          },
        ],
      },
  });

  const getData = async () => {
    const getFetch = await getAPI();
    setData(getFetch);
  };

  const nameFilter = (value) => {
    setFilter({
      ...filters,
      filterByName: { name: value },
    });
  };

  const numericValuesFilter = (values) => {
    setFilter({
      ...filters,
      filterByNumericValues: [...filters.numericValuesFilter, values],
    });
  };

  const contextValue = {
    data,
    setData,
    getData,
    filters,
    setFilter,
    nameFilter,
    numericValuesFilter,
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
