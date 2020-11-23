import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanetsAPI from '../services/StarWarsService';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  // Objeto para iniciar filters
  const FILTER_OBJECT = {
    filterByName: { name: '' },
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filters, setFilters] = useState(FILTER_OBJECT);

  // busca planetas, atualiza array data e isFetching
  const getPlanetList = async () => {
    setIsFetching(true);
    const planetsAvailable = await fetchPlanetsAPI();
    setData(planetsAvailable);
    setIsFetching(false);
  };
  // função chamada em FiltersInput para filtrar por nome
  const currentDataByName = () => {
    setFilteredData(
      data.filter((planet) => {
        if (
          filters.filterByName.name !== ''
        ) {
          return planet.name.toLowerCase().includes(filters.filterByName.name);
        }
        return true;
      }),
    );
  };

  // As próximas duas funções são utilizadas para filtrar
  // pelos numéricos.

  // 1-) função retorna true ou false de acordo com
  // os resultados dos testes realizados.
  const filterCondition = (column, comparison, value) => {
    if (comparison === 'maior que') {
      return column > value;
    }
    if (comparison === 'menor que') {
      return column < value;
    }
    return column === value;
  };
  // 2-) função invocada no FiltersInput para atualizar
  // o array filteredData.
  // planet[column] retorna o value da [key] que estiver
  // no estado na posição 0 do array.
  const currentDataByNumeric = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    setFilteredData(
      data.filter(
        (planet) => filterCondition(Number(planet[column]), comparison, Number(value)),
      ),
    );
  };

  const context = {
    data,
    getPlanetList,
    filters,
    setFilters,
    filteredData,
    currentDataByName,
    currentDataByNumeric,
    isFetching,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
