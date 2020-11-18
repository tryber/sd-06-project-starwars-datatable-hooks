import React, { useContext, useState } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, loading, filteredPlanets, setFilteredPlanets } = useContext(Context);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
    const newPlanets = data.filter((planet) => planet.name.toLowerCase().includes(value));
    setFilteredPlanets(newPlanets);
    console.log(newPlanets);
  };

  return (
    <div>
      <header>
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr><td>Loading</td></tr>
            : filteredPlanets.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
}
