import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planetData, setPlanetData] = useState([]);
  return (
    <StarWarsContext.Provider value={ { planetData, setPlanetData } }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = { children: PropTypes.node }.isRequired;
