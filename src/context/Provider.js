import React from 'react';
import MyContext from './MyContext';
import PropTypes from 'prop-types';
import usePlanets from './usePlanets';

const Provider = ({ children }) => {
  const data = usePlanets();

  if (isFetching) {
    return (<div>loading...</div>);
  }
  return (
    <MyContext.Provider value={ data }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
