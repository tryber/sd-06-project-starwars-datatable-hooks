import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState({ name: '' });
  const contextValue = {
    data,
    setData,
    header,
    setHeader,
    filterPlanet,
    setFilterPlanet,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
