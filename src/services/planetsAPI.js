const planetsAPI = async () => {
  const swUrl = 'https://swapi-trybe.herokuapp.com/api';
  const endpoint = '/planets/';

  const getData = await fetch(swUrl + endpoint);
  const { results } = await getData.json();

  const mockedAPIResult = [
    {
      name: 'Tatooine',
      climate: 'x',
      created: 6,
      diameter: 8000,
      edited: 2,
      films: 'starWars',
      gravity: 2,
      orbital_period: 2,
      population: 200000,
      rotation_period: 30,
      surface_water: 2,
      terrain: 'arid',
      url: 'url.com',
    }
  ];

  return mockedAPIResult;
};

export default planetsAPI;
