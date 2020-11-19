const requestApiStarWars = async () => {
  const apiStarWars = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const apiStarWarsJson = await apiStarWars.json();
  return apiStarWarsJson.results;
};

export default requestApiStarWars;
