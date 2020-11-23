import React, { useContext, useState } from 'react';
import StarWarsContext from '../context';

function NumericFilter() {
  const { setFilters } = useContext(StarWarsContext);

  const [columnLocal, setColumnLocal] = useState('');
  const [rangeLocal, setRangeLocal] = useState('');
  const [rangeNumberLocal, setRangeNumberLocal] = useState('');

  const executeFilter = () => {
    const rgbLimit = 255;
    const color = `rgb(${Math.random() * rgbLimit},
      ${Math.random() * rgbLimit}, ${Math.random() * rgbLimit})`;

    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues,
        {
          column: columnLocal,
          range: rangeLocal,
          rangeNumber: rangeNumberLocal,
          color,
        },
      ],
    }));
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnLocal(target.value) }
      >
        <option>Selecione</option>
        <option value="population">population</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setRangeLocal(target.value) }
      >
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="text"
        placeholder="Insira o valor"
        onChange={ ({ target }) => setRangeNumberLocal(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => executeFilter() }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;
