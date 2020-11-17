import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, loading, filters, setFilters } = useContext(StarWarsContext);

  const handleName = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  return (
    <div>
      { loading && 'Loading...'}
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleName }
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Name</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { planets
            .filter((planet) => planet.name.includes(filters.filterByName.name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.climate }</td>
                <td>{ planet.created }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.films }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.name }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.population }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.url }</td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
