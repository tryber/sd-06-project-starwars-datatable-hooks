import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/SWContext';

function Table() {
  const { data, isLoading, setIsLoading, headers, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;
  const { column, comparison, value } = filterByNumericValues[0];
  const [orderBy, setOrderby] = useState({ column: 'name', sort: '' });
  const [sort, setSort] = useState({ column: 'name', sort: 'ASC' });
  const zero = 0;
  if (data.length && headers.length > zero) {
    setIsLoading(false);
  }

  const filterOptions = (planets) => {
    if (comparison === '') {
      return true;
    }
    if (comparison === 'maior que') {
      if (Number(planets[column]) > Number(value)) {
        return true;
      }
    }
    if (comparison === 'menor que') {
      if (Number(planets[column]) < Number(value)) {
        return true;
      }
    }
    if (comparison === 'igual a') {
      if (Number(planets[column]) === Number(value)) {
        return true;
      }
    }
    return false;
  };

  const numericColumnsOptions = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const orderCrescent = (a, b) => {
    const subtraction = -1;
    if (numericColumnsOptions.includes(sort.column)) {
      return a[sort.column] - b[sort.column];
    }
    return a[sort.column] > b[sort.column] ? 1 : subtraction;
  };
  const orderDecrescent = (a, b) => {
    const subtraction = -1;
    if (numericColumnsOptions.includes(sort.column)) {
      return b[sort.column] - a[sort.column];
    }
    return b[sort.column] < a[sort.column] ? subtraction : 1;
  };

  const handleRadio = (event) => {
    setOrderby({ ...orderBy, sort: event.target.value });
  };

  const handleSelect = (event) => {
    setOrderby({ ...orderBy, column: event.target.value });
  };

  const dropBox = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'climate',
    'gravity',
    'terrain',
  ];

  return (
    <div>
      <div>
        <label htmlFor="ASC">
          <input
            value="ASC"
            type="radio"
            data-testid="column-sort-input-asc"
            name="radio"
            id="ASC"
            onChange={ handleRadio }
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            value="DESC"
            type="radio"
            data-testid="column-sort-input-desc"
            name="radio"
            id="DESC"
            onChange={ handleRadio }
          />
          DESC
        </label>
      </div>
      <select data-testid="column-sort" onChange={ handleSelect }>
        {dropBox.map((col) => (
          <option key={ col } value={ col }>
            {col}
          </option>
        ))}
      </select>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setSort(orderBy) }
      >
        Ordernar
      </button>
      <table>
        <tr>
          {isLoading ? null : headers.map((tHead) => <th key={ tHead }>{tHead}</th>)}
        </tr>
        <tbody>
          {isLoading
            ? 'Loading'
            : data
              .filter((planets) => filterOptions(planets))
              .filter((planet) => planet.name.toLowerCase()
                .includes(name.toLowerCase()))
              .sort(
                sort.sort === 'ASC' || sort.sort === ''
                  ? orderCrescent
                  : orderDecrescent,
              )
              .map((planet) => (
                <tr key={ planet.name }>
                  <td data-testid="planet-name">{planet.name}</td>
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
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
