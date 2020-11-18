// Faço minha requisição e retorno a resposta

export default async function fetchAPI() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint);
  return response.json();
}
