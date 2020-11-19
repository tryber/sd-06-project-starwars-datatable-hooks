import React, { useState } from 'react';

// o Provider irá prover os dados para os componentes abaixo dele ({ children})
// na árvore de componentes;
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  // armazenando os dados: lista de planetas. Cria-se uma variável no estado em um
  // componente funcional através do useState();
  const [prismPlanets, setPrismPlanets] = useState([{
    name: 'Naboo',
    rotation_period: '26',
    orbital_period: '312',
    diameter: '12120',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grassy hills, swamps, forests, mountains',
    surface_water: '12',
    population: '4500000000',
    residents: [
      'https://swapi-trybe.herokuapp.com/api/people/3/',
      'https://swapi-trybe.herokuapp.com/api/people/21/',
      'https://swapi-trybe.herokuapp.com/api/people/35/',
      'https://swapi-trybe.herokuapp.com/api/people/36/',
      'https://swapi-trybe.herokuapp.com/api/people/37/',
      'https://swapi-trybe.herokuapp.com/api/people/38/',
      'https://swapi-trybe.herokuapp.com/api/people/39/',
      'https://swapi-trybe.herokuapp.com/api/people/42/',
      'https://swapi-trybe.herokuapp.com/api/people/60/',
      'https://swapi-trybe.herokuapp.com/api/people/61/',
      'https://swapi-trybe.herokuapp.com/api/people/66/',
    ],
    films: [
      'https://swapi-trybe.herokuapp.com/api/films/3/',
      'https://swapi-trybe.herokuapp.com/api/films/4/',
      'https://swapi-trybe.herokuapp.com/api/films/5/',
      'https://swapi-trybe.herokuapp.com/api/films/6/',
    ],
    created: '2014-12-10T11:52:31.066000Z',
    edited: '2014-12-20T20:58:18.430000Z',
    url: 'https://swapi-trybe.herokuapp.com/api/planets/8/',
  }]);
  return (
    <StarWarsContext.Provider value={ { prismPlanets } }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
