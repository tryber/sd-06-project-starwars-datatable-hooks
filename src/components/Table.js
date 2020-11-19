import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    tableHeaders,
    getPlanetsInfo,
    getTableHeaders,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsInfo();
    getTableHeaders();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map((tableHeader, index) => (
            <th key={ index } scope="col">{ tableHeader }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((planetValue, index) => (
              <td key={ index }>{ planetValue }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
