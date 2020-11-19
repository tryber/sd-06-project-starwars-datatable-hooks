import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../service/API';

function StarWarProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    {
      filters:
        {
          filterByName:
            {
              name: '',
            },
        },
    },
  );

  const [filteredByNumber, setFilterByNumber] = useState([]);

  const getPlanets = async () => {
    const allPlanets = await fetchAPI();
    setPlanets(allPlanets);
  };

  const value = {
    planets,
    getPlanets,
    searchTerm,
    setSearchTerm,
    filteredByNumber,
    setFilterByNumber,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarProvider;
