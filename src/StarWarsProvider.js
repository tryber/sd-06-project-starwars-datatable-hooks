import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';

function StarWarsProvider({ children }) {
  const [stateTest, setStateTest] = useState('oi');

  const contextValue = {
    stateTest,
    setStateTest,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.arrayOf(Component).isRequired };

export default StarWarsProvider;
