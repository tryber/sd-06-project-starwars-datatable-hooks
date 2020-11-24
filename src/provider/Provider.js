import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

import fetchAPI from '../services/StarWarsAPI';

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
    const responseAPI = await fetchAPI();
    setData(responseAPI);
  };

  const contextValue = {
    data,
    getData,
    dataFilter,
    setDataFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
