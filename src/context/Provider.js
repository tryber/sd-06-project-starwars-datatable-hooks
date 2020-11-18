import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { fetchPlanets } from '../services/starWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ filterByName: '' });
  const [filteredData, setFilteredData] = useState([]);

  const getPlanets = async () => {
    setIsFetching(true);
    fetchPlanets()
      .then((response) => setData(response.results))
      .catch((response) => setError(response.message))
      .then(() => setIsFetching(false));
  };

  const filterByName = () => {
    setFilteredData(
      data.filter((planet) => {
        if (
          filters.filterByName
          && filters.filterByName.name
          && filters.filterByName.name !== ''
        ) {
          return planet.name.toLowerCase().includes(filters.filterByName.name);
        }
        return true;
      }),
    );
  };

  const buildComparisonExp = (column, comparison, value) => {
    if (comparison === 'maior que') {
      return column > value;
    }
    if (comparison === 'menor que') {
      return column < value;
    }
    return column === value;
  };

  const filterByNumericValues = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    setFilteredData(
      data.filter(
        (planet) => buildComparisonExp(Number(planet[column]), comparison, Number(value)),
      ),
    );
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        error,
        isFetching,
        fetchPlanets: getPlanets,
        setIsFetching,
        filters,
        setFilters,
        filterByName,
        filteredData,
        filterByNumericValues,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
