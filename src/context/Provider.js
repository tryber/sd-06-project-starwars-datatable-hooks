import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import { fetchPlanets } from '../services/starWarsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const getPlanets = async () => {
    setIsFetching(true);
    fetchPlanets()
      .then((response) => setPlanets(response.results))
      .catch((response) => setError(response.message))
      .then(() => setIsFetching(false));
  };

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
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
