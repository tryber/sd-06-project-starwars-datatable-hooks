const apiInfo = {
  api: 'https://swapi-trybe.herokuapp.com/api/',
  endpoint: 'planets',
};

const url = `${apiInfo.api}${apiInfo.endpoint}`;

async function fetchPlanetsInfo() {
  const requestResponse = await fetch(url);
  const data = await requestResponse.json();
  console.log('Fetched data from API:', data.results);

  return data.results;
}

export default fetchPlanetsInfo;
