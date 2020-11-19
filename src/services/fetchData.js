const fetchAPI = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const json = await response.json();

  return json.results;
};

export default fetchAPI;
