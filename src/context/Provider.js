import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import starWarsContext from './starWarsContext';
import { getPlanets } from '../services/starWarsApi';

function Provider({ children }) {
  const [data, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPlanets();
      setPlanets(response.results);
    }
    fetchData();
  }, []);

  const contextValue = {
    data,
  };

  // const arrayEmpty = 0;

  return (
    <starWarsContext.Provider value={ contextValue }>
      {/* {(data.length > arrayEmpty) && children} */}
      {children}
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
