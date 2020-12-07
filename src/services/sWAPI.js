export default async function sWAPI() {
  const RESPONSE = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = (await RESPONSE.json()).results.sort((a, b) => a.name > b.name);
  return data;
}
