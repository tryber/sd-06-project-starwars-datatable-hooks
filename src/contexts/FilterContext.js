import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const filterContext = createContext();

const FilterContextProvider = (props) => {
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const ZERO = 0;
  const [valueFilter, setValueFilter] = useState(ZERO);
  const [filtersState, setFiltersState] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
    activeFilters: false,
  });

  useEffect(() => {
    setFiltersState({
      ...filtersState,
      filters: { filterByName: { name: nameFilter } },
    });
  }, [nameFilter]);

  const filterActions = {
    nameFilter,
    setNameFilter,
    filtersState,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    setFiltersState,
  };
  const { children } = props;
  return (
    <filterContext.Provider value={ { filterActions } }>
      {children}
    </filterContext.Provider>
  );
};

export default FilterContextProvider;

FilterContextProvider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};
