import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { data, dataShowed, setDataShowed } = useContext(StarWarsContext);
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');
  const [filtersSaved, setFiltersSaved] = useState([]);

  const handleChangeName = ({ target }) => {
    setNameFilter(target.value);
  };

  const handleChangeColumn = ({ target }) => {
    setColumnFilter(target.value);
  };

  const handleChangeComparison = ({ target }) => {
    setComparisonFilter(target.value);
  };

  const handleChangeValue = ({ target }) => {
    setValueFilter(target.value);
  };

  useEffect(() => {
    const dataToBeShowed = [...data].filter((planet) => planet.name.includes(nameFilter));
    setDataShowed(dataToBeShowed);
  }, [nameFilter]);

  const applyFilters = (inputedFilter) => {
    if (inputedFilter.comparison === 'igual a') {
      const dataToBeShowed = [...dataShowed]
        .filter((planet) => (
          parseFloat(planet[inputedFilter.column]) === parseFloat(inputedFilter.value)
        ));
      setDataShowed(dataToBeShowed);
    }
    if (inputedFilter.comparison === 'maior que') {
      const dataToBeShowed = [...dataShowed]
        .filter((planet) => (
          parseFloat(planet[inputedFilter.column]) > parseFloat(inputedFilter.value)
        ));
      setDataShowed(dataToBeShowed);
    }
    if (inputedFilter.comparison === 'menor que') {
      const dataToBeShowed = [...dataShowed]
        .filter((planet) => (
          parseFloat(planet[inputedFilter.column]) < parseFloat(inputedFilter.value)
        ));
      setDataShowed(dataToBeShowed);
    }
  };

  const saveFilters = (e) => {
    e.preventDefault();
    const inputedFilters = {};
    inputedFilters.column = columnFilter;
    inputedFilters.comparison = comparisonFilter;
    inputedFilters.value = valueFilter;
    setFiltersSaved(filtersSaved.concat(inputedFilters));
    applyFilters(inputedFilters);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          value={ nameFilter }
          name="name"
          onChange={ handleChangeName }
        />
        <select
          data-testid="column-filter"
          name="columns"
          value={ columnFilter }
          onChange={ handleChangeColumn }
          required
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparisonFilter }
          onChange={ handleChangeComparison }
          required
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ valueFilter }
          name="value"
          onChange={ handleChangeValue }
          required
        />
        <button
          type="submit"
          onClick={ saveFilters }
          data-testid="button-filter"
        >
          Adicionar filtros
        </button>
      </form>
      {filtersSaved.map((filter) => (
        <div key={ filtersSaved.length }>
          <p>
            { filter.column }
            {' '}
            { filter.comparison}
            {' '}
            {filter.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Form;
