import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import starWarsAPI from '../API/starWarsAPI';

function Provider({ children }) {
  const [data, setData] = useState(['']);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }] });
  useEffect(() => {
    const requestAPI = async () => {
      const results = await starWarsAPI();
      results.forEach((r) => delete r.residents);
      setData(results);
    };
    requestAPI();
  }, []);
  const contextValue = {
    data,
    filters,
    setFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Provider;
