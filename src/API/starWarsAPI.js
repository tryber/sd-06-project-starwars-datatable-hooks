const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starWarsAPI = async () => {
  const answer = await fetch(URL)
    .then((response) => response.json())
    .then((json) => json.results);
  return answer;
};

export default starWarsAPI;
