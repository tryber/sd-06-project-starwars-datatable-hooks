export const fetchSWPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  const json = response.json();

  return json.response;
}