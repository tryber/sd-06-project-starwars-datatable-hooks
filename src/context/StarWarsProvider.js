import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsPlanet from '../services/fetchStarWarsPlanet';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState('');

  const getStarWarsPlanet = async () => {
    const starWarsPlanet = await fetchStarWarsPlanet();
    setPlanets(starWarsPlanet);
  };

  return (
    <StarWarsContext.Provider value={ { planets, getStarWarsPlanet, search, setSearch } }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
