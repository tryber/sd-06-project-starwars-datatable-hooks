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

function assortByColumn(planets, column, type) {
  console.log(column);
  console.log(type);
  console.log(parseInt(column, 10));
  switch (type) {
  case 'ascending':
    return planets.sort((a, b) => parseInt(a[column], 10) - parseInt(b[column], 10));
  case 'descending':
    return planets.sort((a, b) => parseInt(b[column], 10) - parseInt(a[column], 10));
  default:
    return planets;
  }
}

export default function mainFilter(
  planets, nameFilter, columnFilters, assortmentColumn, assortmentType,
) {
  const filteredByName = filterByName(planets, nameFilter);
  let filteredByColumn = filteredByName;

  columnFilters.forEach((filter) => {
    filteredByColumn = filterByColumn(filteredByColumn, filter);
  });

  return assortByColumn(filteredByColumn, assortmentColumn, assortmentType);
}

export function setCurrentFilters(mainFilters, selectedFilters) {
  return mainFilters.filter((filter) => !selectedFilters.includes(filter));
}
