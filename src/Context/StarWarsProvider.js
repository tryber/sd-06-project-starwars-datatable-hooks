import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [stateStarWars, setStarWars] = useState(StarWarsContext);

  useEffect(() => {
    setStarWars({
      ...stateStarWars,
      filters:
      {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          {
            column: '',
            comparison: '',
            value: '',
          },
        ],
      },
    });
  }, [stateStarWars.data]);

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
