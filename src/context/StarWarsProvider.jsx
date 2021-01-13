import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanetList from '../services/starWarsService';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState({});
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: 0,
    }],
  });

  const filterByNumber = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  const getPlanetList = async () => {
    const planetList = await fetchPlanetList();
    setData(planetList);
  };

  const getSearchName = (search) => {
    setFilters({
      ...filters,
      filterByName: {
        name: search,
      },
    });
  };

  const context = {
    data,
    getPlanetList,
    getSearchName,
    // searchTerm,
    // setSearchTerm,
    filters,
    setFilters,
    filterByNumber,
    name: filters.filterByName.name,
    column: filters.filterByNumericValues[0].column,
    comparison: filters.filterByNumericValues[0].comparison,
    value: filters.filterByNumericValues[0].value,
    sort,
    setSort,
  };

  return (
    <StarWarsContext.Provider value={ { context } }>
      {children}
    </StarWarsContext.Provider>
  );
}
// thread do Ricardo Roa no slack falando sobre o tipo da props
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
