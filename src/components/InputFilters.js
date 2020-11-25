import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputFilters() {
  const { setFilters } = useContext(StarWarsContext);
  const zero = 0;

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(zero);

  const adcFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues:
        prevFilters.filterByNumericValues.concat({ column, comparison, value }),
    }));
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option>Selecione</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option>Selecione</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ adcFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputFilters;
