import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    getPlanetList,
    name,
    setSort,
    sort,
    column,
    comparison,
    value,
  } = useContext(StarWarsContext).context;

  const [orderBy, setOrderby] = useState({ column: 'name', sort: '' });

  useEffect(() => {
    getPlanetList();
    setSort({ column: 'name', sort: 'ASC' });
  }, []);

  // Passei a função direta na linha 143
  // const filterData = () => {
  //   const filtered = data.filter((e) => e.name.toLowerCase()
  //     .includes(name.toLowerCase()));
  //   return filtered;
  // };

  const numericFilter = (element) => {
    if (comparison === '') return true;
    if (comparison === 'maior que') return Number(element[column]) > Number(value);
    if (comparison === 'menor que') return Number(element[column]) < Number(value);
    if (comparison === 'igual a') return Number(element[column]) === Number(value);
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
    <section>
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
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rotation Period</th>
            <th scope="col">Orbital Period</th>
            <th scope="col">Diameter</th>
            <th scope="col">Climate</th>
            <th scope="col">Gravity</th>
            <th scope="col">Terrain</th>
            <th scope="col">Surface Water</th>
            <th scope="col">Population</th>
            <th scope="col">Films</th>
            <th scope="col">Created</th>
            <th scope="col">Edited</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((element) => numericFilter(element))
            .filter((e) => e.name.toLowerCase()
              .includes(name.toLowerCase()))
            .sort(
              sort.sort === 'ASC' || sort.sort === ''
                ? orderCrescent
                : orderDecrescent,
            )
            .map((planet) => (
              <tr key={ planet.name }>
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
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
