import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsAPI from '../services/StarWarsAPI';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{}],
  });

  const getPlanets = async () => {
    const planets = await StarWarsAPI();
    setData(planets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const handleFilterByName = (name) => {
    setFilters({ ...filters, filterByName: { name },
    });
  };

  const contextValue = { data, filters, handleFilterByName };

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
