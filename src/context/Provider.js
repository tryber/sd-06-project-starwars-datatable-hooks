import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../service/API';

function StarWarProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const allPlanets = await fetchAPI();
    setPlanets(allPlanets);
  };

  return (
    <StarWarsContext.Provider value={ { planets, getPlanets } }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarProvider;
