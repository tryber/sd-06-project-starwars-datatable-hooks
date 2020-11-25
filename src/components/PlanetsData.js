import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsData() {
  const { planets, isFetching } = useContext(StarWarsContext);
  const { filters } = useContext(StarWarsContext);
  const { filterByName: { name },
    filterByNumericValues: { column, comparison, value },
  } = filters;
  const keysArray = (isFetching) ? []
    : Object.keys(planets[0]);
  const Loading = <div>Please, wait an instant... this galaxy is far, far away</div>;

  function filterPlanetsByNumber(planet) {
    if (comparison === '') return true;
    if (comparison === 'maior que') {
      if (Number(planet[column]) > Number(value)) return true;
    }
    if (comparison === 'menor que') {
      if (Number(planet[column]) < Number(value)) return true;
    }
    if (comparison === 'igual a') {
      if (Number(planet[column]) === Number(value)) return true;
    }
    return false;
  }

  return (
    (isFetching) ? Loading
      : (
        <table>
          <thead>
            <tr>
              {keysArray.map((key, index) => (
                <th key={ index }>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planets.filter((planet) => filterPlanetsByNumber(planet))
              .filter(((planet) => planet.name.toLowerCase()
                .includes(name.toLowerCase())))
              .map((planet, index) => (
                <tr key={ index }>
                  {keysArray.map((item, i) => (
                    <td key={ i }>{planet[item]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )
  );
}

export default PlanetsData;
