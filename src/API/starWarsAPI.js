const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starWarsAPI = fetch(URL)
  .then((response) => response.json())
  .then((json) => json.results);

export default starWarsAPI;
