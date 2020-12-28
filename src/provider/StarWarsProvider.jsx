import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import APIFetcher from '../services/fetch';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [numericFilter, setNumericFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  async function getAPI() {
    const response = await APIFetcher();
    setPlanets(response);
  }

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        getAPI,
        filters: {
          filterByName: { name: nameFilter },
          filterByNumericValues: [numericFilter],
        },
        setNameFilter,
        setNumericFilter,
      } }
    >
      {children}
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
