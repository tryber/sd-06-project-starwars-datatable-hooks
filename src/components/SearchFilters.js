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
    <form>
      <div className="form-group custom-control-inline">
        <label
          htmlFor="columnFilter"
        >
          Filtro por Colunas
          <select
            data-testid="column-filter"
            id="columnFilter"
            value={ column }
            onChange={ (e) => setColumn(e.target.value) }
            className="form-control"
          >
            { columns.map((col) => (
              <option key={ col } value={ col }>{ col }</option>)) }
          </select>
        </label>
      </div>
      <div className="form-group custom-control-inline">
        <label
          htmlFor="comparisonFilter"
        >
          Filtro por Comparação
          <select
            data-testid="comparison-filter"
            id="comparisonFilter"
            value={ comparison }
            onChange={ (e) => setComparasion(e.target.value) }
            className="form-control"
          >
            { comparisons.map((compar) => (
              <option key={ compar } value={ compar }>{ compar }</option>)) }
          </select>
        </label>
      </div>
      <div className="form-group custom-control-inline">
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
            className="form-control"
          />
        </label>
      </div>
      <div className="form-group">
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick(filtered) }
          className="btn btn-primary"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default SearchFilters;
