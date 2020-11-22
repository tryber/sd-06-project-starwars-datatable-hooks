const fetchAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const json = await response.json();

  return json.results;
};

// const fetchAPI = async () => {
//   const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   const responseAPI = await fetch(url)
//     .then((response) => response.json())
//     .then((json) => json.results)
//     .catch((error) => error);

//   return responseAPI;
// };

export default fetchAPI;
