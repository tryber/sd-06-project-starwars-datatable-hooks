import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestPlanets from '../services/api';

export default function Provider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
  };
  const [data, setData] = useState([]);
  const [filters, setFilterName] = useState({ ...INITIAL_FILTERS });

  const starWarsPlanets = async () => {
    const planets = await requestPlanets();
    setData(planets);
  };

  useEffect(() => {
    starWarsPlanets();
  }, []);

  const handleInputChange = (name) => {
    setFilterName({ ...filters, filterByName: { name } });
  };

  const contextValue = {
    data,
    starWarsPlanets,
    filters,
    setFilterName,
    handleInputChange,
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
