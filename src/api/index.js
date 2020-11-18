const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const apiRequest = await fetch(planetsURL);
  const apiResult = await apiRequest.json();
  return apiResult;
};

export default getPlanets;
