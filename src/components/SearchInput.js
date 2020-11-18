import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const {
    filters: { filterByName: { name } },
    setFilterByName,
    setFilterNumericOptions,
  } = useContext(StarWarsContext).context;
  const numericOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const [column, setColumnFilter] = useState("population");
  const [comparison, setComparisionFilter] = useState("greater-than");
  const [value, setValueFilter] = useState(0);

  return (
    <section className="filters">
      FILTERS:
      <label htmlFor="name-filter">Name:</label>
      <input
        data-testid="name-filter"
        type="text"
        name="name-filter"
        onChange={ (ev) => setFilterByName(ev.target.value) }
        value={ name }
      />
      <label htmlFor="column-filter">Numeric Values:</label>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (ev) => setColumnFilter(ev.target.value) }
      >
        {numericOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <label htmlFor="value-filter">Valor:</label>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (ev) => setComparisionFilter(ev.target.value) }
      >
        <option value="greater-than">maior que</option>
        <option value="less-than">menor que</option>
        <option value="equal-to">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value-filter"
        value={ value }
        onChange={ (ev) => setValueFilter(ev.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilterNumericOptions(column, comparison, value) }
      >
        Filter
      </button>
    </section>
  );
}

export default SearchInput;
