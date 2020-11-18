const PlanetsAPI = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL);

  const responseJson = await response.json();
  const planetsResults = responseJson.results;
  return planetsResults;
};

export default PlanetsAPI;
