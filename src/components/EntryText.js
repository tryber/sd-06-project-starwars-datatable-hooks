import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function EntryText() {
  const listLength = 0;
  // const initFiters = {
  //   filterByNumericValues: [],
  // };

  const { handle,
    entryText,
    filtersFunc,
    funcFilterText,
    orderFunc } = useContext(StarWarsContext);

  // const [filters, setFilters] = useState(initFiters);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [columnOrder, setColumnOrder] = useState('');
  const [order, setOrder] = useState('');

  function handleChange(event, input) {
    const filter = event.target.value;
    if (input === 'column') setColumn(filter);
    if (input === 'comparison') setComparison(filter);
    if (input === 'value') setValue(filter);
    if (input === 'sort') setColumnOrder(filter);
    if (input === 'radio') setOrder(filter);
  }

  function resetFilter(event, col) {
    funcFilterText('');
    const optionSelect = document.querySelector(`#${col}`);
    // const buttonX = document.querySelector(`#button-${col}`);
    optionSelect.style.visibility = 'visible';
    event.target.parentNode.remove();
  }

  function selectVerifyFilters() {
    const fatherDivButton = document.querySelector('#buttons-filters');
    const button = document.createElement('button');
    const divFilter = document.createElement('div');
    const optionSelect = document.querySelector(`#${column}`);
    optionSelect.style.visibility = 'hidden';

    button.innerText = 'X';
    button.type = 'button';
    button.id = `button-${column}`;
    button.onclick = (event) => resetFilter(event, `${column}`);
    divFilter.setAttribute('data-testid', 'filter');
    fatherDivButton.appendChild(divFilter);
    divFilter.appendChild(button);
  }

  function handleClick() {
    if (column.length > listLength && comparison.length
      > listLength && value.length > listLength) {
      // const filter = filters;
      // setFilters((prevState) => (
      //   { filterByNumericValues:
      //     [...prevState.filterByNumericValues, { value, comparison, column }],
      //   }));
      selectVerifyFilters();
    }
    filtersFunc(column, comparison, value);
  }

  return (
    <div>
      <label htmlFor="entry-text">
        Filter for Text :
        <input
          data-testid="name-filter"
          value={ entryText }
          type="text"
          placeholder="digite text"
          onChange={ handle }
        />
      </label>
      <label htmlFor="col-filter">
        selcione um coluna
        <select
          data-testid="column-filter"
          id="col-filter"
          onChange={ (event) => handleChange(event, 'column') }
        >
          <option value="">
            Selecione
          </option>
          <option id="population" value="population">
            population
          </option>
          <option id="orbital_period" value="orbital_period">
            orbital_period
          </option>
          <option id="diameter" value="diameter">
            diameter
          </option>
          <option id="rotation_period" value="rotation_period">
            rotation_period
          </option>
          <option id="surface_water" value="surface_water">
            surface_water
          </option>
        </select>
      </label>

      <label htmlFor="faixa-filter">
        faixa de valor
        <select
          data-testid="comparison-filter"
          id="faixa-filter"
          onChange={ (event) => handleChange(event, 'comparison') }
        >
          <option value="maior que">
            maior que
          </option>
          <option value="menor que">
            menor que
          </option>
          <option value="igual a">
            igual a
          </option>
        </select>
      </label>
      <label htmlFor="enter-number">
        <input
          data-testid="value-filter"
          id="enter-number"
          type="number"
          placeholder="digite um valor"
          onChange={ (event) => handleChange(event, 'value') }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <label htmlFor="faixa-filter">
        Ordenação
        <select
          data-testid="column-sort"
          id="sort"
          onChange={ (event) => handleChange(event, 'sort') }
        >
          <option value="">
            Selecione
          </option>
          <option id="sort-population" value="population">
            population
          </option>
          <option id="sort-orbital_period" value="orbital_period">
            orbital_period
          </option>
          <option id="sort-diameter" value="diameter">
            diameter
          </option>
          <option id="sort-rotation_period" value="rotation_period">
            rotation_period
          </option>
          <option id="sort-surface_water" value="surface_water">
            surface_water
          </option>
        </select>
      </label>
      <label htmlFor="asc">
        Crescente
        <input
          testid="column-sort-input-asc"
          id="asc"
          type="radio"
          value="ASC"
          name="sort-order"
          onChange={ (event) => handleChange(event, 'radio') }
        />
      </label>
      <label htmlFor="desc">
        Decrescente
        <input
          data-testid="column-sort-input-desc"
          id="desc"
          type="radio"
          value="DESC"
          name="sort-order"
          onChange={ (event) => handleChange(event, 'radio') }
        />

      </label>
      <button
        type="button"
        onClick={ () => orderFunc(columnOrder, order) }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
      <div id="buttons-filters" />
    </div>);
}

export default EntryText;
