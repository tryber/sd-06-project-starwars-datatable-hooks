import React from 'react';
import MyContext from './MyContext';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  return (
    <MyContext.Provider value={ 'teste' }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
