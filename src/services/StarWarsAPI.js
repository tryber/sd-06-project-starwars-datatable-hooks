// Função que faz a requisição para o endpoint /planets da API de Star Wars e retorna uma tabela com os dados - com exceção da coluna residents.

const StarWarsAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  return data;
};

export default StarWarsAPI;
