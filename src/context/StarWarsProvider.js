import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchData from '../services/starWarsService';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { 
      name: '',
    },
  });

  const getData = async () => {
    const returnApi = await fetchData();
    setData(returnApi);
  };

  const getFilterName = (nameInput) => {
    setFilters({
      ...filters,
      filterByName: {
        name: nameInput,
      },
    })
  }

  const context = {
    data,
    getData,
    name: filters.filterByName.name,
    getFilterName,
  }

  return (
    <StarWarsContext.Provider value={ { context } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.func.isRequired,
};

export default StarWarsProvider;
