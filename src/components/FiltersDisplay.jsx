import React from 'react';
import PropTypes from 'prop-types';
import { FilterContext } from '../contexts/FilterContextProvider';

const filterRemover = (itemToRemove, filterByNumericValues) => (
  filterByNumericValues.filter((filter) => {
    console.log(filterByNumericValues, itemToRemove)
    console.log(filter.column !== itemToRemove, 'jabjab')
    return filter !== itemToRemove
  })
);

const FiltersDisplay = () => (
  <FilterContext.Consumer>
    {({ allFilters: { filters: { filterByNumericValues, filterByName, order } }, setAllFilters }) => (
      filterByNumericValues.map((item) => {
        const { column, value, comparison } = item;
        return (
          <div data-testid="filter">
            { `${column}, ${value}, ${comparison}` }
            <button
              onClick={() => setAllFilters({ filters: { filterByName, filterByNumericValues: filterRemover(item, filterByNumericValues), order } })}
            >
              X
            </button>
          </div>
        )
      })
    )}
  </FilterContext.Consumer>
);

export default FiltersDisplay;