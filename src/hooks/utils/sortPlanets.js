const numericColumns = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const mixedColumns = [
  'gravity',
];

const nameColumns = [
  'name',
  'climate',
  'terrain',
];

export default function sortPlanetsByColumn(planets, column, order) {
  const sortedPlanets = [...planets];

  if (numericColumns.includes(column)) {
    sortedPlanets.sort((a, b) => {
      if (a[column] === 'unknown') {
        const shouldBeLastInOrder = -1;

        return shouldBeLastInOrder;
      }

      if (order === 'ASC') {
        return Number(a[column]) - Number(b[column]);
      }

      return Number(b[column]) - Number(a[column]);
    });
  }

  if (mixedColumns.includes(column)) {
    sortedPlanets.sort((a, b) => {
      if (order === 'ASC') {
        return Number(parseFloat(a[column])) - Number(parseFloat(b[column]));
      }

      return Number(parseFloat(b[column])) - Number(parseFloat(a[column]));
    });
  }

  if (nameColumns.includes(column)) {
    sortedPlanets.sort((a, b) => {
      if (order === 'ASC') {
        return (a[column]).localeCompare(b[column]);
      }
      return (b[column]).localeCompare(a[column]);
    });
  }

  return sortedPlanets;
}
