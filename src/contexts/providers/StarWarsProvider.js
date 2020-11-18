import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../StarWarsContext';
import fetchPlanets from '../../services/fetchPlanets';

function StarWarsProvider({ children }) {
  const [fetchedPlanets, setFetchedPlanets] = useState([]);
  const [tableHeaders, setTableHeader] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [numericFilters, setNumericFilters] = useState([]);
  const [assortmentType, setAssortmentType] = useState('ascending');
  const [assortmentColumn, setAssortmentColumn] = useState('name');

  useEffect(() => {
    const fetchAndSavePlanets = async () => {
      const data = await fetchPlanets();

      setFetchedPlanets(data.results);
      setTableHeader(Object.keys(data.results[0])
        .filter((header) => header !== 'residents'));
    };
    fetchAndSavePlanets();
  }, []);

  const context = {
    fetchedPlanets,
    tableHeaders,
    setNameFilter,
    setNumericFilters,
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: numericFilters,
    },
    order: {
      column: assortmentColumn,
      sort: assortmentType,
    },
    setAssortmentColumn,
    setAssortmentType,
    assortmentColumn,
    assortmentType,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default StarWarsProvider;
