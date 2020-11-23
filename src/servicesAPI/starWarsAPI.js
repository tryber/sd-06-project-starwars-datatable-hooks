const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchStarWarsAPI = () => fetch(URL)
  .then((response) => response.json())
  .then((r) => r.results)
  .catch((error) => `Error: ${error}`);

export default fetchStarWarsAPI;
