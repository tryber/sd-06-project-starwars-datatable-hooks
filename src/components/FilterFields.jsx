import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/StarWarsContext';

function FilterFields() {
  const {
    filters,
    setFilters,
    input,
    setInput,
    usedFilters,
    addFilter,
    updateFilteredPlanets,
    planetKeys,
  } = useContext(Context);
  const [column, setColumn] = useState('');
  const [comparasion, setComparasion] = useState('');
  const [value, setValue] = useState('');
  const [sortColumn, setSortcolumn] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const numericFilters = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];
  const noMatch = -1;

  // salva os filtros usados a partir do que está sendo alterado em filterByNumericValues
  // quando um filtro for salvo, atualiza o filteredPlanets que vem do Provider
  useEffect(() => {
    addFilter();
    updateFilteredPlanets();
  }, [filters]);

  // salva o que está sendo digitado no input no filterByName
  const onChangeInput = (e) => {
    setInput(e.target.value);
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  // envia os dados do novo filtro para filterByNumericValues
  const submitFilter = (e) => {
    e.preventDefault();

    const newFilter = {
      column,
      comparasion,
      value,
    };

    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat(newFilter),
    });
    setColumn('');
    setComparasion('');
    setValue('');
  };

  // atualiza as opções para fazer a ordenação
  const updateSortOptions = (e) => {
    e.preventDefault();

    const columnType = numericFilters.some((numFilter) => numFilter === sortColumn)
      ? 'numeric'
      : 'string';

    setFilters({
      ...filters,
      order: {
        column: sortColumn,
        sort: sortOrder,
        type: columnType,
      },
    });
  };

  return (
    <div>
      <span>
        {'Busca por planeta: '}
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Ex: Naboo"
          value={ input }
          onChange={ (e) => onChangeInput(e) }
        />
      </span>
      <form onSubmit={ (e) => submitFilter(e) }>
        <span>
          {'Filtro de valores numéricos: '}
          <select
            data-testid="column-filter"
            value={ column }
            onChange={ (e) => setColumn(e.target.value) }
          >
            <option key="disabledNumFilter" disabled value="">--</option>
            {/* Compare two Javascript Arrays and remove Duplicates: https://stackoverflow.com/a/14930567 */}
            {numericFilters.filter((filter) => usedFilters.indexOf(filter) === noMatch)
              .map((filter) => (
                <option key={ filter } value={ filter }>{filter}</option>
              ))}
          </select>
        </span>
        <span>
          <select
            data-testid="comparison-filter"
            value={ comparasion }
            onChange={ (e) => setComparasion(e.target.value) }
          >
            <option value="" disabled>--</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </span>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          data-testid="button-filter"
          type="submit"
          disabled={ !column || !comparasion || !value }
        >
          Filtrar
        </button>
      </form>
      <form onSubmit={ (e) => updateSortOptions(e) }>
        <select
          data-testid="column-sort"
          onChange={ (e) => setSortcolumn(e.target.value) }
        >
          <option key="disabledPlanetKeys" disabled value="">--</option>
          {planetKeys.map((planetKey) => (
            <option key={ planetKey } value={ planetKey }>{planetKey}</option>
          ))}
        </select>
        <label htmlFor="radio-asc">
          <input
            id="radio-asc"
            data-testid="column-sort-input-asc"
            type="radio"
            name="sort"
            value="ASC"
            onChange={ () => setSortOrder('ASC') }
          />
          Crescente
        </label>
        <label htmlFor="radio-desc">
          <input
            id="radio-desc"
            data-testid="column-sort-input-desc"
            type="radio"
            name="sort"
            value="DESC"
            onChange={ () => setSortOrder('DESC') }
          />
          Descrescente
        </label>
        <button
          type="submit"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default FilterFields;
