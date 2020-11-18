const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const fetchPlanets = () => (
  fetch(`${apiUrl}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchPlanets;
