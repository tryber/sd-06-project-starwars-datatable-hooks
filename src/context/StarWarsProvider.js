import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [nameInput, setNameInput] = useState('');
  const [tablePalnets, setTablePlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  return (
    <StarWarsContext.Provider
      value={ {
        nameInput,
        setNameInput,
        tablePalnets,
        setTablePlanets,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StarWarsProvider;
