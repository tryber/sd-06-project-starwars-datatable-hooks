import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import WarsApi from '../service/API';

export default function WarsProvider({ children }) {
  const [star, setstar] = useState([]);

  const getApi = async () => {
    const fetchApi = await WarsApi();
    setstar(fetchApi);
  };

  return (
    <StarWarsContext.Provider value={ { star, getApi } }>
      { children }
    </StarWarsContext.Provider>
  );
}

WarsProvider.propTypes = {
// email: propTypes.string.isRequired,
// currencAPI: propTypes.func.isRequired,
//   currencies: propTypes.objectOf(propTypes.string).isRequired,
  children: propTypes.objectOf(propTypes.string).isRequired,
//  walletState: propTypes.arrayOf(Object).isRequired,
};
