const fetchPlanetsAPI = () => fetch('https://swapi-trybe.herokuapp.com/api/planets')
  .then((resposta) => resposta.json())
  .then((planetsData) => planetsData)
  .catch((erro) => console.log(`Erro na API: ${erro}`));

export default fetchPlanetsAPI;
