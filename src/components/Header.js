import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

const Header = () => {
  const activeFiltersTable = (
    filterByNumericValues, avaliableFilters, rmFilterByNumeric,
  ) => (
    <ul className="list-group">
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <li className="list-group-item" key={ column } data-testid="filter">
          {`${column} ${comparison} ${value}`}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              const newActiveFilters = filterByNumericValues;
              newActiveFilters.splice(index, 1);
              const newAvaliableFilters = avaliableFilters.columnFilters;
              newAvaliableFilters[
                newAvaliableFilters.findIndex((filter) => filter.name === column)
              ].avaliable = true;
              rmFilterByNumeric(newActiveFilters, newAvaliableFilters);
            } }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );

  const {
    setFilterByName,
    setFilterByNumericValue,
    rmFilterByNumeric,
    searchControl,
    filterByNumericValues,
  } = useContext(SWContext);

  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const comparasionArray = ['maior que', 'menor que', 'igual a'];

  const handleClick = () => {
    const columnSelect = document.getElementById('column-filter').value;
    const comparisonSelect = document.getElementById('comparison-filter').value;
    const numberFilter = document.getElementById('value-filter').value;
    const filtering = {
      column: columnSelect,
      comparison: comparisonSelect,
      value: numberFilter,
    };
    setFilterByNumericValue(filtering);
  };

  return (
    <div>
      <label htmlFor="filter">
        Buscar:
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={ (e) => setFilterByName(e.target.value) }
        />
      </label>
      <br />
      <label htmlFor="column-filter">
        Filtro Tipo:
        {' '}
        <select data-testid="column-filter" id="column-filter">
          <option hidden value="">Selecione</option>
          {options.map((optionElement) => (
            <option key={ optionElement } value={ optionElement }>
              {optionElement}
            </option>
          ))}
        </select>
      </label>
      {' '}
      <label htmlFor="comparison-filter">
        Comparação:
        {' '}
        <select data-testid="comparison-filter" id="comparison-filter">
          <option hidden value="">Selecione</option>
          {comparasionArray.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      {' '}
      <label htmlFor="value-filter">
        Número:
        <input type="number" data-testid="value-filter" id="value-filter" />
      </label>
      {' '}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Criar Filtro
      </button>
      {activeFiltersTable(filterByNumericValues, searchControl, rmFilterByNumeric)}
    </div>
  );
};

export default Header;
