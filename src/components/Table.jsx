import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, getPlanets, searchPlanet } = useContext(StarWarsContext);
  // const [filteredPlanets, setFilteredPlanets] = useState([]);
  const tableHeaders = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  useEffect(() => {
    getPlanets();
    console.log(planets);
  }, []);

  useEffect(() => {
    console.log('use effect', searchPlanet);
  }, [searchPlanet]);

  // useEffect(() => {
  //   const filtered = planets.filter((planet) => planet.name.includes(searchPlanet));
  //   setFilteredPlanets(filtered);
  // }, [searchPlanet]);

  // useEffect(() => {
  //   if (planets.length > 0) {
  //     setFilteredPlanets(planets);
  //   }
  // }, [planets]);

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={ index }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map(
          (
            {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            },
            index,
          ) => (
            <tr key={ index }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films.length}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ),
        )}
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default Table;

// {planets.filter((planet) => planet.name.includes(searchPlanet)).map((planet) => (
//   <tr>{planet.name}</tr>
// ))}
