import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { fetchPlanets } from '../services/starWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const getPlanets = async () => {
    setIsFetching(true);
    fetchPlanets()
      .then((response) => setData(response.results))
      .catch((response) => setError(response.message))
      .then(() => setIsFetching(false));
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        error,
        isFetching,
        fetchPlanets: getPlanets,
        setIsFetching,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
