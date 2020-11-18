import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const { results } = await fetch('http://swapi-trybe.herokuapp.com/api/planets')
      .then((response) => response.json());

    setData(results);
    setLoading(false);
  }, []);

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };
