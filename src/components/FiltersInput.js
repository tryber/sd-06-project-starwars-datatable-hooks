import React, { useContext, useState } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function FiltersInput() {
  const {
    filters: { filterByName: { name } },
    setFilterByName,
  } = useContext(StarWarsContext).context;

  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonFilter = [
    'maior que',
    'menor que',
    'igual',
  ];

  const ZERO = 0;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(ZERO);

  console.log(column);

  return (
    <form>
      <label htmlFor="filterByName">
        Name:
        <input
          data-testid="name-filter"
          type="text"
          name="filterByName"
          onChange={ (e) => setFilterByName(e.target.value) }
          value={ name }
        />
      </label>

      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        {columnFilter
          .map((selection) => (
            <option value={ selection } key={ selection }>
              { selection }
            </option>
          ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        {comparisonFilter
          .map((selection) => (
            <option value={ selection } key={ selection }>
              { selection }
            </option>
          ))}
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ (e) => setValue(e.target.value) }
        value={ value }
      />

      <button
        type="button"
        // onClick={ () => doSomething(column, comparison, value) }
      >
        Acionar Filtro
      </button>
    </form>
  );
}

export default FiltersInput;
