const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  const responseAPI = await fetch(STARWARS_API);
  const response = await responseAPI.json();
  const planets = response.results;

  return planets;
};

export default fetchAPI;
