const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanetsAPI = async () => {
  const data = await (await fetch(STARWARS_API)).json();

  return data.results;
}
