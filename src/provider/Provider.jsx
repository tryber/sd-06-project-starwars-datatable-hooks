import React, { useState } from 'react';
import Proptypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterNumber, setFilterNumber] = useState([]);
  const [order, setOrder] = useState({});

  const globalContext = {
    dataApi,
    setDataApi,
    filterName: filterName.filterByName,
    setFilterName,
    filterNumber,
    setFilterNumber,
    order,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={ globalContext }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: Proptypes.arrayOf(Proptypes.element).isRequired,
};

export default StarWarsProvider;
