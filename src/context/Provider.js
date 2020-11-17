import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestPlanets from '../services/api';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setDataisFetching] = useState(false);

  const starWarsPlanets = async () => {
    const planets = await requestPlanets();
    setData(planets);
  };

  useEffect(() => {
    starWarsPlanets();
  }, []);

  const contextValue = {
    data,
    starWarsPlanets,
    isFetching,
    setDataisFetching,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
