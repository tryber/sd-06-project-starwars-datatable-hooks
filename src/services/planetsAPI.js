const planetsAPI = async () => {
  const swUrl = 'https://swapi-trybe.herokuapp.com/api';
  const endpoint = '/planets/';

  const getData = await fetch(swUrl + endpoint);
  const { results } = await getData.json();

  return results;
};

export default planetsAPI;
