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

  const getPlanets = async () => {
    const allPlanets = await fetchAPI();
    setPlanets(allPlanets);
  };

  const value = {
    planets,
    getPlanets,
    searchTerm,
    setSearchTerm,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarProvider;
