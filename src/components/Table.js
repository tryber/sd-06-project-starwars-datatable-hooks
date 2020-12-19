import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const zero = 0;
  const positive = 1;
  const negative = -1;
  const { data, getData, isFetching, filters } = useContext(StarWarsContext);
  if (isFetching === true) {
    getData();
    return (<h1>Loading...</h1>);
  }
  if (data.length !== zero) {
    const dataHeaders = Object.keys(data[0])
      .filter((item) => item !== 'residents');
    const nameToFilter = filters.filters.filterByName.name;
    const filtersToApply = filters.filters.filterByNumericValues;
    const toOrder = filters.filters.order.column;
    const orderDirection = filters.filters.order.sort;
    const nameFilteredData = data
      .filter(({ name }) => name.toLowerCase().includes(nameToFilter));
    const filteredData = nameFilteredData
      .filter((planet) => filtersToApply.reduce((passed, filter) => {
        const { column, comparison, value } = filter;
        switch (comparison) {
        case 'maior que':
          passed = passed && parseInt(planet[`${column}`], 10) > value;
          break;
        case 'menor que':
          passed = passed && parseInt(planet[`${column}`], 10) < value;
          break;
        case 'igual a':
          passed = passed && parseInt(planet[`${column}`], 10) === parseInt(value, 10);
          break;
        default:
          passed = false;
        }
        return passed;
      }, true));
    const dataToShow = filteredData.sort((a, b) => {
      const hasNumber = /\d/;
      if (hasNumber.test(a[toOrder])) {
        if (orderDirection === 'ASC') {
          return parseFloat(a[toOrder]) - parseFloat(b[toOrder]);
        }
        return parseFloat(b[toOrder]) - parseFloat(a[toOrder]);
      }
      if (typeof a[toOrder] === 'string') {
        const paramA = a[toOrder].toLowerCase();
        const paramB = b[toOrder].toLowerCase();
        if (orderDirection === 'ASC') {
          if (paramA < paramB) return negative;
          if (paramA > paramB) return positive;
          return zero;
        }
        if (paramA < paramB) return positive;
        if (paramA > paramB) return negative;
        return zero;
      }
      if (orderDirection === 'ASC') return a[toOrder] - b[toOrder];
      return b[toOrder] - a[toOrder];
    });

    return (
      <table>
        <tbody>
          <tr className="table-header">
            { dataHeaders
              .map((header, index) => (
                <th key={ index }>
                  { header.split('_').join(' ') }
                </th>))}
          </tr>
          { console.log(filteredData)}
          { console.log(parseFloat('2000000'))}
          { dataToShow.map((planet, index) => (
            <tr key={ index }>
              { dataHeaders.map((info, i) => (
                <td
                  data-testid={ info === 'name' ? 'planet-name' : null }
                  key={ i }
                >
                  { planet[info] }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
