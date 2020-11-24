const fetchAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const responseAPI = await fetch(url)
    .then((response) => response.json())
    .then((json) => json.results)
    .catch((error) => console.log(error));

  return responseAPI;
};

export default fetchAPI;
