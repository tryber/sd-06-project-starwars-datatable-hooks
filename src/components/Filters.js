import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  // const { filters, setFilters } = useContext(StarWarsContext);

  const { filters:
    { filterByNumericValues }, setFilters, filters } = useContext(StarWarsContext);
  const handleOnRemoveFilter = (myFilter) => {
    setFilters({ ...filters,
      filterByNumericValues: filterByNumericValues.filter((event) => (
        event !== myFilter)) });
  };

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valueComparison, setValueComparison] = useState('');

  const handleOnChange = (event) => {
    const { value } = event.target;
    setFilters((prevState) => ({ ...prevState, filterByName: { name: value } }));
    // console.log('funcionaOnChange');
  };

  const handleChangeOnColumn = (event) => {
    const { value } = event.target;
    setColumn(value);
  };

  const handleChangeOnComparison = (event) => {
    const { value } = event.target;
    setComparison(value);
  };

  const handleChangeOnValueComparison = (event) => {
    const { value } = event.target;
    setValueComparison(value);
  };

  const handleOnClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues:
        prevState.filterByNumericValues.concat({ column, comparison, valueComparison }),
    }));
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        id="filterByName"
        onChange={ handleOnChange }
      />

      <select data-testid="column-filter" onChange={ handleChangeOnColumn }>
        <option>{' '}</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      {' '}
      <select data-testid="comparison-filter" onChange={ handleChangeOnComparison }>
        <option>{' '}</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      {' '}
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleChangeOnValueComparison }
      />
      {' '}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleOnClick }
      >
        Filtrar
      </button>
      {filters.filterByNumericValues.map((filter) => (
        <p data-testid="filter" key={ filter.column }>
          { filter.column }
          {' '}
          { filter.comparison }
          {' '}
          { filter.valueComparison }
          <button type="button" onClick={ () => handleOnRemoveFilter(filter) }>X</button>
        </p>
      ))}
    </div>
  );
}

export default Filters;
