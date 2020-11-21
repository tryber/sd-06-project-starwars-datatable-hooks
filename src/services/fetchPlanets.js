const apiURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function fetchPlanets() {
  return fetch(apiURL)
    .then((response) => response.json())
    .then((result) => result.results);
}
