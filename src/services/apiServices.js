const apiInfo = {
  api: 'https://swapi-trybe.herokuapp.com/api/',
  endpoint: 'planets',
};

const url = `${apiInfo.api}${apiInfo.endpoint}`;

export async function fetchPlanetsInfo() {
  const requestResponse = await fetch(url);
  const data = await requestResponse.json();
  console.log('Fetched data from API:', data.results);

  return data.results;
}

export async function fetchTableHeaders() {
  const requestResponse = await fetch(url);
  const data = await requestResponse.json();
  const planet = data.results[0];
  const planetHeadersInfo = Object.keys(planet);
  return planetHeadersInfo;
}
