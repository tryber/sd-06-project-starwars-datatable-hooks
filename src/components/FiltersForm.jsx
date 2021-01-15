import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import FilterSet from './FilterSet';

function FiltersForm() {
  const {
    filters,
    setFilters,
    data,
    filteredName,
    setFilteredName } = useContext(StarWarsContext);

  // solução desenvolvida a partir do plantão de dúvidas;
  const [filterSet, setFilterSet] = useState({ column: '', comparison: '', value: '' });
  const filterSetChange = (event) => {
    setFilterSet({
      ...filterSet,
      [event.target.id]: event.target.value,
    });
  };

  const clickButton = () => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filterSet],
    });
    setFilterSet({
      column: '',
      comparison: '',
      value: '',
    });
  };

  const [orderFilterSet, setOrderFilterSet] = useState({ column: 'name', sort: 'ASC' });
  const orderChange = (event) => {
    setOrderFilterSet({
      ...orderFilterSet,
      [event.target.id]: event.target.value,
    });
  };

  const clickToOrder = () => {
    setFilters({ ...filters,
      order: orderFilterSet,
    });
    setFilterSet({
      column: '',
      comparison: '',
      value: '',
    });
  };

  const selectColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].filter((column) => !filters.filterByNumericValues
    .some((item) => item.column === column));

  const selectComparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <form>
      <div>
        <div>
          <input
            data-testid="name-filter"
            type="text"
            value={ filteredName }
            onChange={ ({ target }) => setFilteredName(target.value) }
            placeholder="Nome"
          />
        </div>

        <div>
          <select
            id="column"
            data-testid="column-filter"
            value={ filterSet.column }
            onChange={ filterSetChange }
          >
            <option>Filtrar coluna</option>
            {selectColumn.map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </div>

        <div>
          <select
            id="comparison"
            data-testid="comparison-filter"
            value={ filterSet.comparison }
            onChange={ filterSetChange }
          >
            <option>Escolha opção</option>
            {selectComparison.map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </div>

        <div>
          <input
            id="value"
            data-testid="value-filter"
            type="number"
            value={ filterSet.value }
            onChange={ filterSetChange }
            placeholder="número"
          />
        </div>

        <div>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ clickButton }
          >
            Filtrar
          </button>
        </div>

        <div>
          <select
            data-testid="column-sort"
            id="column"
            onChange={ orderChange }
          >
            <option>Ordenar por:</option>
            {Object
              .keys(data[0])
              .map((header, index) => (<option key={ index }>{header}</option>))}
          </select>
        </div>

        <div>
          <label htmlFor="asc">
            <input
              id="sort"
              data-testid="column-sort-input-asc"
              type="radio"
              value="ASC"
              name="order"
              onChange={ orderChange }
            />
            Crescente
          </label>

          <label htmlFor="dec">
            <input
              id="sort"
              data-testid="column-sort-input-desc"
              type="radio"
              value="DESC"
              name="order"
              onChange={ orderChange }
            />
            Decrescente
          </label>
        </div>

        <div>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ clickToOrder }
          >
            Ordenar
          </button>
        </div>
      </div>

      <FilterSet />
    </form>
  );
}

export default FiltersForm;
