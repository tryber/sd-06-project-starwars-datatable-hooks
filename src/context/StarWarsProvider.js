import React, { useState } from 'react';

import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import { getPlanetList } from '../services/StarWarsAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    getPlanetList().then((json) => {
      setData(json.results);
    });
  };

  const context = { data, setData, fetchAPI };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default StarWarsProvider;
