import React, { useEffect, useState } from 'react';

import StarWarsContext from './StarWarsContext';
import { getPlanetsAPI } from '../services/starwarsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPlanetsAPI().then((response) => {
      setPlanets(response);
    });
    setLoading(false);
  }, []);

  const data = { planets, loading };

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default Provider;
