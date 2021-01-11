import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    getPlanetList,
    searchTerm,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext).context;
  const finalIndex = filterByNumericValues.length - 1;
  const { column, comparison, value } = filterByNumericValues[finalIndex];
  useEffect(() => {
    getPlanetList();
  }, []);

  const filterData = () => {
    if (searchTerm !== '') {
      const filtered = data.filter((e) => e.name.toLowerCase()
        .includes(searchTerm));
      return filtered;
    }
    if (column !== '') {
      const filterInputNumbers = data.filter((element) => {
        if (comparison === 'maior que' && Number(element[column]) > Number(value)) {
          return element;
        }
        if (comparison === 'menor que' && Number(element[column]) < Number(value)) {
          return element;
        }
        if (comparison === 'igual a' && Number(element[column]) === Number(value)) {
          return element;
        }
        return undefined;
      });
      return filterInputNumbers;
    }
    return data;
  };

  return (
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
        {filterData().map((planet) => (
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
  );
}

export default Table;
