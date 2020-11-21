export default async function sWAPI() {
  const DATA = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  return DATA.json();
}

/* async function sWAPI() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/');
}
sWAPI().then((response) => (
  response.json().then((json) => (
    response.ok ? Promise.resolve(json) : Promise.reject(json)
  ))
));

export default sWAPI;
 */