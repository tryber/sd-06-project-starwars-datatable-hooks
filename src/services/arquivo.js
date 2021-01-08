handleFilterByNumber(
    sortByColumn(planets, filters.order), filters.filterByNumericValues,
  )



  // arrumar a função de sorte para filtrar números na ordem correta
  sort.toString() === 'ASC' ? planetasOrdenados.sort((a, b) => a[`${column}`] - b[`${column}`]) : planetasOrdenados.sort((a, b) => a[`${column}`] + b[`${column}`])


  return sort.toString() === 'ASC' ? planetasOrdenados.sort((a, b) => {
    if (a[`${column}`] > b[`${column}`]) return 1;
    else if (b[`${column}`] > a[`${column}`]) return -1;
    return 0;
  } :
  planetasOrdenados.sort((a, b) => {
    if (a[`${column}`] < b[`${column}`]) return 1;
    else if (b[`${column}`] < a[`${column}`]) return -1;
    return 0;
  }