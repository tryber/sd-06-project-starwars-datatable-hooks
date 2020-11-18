const fetchStarWars = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  const lists = json.results;
  return lists;
};

export default fetchStarWars;
