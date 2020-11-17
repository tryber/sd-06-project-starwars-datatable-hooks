import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableHeader from './TableHeader';

function Table() {
  const { data, fetchAPI } = useContext(StarWarsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  const tableBody = data.map((item) => {
    delete item.residents;
    return item;
  });

  // const tableHeader = data.map((element, index) => Object.keys(element)[index])
  // .filter((item) => item !== 'residents');

  return (
    <table>
      <TableHeader />
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
            <td>{e.films}</td>
            <td>{e.created}</td>
            <td>{e.edited}</td>
            <td>{e.url}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Table;
