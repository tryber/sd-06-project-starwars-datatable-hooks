import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsPlanet from '../services/fetchStarWarsPlanet';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const getStarWarsPlanet = async () => {
    const starWarsPlanet = await fetchStarWarsPlanet();
    setPlanets(starWarsPlanet);
  };

  const context = {
    planets,
    getStarWarsPlanet,
    filterByName,
    setFilterByName,
    filterByNumericValue,
    setFilterByNumericValue,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
