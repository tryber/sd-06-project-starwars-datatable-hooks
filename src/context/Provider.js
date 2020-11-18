import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import { getPlanetsAPI } from '../services/starwarsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    setLoading(true);
    getPlanetsAPI().then((response) => {
      setPlanets(response);
    });
    setLoading(false);
  }, []);

  const data = { planets, loading, filters, setFilters };

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Provider;
