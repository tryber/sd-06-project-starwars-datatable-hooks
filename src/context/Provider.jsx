import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetchData';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [dataAPI, setData] = useState([]);

  const getData = async () => {
    const resuts = await fetchAPI();
    setData(resuts);
  };

  return (
    <StarWarsContext.Provider value={ { dataAPI, getData } }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
