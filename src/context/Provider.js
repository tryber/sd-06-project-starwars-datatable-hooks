import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  // const [isFetching] = useState(false);

  const fetchPlanets = async () => {
    const planets = await StarWarsAPI();
    setData(planets.results);
    console.log(planets.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = { data, fetchPlanets };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
