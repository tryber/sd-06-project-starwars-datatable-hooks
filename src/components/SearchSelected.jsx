import React from 'react';
// import StarWarsContext from '../context/StarWarsContext';

function SearchSelected() {
  const aboutArray = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const lengthArray = ['maior que', 'menor que', 'igual a'];

  return (
    <div className="form-group">
      <br />
      <select
        data-testid="column-filter"
      >
        {aboutArray.map((about, index) => (
          <option
            className="btn btn-secondary btn-lg dropdown-toggle"
            key={ index }
            value={ about }
          >
            { about }
          </option>))}
      </select>
      {' '}
      <select
        data-testid="comparison-filter"
      >
        {lengthArray.map((length, index) => (
          <option
            className="btn btn-secondary btn-lg dropdown-toggle"
            key={ index }
            value={ length }
          >
            { length }
          </option>))}
      </select>
      {' '}
      <input
        type="number"
        data-testid="value-filter"
      />
      {' '}
      <button
        data-testid="button-filter"
        type="button"
        className="btn btn-success"
        // onClick={ () =>  }
      >
        Filter
      </button>
      <br />
    </div>
  );
}

export default SearchSelected;
