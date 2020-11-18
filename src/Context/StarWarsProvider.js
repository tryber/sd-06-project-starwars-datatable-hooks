import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import PlanetsApi from '../services/apiStarWars';

const StarWarsProvider = ({ children }) => {
  const [stateStarWars, setStarWars] = useState(StarWarsContext);

  const handleApiPlanets = async () => {
    const planets = await PlanetsApi();

    setStarWars({
      ...stateStarWars,
      data: planets,
    });
  };

  const contextStarWars = {
    stateStarWars,
    setStarWars,
    handleApiPlanets,
  };

  return (
    <StarWarsContext.Provider value={ contextStarWars }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
