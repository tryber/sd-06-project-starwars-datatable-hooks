export default async function fetchAPI() {
  const resolve = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const result = await resolve.json();
  const data = await result.results;
  return data;
}
