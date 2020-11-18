import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const INITIAL_PLANETS = 0;
  const { planets, fetchPlanets, loading,
    filters: { filterByName: { name } } } = useContext(StarWarsContext);

  const filteredPlanets = name
    ? planets.filter((planet) => planet.name.match(`${name}`) && planet)
    : planets;

  useEffect(() => {
    fetchPlanets();
  }, []);

  const tableContent = () => (
    <table>
      <thead>
        <tr role="row">
          {(planets.length > INITIAL_PLANETS) && Object.keys(planets[0]).map((title) => (
            <th key={ title } role="columnheader">
              {title.replace('_', ' ').toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets && filteredPlanets.map((planet) => (
          <tr key={ planet.name } role="row">
            {Object.values(planet).map((value, index) => <td key={ index }>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      {loading ? 'Loading...' : tableContent()}
    </div>
  );
}
