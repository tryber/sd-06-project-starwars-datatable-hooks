async function fetchApi(setPlanets) {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
  const api = await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.results);
  setPlanets(api);
}

export default fetchApi;
