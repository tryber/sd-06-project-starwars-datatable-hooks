const fetchPlanets = async () => {
  const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => result.results);

  return results;
};

export default fetchPlanets;
