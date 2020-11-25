async function fetchPlanets() {
  // const url = 'https://swapi-trybe.herokuapp.com/api';
  const url = 'http://swapi.dev/api';
  const endpoint = '/planets';
  const response = await fetch(`${url}${endpoint}`);
  const responseJson = await response.json();
  return responseJson.results;
}

export default fetchPlanets;
