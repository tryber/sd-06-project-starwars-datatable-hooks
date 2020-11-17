function StarWarsAPI() {
  const baseURL = 'https://swapi-trybe.herokuapp.com/api';
  return fetch(`${baseURL}/planets`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export default StarWarsAPI;
