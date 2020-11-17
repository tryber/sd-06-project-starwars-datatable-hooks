export default () => (
  fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
    .then((response) => (response.json()))
    .then((response) => response.results)
);
