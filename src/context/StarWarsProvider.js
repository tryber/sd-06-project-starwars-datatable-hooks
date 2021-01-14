import React, { useState } from 'react';
import PropTypes from 'prop-types';
import API from '../service/API';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [byValue, setByValue] = useState([]);
  const [search, setSearch] = useState(
    {
      filters:
      {
        filterByName:
        {
          name: '',
        },
        filterByNumericValues: [],
        order: {
          column: 'name',
          sort: 'ASC',
        },
      },
    },
  );

  const dataApi = async () => {
    const dataResponse = await API();
    setData(dataResponse);
  };

  const value = {
    data,
    dataApi,
    search,
    setSearch,
    byValue,
    setByValue,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;
