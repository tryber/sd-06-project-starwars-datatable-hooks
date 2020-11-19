const STARWARSURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
export const fetchData = async () => {
  fetch(`${STARWARSURL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
};
export default fetchData;
