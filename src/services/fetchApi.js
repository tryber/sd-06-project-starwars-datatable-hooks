const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  return responseJson.results;
};

export default fetchPlanets;
