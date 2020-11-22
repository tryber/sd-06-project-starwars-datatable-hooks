import React from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';

function starWarsProvider({ children }) {

  return (
    <starWarsContext.Provider>
      { children }
    </starWarsContext.Provider>
  );
}

starWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
}

export default starWarsProvider;
