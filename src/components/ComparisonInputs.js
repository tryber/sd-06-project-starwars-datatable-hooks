import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ComparisonInputs() {
  const comparisonArray = ['maior que', 'menor que', 'igual a'];
  const columnArray = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const [comparison, setComparison] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState('');

  const { filteredByNumber, setFilterByNumber } = useContext(StarWarsContext);

  return (
    <section>
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        {columnArray.map((col, index) => (
          <option
            key={ index }
            value={ col }
          >
            { col }
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        {comparisonArray.map((comp, index) => (
          <option
            key={ index }
            value={ comp }
          >
            { comp }
          </option>))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilterByNumber([...filteredByNumber, { column, comparison, value }]) }
      >
        Filtrar
      </button>
    </section>
  );
}

export default ComparisonInputs;
