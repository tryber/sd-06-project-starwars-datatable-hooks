export default async function sWAPI() {
  const RESPONSE = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = (await RESPONSE.json());
  return data.results;
}
