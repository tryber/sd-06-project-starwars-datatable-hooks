const getAPI = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = await result.json();
  const lists = response.results;
  return lists;
};

export default getAPI;
