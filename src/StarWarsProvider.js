import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';
import PlanetsAPI from './services/RequestPlanetsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const requestPlanets = async () => {
    const planetsReturneds = await PlanetsAPI();
    setData(planetsReturneds);
  };

  const contextValue = {
    data,
    setData,
    requestPlanets,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StarWarsProvider;
