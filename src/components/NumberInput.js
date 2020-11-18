import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumberInput() {
  const { number, setNumber } = useContext(StarWarsContext);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <select data-testid="column-filter">
        <option value="">population</option>
        <option value="">orbital_period</option>
        <option value="">diameter</option>
        <option value="">rotation_period</option>
        <option value="">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option value="">maior que</option>
        <option value="">menor que</option>
        <option value="">igual a</option>
      </select>
      <input
        type="number"
        name="filter-number"
        value={ number }
        onChange={ () => handleChange }
        data-testid="value-filter"
      />
      <button type="button" data-testid="button-filter">Filtrar</button>
    </div>
  );
}

export default NumberInput;
