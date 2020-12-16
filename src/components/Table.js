import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const zero = 0;
  const { data, getData, isFetching, filters } = useContext(StarWarsContext);
  if (isFetching === true) {
    getData();
    return (<h1>Loading...</h1>);
  }
  if (data.length !== zero) {
    const dataHeaders = Object.keys(data[0])
      .filter((item) => item !== 'residents');
    const nameToFilter = filters.filters.filterByName.name;
    const filtersToApply = filters.filters.filterByNumericValue;
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
          passed = passed && parseInt(planet[`${column}`], 10) === value;
          break;
        default:
          passed = false;
        }
        return passed;
      }, true));
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
          { filteredData.map((planet, index) => (
            <tr key={ index }>
              { dataHeaders.map((info, i) => (<td key={ i }>{ planet[info] }</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
