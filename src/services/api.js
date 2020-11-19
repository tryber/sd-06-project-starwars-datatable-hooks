export default async function getPlanets(filter = '') {
  const data = await fetch(`https://swapi-trybe.herokuapp.com/api/planets/?search=${filter}`);
  const planets = await data.json();
  return planets;
}
