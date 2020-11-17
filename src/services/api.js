export default async function requestPlanets() {
  const base = 'https://swapi-trybe.herokuapp.com/api';
  const endpoint = '/planets/';
  return fetch(`${base}${endpoint}`)
    .then((response) => response.json())
    .then((data) => data.results);
}
