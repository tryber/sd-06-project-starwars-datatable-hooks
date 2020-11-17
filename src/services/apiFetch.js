/*
endpoint /planets
 Os dados recebidos da API devem ser salvos num campo chamado data do contexto e é daí que a tabela deve lê-los.
 A requisição deve ser feita num componente separado do componente da tabela.
*/

const apiInfo = {
  api: 'https://swapi-trybe.herokuapp.com/api/',
  endpoint: 'planets',
};

const url = `${apiInfo.api}${apiInfo.endpoint}`;

async function fetchPlanetsInfo() {
  const requestResponse = await fetch(url);
  const data = await requestResponse.json();

  return data;
}

export default fetchPlanetsInfo;
