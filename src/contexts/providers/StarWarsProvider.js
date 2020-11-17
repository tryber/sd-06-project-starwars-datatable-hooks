import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../StarWarsContext';
import fetchPlanets from '../../services/fetchPlanets';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableHeaders, setTableHeader] = useState([]);

  useEffect(() => {
    const fetchAndSavePlanets = async () => {
      const data = await fetchPlanets();

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

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default StarWarsProvider;
