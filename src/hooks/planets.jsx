import
React,
{ createContext,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import fetchPlanets from '../services/api';

const planetContext = createContext();

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlanets().then((data) => {
      setPlanets(data);
      setPlanetsData(data);
      setLoading(false);
    });
  }, []);

  const filterPlanets = useCallback((nameLike) => {
    const filteredPlanets = planetsData.filter((planet) => {
      const nameRegex = new RegExp(nameLike, 'i');
      const planetMatches = nameRegex.test(planet.name);

      return planetMatches;
    });

    setPlanets(filteredPlanets);
  }, [planetsData]);

  const planetInfo = useMemo(() => {
    const examplePlanet = planetsData[0];
    let headers;

    if (examplePlanet) {
      headers = (
        Object
          .keys(examplePlanet)
          .filter((header) => header !== 'residents')
      );
    }

    return headers;
  }, [planetsData]);

  return (
    <planetContext.Provider value={ { planets, filterPlanets, loading, planetInfo } }>
      {children}
    </planetContext.Provider>
  );
}

function usePlanets() {
  const context = useContext(planetContext);

  if (!context) {
    throw new Error('You must use this hook within its provider');
  }

  return context;
}

export { PlanetProvider, usePlanets };
