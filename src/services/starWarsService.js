const fetchStarWarsPlanets = async () => {
  const response = await ('https://swapi-trybe.herokuapp.com/api/planets/');
  const responseJson = await response.json();
  return responseJson;
};

export default fetchStarWarsPlanets;
