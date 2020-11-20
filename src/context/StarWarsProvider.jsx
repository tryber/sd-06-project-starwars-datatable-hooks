import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanetsApi } from '../services/Api';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const ZERO = 0;
  const [planets, setPlanets] = useState([]);
  const [searchPlanet, setSearchPlanet] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
  });
  const [filterNumber, setFilterNumber] = useState([]);
  const [selectColumn, setSelectColumn] = useState('population');
  const [selectComparison, setSelectComparison] = useState('greater');
  const [inputValue, setInputValue] = useState(ZERO);

  const getPlanets = async () => {
    const response = await fetchPlanetsApi();
    const planetsReceived = response.results;
    setPlanets(planetsReceived);
  };

  const setFilterByName = (searchName) => {
    setFilters({
      ...filters,
      filterByName: { name: searchName },
    });
  };

  const setFilterByNumericValues = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: ({
        column,
        comparison,
        value,
      }),
    });
  };

  const darthVaderContext = {
    planets,
    setPlanets,
    searchPlanet,
    setSearchPlanet,
    getPlanets,
    filters,
    setFilters,
    filterNumber,
    setFilterNumber,
    setFilterByName,
    setFilterByNumericValues,
    selectColumn,
    setSelectColumn,
    selectComparison,
    setSelectComparison,
    inputValue,
    setInputValue,
  };

  return (
    <span>
      <StarWarsContext.Provider
        value={ darthVaderContext }
      >
        {children}
      </StarWarsContext.Provider>
    </span>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default StarWarsProvider;
