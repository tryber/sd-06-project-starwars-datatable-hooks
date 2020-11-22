import React, {} from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';

function starWarsProvider({ children }) {

  return (
    <starWarsContext.Provider
      value={ data }
    >
      { children }
    </starWarsContext.Provider>
  );
}

starWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default starWarsProvider;
