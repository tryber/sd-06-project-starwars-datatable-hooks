export default function fetchAPI() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((results) => results.json())
    .then((data) => data.results);
}
