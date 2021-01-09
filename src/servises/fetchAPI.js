const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function comparar(a, b) {
  const numberNeg = -1;
  const neutro = 0;
  if (a.name < b.name) {
    return numberNeg;
  }
  if (a.name > b.name) {
    return 1;
  }
  return neutro;
}

const fetchPlanets = async () => {
  const responseAPI = await fetch(STARWARS_API);
  const response = await responseAPI.json();
  const planets = response.results;

  return planets.sort(comparar);
};

export default fetchPlanets;
