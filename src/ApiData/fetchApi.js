const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json.results;
};

export default fetchApi;
