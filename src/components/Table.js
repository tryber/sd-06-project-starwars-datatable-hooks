import React, { useContext, useEffect } from 'react';
import starWarsContext from '../context/starWarsContext';

function Table() {
  const { data, getStarWarsPlanets, searchText } = useContext(starWarsContext);
  // const [filteredPlanet, setFilteredPlanet] = useState([]);

  useEffect(() => {
    getStarWarsPlanets();
  }, []);

  return (
    <table className="table table-hover">
      <thead className="thead-dark">
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
          {/* <th>Residents</th> */}
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((planet) => planet.name.includes(searchText))
          .map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              {/* <td>{ planet.residents }</td> */}
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
