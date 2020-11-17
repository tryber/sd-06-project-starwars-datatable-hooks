// const getPlanets = () => {
//   // const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => (
//     response.json()
//       .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//   ));
// };

export const getPlanets = async () => {
  const apiRequest = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const apiResponse = await apiRequest.json();
  return apiResponse.results;
};

// function getPlanets() {
//   const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   return fetch(endpoint)
//     .then((responses) => responses.json())
// }

export default getPlanets;
