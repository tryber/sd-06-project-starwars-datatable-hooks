export function filterByName(planets, nameString) {
  const regex = new RegExp(nameString, 'i');
  const filteredByName = planets.filter((planet) => regex.test(planet.name));
  return filteredByName;
}

export function filterByColumn(planets, filters) {
  switch (filters.comparison) {
  case 'maior que':
    return planets.filter((planet) => (
      parseInt(planet[filters.column], 10) > filters.value));
  case 'menor que':
    return planets.filter((planet) => (
      parseInt(planet[filters.column], 10) < filters.value));
  case 'igual a':
    return planets.filter((planet) => (
      parseInt(planet[filters.column], 10) === filters.value));
  default:
    return planets;
  }
}

export default function mainFilter(planets, nameFilter, columnFilters) {
  const filteredByName = filterByName(planets, nameFilter);
  let filteredByColumn = filteredByName;

  columnFilters.forEach((filter) => {
    filteredByColumn = filterByColumn(filteredByColumn, filter);
  });

  return filteredByColumn;
}
