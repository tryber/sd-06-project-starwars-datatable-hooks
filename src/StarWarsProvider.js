import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';
import PlanetsAPI from './services/RequestPlanetsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const requestPlanets = async () => {
    const planetsReturneds = await PlanetsAPI();
    setData(planetsReturneds);
  };

  const filtersProvider = {
    filters: {
      filterByName: {
        name,
      },
    },
  };

  const contextValue = {
    data,
    setData,
    requestPlanets,
    filtersProvider,
    setName,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.arrayOf().isRequired };

export default StarWarsProvider;
