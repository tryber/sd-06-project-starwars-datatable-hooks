export default async function fetchPlanets(URL) {
  const response = await fetch(URL);
  const planetsJson = await response.json();
  const planets = await planetsJson.results;

  return planets;
}
