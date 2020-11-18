const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanetsData = () => fetch(endpoint)
  .then((response) => response.json())
  .then((data) => data.results);

export default fetchPlanetsData;
