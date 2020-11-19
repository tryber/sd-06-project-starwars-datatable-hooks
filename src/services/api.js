const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
const fetchStarWars = async () => {
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON;
};

fetchStarWars();

export default fetchStarWars;
