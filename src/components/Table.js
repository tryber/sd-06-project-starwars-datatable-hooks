import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableHeader from './TableHeader';
import InputText from './InputText';

function Table() {
  const { data, fetchAPI, inputName } = useContext(StarWarsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  const tableBody = data.map((item) => {
    delete item.residents;
    return item;
  });

  return (
    <div>
      <InputText />
      <table>
        <TableHeader />
        <tbody>
          {tableBody
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
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
