import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchFilters() {
  const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];
  const comparisons = ['maior que', 'menor que', 'igual a'];

  const { handleClick } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparasion] = useState('maior que');
  const [value, setValue] = useState('0');
  const filtered = { column, comparison, value };

  return (
    <section>
      <label
        htmlFor="columnFilter"
      >
        Colunas
        <select
          data-testid="column-filter"
          id="columnFilter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          { columns.map((col) => (
            <option key={ col } value={ col }>{ col }</option>)) }
        </select>
      </label>
      <br />
      <label
        htmlFor="comparisonFilter"
      >
        Comparação
        <select
          data-testid="comparison-filter"
          id="comparisonFilter"
          value={ comparison }
          onChange={ (e) => setComparasion(e.target.value) }
        >
          { comparisons.map((compar) => (
            <option key={ compar } value={ compar }>{ compar }</option>)) }
        </select>
      </label>
      <br />
      <label
        htmlFor="valueFilter"
      >
        Diâmetro
        <input
          type="number"
          id="valueFilter"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <br />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(filtered) }
      >
        Filtrar
      </button>
      <br />
      <br />
    </section>
  );
}

export default SearchFilters;
