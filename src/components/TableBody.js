import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TableBody() {
  const {
    dataTable,
    filterByName,
    filterByNumericValues,
    isLoading,
  } = useContext(StarWarsContext);

  let dataFiltered = dataTable;
  const firstPosition = 0;
  for (let i = firstPosition; i < filterByNumericValues.length; i += 1) {
    if (filterByNumericValues[i].comparison === 'maior que') {
      dataFiltered = dataFiltered.filter(
        (planet) => parseInt(
          planet[filterByNumericValues[i].column], 10,
        ) > parseInt(filterByNumericValues[i].value, 10),
      );
    } else if (filterByNumericValues[i].comparison === 'menor que') {
      dataFiltered = dataFiltered.filter(
        (planet) => parseInt(
          planet[filterByNumericValues[i].column], 10,
        ) < parseInt(filterByNumericValues[i].value, 10),
      );
    } else if (filterByNumericValues[i].comparison === 'igual a') {
      dataFiltered = dataFiltered.filter(
        (planet) => parseInt(
          planet[filterByNumericValues[i].column], 10,
        ) === parseInt(filterByNumericValues[i].value, 10),
      );
    }
  }

  return (
    <tbody>
      {isLoading ? <h2>Carregando...</h2> : dataFiltered.filter(
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
