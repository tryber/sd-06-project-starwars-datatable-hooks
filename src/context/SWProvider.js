import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/SWService';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const NAME_OBJECT = {
    filterByName: { name: '' },
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(NAME_OBJECT);
  const [isFetching, setIsFetching] = useState(false);

  // Atualiza array data e isFetching
  const getPlanetList = async () => {
    setIsFetching(true);
    const planetsAvailable = await fetchPlanets();
    setData(planetsAvailable);
    setIsFetching(false);
  };

  // REQ 2 - useeffect do 3(compUpdate)
  const dataByName = () => {
    setFilteredData(
      data.filter((planet) => {
        if (filters.filterByName.name !== '') {
          return planet.name.toLowerCase().includes(filters.filterByName.name);
        }
        return true;
      }),
    );
  };

  // REQ 3
  const filterComparison = (column, comparison, value) => {
    if (comparison === 'maior que') {
      return column > value;
    }
    if (comparison === 'menor que') {
      return column < value;
    }
    return column === value;
  };

  // REQ 3-useEffect do 3(compUpdate)-estado global(filterInput tem um local - que é outro diferente do Seach) coluna definida no filtro population(ex: orbital)
  const dataByNumeric = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    setFilteredData(
      // o q voltar true de filterComparison
      data.filter(
        (planet) => filterComparison(Number(planet[column]), comparison, Number(value)),
      ),
    );
  };

  const context = {
    data,
    getPlanetList,
    filters,
    setFilters,
    filteredData,
    dataByName,
    dataByNumeric,
    isFetching,
  };

  return (
    <SWContext.Provider value={ context }>
      {children}
    </SWContext.Provider>
  );
}

export default SWProvider;

SWProvider.propTypes = { children: PropTypes.node }.isRequired;
