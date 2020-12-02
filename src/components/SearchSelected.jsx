import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchSelected() {
  const { byValue, setByValue } = useContext(StarWarsContext);

  const aboutArray = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const lengthArray = ['maior que', 'menor que', 'igual a'];

  const [about, setAbout] = useState('population');
  const [length, setLength] = useState('maior que');
  const [value, setValue] = useState('');

  return (
    <div className="form-group">
      <br />
      <select
        data-testid="column-filter"
        onChange={ (event) => setAbout(event.target.value) }
      >
        {aboutArray.map((aboutElement, index) => (
          <option
            className="btn btn-secondary btn-lg dropdown-toggle"
            key={ index }
            value={ aboutElement }
          >
            { aboutElement }
          </option>))}
      </select>
      {' '}
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setLength(event.target.value) }
      >
        {lengthArray.map((lengthElement, index) => (
          <option
            className="btn btn-secondary btn-lg dropdown-toggle"
            key={ index }
            value={ lengthElement }
          >
            { lengthElement }
          </option>))}
      </select>
      {' '}
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      {' '}
      <button
        data-testid="button-filter"
        type="button"
        className="btn btn-success"
        onClick={ () => setByValue([...byValue,
          { about, length, value }]) }
      >
        Filter
      </button>
      <br />
    </div>
  );
}

export default SearchSelected;
