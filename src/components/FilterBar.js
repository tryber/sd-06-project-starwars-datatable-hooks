import React, { useContext, useState } from 'react';
import './FilterBar.css';
import Context from '../context/Context';

function FilterBar() {
  const { dataFilter, setDataFilter } = useContext(Context);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const valueInitialState = 0;
  const [value, setValue] = useState(valueInitialState);

  const handleInputTextChange = ({ target }) => {
    setDataFilter({
      filters: { ...dataFilter.filters, filterByName: { name: target.value } },
    });
  };

  const handleClick = () => {
    setDataFilter({
      filters: {
        ...dataFilter.filters,
        filterByNumericValues: [
          ...dataFilter.filters.filterByNumericValues,
          { column, comparison, value },
        ],
      },
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={ ({ e }) => e.preventDefault() } className="form-group">
        <input
          type="text"
          value={ dataFilter.name }
          onChange={ handleInputTextChange }
          data-testid="name-filter"
          placeholder="Insira o nome do Planeta"
        />
        <div>
          <select
            data-testid="column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option>--Select--</option>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </div>
        <div>
          <select
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>--Select--</option>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            data-testid="value-filter"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </div>
        <div>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleClick }
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterBar;
