import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import WarsApi from '../service/API';

export default function WarsProvider({ children }) {
  const [star, setstar] = useState([]);
  const [searchName, setsearchName] = useState('');

  const getApi = async () => {
    const fetchApi = await WarsApi();
    setstar(fetchApi);
  };

  return (
    <StarWarsContext.Provider value={ { star, getApi, searchName, setsearchName } }>
      { children }
    </StarWarsContext.Provider>
  );
}

WarsProvider.propTypes = {
  children: propTypes.objectOf(propTypes.string).isRequired,
};
