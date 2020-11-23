import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [name, setFilterName] = useState({ filters: { filterByName: { name: '' } } });

  const contextPlanets = {
    name,
    setFilterName,
  };

  return (
    <StarWarsContext.Provider value={ contextPlanets }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
