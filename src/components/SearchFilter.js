import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StarWarsContext from '../context/StarWarsContext';

function SearchFilter() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const {
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);

  return (
    <div>
      <form>
        <label
          htmlFor="filterByName"
          className="name-filter"
        >
          Filtro por Nome
          {' '}
          <input
            name="filterByName"
            type="text"
            data-testid="name-filter"
            placeholder="Digite o nome"
            // Captura o valor digitado e seta no estado local "filterByName".
            onChange={ (e) => setFilterByName(e.target.value) }
          />
        </label>
        <label
          htmlFor="filterByNumber"
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
    </div>
  );
}

export default SearchFilter;
