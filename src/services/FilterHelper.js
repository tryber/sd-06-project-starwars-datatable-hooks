/* eslint-disable radix */
import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterHelper() {
  const { data, column, comparison, value } = useContext(StarWarsContext);
  if (comparison === 'maior que') {
    return (
      data.filter((item) => parseInt(item[column]) > value)
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
  if (comparison === 'menor que') {
    return (
      data.filter((item) => parseInt(item[column]) < value)
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
  if (comparison === 'igual a') {
    return (
      data.filter((item) => item[column] === value)
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
