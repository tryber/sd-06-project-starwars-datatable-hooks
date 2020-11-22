import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export const Provider = ({ children }) => {
  const [filterPlanetByName, setFilterPlanetByName] = useState({ name: '' });
  const [planetsData, setPlanetsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByNumber, setFilterByNumber] = useState([{ column: 'rotation_period',
    comparison: 'maior que',
    value: 1 }]);
  const [valueNumber, setValueNumber] = useState({ column: 'rotation_period',
    comparison: 'maior que',
    value: 1,
  });
  const [valueNum, setValueNum] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('empty');
  const [value, setValue] = useState('');
  const [compare, setCompare] = useState('');

  const data = {
    setFilterPlanetByName,
    filterPlanetByName,
    setPlanetsData,
    planetsData,
    setLoading,
    loading,
    setFilterByNumber,
    filterByNumber,
    setValueNumber,
    valueNumber,
    setValueNum,
    valueNum,
    setColumn,
    column,
    setCompare,
    compare,
    setValue,
    value,
    setComparison,
    comparison,
  };

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
