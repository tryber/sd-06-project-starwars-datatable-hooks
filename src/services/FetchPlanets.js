const fetchPlanets = async () => {
  const response = await fetch('http://swapi-trybe.herokuapp.com/api/planets')
  const json = await response.json();

  return json.results;
}

export default fetchPlanets;
