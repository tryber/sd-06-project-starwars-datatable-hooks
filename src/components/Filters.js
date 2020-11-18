import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valueComparison, setValueComparison] = useState('');

  const handleChangeName = (event) => {
    const { value } = event.target;
    setFilters((prevState) => ({ ...prevState, filterByName: { name: value } }));
  };

  const handleChangeColumn = (event) => {
    const { value } = event.target;
    setColumn(value);
  };

  const handleChangeComparison = (event) => {
    const { value } = event.target;
    setComparison(value);
  };

  const handleChangeValue = (event) => {
    const { value } = event.target;
    setValueComparison(value);
  };

  const handleClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues:
        prevState.filterByNumericValues.concat({ column, comparison, valueComparison }),
    }));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        id="search-name"
        onChange={ handleChangeName }
      />
      <br />
      <select data-testid="column-filter" onChange={ handleChangeColumn }>
        <option>{' '}</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      {' '}
      <select data-testid="comparison-filter" onChange={ handleChangeComparison }>
        <option>{' '}</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      {' '}
      <input type="number" data-testid="value-filter" onChange={ handleChangeValue } />
      {' '}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      {filters.filterByNumericValues.map((filter) => (
        <p key={ filter.column }>
          { filter.column }
          {' '}
          { filter.comparison }
          {' '}
          { filter.valueComparison }
        </p>
      ))}
    </div>
  );
}

export default Filters;
