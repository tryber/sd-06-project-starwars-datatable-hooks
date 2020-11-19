import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const { data, inputName } = useContext(StarWarsContext);

  const tableBody = data.map((item) => {
    delete item.residents;
    return item;
  });
  return (
    tableBody
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

export default FilterByName;
