const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const starWarsAPI = async () => {
  const data = await (await fetch(STARWARS_API)).json();

  return data.results;
};

export default starWarsAPI;
