import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function Provider({ children }) {
  const [state, setState] = useState({
    isFetching: false,
    data: undefined,
    filteredData: undefined,
    planets: [],
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: {
        column: 'rotation_period',
        comparison: 'maior que',
        value: 0,
      },
    },
  });

  const contextValue = { state, setState };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
