import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getData, filters } = useContext(StarWarsContext);
  const { filterByName } = filters;
  const { name } = filterByName;
  const { filterByNumericValues } = filters;

  useEffect(() => {
    async function fetchData() {
      await getData();
    }
    fetchData();
  }, []);

  const filterNumericInputs = (planet) => {
    const empty = 0;
    let filterCondition;

    if (filterByNumericValues.length === empty) return true;

    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;

      switch (comparison) {
      case 'maior que':
        filterCondition = 1 * planet[column] > Number(value);
        break;
      case 'menor que':
        filterCondition = 1 * planet[column] < Number(value);
        break;
      case 'igual a':
        filterCondition = 1 * planet[column] === Number(value);
        break;
      default:
        filterCondition = true;
      }
    });

    return filterCondition;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation period</th>
          <th scope="col">Orbital period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface water</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        {
          data
          && data.filter(filterNumericInputs)
            .filter((planet) => planet.name
              .toLowerCase()
              .includes(name.toLowerCase()))
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
            ))
        }
      </tbody>
    </table>
  );
}

export default Table;
