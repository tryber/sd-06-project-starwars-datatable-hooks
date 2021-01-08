const apiUrl = 'https://swapi-trybe.herokuapp.com/api/';
const endPoint = 'planets/';

const fetchFunction = async () => {
  const response = await fetch(`${apiUrl}${endPoint}`);
  const data = await response.json();
  return data.results;
};

export default fetchFunction;
