const planetsAPI = async () => {
  const swUrl = 'https://swapi.dev/api';
  const endpoint = '/planets/';

  const getData = await fetch(swUrl + endpoint);
  const { results } = await getData.json();

  return results;
};

export default planetsAPI;
