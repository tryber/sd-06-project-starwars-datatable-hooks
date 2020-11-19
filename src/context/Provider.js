import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import starWarsContext from './starWarsContext';
import { getPlanets } from '../services/starWarsApi';

function Provider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [filters, setFilters] = useState({ ...INITIAL_FILTERS });
  // const [allPlanets, setAllPlanets] = useState([]); // Informações dos planetas originais
  const [data, setPlanets] = useState([]); // planetas filtrados

  useEffect(() => {
    async function fetchData() {
      const response = await getPlanets();
      const planets = [...response.results];
      setPlanets(planets);
      // setAllPlanets(planets);
    }
    fetchData();
  }, []);

  // useEffect(assyn () => {
  //   const { name } = filters.filterByName;
  //   let planetsFiltered = allPlanets;
  //   if (name !== '') {
  //     planetsFiltered = planetsFiltered.filter((item) => item.name.includes(name));
  //   }
  //   setPlanets(planetsFiltered);
  //   console.log(data);
  //   console.log(planetsFiltered);
  // }, [filters]);

  const handleChangeName = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  const newFilter = (filter) => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filter] });
  };

  const deleteFilter = (column) => {
    const arrayFiltered = filters.filterByNumericValues
      .filter((item) => item.column !== column);

    setFilters({ ...filters,
      filterByNumericValues: [...arrayFiltered] });
  };

  const contextValue = {
    data,
    filters,
    handleChangeName,
    newFilter,
    deleteFilter,
  };

  return (
    <starWarsContext.Provider value={ contextValue }>
      {children}
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
