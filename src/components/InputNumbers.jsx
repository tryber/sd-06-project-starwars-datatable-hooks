import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputNumber() {
  const {
    handleInputNumbers,
  } = useContext(StarWarsContext);

  const [optValue, setOpt] = useState('population');
  const [compareValue, setCompare] = useState('>');
  const [numberValue, setNumber] = useState('');

  const options = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const disable = true;

  return (
    <div>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ (e) => setOpt(e.target.value) }
        >
          { options.map((opt) => <option key={ opt } value={ opt }>{ opt }</option>) }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ (e) => setCompare(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          id="value-filter"
          placeholder="Number Value"
          onChange={ (e) => setNumber(e.target.value) }
          value={ numberValue }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        disabled={ numberValue === '' ? disable : !disable }
        onClick={ () => handleInputNumbers(optValue, compareValue, numberValue) }
      >
        Filter
      </button>
    </div>
  );
}

export default InputNumber;
