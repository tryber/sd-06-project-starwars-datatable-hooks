import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterHelper() {
  const { data, column, comparison, value, inputName } = useContext(StarWarsContext);
  const index = column.length - 1;
  if (comparison[index] === 'maior que') {
    return (
      data.filter((item) => parseInt(item[column[index]], 10) > value[index])
        .filter((item) => item.name.toLowerCase().includes(inputName.toLowerCase()))
        .map((e, i) => (
          <tr key={ i }>
            <td>{e.name}</td>
            <td>{e.rotation_period}</td>
            <td>{e.orbital_period}</td>
            <td>{e.diameter}</td>
            <td>{e.climate}</td>
            <td>{e.gravity}</td>
            <td>{e.terrain}</td>
            <td>{e.surface_water}</td>
            <td>{e.population}</td>
            <td>{e.films}</td>
            <td>{e.created}</td>
            <td>{e.edited}</td>
            <td>{e.url}</td>
          </tr>
        ))
    );
  }
  if (comparison[index] === 'menor que') {
    return (
      data.filter((item) => parseInt(item[column[index]], 10) < value[index])
        .filter((item) => item.name.toLowerCase().includes(inputName.toLowerCase()))
        .map((e, i) => (
          <tr key={ i }>
            <td>{e.name}</td>
            <td>{e.rotation_period}</td>
            <td>{e.orbital_period}</td>
            <td>{e.diameter}</td>
            <td>{e.climate}</td>
            <td>{e.gravity}</td>
            <td>{e.terrain}</td>
            <td>{e.surface_water}</td>
            <td>{e.population}</td>
            <td>{e.films}</td>
            <td>{e.created}</td>
            <td>{e.edited}</td>
            <td>{e.url}</td>
          </tr>
        ))
    );
  }
  if (comparison[index] === 'igual a') {
    return (
      data.filter((item) => item[column[index]] === value[index])
        .filter((item) => item.name.toLowerCase().includes(inputName.toLowerCase()))
        .map((e, i) => (
          <tr key={ i }>
            <td>{e.name}</td>
            <td>{e.rotation_period}</td>
            <td>{e.orbital_period}</td>
            <td>{e.diameter}</td>
            <td>{e.climate}</td>
            <td>{e.gravity}</td>
            <td>{e.terrain}</td>
            <td>{e.surface_water}</td>
            <td>{e.population}</td>
            <td>{e.films}</td>
            <td>{e.created}</td>
            <td>{e.edited}</td>
            <td>{e.url}</td>
          </tr>
        ))
    );
  }

  return true;
}

export default FilterHelper;
