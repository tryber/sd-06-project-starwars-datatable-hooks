function filteringAll(planets, filter) {
  if (filter.comparison === 'maior que') {
    return planets
      .filter((planet) => Number(planet[filter.column]) > Number(filter.value));
  }
  if (filter.comparison === 'igual a') {
    return planets
      .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
  }
  if (filter.comparison === 'menor que') {
    return planets
      .filter((planet) => Number(planet[filter.column]) < Number(filter.value));
  }
  return planets;
}

export default filteringAll;
