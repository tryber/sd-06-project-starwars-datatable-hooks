import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, headers, getPlanetsApi, filterPlanet } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsApi();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => <th key={ header }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets
          .filter((planet) => planet.name.toLowerCase()
            .includes(filterPlanet.toLowerCase()))
          .map((planet) => (
            <tr key={ planet.name }>
              {headers
                .map((header) => <td key={ planet[header] }>{planet[header]}</td>)}
            </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
