export default function fetchPlanetsAPI() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((result) => result.results);
}