const starWarsAPI = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const responseAPI = await fetch(endpoint);
  const responseJSON = await responseAPI.json();
  const data = responseJSON.results;

  return data;
};

export default starWarsAPI;
