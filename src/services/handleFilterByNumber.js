export default function handleFilterByNumber(
  planetas,
  filtro = [{ comparison: '', column: '', value: 0 }],
) {
  let retorno = [...planetas];
  const zero = 0;
  for (let index = zero; index < filtro.length; index += 1) {
    const { comparison, column, value } = filtro[index];
    if (comparison === 'maior que') {
      retorno = retorno
        .filter((planet) => (parseInt(planet[column], 10) > parseInt(value, 10)));
    } if (comparison === 'igual a') {
      retorno = retorno
        .filter((planet) => (parseInt(planet[column], 10) === parseInt(value, 10)));
    } if (comparison === 'menor que') {
      retorno = retorno
        .filter((planet) => (parseInt(planet[column], 10) < parseInt(value, 10)));
    }
  }
  return retorno;
}
