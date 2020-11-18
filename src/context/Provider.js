import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { fetchPlanets } from '../services/starWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
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
      data.filter(
        (planet) => {
          if (filters.filterByName
            && filters.filterByName.name
            && filters.filterByName.name !== '') {
            return planet.name.toLowerCase().includes(filters.filterByName.name);
          }
          return true;
        },
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
