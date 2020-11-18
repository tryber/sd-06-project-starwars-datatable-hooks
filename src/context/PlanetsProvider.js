import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import apiRequest from '../services';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const getPlanets = async () => {
    const apiReturn = await apiRequest();
    setData(apiReturn);
  };

  function handleChange({ target }) {
    setNameFilter(target.value);
  }

  function handleFilter(filter1, filter2, filter3) {
    setColumn(filter1);
    setComparison(filter2);
    setValue(filter3);
  }

  return (
    <PlanetsContext.Provider
      value={
        { data,
          getPlanets,
          handleChange,
          handleFilter,
          filters: {
            filterByName: { nameFilter },
            filterByNumericValues: [
              {
                column,
                comparison,
                value,
              },
            ],
          } }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PlanetsProvider;
