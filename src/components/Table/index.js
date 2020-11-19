import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Table() {
  const { prismPlanets } = useContext(StarWarsContext);

  // essas informações abaixo foram simuladas apenas para testar a tabela
  // const mockPlanetForTable = [{
  //   name: 'Naboo',
  //   rotation_period: '26',
  //   orbital_period: '312',
  //   diameter: '12120',
  //   climate: 'temperate',
  //   gravity: '1 standard',
  //   terrain: 'grassy hills, swamps, forests, mountains',
  //   surface_water: '12',
  //   population: '4500000000',
  //   residents: [
  //     'https://swapi-trybe.herokuapp.com/api/people/3/',
  //     'https://swapi-trybe.herokuapp.com/api/people/21/',
  //     'https://swapi-trybe.herokuapp.com/api/people/35/',
  //     'https://swapi-trybe.herokuapp.com/api/people/36/',
  //     'https://swapi-trybe.herokuapp.com/api/people/37/',
  //     'https://swapi-trybe.herokuapp.com/api/people/38/',
  //     'https://swapi-trybe.herokuapp.com/api/people/39/',
  //     'https://swapi-trybe.herokuapp.com/api/people/42/',
  //     'https://swapi-trybe.herokuapp.com/api/people/60/',
  //     'https://swapi-trybe.herokuapp.com/api/people/61/',
  //     'https://swapi-trybe.herokuapp.com/api/people/66/',
  //   ],
  //   films: [
  //     'https://swapi-trybe.herokuapp.com/api/films/3/',
  //     'https://swapi-trybe.herokuapp.com/api/films/4/',
  //     'https://swapi-trybe.herokuapp.com/api/films/5/',
  //     'https://swapi-trybe.herokuapp.com/api/films/6/',
  //   ],
  //   created: '2014-12-10T11:52:31.066000Z',
  //   edited: '2014-12-20T20:58:18.430000Z',
  //   url: 'https://swapi-trybe.herokuapp.com/api/planets/8/',
  // }];
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            { Object.keys(prismPlanets[0]).filter((key) => key !== 'residents')
              .map((keys) => (
                <th key={ keys } scope="col">{keys}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {prismPlanets.map((mockedPlanet) => (
            <tr key={ mockedPlanet.created }>
              <td>{ mockedPlanet.name }</td>
              <td>{ mockedPlanet.rotation_period }</td>
              <td>{ mockedPlanet.orbital_period }</td>
              <td>{ mockedPlanet.diameter }</td>
              <td>{ mockedPlanet.climate }</td>
              <td>{ mockedPlanet.gravity }</td>
              <td>{ mockedPlanet.terrain }</td>
              <td>{ mockedPlanet.surface_water }</td>
              <td>{ mockedPlanet.population }</td>
              <td>{ mockedPlanet.films }</td>
              <td>{ mockedPlanet.created }</td>
              <td>{ mockedPlanet.edited }</td>
              <td>{ mockedPlanet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
