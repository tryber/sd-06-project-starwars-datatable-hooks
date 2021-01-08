export default function sortByColumn(
  planetas,
  filtro = {
    column: 'Name',
    sort: 'ASC',
  },
) {
  const { column, sort } = filtro;
  const um = 1;
  const menosUm = -1;
  const zero = 0;
  let planetasOrdenados = [];
  if (sort.toString() === 'ASC') {
    planetasOrdenados = planetas.sort((a, b) => {
      if (a[`${column}`] > b[`${column}`]) return um;
      if (b[`${column}`] > a[`${column}`]) return menosUm;
      return zero;
    });
    planetasOrdenados = planetasOrdenados.sort((a, b) => a[`${column}`] - b[`${column}`]);
  } if (sort.toString() === 'DESC') {
    planetasOrdenados = planetas.sort((a, b) => {
      if (a[`${column}`] < b[`${column}`]) return um;
      if (b[`${column}`] < a[`${column}`]) return menosUm;
      return zero;
    });
    planetasOrdenados = planetasOrdenados.sort((a, b) => b[`${column}`] - a[`${column}`]);
  }
  return planetasOrdenados;
}
