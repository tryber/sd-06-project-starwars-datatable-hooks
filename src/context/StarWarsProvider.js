import React, { useState } from 'react';
import fetchApiStar from '../services/StarWarsApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const getApiStar = async () => {
    const starWarsOffers = await fetchApiStar();
    setPlanets(starWarsOffers.results);
  };

  return (
    <StarWarsContext.Provider value={ { planets, getApiStar } }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider; //  disponibilizo de forma global
