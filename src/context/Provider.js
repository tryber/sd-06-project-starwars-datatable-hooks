import React, { useState } from 'react';
import propTypes from 'prop-types';
import fetchPlanets from '../servises/fetchAPI';
import DataContext from './StarWarsContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [column, setColumn] = useState([]);
  const [comparar, setComparar] = useState([]);
  const [value, setValue] = useState([]);
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const inputInfo = e.target.value;
    const dataFilter = data
      .filter((element) => element.name.toUpperCase()
        .includes(inputInfo.toUpperCase()));
    setResult(dataFilter);
    setInputText(inputInfo);
  };

  const InfoPlanets = async () => {
    const infoPlanets = await fetchPlanets();
    setData(infoPlanets);
    setResult(infoPlanets);
  };

  const contextValue = {
    data,
    setData,
    inputText,
    setInputText,
    InfoPlanets,
    handleChange,
    column,
    setColumn,
    comparar,
    setComparar,
    value,
    setValue,
    result,
    setResult,
  };

  return (
    <DataContext.Provider value={ { contextValue } }>
      { children }
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.object).isRequired,
};

export default DataProvider;
