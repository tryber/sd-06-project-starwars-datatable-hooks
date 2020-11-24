import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';
import fetchPlanets from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'bigger',
          value: '100000',
        },
      ],
    },
  });

  useEffect(() => {
    fetchPlanets().then((res) => {
      setPlanets(res);
    });
  }, []);

  const data = { planets, filter, setFilter };

  return (
    <starWarsContext.Provider
      value={ data }
    >
      { children }
    </starWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default StarWarsProvider;
