import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setFetch] = useState(true);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: 0,
    }],
  });
  const [columns, setColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const contextValue = {
    data,
    setData,
    isFetching,
    setFetch,
    filters,
    setFilter,
    columns,
    setColumn,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
