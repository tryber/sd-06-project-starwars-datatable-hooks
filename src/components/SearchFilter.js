import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StarWarsContext from '../context/StarWarsContext';

function SearchFilter() {
  // Estados locais criados para usar no onChange.
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const {
    // Recupera do contexto as seguintes funções e arrays:
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);

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
            // Captura o valor digitado onChange e seta no contexto dentro do array "filterByName", verificando os nomes dos planetas.
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
            // Estado local atualizado onChange
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
            // Estado local atualizado onChange
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
            // Estado local atualizado onChange
            onChange={ (e) => setValue(e.target.value) }
          />
          <button
            className="btn btn-outline-secondary"
            data-testid="button-filter"
            type="button"
            // Captura os estados locais atualizados onChange e seta eles no contexto a partir do click.
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
