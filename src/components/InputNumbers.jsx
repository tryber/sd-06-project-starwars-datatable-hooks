import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputNumber() {
  const {
    handleInputNumbers,
    numInput
  } = useContext(StarWarsContext);

  const [optValue, setOpt] = useState('population');
  const [compareValue, setCompare] = useState('>');
  const [numberValue, setNumber] = useState('');
  const [filteredOptions, setOptions] = useState([]);

  const disable = true;
  const handleOptions = () => {
    const fOpt = numInput.filters.filterByNumber.option;
    const options = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    if(fOpt !== '') {
      const newOptions = options.filter((item) => {
        if (item !== fOpt) {
          return item;
        };
      });
      setOptions(newOptions);
    } else {
      setOptions(options);
    }
  }

  useEffect(() => {
    handleOptions();
  }, [numInput]);

  return (
    <div>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ (e) => setOpt(e.target.value) }
        >
          <option />
          { filteredOptions.map((opt) => <option key={ opt } value={ opt }>{ opt }</option>) }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ (e) => setCompare(e.target.value) }
        >
          <option />
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
