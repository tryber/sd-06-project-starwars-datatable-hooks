const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanetList = () => (
  fetch(API_URL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetList;
