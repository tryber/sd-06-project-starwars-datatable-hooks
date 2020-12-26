export default async function dados() {
  const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const resposta = await api.json();
  console.log({ resposta });
}
