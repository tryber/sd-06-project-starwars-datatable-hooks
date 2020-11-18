import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './StarWarsContext';
import fetchPlanets from '../services/FetchPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState({default: 'value'});
  const [loading, setLoading] = useState();

  const getPlanets = async () => {
    const planets = await fetchPlanets();
    setData(planets);
  };

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
    getPlanets,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };
