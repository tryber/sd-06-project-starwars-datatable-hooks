import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputText() {
  const { inputName, setFilterByName,
    setFilterByNumericValues } = useContext(StarWarsContext);

  const MAGIC_NUMBER = 0;

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(MAGIC_NUMBER);

  const dropdown = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const options = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <label
        htmlFor="User"
      >
        Filter name
        <input
          type="text"
          id="User"
          data-testid="name-filter"
          value={ inputName }
          onChange={ ({ target }) => setFilterByName(target.value) }
        />
      </label>
      <label htmlFor="column-filter">
        Numeric Values:
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {dropdown.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {options.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilterByNumericValues(column, comparison, value) }
      >
        Filter
      </button>
    </div>
  );
}

export default InputText;
