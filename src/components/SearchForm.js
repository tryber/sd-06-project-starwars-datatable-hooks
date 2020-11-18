import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchForm() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const handleChange = (event) => {
    setFilter({ ...filters, filterByName: { name: event.target.value } });
  };
  const [fields, setFields] = useState({ column: '', comparison: '', value: '' });
  const fieldChange = (event) => {
    setFields({ ...fields, [event.target.id]: event.target.value });
  };
  const clickButton = () => {
    setFilter({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, fields] });
    setFields({ column: '', comparison: '', value: '' });
  };
  const dropColumn = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']
    .filter((e) => !filters.filterByNumericValues.some((item) => item.column === e));
  const dropComp = ['maior que', 'menor que', 'igual a'];
  return (
    <form className="navbar fixed-top bg-light">
      <div className="row">
        <div className="col">
          <input
            placeholder="Filtrar por Nome"
            className="form-control form-control-sm"
            data-testid="name-filter"
            type="text"
            value={ filters.filterByName.name }
            onChange={ handleChange }
          />
        </div>
        <div className="col">
          <select
            id="column"
            data-testid="column-filter"
            className="form-control form-control-sm"
            value={ fields.column }
            onChange={ fieldChange }
          >
            <option>Escolha a coluna</option>
            {dropColumn
              .map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </div>
        <div className="col">
          <select
            id="comparison"
            data-testid="comparison-filter"
            className="form-control form-control-sm"
            value={ fields.comparison }
            onChange={ fieldChange }
          >
            <option>Escolha uma opção</option>
            {dropComp
              .map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </div>
        <div className="col">
          <input
            placeholder="Digite um número"
            id="value"
            className="form-control form-control-sm"
            data-testid="value-filter"
            type="number"
            value={ fields.value }
            onChange={ fieldChange }
          />
        </div>
        <div className="col">
          <button
            type="button"
            data-testid="button-filter"
            className="btn btn-primary btn-sm"
            onClick={ clickButton }
          >
            Filtrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
