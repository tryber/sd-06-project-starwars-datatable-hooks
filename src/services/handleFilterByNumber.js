export default function handleFilterByNumber(planetas, comparison, column, value) {
  if (comparison === 'maior que') {
    return planetas
      .filter((planet) => (
        parseInt(planet[column], 10)
        > parseInt(value, 10)));
  } if (comparison === 'igual a') {
    return planetas
      .filter((planet) => (
        parseInt(planet[column], 10)
        === parseInt(value, 10)));
  } if (comparison === 'menor que') {
    return planetas
      .filter((planet) => (
        parseInt(planet[column], 10)
        < parseInt(value, 10)));
  }
  return planetas;
}
