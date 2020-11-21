const apiInfo = {
  api: 'https://swapi-trybe.herokuapp.com/api/',
  endpoint: 'planets',
};

const url = `${apiInfo.api}${apiInfo.endpoint}`;

async function fetchPlanetsInfo() {
  const requestResponse = await fetch(url);
  const data = await requestResponse.json();
  return data.results;
}

export default fetchPlanetsInfo;
