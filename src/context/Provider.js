import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

import fetchPlanets from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const [dataFilter, setDataFilter] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    },
  );

  const getData = async () => {
    const responseAPI = await fetchPlanets();
    setData(responseAPI);
  };

  const contextValue = {
    data,
    getData,
    dataFilter,
    setDataFilter,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
