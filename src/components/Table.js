import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const titles = ['name', 'rotation period', 'orbital period', 'diameter',
  'climate', 'gravity', 'terrain', 'surface water', 'population',
  'residents', 'films', 'created', 'edited',
];

function Table() {
  const {
    data: { planets },
    fetchPlanets,
    searchTerm,
  } = useContext(StarWarsContext).context;
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(planets);
  }, [planets]);

  useEffect(() => {
    const filtered = planets
      .filter((planet) => planet.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPlanets(filtered);
  }, [searchTerm]);

  return (
    <table className="table">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th scope="col" key={ index }>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map(({
          name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter,
          climate, gravity, terrain, surface_water: surfaceWater, population, residents,
          films, created, edited,
        }, index) => (
          <tr key={ index }>
            <th scope="row">{name}</th>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{residents.length}</td>
            <td>{films.length}</td>
            <td>{created}</td>
            <td>{edited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
