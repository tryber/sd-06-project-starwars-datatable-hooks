import React, { useContext, useEffect } from 'react';
import getAPI from '../services/api/api';

import context from '../services/context/context';

function Table() {
  const {
    data,
    setData,
    filtered,
    nameFilter,
    applyNameFilter,
    filteredResults,
    applyNumberFilter,
    filterToApply,
    appliedFilters,
    removeFilter,
  } = useContext(context);

  async function callAPI() {
    await setData(await getAPI());
  }

  useEffect(() => {
    callAPI();
  }, []);

  const zero = 0;

  if (data.length === zero) {
    return <h1>Loading...</h1>;
  }

  const ShowFilterOptions = () => {
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => {
            applyNumberFilter(target.value, '', zero, false);
          } }
          value={ filterToApply.columnType }
        >
          <option value="None">None</option>
          {filterToApply.possibleFilters.map((column, i) => (
            <option key={ i } value={ column }>{ column }</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => {
            applyNumberFilter('', target.value, zero, false);
          } }
          value={ filterToApply.compareType }
        >
          {/* <option value="None">None</option> */}
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          onChange={ ({ target }) => {
            applyNumberFilter('', '', target.value, false);
          } }
          type="number"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            applyNumberFilter('', '', zero, true);
          } }
        >
          Que Seja
        </button>
        {appliedFilters.map((filter, index) => (
          <div key={ index }>
            <h4>{ filter.columnType }</h4>
            <button
              name={filter.columnType}
              onClick={ (e) => removeFilter(e) }
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  };

  const TableHead = (
    <thead>
      <tr>
        <th>name</th>
        <th>rotation period</th>
        <th>orbital period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>
    </thead>
  );

  function TableBody() {
    let temp = [];
    if (filtered) temp = filteredResults;
    else temp = data;

    return (
      temp.map((planet, index) => (
        <tr key={ index }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))
    );
  }

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target }) => applyNameFilter(target.value) }
        value={ nameFilter }
      />
      { ShowFilterOptions() }
      <table>
        { TableHead }
        <tbody>
          { TableBody() }
        </tbody>
      </table>
    </>
  );
}

export default Table;
