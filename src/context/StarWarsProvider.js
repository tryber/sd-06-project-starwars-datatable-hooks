import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/StarWarsService';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [],
    },
  );

  async function getPlanetsData() {
    const planetsInfo = await fetchPlanets();
    setData(planetsInfo.results);
  }

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getPlanetsData,
        filters,
        setFilters,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsProvider;

// const [forms, setForms] = useState(
//   {
//     filterByNumericValues: [{ column: '', comparison: '', value: '' }],
//   },
// );
