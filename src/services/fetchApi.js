const PLANET_API = 'https://swapi-trybe.herokuapp.com/api';

export default function fetchApi() {
  return fetch(`${PLANET_API}/planets/`)
    .then((response) => response.json());
}
