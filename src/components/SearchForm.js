import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Filter from './Filter';

function SearchForm() {
  const { filters, setFilter, data } = useContext(StarWarsContext);
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
  const [orderField, setOrderField] = useState({ column: 'name', sort: 'ASC' });
  const orderChange = (event) => {
    setOrderField({ ...orderField, [event.target.id]: event.target.value });
  };
  const clickOrder = () => {
    setFilter({ ...filters,
      order: orderField });
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
            <option>Filtrar coluna</option>
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
            <option>Escolha opção</option>
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
        <div className="col">
          <select
            data-testid="column-sort"
            className="form-control form-control-sm"
            id="column"
            onChange={ orderChange }
          >
            <option>Ordenar por:</option>
            {Object
              .keys(data[0])
              .map((header, index) => (<option key={ index }>{header}</option>))}
          </select>
        </div>
        <div className="col form-check">
          <label className="form-check-label" htmlFor="asc">
            <input
              id="sort"
              className="form-check-input"
              data-testid="column-sort-input-asc"
              type="radio"
              value="ASC"
              name="order"
              onChange={ orderChange }
            />
            Ascendente
          </label>
          <label className="form-check-label" htmlFor="dsc">
            <input
              id="sort"
              className="form-check-input"
              data-testid="column-sort-input-desc"
              type="radio"
              value="DESC"
              name="order"
              onChange={ orderChange }
            />
            Descendente
          </label>
        </div>
        <div className="col">
          <button
            type="button"
            data-testid="column-sort-button"
            className="btn btn-primary btn-sm"
            onClick={ clickOrder }
          >
            Ordenar
          </button>
        </div>
      </div>
      <Filter />
    </form>
  );
}

export default SearchForm;
