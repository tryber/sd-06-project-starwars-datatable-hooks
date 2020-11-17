import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchTermValue, setSearchTermValue] = useState('');

  const getPlanetsList = async () => {
    const planetsList = await planetsAPI();
    setData(planetsList);
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getPlanetsList,
        searchTermValue,
        setSearchTermValue,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarsProvider;
