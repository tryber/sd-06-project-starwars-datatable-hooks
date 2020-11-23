import React, { useContext } from 'react';
import StarWarsContext from '../context';

function Table() {
  const { planets: allPlanets, filters: { filterByName, filterByNumericValues,
    orderFilter: { orderColumn, order } } } = useContext(StarWarsContext);

  const planetsName = allPlanets.map((planet) => planet.name).sort();
  const planetsAscByName = planetsName.map((planetName) => allPlanets
    .find((planet) => planet.name === planetName));
  let planetsToRender = planetsAscByName;

  if (orderColumn !== '') {
    planetsToRender = (order === 'DESC')
      ? planetsToRender.sort((a, b) => b[orderColumn] - a[orderColumn])
      : planetsToRender.sort((a, b) => a[orderColumn] - b[orderColumn]);
  }

  if (filterByName !== '') {
    planetsToRender = planetsToRender.filter(
      (planet) => planet.name.toUpperCase().match(filterByName.toUpperCase()),
    );
  }

  const magicNumberZero = 0;
  if (filterByNumericValues.length > magicNumberZero) {
    planetsToRender = filterByNumericValues.map((numericFilter) => {
      const { range, rangeNumber, column, color } = numericFilter;
      const planets = planetsToRender.filter((planet) => {
        let condition;
        condition = (range === 'menor que')
          ? parseInt(planet[column], 10) < parseInt(rangeNumber, 10) : condition;
        condition = (range === 'maior que')
          ? parseInt(planet[column], 10) > parseInt(rangeNumber, 10) : condition;
        condition = (range === 'igual a')
          ? parseInt(planet[column], 10) === parseInt(rangeNumber, 10) : condition;
        return condition;
      });
      return ({ planets, color });
    });
  } else {
    planetsToRender = [{ planets: planetsToRender, color: 'none' }];
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
          { planetsToRender.map((planetsObj) => {
            const { planets, color } = planetsObj;
            return planets.map((planet) => {
              const { name, rotation_period: rotationPeriod,
                orbital_period: orbitalPeriod, diameter, climate,
                gravity, terrain, surface_water: surfaceWater,
                population, residents, films, created, edited } = planet;
              return (
                <tr key={ name } style={ { backgroundColor: color } }>
                  <td data-testid="planet-name">{ name }</td>
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
            });
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
