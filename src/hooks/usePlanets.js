const fetchPlanets = async () => {
  const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const planetsResponse = await fetch(api);
  const data = await planetsResponse.json();

  console.log('gravando:', data);
  return data;
};

export default fetchPlanets;
