const planets = async () => {
  const req = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await req.json();
  const data = await json.results;
  return data;
};

export default planets;
