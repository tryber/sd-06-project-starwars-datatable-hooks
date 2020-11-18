export const fetchPlanetsApi = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  console.log('Chamou', json);

  return json;
};

export default fetchPlanetsApi;
