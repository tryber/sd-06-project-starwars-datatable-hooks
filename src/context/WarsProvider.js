import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import WarsApi from '../service/API';

export default function WarsProvider({ children }) {
  const [data, setdata] = useState([]);
  const [searchName, setsearchName] = useState('');
  //  const [filter, setfilter] = useState({
  //  filterByName: { name: '' },
  //  filterByNumericValues: [],
  //  });

  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  const getApi = async () => {
    const fetchApi = await WarsApi();
    setdata(fetchApi);
  };
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
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

WarsProvider.propTypes = {
  children: propTypes.objectOf(propTypes.string).isRequired,
};
