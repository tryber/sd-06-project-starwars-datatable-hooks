const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getStarWarsPlanets = () => (
  fetch(STAR_WARS_API)
    .then((response) => (response.json()))
);

export default getStarWarsPlanets;
