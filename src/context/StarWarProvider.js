import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarProvider({ children }) {
  return (
    <StarWarsContext.Provider>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarProvider;
