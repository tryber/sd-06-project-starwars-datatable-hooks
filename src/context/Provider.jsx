import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetchData';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [dataAPI, setData] = useState([]);
  const [nameInput, setName] = useState({ filters: { filterByName: { name: '' } } });

  const getData = async () => {
    const resuts = await fetchAPI();
    setData(resuts);
  };

  const handleName = (name) => {
    setName({ filters: { filterByName: { name } } });
  };

  const value = {
    dataAPI,
    getData,
    nameInput,
    handleName,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
