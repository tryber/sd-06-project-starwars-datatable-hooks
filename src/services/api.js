export default async function getPlanets() {
  const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await data.json();
  return planets;
}
