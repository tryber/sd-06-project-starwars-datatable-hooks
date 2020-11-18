const apiUrl = 'https://swapi-trybe.herokuapp.com/api/';

const endPoint = 'planets/';

async function fetchFunction() {
  const response = await fetch(`${apiUrl}``${endPoint}`);
  return response.json();
}

export default fetchFunction;
