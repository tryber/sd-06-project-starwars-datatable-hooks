import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { data,
    setData,
    backupData,
    filters,
    setFilters,
    filterOrder,
    setFilterOrder,
  } = useContext(StarWarsContext);

  function changeField(e, field) {
    const { value } = e.target;
    setFilters({
      ...filters,
      [field]: value,
    });
  }

  function handleChange(e) {
    if (data) {
      let filtered;
      if (e.target.value !== '') {
        filtered = data.results
          .filter((result) => result.name.toLowerCase()
            .includes(e.target.value.toLowerCase()));
      } else {
        filtered = backupData.results;
      }
      setData({
        ...data,
        results: filtered,
      });
    }
  }

  function handleClick() {
    // console.log(filters.column);
    if (filters.comparison === 'maior que') {
      // console.log(filters.column);
      // console.log(data.results[0][filters.column]);
      // console.log(data.results);
      const filtered = data.results
        .filter((result) => Number(result[filters.column]) > Number(filters.value));
        // .filter((result) => result[filters.column] === filters.value);
      setData({
        ...data,
        results: filtered,
      });
    // setChangedData(true);
    } else if (filters.comparison === 'menor que') {
      // console.log(filters.column, filters.comparison, filters.value);
      const filtered = data.results
        .filter((result) => Number(result[filters.column]) < Number(filters.value));
        // .filter((result) => result[filters.column] === filters.value);
      setData({
        ...data,
        results: filtered,
      });
    // setChangedData(true);
    } else if (filters.comparison === 'igual a') {
      // console.log(filters.column, filters.comparison, filters.value);
      const filtered = data.results
        .filter((result) => Number(result[filters.column]) === Number(filters.value));
        // .filter((result) => result[filters.column] === filters.value);
      setData({
        ...data,
        results: filtered,
      });
      // setChangedData(true);
    }
  }

  function clearFilters() {
    const filtered = backupData.results;
    setData({
      ...data,
      results: filtered,
    });

    setFilters({
      column: 'population',
      comparison: 'maior que',
      value: 0,
    });

    document.getElementById('textFilter').value = '';
  }

  function sortPlanets() {
    const minusOne = -1;
    const dados = data;

    if (filterOrder.sort === 'ASC') {
      dados.results.sort(
        (a, b) => (Number((a[filterOrder.column]) > Number(b[filterOrder.column]))
          ? 1
          : minusOne),
      );
    // console.log(dados.results);
    } else if (filterOrder.sort === 'DESC') {
      dados.results.sort((a, b) => {
        /// ///
        let one;
        if (a[filterOrder.column] === 'unknown') {
          one = minusOne;
        } else {
          one = a[filterOrder.column];
        }
        let two;
        if (b[filterOrder.column] === 'unknown') {
          two = minusOne;
        } else {
          two = b[filterOrder.column];
        }
        /// ///
        if (Number(one) < Number(two)) {
          return 1;
        }
        return minusOne;

        // (one < two) ? 1 : minusOne;
      });
      // console.log(filterOrder);
    }
    setData({
      ...data,
      dados });
    // console.log(data.results);
  }

  useEffect(() => {
    const dados = data;
    const minusOne = -1;
    // console.log(dados);
    dados.results.sort((a, b) => ((a.name > b.name) ? 1 : minusOne));
    setData({
      ...data,
      dados });
  }, []);

  // console.log(filterOrder);

  return (
    <div>
      <input
        id="textFilter"
        type="text"
        onChange={ handleChange }
        placeholder="Search by name"
        data-testid="name-filter"
      />
      <div data-testid="filter">
        <button
          type="button"
          onClick={ clearFilters }
        >
          X
        </button>
      </div>
      <br />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (e) => changeField(e, 'column') }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <div data-testid="filter">
        <button
          type="button"
          onClick={ clearFilters }
        >
          X
        </button>
      </div>

      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (e) => changeField(e, 'comparison') }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <div data-testid="filter">
        <button
          type="button"
          onClick={ clearFilters }
        >
          X
        </button>
      </div>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
        placeholder={ 0 }
        onChange={ (e) => changeField(e, 'value') }
      />
      <div data-testid="filter">
        <button
          type="button"
          onClick={ clearFilters }
        >
          X
        </button>
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar filtro
      </button>

      <br />

      {/* Ordenar por coluna */}
      <select
        name="order"
        data-testid="column-sort"
        onChange={ (e) => setFilterOrder({
          ...filterOrder,
          column: e.target.value,
        }) }
      >
        <option value="name">Name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="climate">climate</option>
        <option value="created">created</option>
        <option value="edited">edited</option>
        <option value="gravity">gravity</option>
        <option value="population">population</option>
        <option value="surface_water">surface_water</option>
        <option value="terrain">terrain</option>
        <option value="films">films</option>
        <option value="URL">URL</option>
      </select>

      <label htmlFor="asc">
        <input
          type="radio"
          id="asc"
          name="orderRadio"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ () => setFilterOrder({
            ...filterOrder,
            sort: 'ASC',
          }) }
        />
        ASC
      </label>

      <label htmlFor="desc">
        <input
          type="radio"
          id="desc"
          name="orderRadio"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ () => setFilterOrder({
            ...filterOrder,
            sort: 'DESC',
          }) }
        />
        DESC
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ sortPlanets }
      >
        Ordenar
      </button>
    </div>
  );
}

export default Filters;
