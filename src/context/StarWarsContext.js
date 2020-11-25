import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();
export const Provider = ({ children }) => {
  const [returnAPI, setReturnAPI] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterNumber, setFilterNumber] = useState([]);

  const context = {
    filterNumber,
    setFilterNumber,
    filterName: filterName.filterByName,
    setFilterName,
    returnAPI,
    setReturnAPI,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarWarsContext;
