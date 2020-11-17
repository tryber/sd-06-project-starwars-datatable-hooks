import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetList from '../services/planetListAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableHeaders, setTableHeader] = useState([]);

  useEffect(() => {
    const fetchAndSavePlanets = async () => {
      const data = await getPlanetList();

      setPlanets(data.results);
      setTableHeader(Object.keys(data.results[0])
        .filter((header) => header !== 'residents'));
    };
    fetchAndSavePlanets();
  }, []);

  const context = {
    planets,
    tableHeaders,
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
