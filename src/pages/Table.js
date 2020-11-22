import React, { useContext } from 'react';
import StarWarsContext from '../context';

function Table() {
  const { planets, selectedPlanet, range,
    rangeNumber, column } = useContext(StarWarsContext);

  let planetsToRender = planets;

  if (selectedPlanet !== '') {
    planetsToRender = planets.filter(
      (planet) => planet.name.toUpperCase().match(selectedPlanet.toUpperCase()),
    );
  }

  if (column !== '' && range !== '' && rangeNumber !== '') {
    planetsToRender = planetsToRender.filter((planet) => {
      let condition;
      condition = (range === 'menor que')
        ? parseInt(planet[column], 10) < parseInt(rangeNumber, 10) : condition;
      condition = (range === 'maior que')
        ? parseInt(planet[column], 10) > parseInt(rangeNumber, 10) : condition;
      condition = (range === 'igual a')
        ? parseInt(planet[column], 10) === parseInt(rangeNumber, 10) : condition;
      return condition;
    });
  }

  return (
    <div>
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
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          { planetsToRender.map((planet) => {
            const { name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
              diameter, climate, gravity, terrain, surface_water: surfaceWater,
              population, residents, films, created, edited } = planet;
            return (
              <tr key={ name }>
                <td>{ name }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ residents }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
