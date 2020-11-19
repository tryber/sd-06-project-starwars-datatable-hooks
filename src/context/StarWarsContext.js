import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();
export const Provider = ({ children }) => {
  const [returnAPI, setReturnAPI] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterNumber, setFilterNumber] = useState([]);

  const contexto = {
    returnAPI,
    setReturnAPI,
    filterName: filterName.filterByName,
    setFilterName,
    filterNumber,
    setFilterNumber,
  };

  return (
    <StarWarsContext.Provider value={ contexto }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsContext;

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
