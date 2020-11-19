import React, { useState } from 'react';
import propTypes from 'prop-types';
import FilterContext from './FilterContext';

function FiltersProvider({ children }) {
  const [filterName, setFilterName] = useState('');
  const [filterNumbers, setFilterNumbers] = useState({
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: 0,
    }],
  });

  const filterByNumber = (column, comparison, value) => {
    setFilterNumbers({
      filterByNumericValues: [
        ...filterNumbers.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  const contextValue = {
    filterName,
    setFilterName,
    filterNumbers,
    filterByNumber,
  };

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.object).isRequired,
};

export default FiltersProvider;
