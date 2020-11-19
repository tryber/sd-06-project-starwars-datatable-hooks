import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import WarsApi from '../service/API';

export default function WarsProvider({ children }) {
  const [data, setdata] = useState([]);
  const [searchName, setsearchName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [filterdColumn, setFilteredColumn] = useState();

  const getApi = async () => {
    const fetchApi = await WarsApi();
    setdata(fetchApi);
  };

  function filterByFilter() {
    const filterOne = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    filterByNumericValues.forEach(({ column }) => {
      setFilteredColumn(filterOne.filter((el) => el !== column));
      console.log(filterByNumericValues);
      return filterdColumn;
    });
  }

  const addFilter = (param) => {
    setfilterByNumericValues(filterByNumericValues.concat(param));
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getApi,
        searchName,
        setsearchName,
        filterByNumericValues,
        addFilter,
        filterdColumn,
        filterByFilter,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

WarsProvider.propTypes = {
  children: propTypes.objectOf(propTypes.string).isRequired,
};
