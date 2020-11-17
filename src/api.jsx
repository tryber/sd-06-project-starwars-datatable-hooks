async function ApiStarwars() {
  const url = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const urlJson = url.json();
  return urlJson;
}
export default ApiStarwars;
