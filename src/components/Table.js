import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          <th>{console.log(data)}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>teste1</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
