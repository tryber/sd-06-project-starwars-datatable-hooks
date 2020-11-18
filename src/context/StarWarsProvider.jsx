import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanetList from '../services/starWarsService';

function StarWarsProvider({ children }) {
  const [data, setdata] = useState([]);

  const getPlanetList = async () => {
    const planetList = await fetchPlanetList();
    setdata(planetList);
  };

  return (
    <StarWarsContext.Provider value={ { data, getPlanetList } }>
      {children}
    </StarWarsContext.Provider>
  );
}
// thread do Ricardo Roa no slack falando sobre o tipo da props
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
