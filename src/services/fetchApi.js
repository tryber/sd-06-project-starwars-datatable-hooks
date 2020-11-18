async function fetchApi(setPlanets) {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
  const api = await fetch(endpoint)
    .then((res) => res.json())
    .then((data) => data.results);
  setPlanets(api);
}

export default fetchApi;
