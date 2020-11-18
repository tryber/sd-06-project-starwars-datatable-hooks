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
    filters: { filterByName: { name: nameFilter }, filterByNumericValues },
  } = useContext(StarWarsContext).context;
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  
  // const renderHeaders = (planet) => {
  //   const headers = Object.keys(planet).filter((key) => key !== 'url')
  //   return headers.map((item, index) => <th key={ index }>{item}</th>)
  // }
  useEffect(() => 
    setFilteredPlanets(planets)
  , [planets])

  useEffect(() => {
    setFilteredPlanets(planets.filter((planet) => planet.name.toLowerCase()
    .includes(nameFilter.toLowerCase())))
  }, [nameFilter]);
  
  return (
    <table className="table">
      <thead>
        <tr>
          {titles.map((title, index) => <th key={ index }>{title}</th> )}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets
          .map(({
            name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
            diameter, climate, gravity, terrain, surface_water: surfaceWater,
            population, residents, films, created, edited,
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
