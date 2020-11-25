const apiURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

// export default async function fetchPlanets() {
//   const request = await fetch(apiURL);
//   const response = await request.json();
//   const data = await response.results;
//   return data;
// }

export default function fetchPlanets() {
  return fetch(apiURL)
    .then((response) => response.json())
    .then((result) => result.results);
}
