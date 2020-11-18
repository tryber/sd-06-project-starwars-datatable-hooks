export function filterByName(planets, nameString) {
  const regex = new RegExp(nameString, 'i');
  const filteredByName = planets.filter((planet) => regex.test(planet.name));
  return filteredByName;
}

export function filterByColumn(planets, filter) {
  switch (filter.comparison) {
  case 'maior que':
    return planets.filter((planet) => parseInt(planet[filter.column], 10) > filter.value);
  case 'menor que':
    return planets.filter((planet) => parseInt(planet[filter.column], 10) < filter.value);
  case 'igual a':
    return planets.filter((planet) => (
      parseInt(planet[filter.column], 10) === filter.value));
  default:
    return planets;
  }
}

export default function mainFilter(planets, nameFilter, columnFilter) {
  const filteredByName = filterByName(planets, nameFilter);
  const filteredByColumn = filterByColumn(filteredByName, columnFilter);

  return filteredByColumn;
}
