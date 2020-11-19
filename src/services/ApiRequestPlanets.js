export default async function ApiRequestPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const objPlanets = await fetch(url).then((apiPlanets) => apiPlanets.json());

  return objPlanets;
}
