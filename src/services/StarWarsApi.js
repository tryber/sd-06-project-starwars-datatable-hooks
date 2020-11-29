const fetchStarWarsApi = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { fetchJsonResults } = await response.json();

  return fetchJsonResults;
};

export default fetchStarWarsApi;
