import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setFetch] = useState(true);
  const [filters, setFilter] = useState({ filterByName: { name: '' } });

  const contextValue = {
    data,
    setData,
    isFetching,
    setFetch,
    filters,
    setFilter,
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
