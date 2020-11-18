import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data,
    filters: { filterByName: { name },
      filterByNumericValues } } = useContext(StarWarsContext);
  const filteringName = (e) => typeof e.name === 'string' && e.name
    .includes(name);
  const filteringNumeric = (e) => {
    let result = false;
    const zero = 0;
    let counter = zero;
    if (filterByNumericValues.length < 1) {
      result = true;
    } else {
      filterByNumericValues
        .forEach((it) => {
          if (it.comparison === 'maior que' && parseInt(e[it.column], 10) > it.value) {
            counter += 1;
          }
          if (it.comparison === 'menor que' && parseInt(e[it.column], 10) < it.value) {
            counter += 1;
          }
          if (it.comparison === 'igual a' && e[it.column] === it.value.toString()) {
            counter += 1;
          }
        });
      if (counter === filterByNumericValues.length) {
        result = true;
      }
    }
    return result;
  };
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          {Object.keys(data[0])
            .map((header, index) => (<th key={ index }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {data
          .filter((e) => filteringName(e) && filteringNumeric(e))
          .map((planet, index) => (
            <tr className="table-active" key={ index }>
              {Object.values(planet).map((col, i) => (<td key={ i }>{ col }</td>))}
            </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
