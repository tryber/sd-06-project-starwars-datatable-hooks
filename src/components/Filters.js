import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    setNameInput,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  return (
    <form>
      <label htmlFor="name-filter">
        Nome:
        <input
          type="text"
          data-testid="name-filter"
          name="name-filter"
          onChange={ (e) => setNameInput(e.target.value) }
        />
      </label>
      <label
        htmlFor="number-filter"
        className="column-filter"
      >
        Filtro por Elemento
        {' '}
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          {/* <option disabled selected> -- select an option -- </option> */}
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
          {/* <option disabled selected> -- select an option -- </option> */}
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          placeholder="valor"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => setFilterByNumericValues([...filterByNumericValues,
            { column, comparison, value },
          ]) }
        >
          Filtrar
        </button>
      </label>
    </form>
  );
}

export default Filters;
