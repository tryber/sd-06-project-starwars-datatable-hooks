// export const getPlanets = async () => {
//   const apiRequest = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
//   const apiResponse = await apiRequest.json();
//   return apiResponse.results;
// };

export const filter = (planets, filterByNumericValues) => {
  switch (filterByNumericValues.comparison) {
  case 'maior que':
    return planets.filter((planet) => (
      parseInt(planet[filterByNumericValues.column], 10) > filterByNumericValues.value
    ));
  case 'menor que':
    return planets.filter((planet) => (
      parseInt(planet[filterByNumericValues.column], 10) < filterByNumericValues.value
    ));
  case 'igual a':
    return planets.filter((planet) => (
      planet[filterByNumericValues.column] === filterByNumericValues.value
    ));
  default:
    return planets;
  }
};

export default filter;
