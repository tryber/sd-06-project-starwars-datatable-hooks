import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanet from '../services/planetServices';

import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterByNumbers, setFilterByNumbers] = useState([]); // aqui vão ficar os dados para comparação
  // recebidos via input, serão comparados e o resultado renderizado na tabela

  const getPlanets = async () => {
    const allPlanets = await fetchPlanet();
    setData(allPlanets);
  };

  const contextValues = {
    data,
    searchText,
    setSearchText,
    filterByNumbers,
    setFilterByNumbers,
  };

  return (
    <StarWarsContext.Provider value={ { ...contextValues, getPlanets } }>
      {children}
    </StarWarsContext.Provider>
  );
}

// como visto no PR da colega Isabela Rosa <3:
StarWarsProvider.propTypes = { children: PropTypes.arrayOf().isRequired };

export default StarWarsProvider;
