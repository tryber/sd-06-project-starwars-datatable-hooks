export const fetchStarWarsPlanets = async () => {
  const response = await ('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  return data;
}
