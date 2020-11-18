// import results from '../mock/planetsMock';

const fetchStarWarsPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  return json.results;
};

// const fetchStarWarsPlanets = async () => {
//   console.log('Chamada API');
//   return results;
// };

export default fetchStarWarsPlanets;
