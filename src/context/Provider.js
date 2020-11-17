import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetList from '../services/planetListAPI';

function Provider({ children }) {
  const [currentPlanets, setCurrentPlanets] = useState([]);
  const [tableHeaders, setTableHeader] = useState([]);
  const [fetchedPlanets, setFetchedPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const fetchAndSavePlanets = async () => {
      const data = await getPlanetList();

      setFetchedPlanets(data.results);
      setTableHeader(Object.keys(data.results[0])
        .filter((header) => header !== 'residents'));
    };
    fetchAndSavePlanets();
  }, []);

  useEffect(() => {
    const regex = new RegExp(nameFilter, 'i');
    const filteredPlanets = fetchedPlanets.filter((planet) => regex.test(planet.name));
    setCurrentPlanets(filteredPlanets);
  }, [fetchedPlanets, nameFilter]);

  const context = {
    currentPlanets,
    tableHeaders,
    setNameFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Provider;
