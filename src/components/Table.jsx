import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { column,
    value,
    comparison,
    data,
    getData,
    name,
    setOrder,
    order } = useContext(StarWarsContext);

  const [orderBy, setOrderby] = useState(
    { column: 'name', sort: '' },
  );

  useEffect(() => {
    getData();
    setOrder({ column: 'name', sort: 'ASC' });
  }, []);

  const tableFilter = (element) => {
    if (comparison === '') return true;
    if (comparison === 'maior que') return Number(element[column]) > Number(value);
    if (comparison === 'menor que') return Number(element[column]) < Number(value);
    if (comparison === 'igual a') return Number(element[column]) === Number(value);
  };

  // const sortFunction = (a, b) => a - b;

  const numericColumnsOptions = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const orderCrescent = (a, b) => {
    const minusOne = -1;
    if (numericColumnsOptions.includes(order.column)) {
      return a[order.column] - b[order.column];
    }
    return a[order.column] > b[order.column] ? 1 : minusOne;
  };
  const orderDecrescent = (a, b) => {
    const minusOne = -1;
    if (numericColumnsOptions.includes(order.column)) {
      return b[order.column] - a[order.column];
    }
    return b[order.column] < a[order.column] ? minusOne : 1;
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

  const handleRadioButton = (event) => {
    setOrderby({ ...orderBy, sort: event.target.value });
  };

  const handleSelect = (event) => {
    setOrderby({ ...orderBy, column: event.target.value });
  };

  return (
    <main>
      <div>
        <div>
          <label htmlFor="ASC">
            <input
              value="ASC"
              type="radio"
              data-testid="column-sort-input-asc"
              name="radio"
              id="ASC"
              onChange={ handleRadioButton }
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
              onChange={ handleRadioButton }
            />
            DESC
          </label>
        </div>
        <select data-testid="column-sort" onChange={ handleSelect }>
          {dropBox.map((col) => (
            <option key={ col } value={ col }>{col}</option>
          ))}
        </select>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => setOrder(orderBy) }
        >
          Ordernar
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {/* .filter((planet) => planet.name.includes(filterName.name))
          .sort(order.sort === 'ASC' || order.sort === '' ? orderCrescent : orderDecrescent)
          .map((planet) => */}
          { data
            .filter((element) => tableFilter(element))
            .filter((e) => e.name.toLowerCase()
              .includes(name.toLowerCase()))
            .sort(
              order.sort === 'ASC' || order.sort === '' ? orderCrescent : orderDecrescent,
            )
            .map((planet) => (
              <tr key={ planet }>
                <td data-testid="planet-name" key={ planet.name }>{ planet.name }</td>
                <td key={ planet.rotation_period }>{ planet.rotation_period }</td>
                <td key={ planet.orbital_period }>{ planet.orbital_period }</td>
                <td key={ planet.diameter }>{ planet.diameter }</td>
                <td key={ planet.climate }>{ planet.climate }</td>
                <td key={ planet.gravity }>{ planet.gravity }</td>
                <td key={ planet.terraini }>{ planet.terrain }</td>
                <td key={ planet.surface_water }>{ planet.surface_water }</td>
                <td key={ planet.population }>{ planet.population }</td>
                <td key={ planet.films }>{ planet.films }</td>
                <td key={ planet.created }>{ planet.created }</td>
                <td key={ planet.edited }>{ planet.edited }</td>
                <td key={ planet.url }>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
