import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './StarWarsContext';
import fetchPlanets from '../services/FetchPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [planetKeys, setPlanetKeys] = useState([]); /* extrai as chaves que serão utilizadas p/ renderizar a tabela */
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
      type: 'string',
    },
  });
  const [input, setInput] = useState(''); /* salva as alterações digitadas na busca por nome do planeta */
  const [filteredPlanets, setFilteredPlanets] = useState([]); /* array com os planetas após os filtros de busca por nome e os filtros numéricos */
  const [usedFilters, setUsedFilters] = useState([]);

  const getPlanets = async () => {
    setLoading(true);
    let planets = await fetchPlanets();

    planets = planets.map((planet) => {
      // operador delete p/ remover a chave 'residents', já que ela não será utilizada
      delete planet.residents;
      planet.films = planet.films
        .map((link, index) => (<a key={ index } href={ link }>{'filme '}</a>));

      planet.url = (<a href={ planet.url }>link</a>);
      return planet;
    });

    const usedKeys = Object.keys(planets[0]);
    setData(planets);
    setFilteredPlanets(planets);
    setPlanetKeys(usedKeys);
    setLoading(false);
  };

  const removeFilter = (filterToRemove) => {
    const remainingFilters = filters.filterByNumericValues.filter(
      (numFilter) => numFilter.column !== filterToRemove,
    );
    setFilters({
      ...filters,
      filterByNumericValues: remainingFilters,
    });
  };

  const addFilter = () => {
    const filtersSaved = filters.filterByNumericValues.map((filter) => filter.column);
    setUsedFilters([...filtersSaved]);
  };

  const updateFilteredPlanets = () => {
    const zero = 0;
    const numericFiltersNotEmpty = filters.filterByNumericValues.length > zero;

    if (numericFiltersNotEmpty) {
      filters.filterByNumericValues.forEach((filter) => {
        const updatePlanets = filteredPlanets.filter((planet) => {
          switch (filter.comparasion) {
          case ('maior que'):
            return parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);

          case ('menor que'):
            return parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);

          default:
            return parseInt(planet[filter.column], 10) === parseInt(filter.value, 10);
          }
        });
        setFilteredPlanets(updatePlanets);
      });
    } else setFilteredPlanets(data);
  };

  const sortPlanets = (a, b) => {
    const { column, sort, type } = filters.order;
    const aAfterB = 1;
    const bAfterA = -1;

    if (!a) return 1;
    if (type === 'numeric') {
      if (sort === 'ASC') return ((a[column]) - b[column]);
      return (b[column] - a[column]);
    }
    if (sort === 'ASC') return a[column] > b[column] ? aAfterB : bAfterA;
    return a[column] < b[column] ? aAfterB : bAfterA;
  };

  const contextValue = {
    loading,
    filters,
    setFilters,
    input,
    setInput,
    filteredPlanets,
    setFilteredPlanets,
    addFilter,
    updateFilteredPlanets,
    usedFilters,
    setUsedFilters,
    planetKeys,
    getPlanets,
    removeFilter,
    sortPlanets,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };
