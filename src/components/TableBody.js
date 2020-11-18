import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TableBody() {
  const {
    dataTable,
    filterByName,
    isFiltered,
    filterByNumericValues,
  } = useContext(StarWarsContext);

  let dataFiltered = [...dataTable];

  if (isFiltered) {
    console.log(filterByNumericValues);
    const { column, comparision, value } = filterByNumericValues;
    if (comparision === 'maior que') {
      dataFiltered = dataFiltered.filter(
        (planet) => parseInt(planet[column], 10) > parseInt(value, 10),
      );
    } else if (comparision === 'menor que') {
      dataFiltered = dataFiltered.filter(
        (planet) => parseInt(planet[column], 10) < parseInt(value, 10),
      );
    } else if (comparision === 'igual a') {
      dataFiltered = dataFiltered.filter(
        (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
      );
    }
  }

  return (
    <tbody>
      {dataFiltered.filter(
        (planet) => planet.name.toLowerCase().includes(filterByName.name),
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
  );
}

export default TableBody;
