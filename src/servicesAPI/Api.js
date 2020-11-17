
async function getApiStar() {
  const APIStar = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const API = await APIStar.json();
  return API;
}
export default getApiStar;