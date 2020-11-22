const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.results;
};

export default fetchApi;
