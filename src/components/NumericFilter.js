import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const { selectColumn, setSelectColumn } = useContext(StarWarsContext);
  const { selectComparison, setSelectComparison } = useContext(StarWarsContext);
  const { valueForFilter, setValueForFilter } = useContext(StarWarsContext);

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

  return (
    <form>
      <select
        data-testid="column-filter"
        id="column"
        name="column"
        placeholder="Escolha coluna"
        value={ selectColumn }
        onChange={ (ev) => setSelectColumn(ev.target.value) }
      >
        {columnFilter
          .map((column) => (
            <option value={ column } key={ column }>
              { column }
            </option>
          ))}
      </select>

      <select
        data-testid="comparison-filter"
        id="comparison"
        name="comparison"
        value={ selectComparison }
        onChange={ (ev) => setSelectComparison(ev.target.value) }
      >
        {comparisonFilter
          .map((comparison) => (
            <option value={ comparison } key={ comparison }>
              { comparison }
            </option>
          ))}
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="value"
        id="value"
        onChange={ (ev) => setValueForFilter(ev.target.value) }
        value={ valueForFilter }
      />
      <button
        type="button"
        // onChange={ (ev) => setValueForFilter(ev.target.value) }
      >
        Acionar Filtro
      </button>
    </form>
  );
}

export default NumericFilter;
