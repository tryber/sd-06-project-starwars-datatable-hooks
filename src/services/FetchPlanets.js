function fetchPlanets() {
  fetch('http://swapi-trybe.herokuapp.com/api/planets')
    .then((response) => response.json())
    .then((json) => json.results);
}

export default fetchPlanets;
