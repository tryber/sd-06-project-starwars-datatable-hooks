import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { results } = useContext(StarWarsContext);
  return (
    <table>
      <tr>
        {results.map((e, i) => (
          <th key={ i }>
            {Object.keys(e)[i]}
          </th>
        ))}
      </tr>
      {results.map((e, i) => (
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
          <td>{e.residents}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
