import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../ApiData/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const getResponse = async () => {
    const objData = await fetchApi();
    setData(objData);
  };

  const filters = {
    filters: {
      filterByName: {
        name,
      },
    },
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, name, setName, filters } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarWarsProvider;
