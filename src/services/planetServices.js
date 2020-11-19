const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPrismPlanet = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data.results;
};

export default fetchPrismPlanet;
