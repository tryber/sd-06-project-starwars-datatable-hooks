import React, { useState } from 'react';
import Proptypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterNumber, setFilterNumber] = useState([]);

  const infos = {
    dataApi,
    setDataApi,
    filterName: filterName.filterByName,
    setFilterName,
    filterNumber,
    setFilterNumber,
  };

  return (
    <StarWarsContext.Provider value={ infos }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: Proptypes.arrayOf(Proptypes.element).isRequired,
};

export default StarWarsProvider;
