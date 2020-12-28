import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInputs() {
  const { searchTerm,
    setSearchTerm,
    filterByNumericValues,
    setFilterByNumericValues,
    setOrderByAscDesc,
    columnSelect,
  } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population'); // estado local
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [order, setOrder] = useState({
    column: 'name', sort: 'ASC',
  });

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

  return (
    <header>
      <h1>STARWARS FILTROS</h1>
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

      <div>
        <h1>FILTRO  ORDEM CRESCENTE E DECRESCENTE</h1>
        <label htmlFor="ASC">
          ASC
          <input
            onChange={ (event) => setOrder({ ...order, sort: event.target.value }) }
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            name="orderAD"
            id="ASC"
          />
        </label>

        <label htmlFor="DESC">
          DESC
          <input
            onChange={ (event) => setOrder({ ...order, sort: event.target.value }) }
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            name="orderAD"
            id="DESC"
          />
        </label>
        <span>
          <select
            data-testid="column-sort"
            onChange={ (event) => setOrder({ ...order, column: event.target.value }) }
          >
            {columnOptions.map((options) => (
              <option key={ options } value={ options }>
                {options}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={ () => setOrderByAscDesc({ ...order }) } // preciso dos valores da option (column) e qual ordenação(asc ou desc)
            data-testid="column-sort-button"
          >
            Order by
          </button>
        </span>
      </div>
    </header>
  );
}
export default SearchInputs;
