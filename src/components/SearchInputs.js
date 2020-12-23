import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInputs() {
  const { searchTerm,
    setSearchTerm,
    filterByNumericValues,
    setFilterByNumericValues,
    // setFilterByOrderValues,
    // filterByOrderValues,
    // orderAscDesc,
    setOrderAscDesc,
  } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population'); // estado local
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const columnSelect = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const columnOptions = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'rotation_period',
    'surface_water',
    'films',
    'created',
    'edited',
    'url',
  ];
  const filtrosUsados = filterByNumericValues.map((filtro) => filtro.column);
  const resetFilter = (elemento) => (
    setFilterByNumericValues(
      filterByNumericValues.filter(({ column: coluna }) => coluna !== elemento),
    )
  );
  // const orderByFilter = filterByOrderValues.filter(
  //   ({ colum: orderColum }) => orderColum === column,
  // );

  return (
    <header>
      Pesquisa
      <input
        type="text"
        name="search"
        id="search"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
        data-testid="name-filter"
      />
      <select
        className="btn"
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
      >
        {
          columnSelect.filter((option) => !filtrosUsados.includes(option))
            .map((option) => (
              <option
                key={ option }
                value={ option }
              >
                {option}
              </option>
            ))
        }
        ;
      </select>
      <select
        className="btn"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        value={ value }
        type="number"
        name="value-filter"
        id="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        className="btn"
        onClick={ () => setFilterByNumericValues([...filterByNumericValues,
          { column, comparison, value }]) }
        data-testid="button-filter"
      >
        add filter
      </button>
      <div>
        {
          filterByNumericValues.map((filtro) => (
            <span data-testid="filter" key={ filtro.column }>
              {`${filtro.column} ${filtro.comparison} ${filtro.value}`}
              <button
                className="button-filter"
                key={ column }
                type="button"
                onClick={ () => resetFilter(filtro.column) } // meio de passar o nome do filtro que quero retirar
              >
                X
              </button>
              <br />
            </span>
          ))
        }
      </div>
      <form>
        <fieldset>
          <div>
            <label htmlFor="ASC">
              ASC
              <input
                onChange={ (event) => setOrderAscDesc(event.target.value) }
                type="radio"
                value="ASC"
                data-testid="colum-sort-input-asc"
                name="order"
                id="ASC"
              />
            </label>
          </div>
          <label htmlFor="DESC">
            DESC
            <input
              onChange={ (event) => setOrderAscDesc(event.target.value) }
              type="radio"
              value="DESC "
              data-testid="colum-sort-input-desc"
              name="order"
              id="DESC"
            />
          </label>
        </fieldset>
        <select
          data-testid="column-sort"
        >
          {columnOptions.map((options) => (
            <option key={ options }>
              {options}
            </option>
          ))}
        </select>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => orderByFilter(columnOptions.column) }
        >
          Order by
        </button>
      </form>
    </header>
  );
}

export default SearchInputs;
