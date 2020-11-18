import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetchData';
import StarWarsContext from './StarWarsContext';
import InputNumber from '../components/InputNumbers';

function Provider({ children }) {
  const [dataAPI, setData] = useState([]);
  const [nameInput, setName] = useState({ filters: { filterByName: { name: '' } } });
  const [btnStatus, setBtnStatus] = useState(false);
  const [numInput, setNumbers] = useState({ 
    filters: {
      filterByNumber: {
        option: 'population',
        compare: '>',
        number: '',
      },
    },
  });

  const getData = async () => {
    const resuts = await fetchAPI();
    setData(resuts);
  };

  const handleName = (name) => {
    setName({ filters: { filterByName: { name } } });
  };

  const handleInputNumbers = (opt, comp, num) => {
    setNumbers({
      filters: {
        filterByNumber: {
          option: opt,
          compare: comp,
          number: num,
        },
      }
    });
  }

  const value = {
    dataAPI,
    getData,
    nameInput,
    handleName,
    numInput,
    handleInputNumbers,
    btnStatus,
    setBtnStatus,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
