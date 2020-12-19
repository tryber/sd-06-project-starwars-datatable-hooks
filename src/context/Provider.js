import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import SWAPIFetch from '../services/SWAPIFetch';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  });
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [availableColumns, setAvailableColumns] = useState([...columns]);

  const getData = async () => {
    const { results } = await SWAPIFetch('planets/');
    setData(results);
    setIsFetching(false);
  };
  const contextData = {
    data,
    setData,
    isFetching,
    filters,
    setFilters,
    getData,
    availableColumns,
    setAvailableColumns,
  };
  return (
    <StarWarsContext.Provider value={ contextData }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
