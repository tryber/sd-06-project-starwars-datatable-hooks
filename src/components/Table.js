import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { column, value, comparison, data, getPlanets, name } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  const tableFilter = (element) => {
    if (comparison === '') return true;
    if (comparison === 'maior que') return Number(element[column]) > Number(value);
    if (comparison === 'menor que') return Number(element[column]) < Number(value);
    if (comparison === 'igual a') return Number(element[column]) === Number(value);
  }

  return (
    <table className="table">
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
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { data.filter((element) => tableFilter(element))
          .filter((e) => e.name.toLowerCase()
            .includes(name.toLowerCase()))
          .map((planet) => (
            <tr key={ planet }>
              <td key={ planet.name }>{ planet.name }</td>
              <td key={ planet.rotation_period }>{ planet.rotation_period }</td>
              <td key={ planet.orbital_period }>{ planet.orbital_period }</td>
              <td key={ planet.diameter }>{ planet.diameter }</td>
              <td key={ planet.climate }>{ planet.climate }</td>
              <td key={ planet.gravity }>{ planet.gravity }</td>
              <td key={ planet.terraini }>{ planet.terrain }</td>
              <td key={ planet.surface_water }>{ planet.surface_water }</td>
              <td key={ planet.population }>{ planet.population }</td>
              <td key={ planet.films }>{ planet.films }</td>
              <td key={ planet.created }>{ planet.created }</td>
              <td key={ planet.edited }>{ planet.edited }</td>
              <td key={ planet.url }>{ planet.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
