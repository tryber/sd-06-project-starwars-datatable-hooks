import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <table>
      <tr>
        {Object.keys(data[0])
          .filter((header) => header !== 'residents')
          .map((header) => (<th key={ header }>{header}</th>))}
      </tr>
      {data.map((planet) => (
        <tr key={ planet }>
          {Object.entries(planet)
            .filter((value) => value[0] !== 'residents')
            .map((value) => (<td key={ value[1] }>{ value[1] }</td>))}
        </tr>))}
    </table>
  );
}

export default Table;
