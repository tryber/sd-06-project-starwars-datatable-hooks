import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, fetchAPI } = useContext(StarWarsContext);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  const tableHeader = data.map((element, index) => Object.keys(element)[index])
    .filter((item) => item !== 'residents');

  const tableBody = data.map((item) => {
    delete item.residents;
    return item;
  });

  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((e, i) => (
            <th key={ i }>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((e, i) => (
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
