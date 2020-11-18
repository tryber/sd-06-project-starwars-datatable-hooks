// import { useContext } from 'react';
// import StarWarsContext from '../context/StarWarsContext';

async function SWAPIFetch(endpoint) {
  const baseURL = 'https://swapi-trybe.herokuapp.com/api/';
  const url = `${baseURL}${endpoint}`;
  const result = await fetch(url);
  const response = await result.json();
  return response;
}

export default SWAPIFetch;
