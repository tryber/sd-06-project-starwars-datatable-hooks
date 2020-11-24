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

  // função responsável por exibir o filtro após o clique para que seja mostrado cada filtro criado.

  return (
    <div>
      <form className="form-inline">
        <label
          htmlFor="filterByName"
          className="name-filter"
        >
          <input
            name="filterByName"
            type="text"
            data-testid="name-filter"
            placeholder="Digite o nome"
            className="form-control"
            // Captura o valor digitado e seta no estado local "filterByName".
            onChange={ (e) => setFilterByName(e.target.value) }
          />
        </label>
        <label
          htmlFor="filterByNumber"
          className="column-filter"
        >
          <select
            className="custom-select"
            data-testid="column-filter"
            onChange={ (e) => setColumn(e.target.value) }
          >
            <option disabled selected> -- select -- </option>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select
            className="custom-select"
            data-testid="comparison-filter"
            onChange={ (e) => setComparison(e.target.value) }
          >
            <option disabled selected> -- select -- </option>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input
            data-testid="value-filter"
            type="number"
            placeholder="valor"
            className="form-control"
            onChange={ (e) => setValue(e.target.value) }
          />
          <button
            className="btn btn-outline-secondary"
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
