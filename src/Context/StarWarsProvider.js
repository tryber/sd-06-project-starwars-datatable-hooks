import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [stateStarWars, setStarWars] = useState(StarWarsContext);

  const contextStarWars = {
    stateStarWars,
    setStarWars,
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
