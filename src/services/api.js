const fetchResults = async () => {
  const response = await fetch('https://swapi.dev/api/planets/');
  const { results } = await response.json();
  return results;
};

export default fetchResults;
