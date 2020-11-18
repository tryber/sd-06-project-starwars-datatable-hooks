import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { setFilterByName, setFilterByNumericValues } = useContext(StarWarsContext);
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparison = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  const handleClickFilter = () => {
    const column = document.querySelector('#column-filter');
    const columnSelected = column.options[column.selectedIndex].value;
    const comparisonFilter = document.querySelector('#comparison-filter');
    const comparisonSelected = comparisonFilter
      .options[comparisonFilter.selectedIndex].value;
    const valueFilter = document.querySelector('#value-filter').value;

    setFilterByNumericValues({
      column: columnSelected,
      comparison: comparisonSelected,
      value: valueFilter,
    });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Filtro por nome:
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
          id="name-filter"
        />
      </label>
      <br />
      <select data-testid="column-filter" id="column-filter">
        {columns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <select data-testid="comparison-filter" id="comparison-filter">
        {comparison.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <input type="number" data-testid="value-filter" id="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default Header;
