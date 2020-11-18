async function fetchApi() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
  const api = await fetch(endpoint);
  const response = await api.json();
  return response.results;
}

export default fetchApi;
