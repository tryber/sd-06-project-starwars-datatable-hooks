import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { fetchPlanetsAPI } from '../service/StarWarsService';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState('');
  const [filterNumericValues, setFilterNumericValues] = useState([]);

  const getPlanets = async () => {
    const data = await fetchPlanetsAPI();
    setPlanets(data);
  };

  // useEffect, com o segundo param [], funciona como componentDidMount
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={
        {
          planets,
          filterPlanet,
          setFilterPlanet,
          filterNumericValues,
          setFilterNumericValues }
      }
    >
      {children}
    </StarWarsContext.Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
