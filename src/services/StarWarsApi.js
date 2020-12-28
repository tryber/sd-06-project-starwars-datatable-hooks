async function fetchApiStar() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const API = await response.json();
  return API;
}

export default fetchApiStar;
