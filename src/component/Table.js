import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { planets, fetchPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {planets && Object.keys(planets[0]).map((title) => (
            <th key={ title } role="columnheader">
              {title.replace('_', ' ').toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets && planets.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((value, index) => <td key={ index }>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
