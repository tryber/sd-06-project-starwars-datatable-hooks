export default () => (
  fetch('https://swapi.dev/api/planets/')
    .then((response) => (response.json()))
    .then((response) => response.results)
);
