import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchFunction from '../services/FetchAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchFunction().then((response) => {
      setPlanets(response);
    });
  }, []);

  const data = { planets };

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
