async function PlanetsApi() {
  const urlStarWarsPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(urlStarWarsPlanets);
  const planetsStarWars = await response.json();

  return planetsStarWars;
}

export default PlanetsApi;
