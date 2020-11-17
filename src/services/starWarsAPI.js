const STARWARS_BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const fetchPlanets = () => (
  fetch(`${STARWARS_BASE_URL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchPlanets;
