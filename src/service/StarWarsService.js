export const fetchPlanetsAPI = async () => {
  const planets = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/'))
    .json().then((response) => response.results);
  return planets;
};

export default fetchPlanetsAPI;
